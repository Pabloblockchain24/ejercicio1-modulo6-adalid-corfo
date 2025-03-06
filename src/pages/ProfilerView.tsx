import { Profiler } from "react";
import AppointmentForm from "./AddAppointment";

const ProfilerView: React.FC = () => {
  const onRenderCallback = (
    id: string,
    phase: "mount" | "update",
    actualDuration: number
  ) => {
    console.log(
      `${id} (${phase}) , tomó ${actualDuration.toFixed(2)}ms para renderizar`
    );
  };

  return (
    <>
      <h1>Este es un test via profiler para renderizado de AppointmentForm</h1>
      <Profiler id="AppointmentForm" onRender={onRenderCallback}>
        <AppointmentForm />
      </Profiler>
    </>
  );
}

export default ProfilerView;
