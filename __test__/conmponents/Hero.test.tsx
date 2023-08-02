import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Hero } from "@/components";

describe('Home', () => {
  it('should render properly', () => {
    render(<Hero />);
    screen.getByRole("heading", {
      name: "Find"
      // name: /Weather App/i
    });
  });
  // it('should render properly', ()=>{
  //   render(<Hero />);
  //   screen.getByRole("heading", {
  //     name: "Welcome to the Weather App"
  //     // name: /Weather App/i
  //   });
  // });
  
});