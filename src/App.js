import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <img style={{ width: "250px", marginTop: "10px" }} src={logo} alt="" />
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
