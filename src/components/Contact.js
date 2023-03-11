import "./Contact.css";

import React, { Component } from "react";
import PlanetSelect from "./PlanetSelect";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <form action="#">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <PlanetSelect />

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
