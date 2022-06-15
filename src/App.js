import React, { useState } from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const onSearchChange = (e) => {
    setData(e.target.value);
  };
  const filterData = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(data.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="title-robo f2">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filterData} />
      </Scroll>
    </div>
  );
}

export default App;
