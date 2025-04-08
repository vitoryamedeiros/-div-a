import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p className="title">minicurso &lt;div&gt;a 2.0 </p>
      </header>
    </div>
  );
}

export default App;
