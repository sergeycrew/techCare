import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const UserAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
font-size: ${({ theme }) => theme.fontSize.small}
font-weight: ${({ theme }) => theme.fontWeights.extraBold}
line-height: ${({ theme }) => theme.lineHeight.small}
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: left;
`;

export const Title = styled.p`
line-height: ${({ theme }) => theme.lineHeight.small}
  text-align: left;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.textGrey};
`;
