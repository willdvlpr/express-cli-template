import React, { useState } from "react";
import clientRequest from "../util/index";
import axios from "axios";
import "../styles/index.scss";

const App: React.FC = () => {
  const [userAverage, setAverage] = useState("");
  const [userData, setData] = useState("");
  const [error, setError] = useState("");
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
            placeholder="Input data here"
          />
        </div>
        <div className="main__container__data">
          <button
            className="submit-data"
            onClick={() => {
              const sendData: number[] = userData.split(",").map(Number);
              axios({
                method: "POST",
                url: "/odd-positive-average",
                data: sendData,
              })
                .then((res: any) => {
                  setAverage(res.data.average);
                  setError("");
                })
                .catch((err: any) => {
                  if (err.response.status === 400) {
                    setError(err.response.data.message);
                  }
                });
            }}
          >
            Submit Data
          </button>
        </div>
        <div className="main__container__display">
          <div className="main__container__display__data">
            <h4>Average is: {userAverage}</h4>
          </div>
          <div className="main__container__display__error">{error}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
