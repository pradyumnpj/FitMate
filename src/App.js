import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Trainer from "./components/pages/Trainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path="/trainers" Component={Trainer} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

{
  /* https://fitclubfitness.pages.dev/ */
}
