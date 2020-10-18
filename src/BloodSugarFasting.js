import React from "react";
import Chart from "./Chart/Chart";

function BloodSugarFasting({ data }) {
  return (
    <>
      {data.length ? (
        <div style={{ backgroundColor: "rgb(207,243,247, .5)" }}>
          <h3 style={{ color: "rgb(27, 133, 175)" }}>
            {data[0].TestName} : {data[0].TestResultValue}{" "}
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
          <Chart data={data[0].TestResultValue} testname={data[0].TestName} />
        </div>
      ) : null}
    </>
  );
}

export default BloodSugarFasting;
