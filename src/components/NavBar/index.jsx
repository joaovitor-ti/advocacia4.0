import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

export default function NavBar() {
  return (
    <section id="nav-test">
      <div id="nav-container">
        <ul>
          <li class="nav-li"><a><Link to="/home">Menu</Link></a></li>
          <li class="nav-li"><a><Link to="/client">Clientes</Link></a></li>
          <li class="nav-li"><a><Link to="/schedule">Agenda</Link></a></li>
          <li class="nav-li"><a><Link to="/user">Usuários</Link></a></li>
          <li class="nav-li"><a>Perfil</a></li>
          <li class="nav-li"><a><Link to="/">Sair</Link></a></li>
        </ul>
        <div id="line"></div>
      </div>
    </section>
  );
}
