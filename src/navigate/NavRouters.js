import React from "react";
import { Routes, Route } from "react-router-dom";

// import AuthService from "./services/auth.service";

import Login from "../components/login.component";
import Register from "../components/register.component";
import Home from "../components/Home";
import Profile from "../components/profile.component";
import BoardUser from "../components/board-user.component";
import BoardModerator from "../components/board-moderator.component";
import BoardAdmin from "../components/board-admin.component";
import Vacation from "../components/Vacation"
import Aboutus from "../components/Aboutus"
import Promo from "../components/Promo"
import Contact from "../components/Contact";
import English from "../components/English";
import Art from "../components/Art";
import Chest from "../components/Chest";
import Music from "../components/Music";
import Prof from "../components/Prof";
import Blog from "../components/Blog";
import Pay from "../components/Pay";
import Womenclub from "../components/Womenclub";
import Niceage from "../components/Niceage"
import Travel from "../components/Travel"
import Manage from "../components/Manage"
import Personal from "../components/Personal"
import Family from "../components/Family"
// import AuthVerify from "./common/auth-verify";
// import EventBus from "./common/EventBus";

// import logo from './img/logo.png';
import "../components/component.css"

// import Footer from "./components/Footer"

const NavRrouters = () => {
  
    return ( 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<BoardUser />} />
        <Route path="/mod" element={<BoardModerator />} />
        <Route path="/admin" element={<BoardAdmin />} />

        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/english" element={<English />} />
        <Route path="/class" element={<Art />} />
        <Route path="/chest" element={<Chest />} />
        <Route path="/music" element={<Music />} />
        <Route path="/prof" element={<Prof />} />
        <Route path="/vacation" element={<Vacation />} />

        <Route path="/family" element={<Family />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/women" element={<Womenclub />} />
        <Route path="/niceage" element={<Niceage />} />
        <Route path="/travel" element={<Travel />} />

        <Route path="/group" element={<Home />} />
        <Route path="/team" element={<Home />} />
        <Route path="/corporate" element={<Home />} />
        <Route path="/testing" element={<Home />} />
        <Route path="/business" element={<Home />} />

        <Route path="/promo" element={<Promo />} />
        <Route path="/publications" element={<Blog />} />
        <Route path="/photos" element={<Home />} />
      </Routes>

    )
}

export default NavRrouters;