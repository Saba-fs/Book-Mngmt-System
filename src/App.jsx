import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './Pages/Add'
import List from './Pages/List'
import Edit from './Pages/Edit'


const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
