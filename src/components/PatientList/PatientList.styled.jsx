import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 367px;
  height: 1054px;
  padding: 20px;
  border-radius: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space between;
  align-items: center;
`;

export const Title = styled.h2`
  width: 347px;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.none};
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const List = styled.ul`
  //width: 367;
  //display: flex;
  //flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
