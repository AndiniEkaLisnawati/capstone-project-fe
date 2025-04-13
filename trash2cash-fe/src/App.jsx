import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  return (
    <>
      <NavigationBar isLoggedIn = {isLoggedIn} key={isLoggedIn}/>
      <div className="">

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      </div>
    </>
  );
}

export default App;
