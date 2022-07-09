import { memo } from "react";
import logo from "../../images/logo.svg";
import HeadingText from "../../styledComponents/heading/HeadingText";
import Logo from "../../styledComponents/heading/Logo";
import HeadingWrapper from "../../styledComponents/heading/HeadingWrapper";


const Heading = () => {
  return (
    <HeadingWrapper>
      <Logo src={logo} alt="SK Design" />
      <HeadingText>Оставьте заявку и станьте частью нашей команды</HeadingText>
    </HeadingWrapper>
  );
};

export default memo(Heading);
