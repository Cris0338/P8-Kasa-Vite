// App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Header from "./pages/modules/header/header";
import Footer from "./pages/modules/footer/footer";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <div className="main_container">
      
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/logement/:id" element={<Home />} /> */}
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
