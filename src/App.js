import React from "react";
import "./App.css";
import Header from "./Header"; /* import the header */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />{" "}
      {/* Header outside of router so that its rendered on all pages */}
      <Router>
        {" "}
        {/* Router for page routing */}
        <Switch>
          {" "}
          {/* For path switching */}
          <Route path="/chat">
            <h1>I am a chat page</h1>
          </Route>
          <Route path="/">
            <h1>am a homepage</h1> {/* keep default route at the bottom */}
          </Route>
        </Switch>
        {/* Tinder Cards */}
        {/* Buttons below the tinder cards*/}
        {/* Chat screen*/}
      </Router>
    </div>
  );
}

export default App;
