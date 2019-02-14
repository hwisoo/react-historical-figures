import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404.jsx";
import HistoricalFigures from "./HistoricalFigures";
import Home from "./Home";

function App() {
  return (
    <div>
      <style jsx global>
        {`
          body {
            font-family: "Poppins", sans-serif;
          }
        `}
      </style>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/historicalfigures" component={HistoricalFigures} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
