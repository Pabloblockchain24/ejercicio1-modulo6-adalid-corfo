import { createContext, useEffect, useState } from "react";
import { getAppointments, getDoctors, getServices, postAppointment, postDoctor, deleteAppointment, updateAppointment, postService } from "../services/api";
import { Doctor, Appointment, Service, DataProviderProps, DataContextType } from "../interfaces";

export const DataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loadingServices, setLoadingServices] = useState(false);
  const [loadingAppointements, setLoadingAppointements] = useState(false);
  const [errorServices, setErrorServices] = useState<string | null>(null);

  useEffect(() => {
    async function loadDoctors() {
      try {
        const doctores = await getDoctors();
        setDoctors(doctores);
      } catch (error) {
        console.error("Error al cargar los doctores:", error);
      }
    }
    loadDoctors();
  }, []);

  const loadServices = async () => {
    setLoadingServices(true);
    setErrorServices(null);
    try {
      const servicios_medicos = await getServices();
      setServices(servicios_medicos);
    } catch (error) {
      console.error("Error al cargar los servicios:", error);
      setErrorServices("Error al cargar los servicios. Por favor, intenta nuevamente.");
    } finally {
      setLoadingServices(false);
    }
  };

  const fetchAppointments = async (token: string) => {
    setLoadingAppointements(true);
    try {
      const appointments = await getAppointments(token);
      return appointments;
    } catch (error) {
      console.error("Error al cargar las citas:", error);
    } finally {
      setLoadingAppointements(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);


  const force_error_loadServices = async () => {
    throw new Error("Error al cargar los servicios");
  }

  const reFetchServices = async () => {
    setLoadingServices(true);
    setTimeout(async () => {
      try {
        await loadServices();
        setLoadingServices(false);
        alert('Servicios cargados correctamente');
      } catch (error) {
        console.error("Error al cargar los servicios:", error);
        setErrorServices("Error al cargar los servicios. Por favor, intenta nuevamente.");
        setLoadingServices(false);
      }
    }, 1000);
  };


  const addAppointment = (newAppointment: Appointment) => {
    const response = postAppointment(newAppointment);
    if (response.error) {
      console.error("Error al agregar cita", response.error);
    }
    console.log("Nueva cita agregada:", newAppointment);
  };

  const addDoctor = (newDoctor: Doctor) => {
    const response = postDoctor(newDoctor);
    if (response.error) {
      console.error("Error al agregar doctor", response.error);
    }
    console.log("Nuevo doctor agregado:", newDoctor);
  };

  const addService = (newService: Service) => {
    const response = postService(newService);
    if (response.error) {
      console.error("Error al agregar servicio", response.error);
    }
    console.log("Nuevo servicio médico agregado:", newService);
  };

  const delAppointment = (idAppointment: string) => {
    const response = deleteAppointment(idAppointment);
    if (response.error) {
      console.error("Error al eliminar cita", response.error);
    }
    console.log("Error al eliminar cita con id:", idAppointment);
  };


  const editAppointment = async (updatedAppointment: Appointment) => {
    console.log('Recibiendo para actualizar', updatedAppointment);

    try {
      const response = await updateAppointment(updatedAppointment.id, updatedAppointment);
      if (response.error) {
        console.error("Error al actualizar la cita", response.error);
        return;
      }
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === updatedAppointment.id ? updatedAppointment : appointment
        )
      );
      console.log("Cita actualizada:", updatedAppointment);
    } catch (error) {
      console.error("Error al editar la cita:", error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        doctors,
        services,
        addAppointment,
        appointments,
        reFetchServices,
        loadingServices,
        errorServices,
        fetchAppointments,
        loadingAppointements,
        addDoctor,
        delAppointment,
        editAppointment,
        addService,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
