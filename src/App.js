import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
    <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
