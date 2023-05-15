import { useState, useContext } from "react";
import "./App.css";
import "./styles/globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
