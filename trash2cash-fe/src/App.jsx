import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardPage from "./pages/DashboardPage";
import ChallengePage from "./pages/ChallengePage";
import UserDashboard from "./components/dashboard/UserDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import CollectorDashboard from "./components/dashboard/CollectorDashboard";
import InteractiveEducation from "./components/InteractiveEducation";
import ArticlePage from "./components/ArticlePage";
import UploadImage from "./components/UploadImage";
import PointDashbord from "./components/PointDashbord";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/collector-dashboard" element={<CollectorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/challenges" element={<ChallengePage />} /> 
          <Route path="/education" element={<InteractiveEducation />} /> 
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/uploadimage" element={<UploadImage/>} />
          <Route path="/dashboardpoint" element={<PointDashbord/>}/>

        </Routes>
      </div>
    </>
  );
}

export default App;
