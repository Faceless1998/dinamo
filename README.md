import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"
import "./App.css"

import {Home} from "./pages/home/Home"
import {Club} from "./pages/club/Club"
import {Team} from "./pages/team/Team"
import {AgeTeam} from "./pages/ageTeam/AgeTeam"
import {Media} from "./pages/media/Media"
import {Fan} from "./pages/fan/Fan"
import {Contact} from "./pages/contact/Contact"
import {HistoryOfTheTeam} from "./subpages/clubsub/HistoryOfTheTeam/HistoryOfTheTeam"
import {Administration} from "./subpages/clubsub/Administration/Administration"
import {FinancialReporting} from "./subpages/clubsub/FinancialReporting/FinancialReporting"
import {Structure} from "./subpages/clubsub/Structure/Structure"
import {Dynamo} from "./subpages/teamsub/Dynamo/Dynamo"
import {CoachingStaff} from "./subpages/teamsub/CoachingStaff/CoachingStaff"
import {TechnicalStaff} from "./subpages/teamsub/TechnicalStaff/TechnicalStaff"
import {CorpsOfCoaches} from "./subpages/agesub/CorpsOfCoaches/CorpsOfCoaches"
import {Personnel} from "./subpages/agesub/Personnel/Personnel"
import {PressService} from "./subpages/mediasub/PressService/PressService"
import {Photogallery} from "./subpages/mediasub/Photogallery/Photogallery"
import {VideoGallery} from "./subpages/mediasub/VideoGallery/VideoGallery"
import { NoPage } from "./Nopage/NoPage";

function App() {
  return (
    <>

    <Layout />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Club" element={<Club />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/AgeTeam" element={<AgeTeam />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Fan" element={<Fan />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/HistoryOfTheTeam" element={<HistoryOfTheTeam />} />
        <Route path="/Administration" element={<Administration />} />
        <Route path="/FinancialReporting" element={<FinancialReporting />} />
        <Route path="/Structure" element={<Structure />} />

        <Route path="/Dynamo" element={<Dynamo />} />
        <Route path="/CoachingStaff" element={<CoachingStaff />} />
        <Route path="/TechnicalStaff" element={<TechnicalStaff />} />

        <Route path="/CorpsOfCoaches" element={<CorpsOfCoaches />} />
        <Route path="/Personnel" element={<Personnel />} />

        <Route path="/PressService" element={<PressService />} />
        <Route path="/Photogallery" element={<Photogallery />} />
        <Route path="/VideoGallery" element={<VideoGallery />} />

        <Route path="*" element={ <NoPage /> } />
      </Routes>
      
    </>
  );
}

export default App;
