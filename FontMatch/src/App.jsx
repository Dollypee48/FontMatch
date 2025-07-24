import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FontPairTool from "./pages/FontPairTool";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4 bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tool" element={<FontPairTool />} />
             <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




