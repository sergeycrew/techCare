import styled from 'styled-components';

export const Container = styled.div`
  top: 0px;
  left: 0px;
  //width: 1600px;
  //height: 1195px;
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
