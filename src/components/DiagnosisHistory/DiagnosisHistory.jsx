import {
  BPContainer,
  BPTitle,
  Container,
  Duration,
  IconDownMonths,
  PressureConatinerDuration,
  Title,
} from './DiagnosisHistory.styled';

export const DiagnosisHistory = () => {
  return (
    <Container>
      <Title></Title>
      <BPContainer>
        <BPTitle></BPTitle>
        <PressureConatinerDuration>
          <Duration></Duration>
          <IconDownMonths>svg</IconDownMonths>
        </PressureConatinerDuration>
      </BPContainer>
    </Container>
  );
};
