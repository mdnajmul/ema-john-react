import "./App.css";
import Header from "./components/Header/Header";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <img style={{ width: "250px", marginTop: "10px" }} src={logo} alt="" />
      <Header></Header>
    </div>
  );
}

export default App;
