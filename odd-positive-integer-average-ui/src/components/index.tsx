import React from "react";
import clientRequest from "../util/index";

interface Props {}
interface Data {
  userData: string;
}

export default class Counter extends React.Component<Props, Data> {
  state: Data = {
    userData: "",
  };

  onChange = (e: any) => {
    this.setState({ userData: e.target.value });
  };

  onClick = (e: any) => {
    clientRequest(this.state.userData);
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
      </div>
    );
  }
}
