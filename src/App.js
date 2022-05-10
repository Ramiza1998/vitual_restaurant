import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
// import Login from "./screens/Login";
// import Register from "./screens/Register";

function App() {
  return (
    <>
      <NavBar />
      // <Login />
      // <Register />
      <Routes>
        <Route path="/" elements={<Home />} />
        <Route path="/about" elements={<About />} />
        <Route path="/service" elements={<Service />} />
        <Route path="contact" elements={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
