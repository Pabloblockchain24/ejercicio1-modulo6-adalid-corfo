import ServiceList from "../components/ServiceList"

const ServiciosMedicos: React.FC = () => {
  return (
    <main className="services-list__container">
    <section className="services-list__header">
      <h1>SERVICIOS MEDICOS ADALID</h1>
      <h2>Ofrecemos una amplia variedad de servicios médicos, para cubrir todas tus necesidades</h2>
    </section>
    <ServiceList />
    </main>
  )



}

export default ServiciosMedicos