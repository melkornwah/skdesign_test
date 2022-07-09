import { memo } from "react";
import Info from "../../styledComponents/main/Info";
import MainContainer from "../../styledComponents/main/MainContainer";
import Description from "../description/Description";
import Heading from "../heading/Heading";
import Form from "../form/Form";

const Main = () => {
  return (
    <MainContainer>
      <Info>
        <Heading />
        <Description />
      </Info>
      <Form />
    </MainContainer>
  );
};

export default memo(Main);
