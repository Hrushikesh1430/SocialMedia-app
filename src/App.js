import Mockman from "mockman-js";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { ProtectedRoutes } from "./Components/ProtectedRoutes/ProtectedRoutes";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DataContext } from "./Context/DataContext";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import BookMarks from "./pages/BookMarks/BookMarks";
import Explore from "./pages/Explore/Explore";
import Liked from "./pages/Liked/Liked";
import Profile from "./pages/Profile/Profile";
import FollowInfo from "./pages/FollowInfo/FollowInfo";

function App() {
  const navigate = useNavigate();

  const { setAppDevice } = useContext(DataContext);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setAppDevice(1);
      } else {
        setAppDevice(0);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

  // if (loading) {
  //   return null;
  // }

  return (
    <div className="App">
      <ScrollToTop />
      <ToastContainer toastStyle={{ backgroundColor: "#fb5d5d;" }} />
      {/* <Loader /> */}
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookmarks" element={<BookMarks />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/following" element={<FollowInfo />} />
        <Route path="/followers" element={<FollowInfo />} />

        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}

        {/* <Route path="/product/:productId" element={<Product />} /> */}
        {/* <Route path="/wishlist" element={<ProtectedRoutes component={<WishList />} redirect={"login"} />} /> */}

        {/* <Route path="*" element={<Products />} /> */}
      </Routes>
    </div>
  );
}

export default App;
