import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { Component } from "react";
import loadFromLocalStorage from "./utils/loadFromLocalStorage";
import getPersonsFromBack from "./utils/getPersonsFromBack";
import saveToLocalStorage from "./utils/saveToLocalStorage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "",
      activePersonId: 1,
    };
  }

  changeActivePage = (page) => {
    this.setState({
      activePage: page,
    });
  };

  async updatePersons() {
    const oldPersons = JSON.parse(loadFromLocalStorage("persons"));
    if (
      !oldPersons ||
      Date.now() - Date(oldPersons["date"]) > 30 * 24 * 60 * 60 * 1000
    ) {
      saveToLocalStorage("persons", await getPersonsFromBack());
    }
  }
  async componentDidMount() {
    await this.updatePersons();
  }

  getActivePerson() {
    const persons = JSON.parse(loadFromLocalStorage("persons"))["data"];

    const activePersonId = persons.findIndex((item) => {
      return item["id"] === this.state.activePersonId;
    });
    return structuredClone(persons[activePersonId]);
  }

  render() {
    return (
      <div className={"container-fluid"}>
        <Header
          changePage={this.changeActivePage}
          person={this.getActivePerson()}
        />
        <Main page={this.state.activePage} person={this.getActivePerson()} />
        <Footer />
      </div>
    );
  }
}

export default App;
