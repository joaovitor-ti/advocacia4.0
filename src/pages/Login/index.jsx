import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import validator from "validator";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!validator.isEmail(email)) {
      toast.error("Por favor, insira um email válido", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const promise = axios.post("http://localhost:3100/users/login", {
      email: email,
      password: password,
    });
    toast.promise(promise, {
      pending: "Carregando...",
      success: "Login efetuado com sucesso",
      error: {
        render({ data }) {
          console.log(data);
          return `Algo deu errado: ${data.response.data.message}`;
        },
      },
    });
    promise
      .then(() => {
        navigate("/home");
      })
      .catch((e) => console.log(e));
  };
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="50vh"
        width="40vh"
        sx={{
          border: "3px solid #f5f5f5",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#FFF" }}
        >
          Login
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={handleEmailChange}
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
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            InputLabelProps={{ style: { color: "#FFF" } }}
            InputProps={{
              style: { color: "#FFF" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPassword}
                    sx={{ color: "#FFF" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
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
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            type="button"
            onClick={handleSubmit}
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
            Register
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
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
            Login
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
