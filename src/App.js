import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by Candice Tomkins, and is{" "}
          <a
            href="https://github.com/CandiceTomkins/candy-weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
