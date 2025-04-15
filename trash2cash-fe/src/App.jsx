import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ChallengePage from "./pages/ChallengePage";
import { useState } from "react";
import UploadImage from "./components/UploadImage";
import PointsDashboard from "./components/PointDashbord";
import InteractiveEducation from "./components/InteractiveEducation";
import ArticlePage from "./components/ArticlePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <NavigationBar isLoggedIn={isLoggedIn} key={isLoggedIn} />
      <div className="">
        <Routes>
          <Route
            path="/"
            element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/uploadimage" element={<UploadImage />} />
          <Route path="/dashboardpoint" element={<PointsDashboard />} />
          <Route path="/challenges" element={<ChallengePage />} /> 
          <Route path="/education" element={<InteractiveEducation />} /> 
          <Route path="/articles/:slug" element={<ArticlePage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
