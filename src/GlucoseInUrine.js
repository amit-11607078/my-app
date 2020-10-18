import React from "react";

function GlucoseInUrine({ data }) {
  var value;
  if (data.length) {
    if (data[0].TestResultValue === "+") {
      value = "Positive";
    } else {
      value = "Negative";
    }
  }

  return (
    <>
      {data.length ? (
        <div style={{ backgroundColor: "rgb(207,243,247, .5)" }}>
          <h3 style={{ color: "rgb(27, 133, 175)" }}>
            {data[0].TestName} : {value}
            {data[0].TestMeasuringUnit}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <br />
        </div>
      ) : null}
    </>
  );
}

export default GlucoseInUrine;
