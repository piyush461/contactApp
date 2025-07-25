import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let data = await axios.get('http://localhost:5000/api/contact');
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [render]);

  return (
    <Router>
      <div className="bg-[#f8f4f4]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact setRender={setRender} users={users} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;