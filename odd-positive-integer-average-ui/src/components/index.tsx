import React, { Component } from "react";
import clientRequest from "../util/index";
import axios from "axios";

interface Props {}
interface Data {
  userData: string;
  userAverage: number;
}

export default class Counter extends Component<Props, Data> {
  state: Data = {
    userData: "",
    userAverage: 0,
  };

  onChange = (e: any) => {
    this.setState({ userData: e.target.value });
  };

  onClick = (e: any) => {
    clientRequest(this.state.userData);
  };

  onHandle = (e: any) => {
    this.getData();
  };

  getData = () => {
    axios
      .get("/odd-positive-average")
      .then((response: any) => {
        this.setData(Number(response.data));
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  setData = (average: number) => {
    this.setState({ userAverage: average });
    console.log(this.state.userAverage);
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
        <button onClick={this.onHandle}>Get Average of Data</button>
        <div className="display__data">
          <h3>Average is {this.state.userAverage}</h3>
        </div>
      </div>
    );
  }
}
