import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Api from './pages/api';
import Detail from './pages/detail';
import Gym1 from "./pages/gym1";
import User from './pages/user';
import HomeRegis from './pages/HomeRegis';
import ClassInfo from './pages/class_info';
import Profile from './pages/profileAffiliator';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeRegis />} />
        <Route path="/register" element={<Register />} />
        <Route path="/api-list" element={<Api />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/gym1" element={<Gym1 />} />
        <Route path="/user" element={<User />} />
        <Route path="/class_info" element={<ClassInfo />} />
        <Route path="/Affiliator" element={<Profile />} />




      </Routes>
    </Router>
  );
}

export default App;
