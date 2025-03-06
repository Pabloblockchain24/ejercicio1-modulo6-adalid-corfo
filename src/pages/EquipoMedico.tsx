import React from "react";
import DoctorsList from "../components/DoctorsList";

const EquipoMedico: React.FC = () => {
  return (
      <main className="equipo-medico__container">
        <section className="equipo-medico__header">
          <h1>EQUIPO MEDICO ADALID</h1>
          <h2>Nuestro compromiso como hospital Adalid</h2>
          <p className="equipo-medico__header__text">
            Nuestro hospital se dedica a ofrecer atención médica de calidad, con
            profesionales expertos y tecnología avanzada, siempre priorizando el
            bienestar y la satisfacción de nuestros pacientes.
          </p>
        </section>
        <DoctorsList />

      </main>

  );
}

export default EquipoMedico;
