
import { Route, Routes } from 'react-router-dom'

// import Switcher from './switch/Switcher';
import Header from './layout/Header';
import Resume from './resume/Resume';
import Blog from './blog/Blog';
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="App">
      {/* <Switcher />   */}
      <Header />
      {/* <Routes /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
