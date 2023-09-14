// src/App.js
import "./Body.css";
import Form from "../Form/Form";

function Body() {
  return (
    <>
      <div className="bodyContainer">
        <div className="leftSidePart"></div>
        <div className="rightSidePart">
          <div className="Cent_er">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
