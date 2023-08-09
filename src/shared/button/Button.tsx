import { ButtonIconContainer, BtnText, StyledArrowIcon } from './index';

interface IBtnprops {
  text: string;
}

export const ButtonIcon = ({ text }: IBtnprops) => {
  return (
    <ButtonIconContainer>
      <BtnText>{text}</BtnText>
      <StyledArrowIcon />
    </ButtonIconContainer>
  );
};
