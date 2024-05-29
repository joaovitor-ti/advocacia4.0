import React from "react";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button/Index"
import { Title } from "./styles"
import { useNavigate } from 'react-router-dom';

export default function Clients() {
  let navigate = useNavigate();
  return (
    <>
    <NavBar/>
    <Title>Clientes</Title>
        <Button onClick={() => navigate('/client/register')} buttonTitle={"Cadastrar Cliente"}/>
    </>
  );
}
