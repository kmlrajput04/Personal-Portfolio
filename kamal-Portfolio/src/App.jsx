import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './Pages/Home/Home';
import HireMe from './Pages/Home/components/Hireme'; 
import ProjectsPage from './Pages/Project/ProjectsPage';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import InsightPage from './Pages/Insight/InsightPage';
import Blog1 from './Pages/Insight/InsightContent/Blog1';
import Blog2 from './Pages/Insight/InsightContent/Blog2';
import Blog3 from './Pages/Insight/InsightContent/Blog3';
import Blog4 from './Pages/Insight/InsightContent/Blog4';
import Blog5 from './Pages/Insight/InsightContent/Blog5';
import Blog6 from "./Pages/Insight/InsightContent/Blog6";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<HireMe />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<InsightPage />} />
        <Route path="/insights/building-high-performance-backends-with-nodejs" element={<Blog1 />}/>
        <Route path="/insights/from-junior-to-senior-navigating-web-development-career-growth" element={<Blog2 />} />
        <Route path="/insights/mastering-react-performance" element={<Blog3 />}/>
        <Route path="/insights/ai-in-web-development" element={<Blog4 />} />
        <Route path="/insights/devops-best-practices" element={<Blog5 />} />
        <Route path="/insights/css-grid-revolution" element={<Blog6 />} />

        


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;