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
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import Clients from "../Clients";
import { TextField, Button } from "@mui/material";

export default function ClientRegister() {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cpf, setCpf] = useState("");
  const [road, setRoad] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  let navigate = useNavigate();

  async function register() {
    await axios
      .post(
        "http://localhost:3100/clients",
        new Clients(clientName, email, birthday, cpf, road, neighborhood, city)
      )
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
        <TextField
          label="Nome do cliente"
          variant="outlined"
          margin="normal"
          fullWidth
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          InputLabelProps={{ style: { color: "#FFF" } }}
          InputProps={{
            style: { color: "#FFF" },
            classes: {
              notchedOutline: {
                borderColor: "#FFF",
              },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#FFF",
              },
              "&:hover fieldset": {
                borderColor: "#FFF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFF",
              },
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{ style: { color: "#FFF" } }}
          InputProps={{
            style: { color: "#FFF" },
            classes: {
              notchedOutline: {
                borderColor: "#FFF",
              },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#FFF",
              },
              "&:hover fieldset": {
                borderColor: "#FFF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFF",
              },
            },
          }}
        />
        <InputRow>
          <TextField
            label="Data de Nascimento"
            variant="outlined"
            margin="normal"
            fullWidth
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            InputLabelProps={{ style: { color: "#FFF" } }}
            InputProps={{
              style: { color: "#FFF" },
              classes: {
                notchedOutline: {
                  borderColor: "#FFF",
                },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF",
                },
                "&:hover fieldset": {
                  borderColor: "#FFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF",
                },
              },
            }}
          />
          <TextField
            label="CPF"
            variant="outlined"
            margin="normal"
            fullWidth
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            InputLabelProps={{ style: { color: "#FFF" } }}
            InputProps={{
              style: { color: "#FFF" },
              classes: {
                notchedOutline: {
                  borderColor: "#FFF",
                },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF",
                },
                "&:hover fieldset": {
                  borderColor: "#FFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF",
                },
              },
            }}
          />
        </InputRow>
        <TextField
          label="Logradouro"
          variant="outlined"
          margin="normal"
          fullWidth
          value={road}
          onChange={(e) => setRoad(e.target.value)}
          InputLabelProps={{ style: { color: "#FFF" } }}
          InputProps={{
            style: { color: "#FFF" },
            classes: {
              notchedOutline: {
                borderColor: "#FFF",
              },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#FFF",
              },
              "&:hover fieldset": {
                borderColor: "#FFF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFF",
              },
            },
          }}
        />
        <InputRow>
          <TextField
            label="Bairro"
            variant="outlined"
            margin="normal"
            fullWidth
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            InputLabelProps={{ style: { color: "#FFF" } }}
            InputProps={{
              style: { color: "#FFF" },
              classes: {
                notchedOutline: {
                  borderColor: "#FFF",
                },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF",
                },
                "&:hover fieldset": {
                  borderColor: "#FFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF",
                },
              },
            }}
          />
          <TextField
            label="Cidade"
            variant="outlined"
            margin="normal"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            InputLabelProps={{ style: { color: "#FFF" } }}
            InputProps={{
              style: { color: "#FFF" },
              classes: {
                notchedOutline: {
                  borderColor: "#FFF",
                },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#FFF",
                },
                "&:hover fieldset": {
                  borderColor: "#FFF",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFF",
                },
              },
            }}
          />
        </InputRow>
      </InputColumn>
      <ButtonContainer>
        <Button
          type="button"
          onClick={register}
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            backgroundColor: "#22cf5c",
            color: "#ffffff",
            padding: ".5rem 5px",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#1aae49",
            },
          }}
        >
          SALVAR
        </Button>
        <Button
          type="button"
          onClick={() => navigate("/client")}
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            color: "#ffffff",
            padding: ".5rem 5px",
            fontSize: "1rem",
          }}
        >
          Voltar
        </Button>
      </ButtonContainer>
    </Container>
  );
}
