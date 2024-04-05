import React from "react";
import { Container, Input, Label } from "./styles";

const InputField = ({ value, onValueChange, label }) => {
  return (
    <Container>
      <Input value={value} onChange={onValueChange} placeholder=" " />
      <Label> {label} </Label>
    </Container>
  );
};

export default InputField;
