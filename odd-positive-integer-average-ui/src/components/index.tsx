import React, { Component } from "react";
import clientRequest from "../util/index";
import clientResponse from "../util/get";
import axios from "axios";

interface Props {}
interface Data {
  userData: string;
}

export default class Counter extends Component<Props, Data> {
  state: Data = {
    userData: "",
  };

  onChange = (e: any) => {
    this.setState({ userData: e.target.value });
  };

  onClick = (e: any) => {
    clientRequest(this.state.userData);
  };

  onHandle = (e: any) => {
    clientResponse();
  };

  render() {
    return (
      <div>
        <h3>Input your data separated by comma (',')</h3>
        <input
          type="text"
          id="userData"
          onChange={this.onChange}
          value={this.state.userData}
          placeholder="Input Data"
        />
        <button onClick={this.onClick}>Submit Data</button>
        <button onClick={this.onHandle}>Show data in console</button>

        {/* <div><h2>Average: {clientResponse()}</h2></div> */}
      </div>
    );
  }
}
