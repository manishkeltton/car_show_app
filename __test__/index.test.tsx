import { Hero } from "@/components";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
// import Hero from "../components/Hero";
// describe("Car App", () => {
//   it("renders the car app", () => {
//     render(<Hero />);
//     expect(screen.getByRole("Find", {
//       name: "Find"
//     }));
//     // expect(screen.getByTestId("herotitle")).toBeInTheDocument();
//     // expect(screen.getByTestId("add-todo")).toBeInTheDocument();
//   });
// });

describe('initial conditions', () => {
  render(<Hero />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('Find', {
    name: 'Find',
  });
  expect(colorButton);

  // // check that the checkbox starts out unchecked
  // const checkbox = screen.getByRole('checkbox');
  // expect(checkbox).not.toBeChecked();
});
