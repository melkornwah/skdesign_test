import styled from "styled-components";

export const InputWrapper = styled.div<{ small: boolean, isFocused: boolean, hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  border: 2px solid ${props => props.hasError ? "#EB5E55" : props.isFocused ? "#0086A8" : "#e3e3e3"};
  border-radius: 8px;
  position: relative;
  width: ${ props => props.small ? "200px" : "400px" };
  height: 55px;
`;

export const Input = styled.input<{ value?: string, onChange?: Function }>`
  width: calc(100% - 30px);
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0 15px;

  ::placeholder {
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    letter-spacing: 0.25px;
    color: #cdcad0;
  }
`;
