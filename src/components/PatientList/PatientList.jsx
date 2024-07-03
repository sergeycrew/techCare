import patients from 'assets/patients.json';
import sprite from 'assets/sprite.svg';
import {
  Icon,
  List,
  ListItem,
  Title,
  TitleWrapper,
  Wrapper,
} from './PatientList.styled';
import { PersonData } from '../PersonData/PersonData';

export const PatientList = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Patients</Title>
        <Icon>
          <use href={`${sprite}#search_FILL0_wght300_GRAD0_opsz24`}></use>
        </Icon>
      </TitleWrapper>
      <List>
        {patients.map((patient) => (
          <ListItem key={patient.name}>
            <PersonData
              src1x={patient.profile_picture_1x}
              src2x={patient.profile_picture_2x}
              name={patient.name}
              title={`${patient.gender}, ${patient.age}`}
            />
            <Icon>
              <use
                href={`${sprite}#more_horiz_FILL0_wght300_GRAD0_opsz24`}
              ></use>
            </Icon>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
