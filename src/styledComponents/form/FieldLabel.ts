import styled from "styled-components";

export const FieldLabel = styled.label<{ isFocused: boolean, hasError?: boolean }>`
  position: absolute;
  background-color: #fff;
  text-align: start;
  pointer-events: none;
  padding: 0 5px;
  top: -5px;
  left: 10px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: ${props => props.hasError ? "#EB5E55" : props.isFocused && "#0086A8"};
`;
