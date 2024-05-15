import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #22cf5c;
  color: #fff;
  font-size: 14px;
  width: 100%;
  height: 2.5rem;
  border-radius: .6rem;
  font-weight: 600;
  border: none !important;
  transition: all linear 160ms;
  cursor: pointer;
  margin: 0 !important;
  &:hover {
    transform: scale(1.05);
    background-color: #1aae49;
  }
`