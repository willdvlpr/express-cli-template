import React, { useState } from "react";
import clientRequest from "../util/index";
import axios from "axios";

const App: React.FC = () => {
  const [userData, setData] = useState("");
  const [userAverage, setAverage] = useState(0);
  return (
    <div>
      <h3>Input your data separated by comma (',')</h3>
      <input
        type="text"
        value={userData}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={(e) => clientRequest(userData)}>Submit Data</button>
    </div>
  );
};

export default App;
