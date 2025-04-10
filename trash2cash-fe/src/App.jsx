import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Gunakan array destructuring
  return (
    <>
      <NavigationBar isLoggedIn = {isLoggedIn} />
      <div className="">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      </div>
    </>
  );
}

export default App;
