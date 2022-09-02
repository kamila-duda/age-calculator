import React, { useState } from "react";
import "./App.css";
import { AgeCalculator } from "./_components/AgeCaclculator/AgeCalculator";

function App() {
  const [yourAge, setYourAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  return (
    <div className="App">
      <AgeCalculator setYourAge={setYourAge} />
      {yourAge.years < 0 ? (
        <p>Kalkulator nie obsługuje ludzi urodzonych w przyszłości :P</p>
      ) : (
        <p>
          Masz <span>{yourAge.years}</span> lat <span>{yourAge.months}</span>{" "}
          miesięcy i <span>{yourAge.days}</span> dni{" "}
        </p>
      )}
    </div>
  );
}

export default App;
