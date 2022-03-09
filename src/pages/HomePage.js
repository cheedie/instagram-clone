import React from "react";
import BottomNavBar from "../components/BottomNavbar";
import TopNavBar from "../components/TopNavBar";
import Aside from "../components/Aside";



const HomePage = () => {
  return (
    <main>
      <TopNavBar />
      <Aside />
      <BottomNavBar />
    </main>
   
  );
};

export default HomePage;
