import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

import Home from "./components/Home";
import BookDetail from "./components/BookDetail";

import books from "./books.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <div className="Inner">
              <Link to="/" className="Logo">
                <img src={books} alt="Logo"/>
                <h2>On My Shelf</h2>
              </Link>
            </div>
          </div>

          <div className="Container Inner">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/book/:bookId' component={BookDetail}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
