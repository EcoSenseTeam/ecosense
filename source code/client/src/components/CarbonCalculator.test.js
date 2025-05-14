import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CarbonCalculator from "./CarbonCalculator";

test("calculates carbon footprint and displays results", () => {
  render(<CarbonCalculator />);

  fireEvent.change(screen.getByLabelText(/Electricity Usage/i), {
    target: { value: "100" },
  });
  fireEvent.change(screen.getByLabelText(/Car Travel/i), {
    target: { value: "50" },
  });
  fireEvent.change(screen.getByLabelText(/Flight Travel/i), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByLabelText(/Water Usage/i), {
    target: { value: "30" },
  });

  fireEvent.click(screen.getByText(/Calculate/i));

  expect(
    screen.getByText(/Your Monthly Carbon Footprint:/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Yearly Estimate:/i)).toBeInTheDocument();
});
