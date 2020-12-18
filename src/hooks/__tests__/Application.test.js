/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render, cleanup } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Appointment from "components/Appointment";
import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";

/*
  A test that renders a React Component
*/

afterEach(cleanup);

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" }
];

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("Confirm renders w/o crashing", () => {
    render(<Confirm 
      message="Confirm"
    />);
  });

  it("Empty renders w/o crashing", () => {
    render(<Empty />);
  });

  it("Error renders w/o crashing", () => {
    render(<Error 
      message="Oops"
    />);
  });

  it("Form renders w/o crashing", () => {
    render(<Form 
      name={interviewer}
      value={2}
      interviewers={interviewers}
    />);
  });

  it("Header renders w/o crashing", () => {
    render(<Header />);
  });

  it("Show renders w/o crashing", () => {
    render(<Show 
      student="random"
      interviewer={interviewer}
    />);
  });

  it("Status renders w/o crashing", () => {
    render(<Status />);
  });

});