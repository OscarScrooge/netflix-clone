import React from 'react';
import './App.css';
import Accounts from "./components/Accounts";
import {Switch, Route , BrowserRouter as Router} from "react-router-dom";
import Browse from "./components/Browse";


function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/browse">
                     <Browse />
                  </Route>
                  <Route path="/">
                       <Accounts/>
                  </Route>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
