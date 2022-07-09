import styled from "styled-components";

export const ArrowDown = styled.img<{ isFocused: boolean }>`
  width: 10px;
  height: 5.4px;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(-50%, 0) rotate(${ props => props.isFocused ? "180deg" : "0deg"});
  pointer-events: none;
  font-size: 0;
`;
