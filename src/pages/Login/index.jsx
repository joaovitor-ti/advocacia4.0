import React, { useState } from "react";
import Input from "../../components/Input";
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

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Title>Login</Title>
      <Divider />
      <InputColumn>
        <InputField
          value={email}
          onValueChange={(e) => setEmail(e.target.value)}
          label={"E-mail:"}
        />
        <InputRow>
          <InputField
            value={password}
            onValueChange={(e) => setPassword(e.target.value)}
            label={"Senha:"}
          />
        </InputRow>
      </InputColumn>
      <ButtonContainer>
        <Button onClick={() => {}} buttonTitle={"SALVAR"} />
      </ButtonContainer>
    </Container>
  );
}
