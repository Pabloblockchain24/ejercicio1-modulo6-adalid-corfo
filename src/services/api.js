import axios from "axios";
const API_URL = "http://localhost:3001";

// Peticiones GET para appointments, servicies y doctors 
export const getAppointments = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/appointments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos protegidos", error);
    throw error;
  }
};

export const getServices = async () => {
  try {
    const response = await axios.get(`${API_URL}/servicios_medicos`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener servicios medicos", error);
    throw error;
  }
};

export const getDoctors = async () => {
  try {
    const response = await axios.get(`${API_URL}/doctores`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener doctores", error);
    throw error;
  }
};

// Peticiones POST para appointments, servicies y doctors 
export const postAppointment = async (appointment) => {
  try {
    const response = await axios.post(`${API_URL}/appointments`, appointment);
    return response.data;
  } catch (error) {
    console.error("Error al agregar cita", error);
    throw error;
  }
}

export const postService = async (service) => {
  try {
    const response = await axios.post(`${API_URL}/servicios_medicos`, service);
    return response.data;
  } catch (error) {
    console.error("Error al agregar servicio medico", error);
    throw error;
  }
}

export const postDoctor = async (doctor) => {
  try {
    const response = await axios.post(`${API_URL}/doctores`, doctor);
    return response.data;
  } catch (error) {
    console.error("Error al agregar doctor", error);
    throw error;
  }
};

// Peticiones PUT para appointments, servicies y doctors 

export const updateAppointment = async (id, appointment) => {
  try {
    const response = await axios.put(`${API_URL}/appointments/${id}`, appointment);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la cita", error);
    throw error;
  }
};

export const updateService= async (id, service) => {
  try {
    const response = await axios.put(`${API_URL}/servicios_medicos/${id}`, service);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar servicio medico", error);
    throw error;
  }
};

export const updateDoctor= async (id, doctor) => {
  try {
    const response = await axios.put(`${API_URL}/doctores/${id}`, doctor);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar doctor.", error);
    throw error;
  }
};

// Peticiones DELETE para appointments, servicies y doctors 

export const deleteAppointment= async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/appointments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar cita.", error);
    throw error;
  }
};

export const deleteService= async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/servicios_medicos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar servicio medico.", error);
    throw error;
  }
};

export const deleteDoctor= async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/doctores/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar doctor.", error);
    throw error;
  }
};