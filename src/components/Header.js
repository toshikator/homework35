import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header className="rounded-top">
      <Navigation changePage={props.changePage} />
      <h1 className="text-center pt-5 pb-3">{props.person["name"]}</h1>
    </header>
  );
};

export default Header;
