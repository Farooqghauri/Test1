import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contactus from "./Pages/Contactus/Contactus";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          
            <Route path="/" element={<Home />}/>  
            <Route path="/contactus" element={<Contactus />}/>
            
          
        </Routes> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
