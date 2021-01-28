import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/monitor.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        hire="Hire"
        contact="Contact"
        text="Business Grow"
      />
      </>
  );
};

export default Home;
