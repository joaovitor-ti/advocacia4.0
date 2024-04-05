import styled from "styled-components";

export const StyledButton = styled.button`
  background: #22cf5c;
  border-radius: 10px;
  border: none;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  transition: background-color 0.3s ease;
  font-weight: 800;
  font-size: 20px;
  color: #fff;
  &:hover {
    background-color: #1aae49;
    cursor: pointer;
  }
`