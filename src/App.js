import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
function App() {
  const [auth, setAuth] = useState(false);
  return (
    <>
    <CssBaseline />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
      </Routes>
    
      </>
  );
}

export default App;
