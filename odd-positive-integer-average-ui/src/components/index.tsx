import React, { Component } from "react";
import { clientRequest } from "../util/index";
// The main application file.

const onSubmit = (e) => {
  e.preventDefault();
  console.log("submitting");

  clientRequest();
};

const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <h3 className="app__header__title">Odd Positive Average Calculator!</h3>
      </div>
      <div className="app__container">
        <div className="app__container__form">
          <form onSubmit={onSubmit}>
            <div className="form__group">
              <input
                type="text"
                name="data"
                id="user-data"
                placeholder="Array Data"
              />
            </div>
            <button type="submit" onClick={clientRequest}>
              Find Average
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
