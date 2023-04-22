import React, { useState } from "react";
import "./styles/Home.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Modal from "./Modal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleopenmodal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <Navbar toggle={toggleopenmodal} />
      <Hero />
      <About />
      <Contact />
      {/* <Modal toggle={toggleopenmodal}/> */}
      {openModal && <Modal toggle={toggleopenmodal} />}
    </>
  );
};

export default Home;
