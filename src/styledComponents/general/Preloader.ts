import styled, { keyframes } from "styled-components";

export const RingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 35px;
  height: 35px;
`;

export const RingKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const RingFirstElement = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 3px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: ${RingKeyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
`;

export const RingSecondElement = styled.div`
  animation-delay: -0.45s;
`;

export const RingThirdElement = styled.div`
  animation-delay: -0.3s;
`;

export const RingForthElement = styled.div`
  animation-delay: -0.15s;
`;
