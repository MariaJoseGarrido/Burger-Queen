import React, { Component } from "react";
import "./Rol/Cliente.css";

class cliente extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="cliente">
          <label className="titleClient">Nombre del Cliente:</label>

          <input
            onChange={(e) => this.handleChanges(e)}
            className="inputClient"
            type="text"
            name="cliente"
            value={this.props.client}
          />

          <p className="titleClient"> Mesa:</p>

          <select onChange={(e) => this.handleChange(e)} className="mesa">
            <option value="" disabled selected hidden>
              N°
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default cliente;
