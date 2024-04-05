import React from "react";
import { StyledButton } from "./styles";

export default function Button({ onClick, buttonTitle }) {
  return <StyledButton onClick={onClick}>{buttonTitle}</StyledButton>;
}
