import { useRef } from "react";
import ServiceList from "../components/ServiceList";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  const { user } = useAuth();
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInfo = () => {
    infoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="home__container">
      <h1>Bienvenido al Hospital Adalid</h1>
      {user ? <> <p className="home__user">Bienvenido: {user.role}</p> <NavLink to={"/dashboard"} className='home__dashboard'> Ver Dashboard </NavLink> </> : <NavLink to="/login" className='btn-login'>Iniciar Sesión</NavLink> }

      <div className="home__buttons">
        <button onClick={scrollToServices}>Ir a Servicios</button>
        <button onClick={scrollToInfo}>Ir a Información del Hospital</button>
      </div>

      <section className="services__section" ref={servicesRef}>
        <h2>Servicios Destacados</h2>
        <ServiceList />
      </section>

      <section className="hospital-info__section" ref={infoRef}>
        <h2>Sobre el Hospital Adalid</h2>
        <p>
          En el Hospital Adalid trabajamos día a día para ofrecerte una
          experiencia única en atención médica. Nos caracterizamos por nuestra
          excelencia clínica y nuestra dedicación al bienestar de nuestros
          pacientes.
        </p>
        <p>
          Nuestras instalaciones están diseñadas para proporcionarte un entorno
          cómodo y seguro, mientras que nuestro personal médico altamente
          capacitado utiliza tecnología de última generación para garantizar el
          mejor diagnóstico y tratamiento posible.
        </p>
        <p>
          Desde consultas médicas hasta tratamientos especializados, estamos
          comprometidos a acompañarte en cada paso hacia tu recuperación y
          bienestar.
        </p>
        <p>
          Visítanos y descubre por qué somos el hospital preferido por la
          comunidad. Estamos aquí para cuidar de ti y de tu familia.
        </p>
      </section>
    </main>
  );
}

export default Home;
