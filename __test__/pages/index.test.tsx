import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages";

let searchData = {
  manufacturer: "Audi",
  year: 2012,
  fuel: "Petrol",
  limit: 10,
  model: "corolla",
}
describe('Home', () => {
  // it('should render properly', () => {
  //   render(<Home searchParams={searchData} />);
  //   screen.getByRole("heading", {
  //     name: "Car Catalogue"
  //     // name: /Weather App/i
  //   });
  // });
   it('should render properly', ()=>{
     render(<Home searchParams={searchData}/>);
     screen.getByRole("heading", {
       name: "Oops, no results"
       // name: /Weather App/i
     });
   });

});