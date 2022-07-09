import styled from "styled-components";
import { FieldLabel } from "./FieldLabel";

export const Button = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 0 0 0 10px;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const ButtonLabel = styled(FieldLabel)<{ isFocused: boolean, isSelected: boolean, hasError?: boolean }>`
  position: ${ props => props.isFocused || props.isSelected ? "absolute" : "inherit" };
`;

export const ButtonText = styled.p`
  width: 300px;
  margin: 0;
  padding: 0 0 0 10px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: 0.25px;
  text-align: start;
  pointer-events: none;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  min-width: 135px;
  max-width: fit-content;
  height: 130px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -135px;
  left: 0;
  z-index: 3;
  background: #fff;
  border: 2px solid #e3e3e3;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
`;