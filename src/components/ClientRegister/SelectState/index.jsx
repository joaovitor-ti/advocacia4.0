import React from "react";
import { StyledSelect } from "./styles";

export default function SelectState({ value, onChange }) {
  const states = [
    { label: "AC", value: "Acre" },
    { label: "AL", value: "Alagoas" },
    { label: "AP", value: "Amapá" },
    { label: "AM", value: "Amazonas" },
    { label: "BA", value: "Bahia" },
    { label: "CE", value: "Ceará" },
    { label: "DF", value: "Distrito Federal" },
    { label: "ES", value: "Espírito Santo" },
    { label: "GO", value: "Goiás" },
    { label: "MA", value: "Maranhão" },
    { label: "MT", value: "Mato Grosso" },
    { label: "MS", value: "Mato Grosso do Sul" },
    { label: "MG", value: "Minas Gerais" },
    { label: "PA", value: "Pará" },
    { label: "PB", value: "Paraíba" },
    { label: "PR", value: "Paraná" },
    { label: "PE", value: "Pernambuco" },
    { label: "PI", value: "Piauí" },
    { label: "RJ", value: "Rio de Janeiro" },
    { label: "RN", value: "Rio Grande do Norte" },
    { label: "RS", value: "Rio Grande do Sul" },
    { label: "RO", value: "Rondônia" },
    { label: "RR", value: "Roraima" },
    { label: "SC", value: "Santa Catarina" },
    { label: "SP", value: "São Paulo" },
    { label: "SE", value: "Sergipe" },
    { label: "TO", value: "Tocantins" },
  ];

  return <StyledSelect options={states} placeholder="UF" />;
}
