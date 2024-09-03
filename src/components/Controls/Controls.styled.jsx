import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80px;
  height: 44px;
  margin-left: 19px;
  &::before {
    content: '';
    width: 1px;
    background-color: ${({ theme }) => theme.colors.lineColor};
  }
`;
export const SettingsButton = styled.button`
  margin-top: 12px;
  width: 20px;
  height: 20px;
  align-items: center;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  margin-top: 12px;
  width: 20px;
  height: 20px;
  align-items: center;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.svg`
  height: 20px;
  width: 20px;
  }
`;
