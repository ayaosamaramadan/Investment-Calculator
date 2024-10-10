import { useState } from "react";
import "./App.css";
import Headerr from "./components/Headerr";
import User from "./components/User";
import Result from "./components/Result";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(400);
  const [annualInvestment, setAnnualInvestment] = useState(6280);
  const [expectedReturn, setExpectedReturn] = useState(9);
  const [duration, setDuration] = useState(3);

  function handleinitInves(e) {
    setInitialInvestment(Number(e.target.value));
  }

  function handleannInves(e) {
    setAnnualInvestment(Number(e.target.value));
  }

  function handlexpected(e) {
    setExpectedReturn(Number(e.target.value));
  }

  function handleduration(e) {
    setDuration(Number(e.target.value));
  }

  return (
    <>
      <Headerr />
      <User
        handleduration={handleduration}
        handlexpected={handlexpected}
        handleannInves={handleannInves}
        handleinitInves={handleinitInves}
        duration={duration}
        expectedReturn={expectedReturn}
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
      />
      <Result
        duration={duration}
        expectedReturn={expectedReturn}
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
      />
    </>
  );
}

export default App;
