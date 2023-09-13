import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body/Body";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="BodyPos">
        <Body />
      </div>
      <div className="CardPos">
        <Card />
      </div>
    </>
  );
}

export default App;
