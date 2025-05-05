"use client";
import React from "react";
import Header1 from "../HeaderBlack";
import Footer from "../Footer";
import OurTeamsList from "./OurTeamsList";
import NewTeamPage from "./NewTeamPage";

const index = () => {
  return (
    <>
      <Header1 />
      {/* <OurTeamsList /> */}

      <NewTeamPage />

      <NewTeamPage/>

      <Footer />
    </>
  );
};

export default index;
