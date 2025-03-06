import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import useFormValidation from "../hooks/useFormValidation";

function AppointmentFormCard() {
  const inputRef = useRef(null);
  const navigate = useNavigate();    

  const { doctors, addAppointment } = useContext(DataContext);

  const { formData, isFormValid, handleInputChange, setFormData } = useFormValidation({
    patientName: "",
    selectedDoctor: "",
    appointmentDate: "",
    appointmentTime: "",
    status: "agendado"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(formData);

    alert(
      `Cita agendada con el Dr. ${formData.selectedDoctor} el ${formData.appointmentDate} a las ${formData.appointmentTime}`
    );
    navigate("/")
    setFormData({
      patientName: "",
      selectedDoctor: "",
      appointmentDate: "",
      appointmentTime: "",
      status: ""
    });
  };

  return (
    <>
      {doctors.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="patientName">Nombre del paciente:</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              placeholder="Nombre del paciente"
              ref={inputRef}
              required
            />
          </div>

          <div>
            <label htmlFor="selectedDoctor">Seleccionar Doctor:</label>
            <select
              id="selectedDoctor"
              name="selectedDoctor"
              value={formData.selectedDoctor}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccione un doctor</option>
              {doctors.map((doctor, key) => (
                <option key={key} value={doctor.nombre}>
                  Dr. {doctor.nombre} - {doctor.especialidad}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="appointmentDate">Fecha de la cita:</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="appointmentTime">Hora de la cita:</label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" disabled={!isFormValid}>
            Agendar cita
          </button>
        </form>
      ) : (
        <p>Cargando Formulario...</p>
      )}
    </>
  );
}

export default AppointmentFormCard;
