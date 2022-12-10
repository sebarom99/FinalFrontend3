
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs"

function App() {
  return (
      <>
        <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/dentist:id'element={<Detail/>}/>
          <Route path='/favs'element={<Favs/>}/>
          <Route path='/:id'element={<Detail/>}/>
         </Routes>
        <Footer/>
      </>
  );
}

export default App;
