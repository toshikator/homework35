import React, { Component } from "react";

import saveToLocalStorage from "../utils/saveToLocalStorage";
import getPlanetsFromBack from "../utils/getPlanetsFromBack";
import loadFromLocalStorage from "../utils/loadFromLocalStorage";
import { logDOM } from "@testing-library/react";

class PlanetSelect extends Component {
  async updatePlanets() {
    const oldPlanets = JSON.parse(loadFromLocalStorage("planets"));
    if (
      !oldPlanets ||
      Date.now() - Date(oldPlanets["date"]) > 30 * 24 * 60 * 60 * 1000
    ) {
      saveToLocalStorage("planets", await getPlanetsFromBack());
    }
  }
  async componentDidMount() {
    await this.updatePlanets();
  }
  getPlanetList() {
    const obj = JSON.parse(loadFromLocalStorage("planets"));
    const planetList = [];
    Object.entries(structuredClone(obj["data"])).forEach((elem) => {
      planetList.push(elem[1]["name"]);
    }, []);
    return structuredClone(planetList).map((element) => {
      <option value={element}>element</option>;
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="planet">Planet</label>
        <select id="planet" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          {this.getPlanetList()}
        </select>
      </div>
    );
  }
}

export default PlanetSelect;
