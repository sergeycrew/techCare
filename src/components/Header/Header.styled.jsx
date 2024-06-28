import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  height: 72px;
  border-radius: 70px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 663px;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 11px 16px;
  gap: 9px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.none};
  border-radius: 41px;
  &.active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export const IconWrapper = styled.svg``;
