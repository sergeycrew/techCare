import { Logo } from '../Logo/Logo';
import { UserBar } from '../UserBar/UserBar';
import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';
import { CiCalendar } from 'react-icons/ci';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation>
        <StyledLink to="/overview" activeClassName="active">
          <IconWrapper style={{ width: '16px', height: '17px' }}>
            <use href={`${sprite}#home_FILL0_wght300_GRAD0_opsz24`} />
          </IconWrapper>
          Overview
        </StyledLink>
        <StyledLink to="/patients" activeClassName="active">
          <IconWrapper style={{ width: '24px', height: '17px' }}>
            <use href={`${sprite}#group_FILL0_wght300_GRAD0_opsz24`} />
          </IconWrapper>
          Patients
        </StyledLink>
        <StyledLink to="/shedule" activeClassName="active">
          <IconWrapper style={{ width: '19px', height: '19px' }}>
            <CiCalendar size={19} />
          </IconWrapper>
          Shedule
        </StyledLink>
        <StyledLink to="/message" activeClassName="active">
          <IconWrapper style={{ width: '19px', height: '17px' }}>
            <use href={`${sprite}#chat_bubble_FILL0_wght300_GRAD0_opsz24`} />
          </IconWrapper>
          Message
        </StyledLink>
        <StyledLink to="/transactions" activeClassName="active">
          <IconWrapper style={{ width: '22px', height: '17px' }}>
            <use href={`${sprite}#credit_card_FILL0_wght300_GRAD0_opsz24`} />
          </IconWrapper>
          Transactions
        </StyledLink>
      </Navigation>
      <UserBar />
    </HeaderContainer>
  );
};
