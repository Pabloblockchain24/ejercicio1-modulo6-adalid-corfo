import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import DoctorCardWithModal from "./DoctorCardWithModal";

function DoctorsList() {
  const { doctors } = useContext(DataContext);
  const [filtroEspecialidad, setFiltroEspecialidad] = useState("");
  const especialidades = [
    ...new Set(doctors.map((doctor) => doctor.especialidad)),
  ];

  const doctorsFiltrado = filtroEspecialidad
    ? doctors.filter((doctor) => doctor.especialidad == filtroEspecialidad)
    : doctors;

  return (
    <div>
      <h3>Nuestro equipo médico</h3>

      <div className="doctors__filter">
        <label htmlFor="specialty-filter">Filtrar por especialidad:</label>
        <select
          id="specialty-filter"
          value={filtroEspecialidad}
          onChange={(e) => setFiltroEspecialidad(e.target.value)}
        >
          <option value="">Todas</option>
          {especialidades.map((especialidad, index) => (
            <option key={index} value={especialidad}>
              {especialidad}
            </option>
          ))}
        </select>
      </div>
      <div className="doctors__list">
        {doctorsFiltrado.length > 0 ? (
          doctorsFiltrado.map((doctor, index) => (
            <DoctorCardWithModal key={index} {...doctor} />
          ))
        ) : (
          <p>Cargando doctores...</p>
        )}
      </div>
    </div>
  );
}

export default DoctorsList;
