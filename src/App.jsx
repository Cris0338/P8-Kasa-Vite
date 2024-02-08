// App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Header from "./pages/modules/header/header";
import Footer from "./pages/modules/footer/footer";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Home />} /> */}
        {/* <Route path="/logement/:id" element={<Home />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
