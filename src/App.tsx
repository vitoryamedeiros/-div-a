import logo from "./assets/logo.png";
import "./App.css";
import Card from "./components/card/Card";
import ota from "./assets/ota.png"
import topRosa from "./assets/top-rosa.png"
import verde from "./assets/verde.png"


function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="title">blusinha store</p>
      </header>
      <div className="content">
        <Card image={ota} title="kit blusinhas" price="R$ 299,00" />
        <Card image={topRosa} title="Top Rosa" price="R$ 99,00"/>
        <Card image={verde} title="Blusinha verde" price="R$ 77,00"/>
      </div>
    </div>
  );
}

export default App;
