import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import AdminPanel from './components/AdminPanel';

function App() {

    return (
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/AdminPanel" element={<AdminPanel />} />
          </Routes>
        </Router>
      );
    
}
export default App;