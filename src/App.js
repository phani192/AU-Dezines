import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DataProvider } from "./components/Context";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Section from "./components/Section";
import Logout from "./components/JSfiles/Logout"

import './App.css';


class App extends React.Component {

  render() {
    return (
      <DataProvider>

        <div className="app">
          <Router>

            <Header />
            <Section />
            <div className="Copyright">&copy;Copyright 2021</div>
            <Footer />


          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
