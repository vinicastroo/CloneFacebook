import React, { Component } from "react";

import "./Header.css";

import logo from "../assets/facebook-1.svg";

import { MdAccountCircle } from "react-icons/md";

class Header extends Component {
  render() {
    return (
      <div id="menu">
        <img src={logo} alt="logo" />
        <div id="user-content">
          <span>Meu Perfil</span>
          <MdAccountCircle />
        </div>
      </div>
    );
  }
}

export default Header;
