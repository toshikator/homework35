import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import { aboutMePage, contactPage, starWarsPage } from "../utils/constants";

const Main = (props) => {
  switch (props.page) {
    case aboutMePage:
      return <AboutMe person={props.person} />;
    case starWarsPage:
      return <StarWars />;
    case contactPage:
      return <Contact />;
    default:
      return <Home />;
  }
};

export default Main;
