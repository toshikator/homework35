import React from "react";

const Hero = () => {
  return (
    <section className="left float-start w-25 m-2 row">
      <img
        className="col-12"
        src={require("../images/main.jpg")}
        alt={"Hero's obj"}
      />
    </section>
  );
};

export default Hero;
