import { Container, Message, StyledLink, Title } from './ServiceMessage.styled';

export const ServiceMessage = () => {
  return (
    <Container>
      <Title>We are working on this Page</Title>
      <Message>Come back later or go to</Message>
      <StyledLink to="/patients">Patients</StyledLink>
    </Container>
  );
};
