import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import ComingSoon from "./ComingSoon";
import MasterNodeList from "./MasterNodeList";

function App() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/forum'>
          <ComingSoon />
        </Route>
        <Route path='/masternodelist'>
          <MasterNodeList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
