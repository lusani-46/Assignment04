import React from 'react';
import Home from './components/Home'; 
import AddMember from './components/AddMember'; 
import EditMember from './components/EditMember'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState'; // Import GlobalProvider
import './App.css';

function App() {
  return (
    <Router>
      <div className="Container">
        <GlobalProvider> 
             <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMember />} />
            <Route path="/edit/:id" element={<EditMember />} />
          </Routes>
        </GlobalProvider>
      </div>
    </Router>
  );
}

export default App;
