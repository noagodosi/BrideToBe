import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Navbar from "../components/Navbar/Navbar";
import MenuClient from '../components/Menu/MenuClient';

const PersonalInfo = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <MenuClient />
      {/* <h2>Personal Info HERE</h2> */}
    </div>
  );
};

export default PersonalInfo;
