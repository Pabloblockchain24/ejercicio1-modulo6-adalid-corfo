import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

function ServiceList() {
  const { services, reFetchServices, loadingServices, errorServices } = useContext(DataContext);

  return (
    <>
      <div className="reload__container">
        <button className="reload__button" onClick={reFetchServices} disabled={loadingServices}>
          {loadingServices ? "Cargando..." : "Recargar Servicios"}
        </button>
        {errorServices && <p className="error__message">{errorServices}</p>}

      </div>

      <div className="services__list">
        {services.length > 0 ? (
          services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="service__card">
                <img
                  src={service.imagen}
                  alt={service.nombre_servicio}
                  className="service__card__image"
                />
                <div className="service__card__content">
                  <h3 className="service__card__title">
                    {service.nombre_servicio}
                  </h3>
                  <p className="service__card__description">
                    {service.descripcion}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))
        ) : (
          <p>Cargando servicios...</p>
        )}
      </div>
    </>
  );
}

export default ServiceList;
