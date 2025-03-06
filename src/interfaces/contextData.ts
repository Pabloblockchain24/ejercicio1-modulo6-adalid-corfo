import { Doctor, Service, Appointment } from "./index"
import { ReactNode } from "react";

export interface DataProviderProps {
    children: ReactNode;
}

export interface DataContextType {
    doctors: Doctor[];
    services: Service[];
    addAppointment: (newAppointment: Appointment) => void;
    appointments: Appointment[];
    reFetchServices: () => void;
    loadingServices: boolean;
    errorServices: string | null;
    fetchAppointments: (token: string) => Promise<Appointment[]>;
    loadingAppointements: boolean;
    addDoctor: (newDoctor: Doctor) => void;
    delAppointment: (idAppointment: string) => void;
    editAppointment: (updatedAppointment: Appointment) => Promise<void>;
    addService: (newService: Service) => void;
}