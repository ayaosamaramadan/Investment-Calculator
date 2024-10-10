export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const Data = [];
  let investValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investValue * (expectedReturn / 100);
    investValue += interestEarnedInYear + annualInvestment;
    Data.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investValue,
      annualInvestment: annualInvestment,
    });
  }
  return Data;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
