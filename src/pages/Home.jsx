import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import Player from "../component/Player";

function Home() {
  return (
    <>
      <Navbar />
      <Player />
    </>
  );
}

export default Home;
