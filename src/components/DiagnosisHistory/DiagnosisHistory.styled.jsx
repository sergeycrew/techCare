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

export const BPContainer = styled.div`
  width: 726px;
  height: 298px;
  display: flex;
  background: ${({ theme }) => theme.colors.violet}
  border-radius: 12px;
`;

export const PressureConatinerDuration = styled.div``;

export const BPTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Duration = styled.p`
  ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const IconDownMonths = styled.svg`
  width: 11px;
  height: 6px;
`;

export const LegendContainer = styled.div`
  width: 208px;
  height: 201px;
`;

export const SingularPressureContainer = styled.div`
  width: 208px;
  height: 100px;
`;

export const PressureTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SystolicSpan = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.systolic};
`;

export const DiastolicSpan = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.diastolic};
`;

export const PressureNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const PressureIcon = styled.svg`
  height: 6px;
  width: 10px;
`;
