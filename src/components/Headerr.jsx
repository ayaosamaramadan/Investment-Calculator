import log from "../assets/investment-money-3d-illustration-free.png";

function Headerr() {
  return (
    <header>
      <img
        src={log}
        width={100}
        height={100}
        alt="Investment Calculator logo"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Headerr;
