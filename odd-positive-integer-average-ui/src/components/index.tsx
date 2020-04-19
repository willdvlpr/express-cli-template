import React, { useState } from "react";
import clientRequest from "../util/index";
import axios from "axios";
import "../styles/index.scss";

const App: React.FC = () => {
  const [userAverage, setAverage] = useState(0);
  const [userData, setData] = useState("");
  return (
    <div className="main">
      <div className="main__container">
        <div>
          <h3 className="main__container__heading">
            Input your data separated by comma (',')
          </h3>
        </div>
        <div className="main__container__input">
          <input
            className="user-input"
            type="text"
            value={userData}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="main__container__data">
          <button
            className="submit-data"
            onClick={() => clientRequest(userData)}
          >
            Submit Data
          </button>
          <button
            className="get-data"
            onClick={() => {
              axios.get("/odd-positive-average").then((response: any) => {
                setAverage(response.data);
              });
            }}
          ></button>
        </div>
        <div className="main__container__display">
          <div className="main__container__display__data">
            <h4>{userAverage}</h4>
          </div>
          <div className="main__container__display__error"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
