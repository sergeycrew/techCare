import styled from 'styled-components';

export const Container = styled.div`
  width: 766px;
  height: 673px;
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.none};
  color: ${({ theme }) => theme.colors.darkBlue};
`;
