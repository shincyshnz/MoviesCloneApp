import { useState, useContext } from "react";
import "./App.css";
import "./styles/globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
import ProtectedRouteAfterLogin from "./components/ProtectedRouteAfterLogin";
<<<<<<< HEAD
import Trailer from "./Pages/Trailer/Trailer";
=======
>>>>>>> a9a40e8 (bug fix : Logout)

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<ProtectedRouteAfterLogin />}>
          <Route path="home" element={<Home />}></Route>
<<<<<<< HEAD
          <Route path="trailer/:id" element={<Trailer />}></Route>
=======
>>>>>>> a9a40e8 (bug fix : Logout)
        </Route>
        {/* <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />}></Route>
        </Route> */}
<<<<<<< HEAD
        <Route path="*" element={<Error />}></Route>
=======
>>>>>>> a9a40e8 (bug fix : Logout)
      </Routes>
      <Footer />
    </>
  );
}

export default App;
