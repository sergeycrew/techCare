import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
  color: ${({ theme }) => theme.colors.darkBlue};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;

export const Message = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const StyledLink = styled(NavLink)`
  border-radius: 41px;
  padding: 10px 40px;
  border: 2px solid ${({ theme }) => theme.colors.green};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
