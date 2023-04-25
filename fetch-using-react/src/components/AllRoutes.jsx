import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
const AllRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    let id=localStorage.getItem("id");
    !isLoggedIn ? navigate("/login") : navigate(`user/${id}`);
  },[]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/user/:id" element={<ProfilePage/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
