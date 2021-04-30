import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from './pages/Contact';
import Photography from './pages/Photography';

function App() {
  return (
    <div>
    <Header/>
    <Navbar/>
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
