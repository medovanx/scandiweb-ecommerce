import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PublicLayout from './layouts/PublicLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout><Navigate to="/all" /></PublicLayout>} />
        <Route path="/:category" element={<PublicLayout><HomePage /></PublicLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
