import styled from "styled-components";

export const Button = styled.button<{ disabled: boolean, isFullSize: boolean, isSubmitting: boolean }>`
  margin: 0;
  padding: ${props => props.isSubmitting ? "6.5px" : "18px"} 125.5px;
  border: none;
  outline: none;
  background-color: ${props => props.isSubmitting ? "#0086A8" : props.disabled ? "#e3e3e3" : "#0086A8"};
  border-radius: 8px;
  width: ${props => props.isFullSize ? "100%" : "156px"};
  height: 100%;
  position: relative;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: ${props => props.disabled ? "#828282" : "#fff"};

  :hover {
    background-color: ${props => props.isSubmitting ? "#0086A8" : props.disabled ? "#e3e3e3" : "#007693"};
  }

  :active {
    background-color: ${props => props.disabled ? "#e3e3e3" : "#00657E"};
  }
`;
