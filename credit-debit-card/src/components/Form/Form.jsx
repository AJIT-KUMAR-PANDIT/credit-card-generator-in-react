import React, { useState } from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <form className="FormCenter">
        <label htmlFor="name" className="form-label">
          CARDHOLDER NAME
        </label>
        <br />
        <input
          type="text"
          id="CardHolderName"
          className="form-input"
          value="e.g. Jane Appleseed"
        />
        <br /> <br />
        <label htmlFor="name" className="form-label">
          CARD NUMBER
        </label>
        <br />
        <input
          type="text"
          id="CardNumber"
          className="form-input"
          value="e.g. 1234 5678 9123 0000"
        />
        <br /> <br />
        <div className="Flx">
          <div>
            <label htmlFor="name" className="form-label">
              EXP.DATE 
            </label>
            <br />
            <input
              type="number"
              id="Month"
              className="Flx1"
              value="e.g. 1234 5678 9123 0000"
            />
          </div>
          <div>
           
            <label htmlFor="name" className="form-label">
            (MM/YY)
            </label>
            <br/>
            <input
              type="number"
              id="Year"
              className="Flx2"
              value="e.g. 1234 5678 9123 0000"
            />
          </div>
          <div>
            <label htmlFor="name" className="form-label">
            CVC
            </label>
            <br/>
            <input
              type="number"
              id="Cvv"
              className="Flx3"
              value="e.g. 123"
            />
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
