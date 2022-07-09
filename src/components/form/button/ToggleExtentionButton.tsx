import { memo } from "react";
import arrowIcon from "../../../images/arrow_icon.svg";
import { ToggleExtentionProps } from "../../../interfaces/interfaces";
import { ArrowDown } from "../../../styledComponents/form/ArrowIcon";
import { ToggleExtentionButton } from "../../../styledComponents/form/ToggleExtentionButton";

const Heading = (props: ToggleExtentionProps) => {
  const { onClick, isActive } = props;

  const buttonText = isActive ? "Скрыть дополнительные поля" : "Показать дополнительные поля";

  return (
    <ToggleExtentionButton
      type="button"
      onClick={(evt) => {
        evt.preventDefault();
        onClick();
      }}
    >
      {buttonText}
      <ArrowDown src={arrowIcon} alt={buttonText} isFocused={isActive} />
    </ToggleExtentionButton>
  );
};

export default memo(Heading);
