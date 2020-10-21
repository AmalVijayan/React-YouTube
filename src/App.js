import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar"
import Recommendations from "./Components/Recommendations/Recommendations"
import SearchPage from "./Components/SearchPage/SearchPage"

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>

        <Route path="/search/:keyword">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
        </Route> 

        <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Recommendations />
            </div>
        </Route>  




          {/* <Route exact path="/">
            <div className="app__page">
              <Sidebar />
              <Recommendations />
            </div>
          </Route>
          
          <Route exact path="/search/:keyword">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route> */}
      
        </Switch>
      </Router>

    </div>
  );
}

export default App;
