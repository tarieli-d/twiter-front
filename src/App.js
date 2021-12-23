//import logo from "./logo.svg";
import "./App.css";
import { FaSearch, FaHome, FaHashtag, FaBookmark, FaBell, FaUserAlt, FaTwitterSquare } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Bookmarks from './components/Bookmarks';
import { useState } from "react";
import styled from 'styled-components';

const Linki = styled(Link)`
  color: ${props =>
    props.$activeMenuOption == props.$index ?  'rgb(12, 178, 243)': 'black'};
`;

function App() {
  const [activeMenuOption, setActiveMenuOption] = useState("6")
  return (
    <div className="Main">
      <Router>
        <div className="section left">
          <div id="logo"><FaTwitterSquare /></div>
          <div>
            <Linki to="/"
              $activeMenuOption={activeMenuOption}
              $index='0'
              onClick={() => {
                setActiveMenuOption('0');
              }}><FaHome />Home</Linki>
          </div>
          <div>
            <Linki to="/Notifications"
              $activeMenuOption={activeMenuOption}
              $index="1"
              onClick={() => {
                setActiveMenuOption('1');
              }}><FaHashtag />Notifications</Linki>
          </div>
          <div>
            <Linki to="/Bookmarks"
              $activeMenuOption={activeMenuOption}
              $index="2"
              onClick={() => {
                setActiveMenuOption('2');
              }}><FaBookmark />Bookmarks</Linki>
          </div>
          <div>
            <Linki to="/Messages"
              $activeMenuOption={activeMenuOption}
              $index="3"
              onClick={() => {
                setActiveMenuOption('3');
              }}><FaBell />Messages</Linki>
          </div>
          <div>
            <Linki to="/Profile"
              $activeMenuOption={activeMenuOption}
              $index="4"
              onClick={() => {
                setActiveMenuOption('4');
              }}><FaUserAlt />Profile</Linki>
          </div>
        </div>
        <div className="section center">
          <Routes>
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Bookmarks" element={<Bookmarks />} />
            <Route path="/Messages" element={<Messages />} />
            {/*<Route
                path="/details/:id"
                render={(props) => <Details {...props} />}
              />*/}
            <Route path="/Profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <div className="section right">
        <div id="searchbar">
          <input placeholder="Search for posts,users" />
          <FaSearch className="searchIcon" />
        </div>
        <div className="whoToFollow">Who to follow</div>
      </div>
    </div>
  );
}

export default App;
