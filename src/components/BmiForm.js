import React, { useState } from "react";
import { Fragment } from "react";
import "../App.css";
import BmiInfo from "./BmiInfo";

const BmiForm = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const changeHeightHandler = (e) => {
    setHeight(e.target.value);
  };

  const changeWeightHandler = (e) => {
    setWeight(e.target.value);
  };
  const formResetHandler = () => {
    setHeight(0);
    setWeight(0);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const heightSquare = (height * height) / 10000;
    const bmi = (weight / heightSquare).toFixed(2);
    if (height && weight) {
      setResult(bmi);
      setFormIsValid(true);
    }
    if (!height || !weight) {
      setFormIsValid(false);
    }
  };
  return (
    <Fragment>
      <form onSubmit={submitFormHandler}>
        <div>
          <input
            onChange={changeHeightHandler}
            id="height"
            type="number"
            value={height}
          />
          <br />
          <label htmlFor="height">Height (cm)</label>
          <input
            onChange={changeHeightHandler}
            id="height"
            type="range"
            min="0"
            max="250"
            value={height}
          />
        </div>
        <div>
          <input
            type="number"
            min="0"
            max="450"
            id="weight"
            value={weight}
            onChange={changeWeightHandler}
          />
          <br />
          <label htmlFor="weight">Weight (m)</label>
          <input
            onChange={changeWeightHandler}
            type="range"
            min="0"
            max="450"
            value={weight}
          />
        </div>
        <button>Calculate</button>
        <button onClick={formResetHandler} className="resetButton">
          Reset inputs
        </button>
      </form>
      {formIsValid && <BmiInfo result={result} formIsValid={formIsValid} />}
    </Fragment>
  );
};

export default BmiForm;
