import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>{/* <Route path="/" element={<HomePage />} /> */}</Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
