import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";
import "./Footer.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <WeatherSearch defaultCity="Paris" />
      <Footer />
    </div>
  );
}
