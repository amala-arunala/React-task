import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BusDetails from "./BusDetails";
import { busData } from "./busData";

const MainPage = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [data] = useState(busData);
  const [busList, setBusList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const details = localStorage.getItem("currentUser");
    if (!details || !Object.keys(JSON.parse(details)).length) {
      navigate("/");
    }
  }, []);

  const btnHandler = () => {
    if (!fromLocation || !toLocation) {
      alert("Please enter location");
      return;
    }
    const filterBuses = data.filter(
      (bus) =>
        bus.fromLocation.toLowerCase() === fromLocation.toLowerCase() &&
        bus.toLocation.toLowerCase() === toLocation.toLowerCase()
    );

    if (filterBuses.length) {
      setBusList([...filterBuses[0].busDetails]);
    } else {
      setBusList([]);
    }
  };

  const onButton = busList.length ? (
    busList.map((list, index) => (
      <BusDetails
        key={index}
        fromLocation={fromLocation}
        toLocation={toLocation}
        bus={list.busName}
        arrival_time={list.arrivalTime}
        rating={list.rating}
        seats_available={list.seatsAvailable}
      />
    ))
  ) : (
    <h1 style={{ textAlign: "center" }}>No buses available</h1>
  );
  return (
    <div>
      <div className="from-location">
        <label htmlFor="from-addr" style={{ margin: "5px" }}>
          From
        </label>
        <select
          id="from-addr"
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
        >
          <option value="">-- choose --</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="vijayawada">Vijayawada</option>
          <option value="westgodavari">West Godavari</option>
          <option value="warangal">Warangal</option>
        </select>
      </div>
      <br />
      <div className="to-location">
        <label htmlFor="to-addr" style={{ paddingRight: "10px" }}>
          To
        </label>
        <select
          id="to-addr"
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
        >
          <option value="">-- choose --</option>
          <option value="karimnagar">Karimnagar</option>
          <option value="nalgonda">Nalgonda</option>
          <option value="bangalore">Bangalore</option>
          <option value="pune">Pune</option>
        </select>
      </div>
      <div className="search">
        <button className="search-btn" onClick={btnHandler}>
          Search Buses
        </button>
      </div>
      <div className="bus-details">{onButton}</div>
    </div>
  );
};

export default MainPage;
