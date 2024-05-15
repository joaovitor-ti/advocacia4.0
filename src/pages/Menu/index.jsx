import React, { useState } from "react";
import "../Menu/style.css"

export default function Menu() {
  return (
    <section id="nav-test">
        <div id="nav-container">
          <ul>
            <li class="nav-li active-nav"><a>Menu</a></li>
            <li class="nav-li"><a>Clientes</a></li>
            <li class="nav-li"><a>Agenda</a></li>
            <li class="nav-li"><a>Perfil</a></li>
          </ul>
          <div id="line"></div>
        </div>
    </section>
  );
}
