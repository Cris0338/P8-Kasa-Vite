// App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./css/style.css";
import Header from "./pages/modules/layout/header";
import Footer from "./pages/modules/layout/footer";
import Card from "./pages/modules/gallery";
import Banner from "./pages/modules/shared/banner";

// import Home from "./pages/Home";
// import About from './pages/About';

function App() {


  return (
    <Router>
      <Header />
      <Banner />
      <Card />
      <Routes>
      {/* <Route path="/" element={<Home />} />  */}
      {/* <Route path="/about" element={<About />} />  */}
      
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
