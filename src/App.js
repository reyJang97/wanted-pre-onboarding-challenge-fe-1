import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ToDoList from "./pages/ToDoList";
import ToDo from "./pages/ToDo";
import CreateToDo from "./pages/CreateToDo";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/todos/:id" element={<ToDo />} />
        <Route path="/create" element={<CreateToDo />} />
      </Routes>
    </>
  );
}

export default App;
