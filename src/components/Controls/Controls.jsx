import sprite from 'assets/sprite.svg';
import { Icon, MenuButton, SettingsButton, Wrapper } from './Controls.styled';

export const Controls = () => {
  return (
    <Wrapper>
      <SettingsButton>
        <Icon>
          <use href={`${sprite}#settings_FILL0_wght300_GRAD0_opsz24`}></use>
        </Icon>
      </SettingsButton>
      <MenuButton>
        <Icon>
          <use href={`${sprite}#more_vert_FILL0_wght300_GRAD0_opsz24`}></use>
        </Icon>
      </MenuButton>
    </Wrapper>
  );
};
