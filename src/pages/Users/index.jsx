import React from "react";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button/Index"
import { Title } from "./styles"
import { useNavigate } from 'react-router-dom';

export default function Users() {
  let navigate = useNavigate();
  return (
    <>
    <NavBar/>
    <Title>Usuários</Title>
        <Button onClick={() => navigate('/user/register')} buttonTitle={"Cadastrar Usuário"}/>
    </>
  );
}
