import React, { useState } from "react";
import axios from "axios";

// Interface for user's data as props
interface IProps {
  userData: string;
}

const Request: React.FC<IProps> = ({ userData }: IProps) => {
  // State for user average value calculated on server
  const [userAverage, setAverage] = useState("");
  // State for possible error returned from server
  const [error, setError] = useState("");

  // Make POST request to server (5001)
  const getData = () => {
    const sendData: number[] = userData.split(",").map(Number);
    // POST
    axios({
      method: "POST",
      url: "/odd-positive-average",
      data: sendData,
    })
      .then((res: any) => {
        // Set the average from response in component state
        setAverage(res.data.average);
        setError("");
      })
      .catch((err: any) => {
        if (err.response.status === 400) {
          // If error, set error in component state
          setError(err.response.data.message);
        }
      });
  };
  return (
    <div>
      <div className="main__container__data">
        <button
          className="submit-data"
          onClick={() => {
            getData();
          }}
        >
          Submit Data
        </button>
      </div>
      <div className="main__container__display">
        <div className="main__container__display__data">
          {/* Display the returned user average value */}
          <h4>Average is: {userAverage}</h4>
        </div>
        {/* Display the possible returned error */}
        <div className="main__container__display__error">{error}</div>
      </div>
    </div>
  );
};

export default Request;
