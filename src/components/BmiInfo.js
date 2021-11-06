import React from "react";

const BmiInfo = (props) => {
  let range = <span>Overweight</span>;
  if (props.result < 18) {
    range = <span>Underweight</span>;
  }
  if (props.result < 25) {
    range = <span>Normal</span>;
  }
  if (props.result < 30) {
    range = <span>Overweight</span>;
  }
  if (props.result < 35) {
    range = <span>Obesity Class I</span>;
  }
  if (props.result < 40) {
    range = <span>Obesity Class II</span>;
  }
  if (props.result > 40) {
    range = <span>Obesity Class III</span>;
  }
  return (
    <div>
      {props.formIsValid && (
        <h1>
          Your BMI is {props.result} and you are in the {range} range
        </h1>
      )}
    </div>
  );
};

export default BmiInfo;
