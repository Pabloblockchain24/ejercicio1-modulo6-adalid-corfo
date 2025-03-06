import React, { useEffect, useState, useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { Appointment } from "../interfaces" 


const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const { fetchAppointments, delAppointment } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("user");
      if (!token) {
        setError("No se encontro un token valido");
        return;
      }

      try {
        const data = await fetchAppointments(token);
        setAppointments(data);
      } catch (error) {
        setError("Token inválido o no autorizado");
        console.error("Error fetching appointments:", error);
      }
    };
    if (user?.role == "admin" || user?.role == "doctor") {
      fetchData();
    }
  }, [user]);


  const handleDelete = async (id: String) => {
    try {
      await delAppointment(id);
      setAppointments(appointments.filter((appointment) => appointment.id !== id));
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };

  const handleEdit = (appointment: Appointment) => {
    navigate(`/edit-appointment/${appointment.id}`, { state: { appointment } });
  };

  return (
    <>
      {user?.role == "admin" || user?.role == "doctor" ? (
        <>
          <h1> Dashboard</h1>
          <p>Bienvenido administrador, aqui los datos estan protegidos</p>
          {error && <p> {error}</p>}

          <h2>Gestión de administrador</h2>
          <div className="admin__manager">
          {user.role === "admin" && (
              <>
                <button onClick={() => navigate("/AddDoctor")}>Agregar Doctor</button>
                <button onClick={() => navigate("/AddAppointment")}>Agregar Cita</button>
                <button onClick={() => navigate("/AddService")}>Agregar Servicio Médico</button>
              </>
            )}
          </div>

          <h2>Listado de citas medicas</h2>
          <div className="appointments__container">
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                  <div className="appointments"  key={appointment.id}>
                    <div className="appointment__row">
                      <p> Id cita: {appointment.id} </p>
                      <p> Dr: {appointment.selectedDoctor} </p>
                      <p> Paciente: {appointment.patientName} </p>
                      <p>
                        {" "}
                        Fecha: {appointment.appointmentDate} -{" "}
                        {appointment.appointmentTime}{" "}
                      </p>
                      <p> Estado: {appointment.status} </p>
                    </div>
                    <div className="appointments__buttons">
                    <button onClick={() => handleEdit(appointment)}> Editar</button>
                    <button onClick={() => handleDelete(appointment.id)}> X </button>

                    </div>
                  </div>
              ))
            ) : (
              <p>Cargando citas medicas ...</p>
            )}
          </div>
        </>
      ) : (
        <p> No tienes permisos de acceso de administrador </p>
      )}
    </>
  );
}

export default Dashboard;
