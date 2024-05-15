import React, { useState } from "react";
import "../Login/style.css";

export default function AdminLogin() {
  return (
    <div class="page">
      <form method="POST" class="formLogin" action="menu.html">
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <label for="email">E-mail</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          autofocus="true"
          name="email"
        />
        <label for="password">Senha</label>
        <input type="password" placeholder="Digite sua senha" name="password" />
        <a href="/">Esqueci minha senha</a>
        <input type="button" value="Acessar" class="btn" id="btnAcessar" />
      </form>
    </div>
  );
}
