import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Clients from "../Clients/Clients";
import E from "../E/E";
import Features from "../Features/Features";
import Video from "../Video/Video";
import './Home.css';


const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      
      <Features></Features>
      <Clients />
      <E />
      <Video/>
    </>
  );
};

export default Home;
