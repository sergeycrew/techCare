import sprite from 'assets/sprite.svg';
import { LogoIcon, LogoWrapper } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper aria-label="Logotype techCare" to="/">
      <LogoIcon>
        <use href={`${sprite}#TestLogo`} />
      </LogoIcon>
    </LogoWrapper>
  );
};
