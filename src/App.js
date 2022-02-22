import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import star from "./images/Rectangle 20.svg";
import Eventimage from "./images/EventImage.svg";
import venue from "./images/venue.svg";
import Exclamation from "./images/exclamation.svg";
function App() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=12`
      )
      .then((response) => {
        setAPIData(response.data.events);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <div className="searchcontainer">
          <p>Search</p>
          <p>Past Events</p>
          <input
            className="searchinput"
            placeholder="Search..."
            onChange={(e) => searchItems(e.target.value)}
          />
          <select className="choose">
            <option>True</option>
            <option>False</option>
          </select>
        </div>
      </div>
      <h1 className="numberevents">250+ Events</h1>
      <div className="eventcard">
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <div className="eventbox">
                  <div class="parent">
                    <img
                      className="image1"
                      src={Eventimage}
                      alt="Event Image"
                    />
                    <img className="image2" src={star} alt="Stared" />
                  </div>
                  <div className="event_details">
                    <p className="event_name">{item.name}</p>
                    <div className="event_fields">
                      <p className="event_field1">
                        <img src={venue} alt="venue" />
                        <p> Raddison Blue</p>
                      </p>
                      <p className="event_field2">
                        <img src={Exclamation} alt="Exclamation" />
                        <p> Free | Online</p>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          : APIData.map((item) => {
              return (
                <div className="eventbox">
                  <div class="parent">
                    <img
                      className="image1"
                      src={Eventimage}
                      alt="Event Image"
                    />
                    <img className="image2" src={star} alt="Stared" />
                  </div>
                  <div className="event_details">
                    <p className="event_name">{item.name}</p>
                    <div className="event_fields">
                      <p className="event_field1">
                        <img src={venue} alt="venue" />
                        <p> Raddison Blue</p>
                      </p>
                      <p className="event_field2">
                        <img src={Exclamation} alt="Exclamation" />
                        <p> Free | Online</p>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <button className="load">Load More</button>
    </div>
  );
}

export default App;
