import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from './pages/Contact';
import Photography from './pages/Photography';

function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className="container">
    <AboutMe/>
    <Projects/>
    <Photography/>
    <ContactMe/>
    </div>
    <Footer/>

    </div>
  );
}

export default App;
