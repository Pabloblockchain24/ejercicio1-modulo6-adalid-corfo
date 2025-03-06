import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Navbar() {
  const {logout} = useAuth();
  const navigate = useNavigate();    

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/')
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}> Home</NavLink>
        </li>
        <li>
          <NavLink to={"/EquipoMedico"}> Equipo Medico</NavLink>
        </li>
        <li>
          <NavLink to={"/AddAppointment"}> Agendar Cita </NavLink>
        </li>
        <li>
          <NavLink to={"/ServiciosMedicos"}> Servicios Medicos </NavLink>
        </li>
        <li>
          <NavLink to={"/ProfilerView"}> Profiler View </NavLink>
        </li>
        <li>
          <NavLink to={"/vulnerabilities"}> Vulnerabilidades </NavLink>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
