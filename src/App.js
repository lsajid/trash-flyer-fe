import './App.css';
//dependencies
import { Routes, Route } from "react-router-dom";

//pages
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import NewFeedback from './pages/NewFeedback';
import FourOFour from "./pages/FourOFour"

//components 
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ < Home />} />
          <Route path="/faq" element={ <FAQ />} />
          <Route path="/review/new" element={ <NewFeedback />} />
          <Route path="*" element={<FourOFour/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
