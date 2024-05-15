import React, { useState } from "react";
import axios from "axios";
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
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cpf, setCpf] = useState("");
  const [road, setRoad] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");

  async function register() {
    await axios
      .post("http://localhost:3000/clients", {
        name: clientName,
        email: email,
        birthday: birthday,
        cpf: cpf,
        road: road,
        neighborhood: neighborhood,
        city: city,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso");
      })
      .catch(() => {
        alert("Algo deu errado");
      });
  }
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
        <InputField
          value={email}
          onValueChange={(e) => setEmail(e.target.value)}
          label={"Email:"}
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
        <Button onClick={register} buttonTitle={"SALVAR"} />
      </ButtonContainer>
    </Container>
  );
}
