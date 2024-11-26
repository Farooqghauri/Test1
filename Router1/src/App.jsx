import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contactus from "./Pages/Contactus/Contactus";

function App() {
  return (
    <>
      <Router basename="/Test1">
        <Navbar />
        <Routes>
          
            <Route path="/Test1" element={<Home />}/>  
            <Route path="/contactus" element={<Contactus />}/>
            
          
        </Routes> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
