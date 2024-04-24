import React, { useState } from "react";
import {
  Container,
  InputColumn,
  InputRow,
  Title,
  ButtonContainer,
} from "./styles";
import Divider from "../../components/Divider";
import Button from "../../components/Button/Index";
import InputField from "../../components/InputField";

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
        <InputField
          value={clientName}
          onValueChange={(e) => setClientName(e.target.value)}
          label={"Nome do cliente:"}
        />
        <InputRow>
          <InputField
            value={birthday}
            onValueChange={(e) => setBirthday(e.target.value)}
            label={"Data de Nascimento:"}
          />
          <InputField
            value={cpf}
            onValueChange={(e) => setCpf(e.target.value)}
            label={"CPF:"}
          />
        </InputRow>
        <InputField
          value={road}
          onValueChange={(e) => setRoad(e.target.value)}
          label={"Logradouro:"}
        />
        <InputRow>
          <InputField
            value={neighborhood}
            onValueChange={(e) => setNeighborhood(e.target.value)}
            label={"Bairro:"}
          />
          <InputField
            value={city}
            onValueChange={(e) => setCity(e.target.value)}
            label={"Cidade:"}
          />
        </InputRow>
      </InputColumn>
      <ButtonContainer>
        <Button onClick={() => {}} buttonTitle={"SALVAR"} />
      </ButtonContainer>
    </Container>
  );
}
