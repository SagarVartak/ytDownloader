import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Youtube from "./pages/youtube";
function App() {
  const [url, setUrl] = useState("");
  const [vid, setVid] = useState([]);

  const handleChange = (event) => {
    console.log("value", event.target.value);
    setUrl(event.target.value);
    console.log("sagar", url);
  };

  const handleClick = async (e) => {
    e.preventDefault();
      await fetch(process.env.REACT_APP_URL + url)
        .then((res) => res.json())
        .then((data) => {
          setVid(data);
          console.log(data);
        });
     console.log('video',vid);  
  
  };

  const handleClear = (e) =>{
    e.preventDefault();
    setUrl("");
    setVid([]);
    document.getElementById('url').value="";
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="hero">YOUTUBE</h2>
        <h6 className="heroLabel">Downloader</h6>
        <h3 className="clear" onClick={handleClear}>Trash</h3>
        <form className="formBox">
          <input className="ytUrl" id="url" onChange={handleChange}></input>
          <button className="search" onClick={handleClick} value="submit">
            search
          </button>
        </form>
        <div>
        {(vid.length == 0)?(<></>):(<Youtube video={vid}/>)}
        </div>
      </header>
    </div>
  );
}

export default App;
