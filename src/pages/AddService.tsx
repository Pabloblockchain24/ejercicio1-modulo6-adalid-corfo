import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { Service, Errors } from "../interfaces";


const AddService: React.FC = () => {
  const { addService } = useContext(DataContext);
  const navigate = useNavigate()

  const [service, setService] = useState<Service>({
    nombre_servicio: "",
    descripcion: "",
    imagen: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    let newErrors = {};

    if (!service.nombre_servicio.trim()) newErrors.nombre_servicio = "El nombre del servicio es obligatorio";
    if (!service.descripcion.trim()) newErrors.descripcion = "La descripción es obligatoria";
    if (!service.imagen.trim()) newErrors.imagen = "La URL de la imagen es obligatoria";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    addService(service);
    alert("Servicio agregado exitosamente");
    navigate("/")  
    setService({
      nombre_servicio: "",
      descripcion: "",
      imagen: ""
    });

    setErrors({});
  };

  return (
    <div className="service-form__container">
      <h2>Agregar Servicio</h2>
      <form onSubmit={handleSubmit}>
        {[ 
          { name: "nombre_servicio", type: "text", placeholder: "Nombre del servicio" },
          { name: "descripcion", type: "textarea", placeholder: "Descripción" },
          { name: "imagen", type: "text", placeholder: "URL de la imagen" }
        ].map(({ name, type, placeholder }) => (
          <div key={name}>
            {type === "textarea" ? (
              <textarea
                name={name}
                placeholder={placeholder}
                value={service[name]}
                onChange={handleChange}
                className={errors[name] ? "error-input" : ""}
              />
            ) : (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={service[name]}
                onChange={handleChange}
                className={errors[name] ? "error-input" : ""}
              />
            )}
            {errors[name] && <p className="error-text">{errors[name]}</p>}
          </div>
        ))}

        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Agregar Servicio
        </button>
      </form>
    </div>
  );
}

export default AddService;
