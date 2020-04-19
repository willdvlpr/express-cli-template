import React, { useState, useEffect } from "react";
import Request from "./Request";
import "../styles/index.scss";

const App: React.FC = () => {
  const [userData, setData] = useState("");
  return (
    <div className="main">
      <div className="main__container">
        <div>
          <h3 className="main__container__heading">
            Input Your Data > Get The Average
          </h3>
        </div>
        <div className="main__container__input">
          <input
            className="user-input"
            type="text"
            value={userData}
            onChange={(e) => setData(e.target.value)}
            placeholder="e.g. 1,2,3,4,5"
          />
        </div>
        <div className="main__container__request">
          <Request userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default App;
