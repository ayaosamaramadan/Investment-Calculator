import { calculateInvestmentResults } from "../inves"

function Result({ duration, expectedReturn, initialInvestment, annualInvestment }) {
const data=calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
})

console.log(data);
  return(
  <table id="result">
    <tr>
      <th>Year</th>
      <th>Intestment Value</th>
      <th>Interest (Year)</th>
      <th>Total Interest</th>
      <th>Invested Capital</th>
    </tr>
<tbody>
  {data.map((item) =>(
    <tr key={data.year}>
      <td>{item.year}</td>
      <td>{item.valueEndOfYear}</td>
      <td>{item.interest}</td>
      <td>{item.interest}</td>
      <td>{item.annualInvestment}</td>
    </tr>
  ))}
</tbody>
  </table>
  ) 
}

export default Result