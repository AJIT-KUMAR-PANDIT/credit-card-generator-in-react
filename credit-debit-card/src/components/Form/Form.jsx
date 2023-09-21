import React, { useState } from "react";
import "./Form.css";
import { useContext } from "react";
import { CardContext } from "./../../App";

function Form() {
  // context api
  const { setcardHolderNameShow } = useContext(CardContext);
  const { setcardNumberShow } = useContext(CardContext);
  const { setMonthShow } = useContext(CardContext);
  const { setYearShow } = useContext(CardContext);
  const { setCvvNumberShow } = useContext(CardContext);

  const [userName, setuserName] = useState("");
  const [CardNumber, setCardNumber] = useState("");
  const [Month, setMonth] = useState("");
  const [Year, setYear] = useState("");
  const [Cvv, setCvv] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userName);

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
    } else {
      setError("");
    }
    // function to update card details
    update();
  };

  function update() {
    // updating credit card details
    if (checkAlpha()) {
      setcardHolderNameShow(userName);
    }
    if (checkCardNumber()) {
      
     const regex = new RegExp(`.{1,${4}}`, 'g');
     setcardNumberShow(CardNumber.match(regex).join(' '));
     
    }
    setMonthShow(Month);
    setYearShow(Year);
    setCvvNumberShow(Cvv);
  }

  function checkAlpha() {
    const regex = /[a-zA-Z ]+$/;
    return regex.test(userName);
  }

  function checkCardNumber() {
    return CardNumber.length === 16;
  }
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
          onChange={(e) => setuserName(e.target.value)}
        />
        {error && (userName.length < 1 || !checkAlpha()) ? (
          <label className="error">Cardholder name required</label>
        ) : null}
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div>
          <br />
        </div>
        <label className="form-label">CARD NUMBER</label>
        <br />
        <input
          type="number"
          id="CardNumber"
          className="form-input"
          // maxLength={16}
          maxlength="10"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(e) => setCardNumber(e.target.value)}
          value={CardNumber}
        />
        {!checkCardNumber ? null : (
          <label className="error">Card number required</label>
        )}
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
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
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

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
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <button type="submit" value="Submit" className="Form-Button">
          Confirm
        </button>
      </form>
    </>
  );
}

export default Form;
