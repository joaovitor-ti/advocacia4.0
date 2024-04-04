import React, { useState } from "react";
import Input from "../../components/Input";
import { Container, InputColumn, InputRow, Title } from "./styles";
import Divider from "../../components/Divider";

export default function ClientRegister() {
  const [clientName, setClientName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cpf, setCpf] = useState("");
  const [road, setRoad] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  return (
    <Container>
      <Title>Cadastro de Clientes</Title>
      <Divider />
      <InputColumn>
        <Input
          value={clientName}
          onValueChange={(e) => setClientName(e.target.value)}
          placeholder={"Nome do cliente"}
        />
        <InputRow>
          <Input
            value={birthday}
            onValueChange={(e) => setBirthday(e.target.value)}
            placeholder={"Data de Nascimento"}
          />
          <Input
            value={cpf}
            onValueChange={(e) => setCpf(e.target.value)}
            placeholder={"CPF"}
          />
        </InputRow>
        <Input
          value={road}
          onValueChange={(e) => setRoad(e.target.value)}
          placeholder={"Logradouro"}
        />
        <InputRow>
          <Input
            value={neighborhood}
            onValueChange={(e) => setNeighborhood(e.target.value)}
            placeholder={"Bairro"}
          />
          <Input
            value={city}
            onValueChange={(e) => setCity(e.target.value)}
            placeholder={"Cidade"}
          />
        </InputRow>
      </InputColumn>
    </Container>
  );
}
