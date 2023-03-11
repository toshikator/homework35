import React from "react";

const AboutMe = (props) => {
  return (
    <div>
      <p>name: {props.person["name"]}</p>
      <p>height: {props.person["height"]}</p>
      <p>birth year: {props.person["birth_year"]}</p>
      <p>gender: {props.person["gender"]}</p>
      <p>mass: {props.person["mass"]}</p>
      <p>hair color: {props.person["hair_color"]}</p>
      <p>skin color: {props.person["skin_color"]}</p>
      <p>eye color: {props.person["eye_color"]}</p>
    </div>
  );
};

export default AboutMe;
