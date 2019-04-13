import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default class main extends Component {
  state = {
    newBox: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.newBox);
  };

  handleInputchange = e => {
    this.setState({ newBox: e.target.value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputchange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
