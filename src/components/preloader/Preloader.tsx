import { RingContainer, RingFirstElement, RingForthElement, RingSecondElement, RingThirdElement } from "../../styledComponents/general/Preloader";

const Preloader = () => {
  return (
    <RingContainer>
      <RingFirstElement />
      <RingSecondElement />
      <RingThirdElement />
      <RingForthElement />
    </RingContainer>
  )
};

export default Preloader;
