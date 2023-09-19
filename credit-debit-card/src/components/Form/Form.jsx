import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [userName, setuserName] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [Month, setMonth] = useState("");
  const [Year, setYear] = useState("");
  const [Cvv, setCvv] = useState("");
  const [textColor, setTextColor] = useState("grey");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextColor(e.target.value ? "grey" : "grey");

    // error handling
    if (userName === "") {
      setError("Cardholder name required");
    } else if (CardNumber === "") {
      setError("Card number required");
    } else if (Month === "") {
      setError("Month required");
    } else if (Year === "") {
      setError("Year required");
    } else if (Cvv === "") {
      setError("Cvv required");
    }else {
      setError("");
    }
  };

  return (
    <>
      <form className="FormCenter" onSubmit={handleSubmit}>
        <label className="form-label">CARDHOLDER NAME</label>
        <div>
          <br />
        </div>
        <input
          type="text"
          id="CardHolderName"
          className="form-input"
          placeholder="e.g. Jane Appleseed"
          style={{ color: textColor }}
          onChange={(e) => setuserName(e.target.value)}
        />
        {error}
        <label className="error">Cardholder name required</label>
        <div>
          <br />
        </div>
        <label className="form-label">CARD NUMBER</label>
        <br />
        <input
          type="number"
          id="CardNumber"
          className="form-input"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <label className="error">Card number required</label>
        <br /> <br />
        <div className="Flx">
          <div>
            <label className="form-label">EXP.DATE</label>
            <br />
            <input
              type="number"
              id="Month"
              className="Flx1"
              placeholder="MM"
              onChange={(e) => setMonth(e.target.value)}
            />
            <label className="error">Month required</label>
          </div>
          <div>
            <label className="form-label">(MM/YY)</label>
            <br />
            <input
              type="number"
              id="Year"
              className="Flx2"
              placeholder="YY"
              onChange={(e) => setYear(e.target.value)}
            />
            <label className="error">Year required</label>
          </div>
          <div>
            <label className="form-label">CVC</label>
            <br />
            <input
              type="number"
              id="Cvv"
              className="Flx3"
              placeholder="e.g. 123"
              onChange={(e) => setCvv(e.target.value)}
            />
            <label className="error">CVC must be numeric</label>
          </div>
        </div>
        <br />
        <button type="submit" value="Submit" className="Form-Button">
          Confirm
        </button>
      </form>
    </>
  );
}

export default Form;
