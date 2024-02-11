// App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./pages/modules/header/header";
import Footer from "./pages/modules/footer/footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Logement from "./pages/logement/Logement";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <Router>
      <div className="main_container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
