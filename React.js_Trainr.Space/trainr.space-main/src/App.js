import { useState } from "react";
import "./App.css";

function App() {
  const [ls, setLs] = useState("l");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Trainr.Space</h1>
        </div>
        <div>
          <p>
            Hello and welcome to the initialization on trainr.space where we
            will spend the next few months attempting to bring you the most
            personable and intuitve training app.
          </p>
        </div>

        <div>
          <h3>Meet the team:</h3>
          <li>Jasmine Salmeron</li>
          <li>Hunter Hanay</li>
          <li>Jack Kwon</li>
          <li>
            Marce
            <a className="theLs" onClick={() => setLs(ls + "l")}>
              {ls}
            </a>
            a Silveira
          </li>
          <li>Lorenzo Martinez</li>
        </div>
      </header>
    </div>
  );
}

export default App;
