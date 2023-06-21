import './App.css';
import Navbar from './components/navabar';
import Cartcontainer from './components/cartContainer';
import Register from './components/Register';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Login from './components/login';
import CourseContainer from './components/courseContainer';
import Create from './pages/Course/Create';

function App() {
  return (
    <React.Fragment>
      <Navbar />
     
      <Router>
         <Routes>
          <Route exact path="/cart" element={<Cartcontainer />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/course" element={<CourseContainer />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/create" element={<Create />} />
          

        </Routes>
      </Router>
    </React.Fragment>


  );
}

export default App;
