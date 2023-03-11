import loadFromLocalStorage from "./loadFromLocalStorage";
import saveToLocalStorage from "./saveToLocalStorage";
import getPlanetsFromBack from "./getPlanetsFromBack";

async function updatePlanets() {
  const oldPlanets = JSON.parse(loadFromLocalStorage("planets"));
  if (
    !oldPlanets ||
    Date.now() - Date(oldPlanets["date"]) > 30 * 24 * 60 * 60 * 1000
  ) {
    saveToLocalStorage("planets", await getPlanetsFromBack());
  }
}

export default updatePlanets();
