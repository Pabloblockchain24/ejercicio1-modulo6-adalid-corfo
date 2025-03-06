import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function WithModal(WrappedComponent) {
  return function WithModalComponent(props) {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen(!isModalOpen);
    };

    return (
      <>
        <div onClick={toggleModal}>
          <WrappedComponent {...props} />
        </div>
        {isModalOpen &&
          ReactDOM.createPortal(
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="modal-close" onClick={toggleModal}>
                  X
                </div>
                <h2>{props.nombre}</h2>
                <p>Especialidad: {props.especialidad}</p>
                <p>Experiencia: {props.experiencia} años</p>
                <p>{props.descripcion}</p>
                <p>Contacto: {props.informacion_adicional.contacto}</p>
                <p>Horas disponibles: {props.informacion_adicional.horas_disponibles}</p>
              </div>
            </div>,
            document.getElementById('modal-root')
          )}
      </>
    );
  };
}

export default WithModal;
