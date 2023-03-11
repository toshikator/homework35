import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { Component } from "react";
import loadFromLocalStorage from "./utils/loadFromLocalStorage";
import getPersonsFromBack from "./utils/getPersonsFromBack";

class App extends Component {
  constructor(props) {
    super(props);
    // this.updatePersons();
    this.state = {
      activePage: "",
    };
  }

  changeActivePage = (page) => {
    this.setState({
      activePage: page,
    });
  };

  async updatePersons() {
    const oldPersons = JSON.parse(loadFromLocalStorage("persons"));
    console.log(oldPersons);
    if (
      !oldPersons ||
      Date.now() - Date.parse(oldPersons["date"]) > 30 * 24 * 60 * 60 * 1000
    ) {
      const newPersons = await getPersonsFromBack();
      const objForSave = {
        date: Date.now(),
        data: newPersons,
      };
      localStorage.setItem("persons", JSON.stringify(objForSave));
    }
  }
  componentDidMount() {
    this.updatePersons();
  }

  render() {
    return (
      <div className={"container-fluid"}>
        <Header changePage={this.changeActivePage} />
        <Main page={this.state.activePage} />
        <Footer />
      </div>
    );
  }
}

export default App;
