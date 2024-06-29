import { PersonData } from '../PersonData/PersonData';
import pic1x from '/assets/senior-woman.png';
import pic2x from '/assets/senior-woman@2x.png';
export const UserBar = () => {
  return (
    <PersonData
      src1x={pic1x}
      src2x={pic2x}
      name="Dr. Jose Simmons"
      title="General Practitioner"
    />
  );
};
