import {
  Name,
  NameWrapper,
  Title,
  UserAvatar,
  Wrapper,
} from './PersonData.styled';

export const PersonData = ({ src1x, src2x, name, title }) => {
  console.log('src1x1:', src1x); // Check if the path is correct
  console.log('src2x2:', src2x); // Check if the path is correct

  return (
    <Wrapper>
      <UserAvatar>
        <img
          src={src1x}
          srcSet={`${src1x} 1x, ${src2x} 2x`}
          alt="Profile Pic"
        />
      </UserAvatar>
      <NameWrapper>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </NameWrapper>
    </Wrapper>
  );
};
