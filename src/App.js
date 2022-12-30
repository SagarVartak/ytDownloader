import "./App.css";
import React, { useState } from "react";
import Youtube from "./pages/youtube";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faMagnifyingGlass, faTrash} from '@fortawesome/free-solid-svg-icons'
import newLogo from "./static/yt1.png"

function App() {
  const [url, setUrl] = useState("");
  const [vid, setVid] = useState([]);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await fetch(process.env.REACT_APP_URL + url)
      .then((res) => res.json())
      .then((data) => {
        setVid(data);
      });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setUrl("");
    setVid([]);
    document.getElementById("url").value = "";
  };

  return (
    <div className="App">
      <header className="App-header">
      <FontAwesomeIcon icon={faYoutube} size="4x" className="ytIcon" />
        <div className="upDown">
        <img src={newLogo} alt="logo" height="90vh"/>
        </div>
        
      </header>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Enter url here ..."
            id="url"
            onChange={handleChange}
          />
          <button type="submit" className="searchButton">
            <div  onClick={handleClick} className='mag'><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
          <div onClick={handleClear} ><FontAwesomeIcon icon={faTrash}/></div>
          </button>
          
        </div>
        
        
      </div>
      <div>{vid.length === 0 ? <></> : <Youtube video={vid} />}</div>
    </div>
  );
}

export default App;
