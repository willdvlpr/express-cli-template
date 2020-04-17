import React, { useState } from "react";
import clientRequest from "../util/index";
import axios from "axios";

const App: React.FC = () => {
  const [userAverage, setAverage] = useState(0);
  const [userData, setData] = useState("");
  return (
    <div>
      <h3>Input your data separated by comma (',')</h3>
      <input
        type="text"
        value={userData}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={() => clientRequest(userData)}>Submit Data</button>
      <div>
        <button
          onClick={() => {
            axios.get("/odd-positive-average").then((response: any) => {
              setAverage(response.data);
            });
          }}
        ></button>
        <h4>{userAverage}</h4>
      </div>
    </div>
  );
};

export default App;
