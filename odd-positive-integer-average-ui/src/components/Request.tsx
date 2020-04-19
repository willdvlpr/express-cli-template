import React, { useState } from "react";
import axios from "axios";

interface IProps {
  userData: string;
}

const Request: React.FC<IProps> = ({ userData }: IProps) => {
  const [userAverage, setAverage] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
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
  );
};

export default Request;
