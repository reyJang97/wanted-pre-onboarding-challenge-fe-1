import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
