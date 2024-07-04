import { Chart } from '../components/Chart/Chart';
import { PatientList } from '../components/PatientList/PatientList';

export const Patients = () => {
  return (
    <>
      <PatientList />
      <Chart />
    </>
  );
};
