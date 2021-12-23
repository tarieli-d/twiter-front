//import logo from "./logo.svg";
import "./App.css";
import { FaSearch, FaHome, FaHashtag, FaBookmark, FaBell, FaUserAlt, FaTwitterSquare } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Bookmarks from './components/Bookmarks';

function App() {
  return (
    <div className="Main">
      <Router>
        <div className="section left">
          <div className="inner" id="logo"><FaTwitterSquare /></div>
          <div className="inner"><Link to="/"><FaHome />Home</Link></div>
          <div className="inner"><Link to="/Notifications"><FaHashtag />Notifications</Link></div>
          <div className="inner"><Link to="/Bookmarks"><FaBookmark />Bookmarks</Link></div>
          <div className="inner"><Link to="/Messages"><FaBell />Messages</Link></div>
          <div className="inner"><Link to="/Profile"><FaUserAlt />Profile</Link></div>
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
