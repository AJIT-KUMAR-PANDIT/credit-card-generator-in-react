import React, { useState } from "react";
import "./Form.css";
import { useContext } from "react";
import { CardContext } from "./../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const notify = () => {
    toast.success("Credit Card Details Successfully Updated !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

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
      setError(true);
    } else if (CardNumber === "") {
      setError(true);
    } else if (Month === "") {
      setError(true);
    } else if (Year === "") {
      setError(true);
    } else if (Cvv === "") {
      setError(true);
    } else {
      setError("");
    }
    // function to update card details
    if(checkAlpha()&&checkCardNumber()&&checkMonth()&&checkYear()&&checkCvv()){
     update();
     notify();
    }
  };

  function update() {
    // updating credit card details
    if (checkAlpha()) {
      setcardHolderNameShow(userName);
    }
    // if (checkCardNumber()) {

    //  const regex = new RegExp(`.{1,${4}}`, 'g');
    //  setcardNumberShow(CardNumber.match(regex).join(' '));

    // }
    if (checkCardNumber()) {
      setcardNumberShow(CardNumber);
    }
    if (checkMonth(Month)) {
      setMonthShow(Month);
    }
    if (checkYear()) {
      setYearShow(Year);
    }
    if (checkCvv()) {
      setCvvNumberShow(Cvv);
    }
    // setMonthShow(Month);
    // setYearShow(Year);
    // setCvvNumberShow(Cvv);
   
  }

  function checkAlpha() {
    const regex = /[a-zA-Z ]+$/;
    return regex.test(userName);
  }

  function checkCardNumber() {
    if (CardNumber.length === 19) {
      return true;
    }
  }
  function checkMonth() {
    if (Month >= 1 && Month <= 12) {
      return true;
    }
  }
  function checkYear() {
    if (Year >= 23) {
      return true;
    }
  }
  function checkCvv() {
    return Cvv.length === 3;
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
          value={userName.replace(/[^a-zA-Z ]/g, "")}
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
          type="text"
          id="CardNumber"
          className="form-input"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={19}
          value={CardNumber.replace(/[^0-9]/g, "")
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()}
        />
        {error && checkCardNumber() ? null : (
          <label className="error">Card number required</label>
        )}
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <br /> <br />
        <div className="Flx">
          <div>
            <label className="form-label">EXP.DATE</label>
            <br />
            <input
              type="text"
              id="Month"
              className="Flx1"
              placeholder="MM"
              maxLength={2}
              value={Month.replace(/[^0-9]/g, "")}
              onChange={(e) => setMonth(e.target.value)}
            />
            {error && checkMonth() ? null : (
              <label className="error">Month required</label>
            )}
            {/* ===============================================================        */}
          </div>
          <div>
            <label className="form-label">(MM/YY)</label>
            <br />
            <input
              type="text"
              id="Year"
              className="Flx2"
              placeholder="YY"
              maxLength={2}
              value={Year.replace(/[^0-9]/g, "")}
              onChange={(e) => setYear(e.target.value)}
            />
            {error && checkYear() ? null : (
              <label className="error">Year required</label>
            )}
          </div>
          <div>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            <label className="form-label">CVC</label>
            <br />
            <input
              type="text"
              id="Cvv"
              className="Flx3"
              placeholder="e.g. 123"
              maxLength={3}
              value={Cvv.replace(/[^0-9]/g, "")}
              onChange={(e) => setCvv(e.target.value)}
            />
            {error && checkCvv() ? null : (
              <label className="error">CVC must be numeric</label>
            )}
          </div>
        </div>
        <br />
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <button
          type="submit"
          value="Submit"
          className="Form-Button"
      onClick={ handleSubmit}
        >
          Confirm
        </button>
        {<ToastContainer />}
      </form>
    </>
  );
}

export default Form;
