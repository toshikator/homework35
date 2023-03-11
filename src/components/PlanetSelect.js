import React, { Component } from "react";

import saveToLocalStorage from "../utils/saveToLocalStorage";
import getPlanetsFromBack from "../utils/getPlanetsFromBack";
import loadFromLocalStorage from "../utils/loadFromLocalStorage";

class PlanetSelect extends Component {
  // constructor(props) {
  //   super(props);
  // this.updatePlanets();
  // }

  // async updatePlanets() {
  //   const oldPlanets = JSON.parse(loadFromLocalStorage("planets"));
  //   if (
  //     !oldPlanets ||
  //     Date.now() - Date(oldPlanets["date"]) > 30 * 24 * 60 * 60 * 1000
  //   ) {
  //     await saveToLocalStorage("planets", await getPlanetsFromBack());
  //   }
  // }

  getPlanetList() {
    loadFromLocalStorage("planets");
    const obj = JSON.parse(loadFromLocalStorage("planets"));
    const planetList = [];
    Object.entries(structuredClone(obj["data"])).forEach((elem) => {
      planetList.push(elem[1]["name"]);
    }, []);
    return structuredClone(planetList);
  }

  render() {
    return (
      <div>
        <label htmlFor="planet">Planet</label>
        <select id="planet" name="country">
          <option value="#" disabled>
            Choose your planet
          </option>

          {this.getPlanetList().map((elem) => {
            return (
              <option key={elem} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default PlanetSelect;
