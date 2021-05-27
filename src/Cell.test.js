import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";

test("renders without breaking", function () {
  render(
    <table>
      <tbody>
        <tr>
          <Cell isLit={true} />
        </tr>
      </tbody>
    </table>
  );
});

test("watches snapshot", function() {
  const {container} =   
  render(
    <table>
      <tbody>
        <tr>
          <Cell isLit={true} />
        </tr>
      </tbody>
    </table>
  );
  expect(container).toMatchSnapshot();
});