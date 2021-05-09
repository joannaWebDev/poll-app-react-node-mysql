import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Poll from "./components/Poll";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Poll} />
      </div>
    </Router>
  );
}

export default App;