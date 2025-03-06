import { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Appointment } from "../interfaces";


const EditAppointment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { editAppointment } = useContext(DataContext);

  const appointmentData: Appointment | undefined = location.state?.appointment;

  const [appointment, setAppointment] = useState<Appointment>({
    selectedDoctor: "",
    patientName: "",
    appointmentDate: "",
    appointmentTime: "",
    status: "",
  });

  useEffect(() => {
    if (appointmentData) {
      setAppointment(appointmentData);
    }
  }, [appointmentData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editAppointment(appointment);
      alert("Cita actualizada correctamente");
      navigate("/dashboard") 
    } catch (error) {
      console.error("Error al actualizar la cita:", error);
      alert("Hubo un error al actualizar la cita.");
    }
  };

  return (
    <div className="edit__container">
      <h2>Editar Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Doctor:</label>
        <input
          type="text"
          name="selectedDoctor"
          value={appointment.selectedDoctor}
          onChange={handleChange}
          required
        />

        <label>Paciente:</label>
        <input
          type="text"
          name="patientName"
          value={appointment.patientName}
          onChange={handleChange}
          required
        />

        <label>Fecha:</label>
        <input
          type="date"
          name="appointmentDate"
          value={appointment.appointmentDate}
          onChange={handleChange}
          required
        />

        <label>Hora:</label>
        <input
          type="time"
          name="appointmentTime"
          value={appointment.appointmentTime}
          onChange={handleChange}
          required
        />

        <label>Estado:</label>
        <select name="status" value={appointment.status} onChange={handleChange} required>
          <option value="pendiente">Pendiente</option>
          <option value="confirmado">Confirmado</option>
          <option value="cancelado">Cancelado</option>
        </select>

        <button type="submit">Actualizar Cita</button>
      </form>
    </div>
  );
}

export default EditAppointment;
