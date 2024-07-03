import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 367px;
  height: 990px;
  padding: 20px 4px 20px 20px;
  border-radius: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space between;
  align-items: center;
  margin-bottom: 40px;
  padding-right: 18px;
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
  overflow-y: scroll;
  height: 900px;
  padding-right: 30px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #072635;
    border-radius: 3px;
    opacity: 1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #072635 #f1f1f1;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;
