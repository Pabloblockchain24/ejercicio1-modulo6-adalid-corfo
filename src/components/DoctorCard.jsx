import PropTypes from "prop-types";

function DoctorCard({ ...doctor }) {

  DoctorCard.propTypes = {
    doctor: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      especialidad: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      experiencia: PropTypes.number.isRequired,
    })
  };

  return (
    <div className="profesionales">
      <div className="card__doctor" >
        <img
          src={doctor.imagen}
          alt={doctor.nombre}
          className="doctor__imagen"
        />
        <div className="card-body">
          <h5 className="card-title">{doctor.nombre}</h5>
          <p className="card-text">{doctor.especialidad}</p>
          <p className="card-text">{doctor.experiencia} años de experiencia.</p>
          <p className="card-text">{doctor.descripcion}</p>
        </div>
      </div>   
    </div>
  );
}



export default DoctorCard;
