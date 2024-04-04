import React from "react";
import { InputContainer } from "./styles";

export default function Input({ value, onValueChange, placeholder }) {
  return (
    <InputContainer
      value={value}
      onChange={onValueChange}
      placeholder={placeholder}
    />
  );
}
