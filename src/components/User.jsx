
function User({ initialInvestment, annualInvestment, expectedReturn, duration, handleinitInves, handleannInves, handlexpected, handleduration }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={initialInvestment} required onChange={handleinitInves}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" value={annualInvestment} required onChange={handleannInves}/>
      
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={expectedReturn} onChange={handlexpected}/>
      
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={duration} onChange={handleduration}/>
      
        </p>
      </div>
    </section>
  );
}

export default User;
