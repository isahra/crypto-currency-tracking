import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";
import {Route , Routes} from 'react-router-dom';
import HomePage from "./Pages/Home.page";
import AboutPage from "./Pages/Aboutus.page";
import ContactusPage from "./Pages/Contactus.page";
import faqPage from "./Pages/faq.page";
 function App() {
  return (
    <div className="App">
      <NavbarComponent/>
        <div className="wrapper">
          <Routes>
           
            <Route path="/" element={<HomePage/>} />
            <Route path="/Aboutus" element={<AboutPage/>} />
            <Route path="/Contactus" element={<ContactusPage/>} />
            <Route path="/faq" element={<faqPage/>} />
            
          </Routes>
        </div>
       <FooterComponent/>
    </div>
  );
}

export default App;

