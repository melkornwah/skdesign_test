import styled from "styled-components";

export const Element = styled.li`
  width: 100%;
  height: 30px;
  border-bottom: 2px solid #e3e3e3;
  margin: 0;
  padding: 0;

  :last-child {
    border: none;
  }

  transition: 0.75s;

  :hover {
    transition: 0.75s;
    background-color: #fafafa;
  }
`;

export const ElementButton = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  margin: 0;
  padding: 0 15px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  white-space: nowrap;
  border: none;
  outline: none;
  cursor: pointer;
`;
