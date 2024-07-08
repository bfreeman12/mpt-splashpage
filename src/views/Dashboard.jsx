import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Card from "../components/Card";
import "../styles/Dashboard.css";

const Dashboard = ({ pages }) => {
  const [searchValue, setSearchValue] = useState("");
  const [debounceValue] = useDebounce(searchValue, 250);

  const debouncedSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="pages">
      <div className="searchbar-container">
        <div className="dashboard-searchbar-container">
          <input
            className="dashboard-searchbar-input"
            onChange={(e) => {
              debouncedSearch(e);
            }}
            placeholder="search..."
            value={searchValue}
          />
          {searchValue.length > 0 && (
            <button
              className="dashboard-searchbar-button"
              onClick={() => setSearchValue("")}
            >
              clear
            </button>
          )}
        </div>
      </div>
      <div className="page-container">
        <Card pages={pages} searchValue={debounceValue} />
      </div>
    </div>
  );
};

export default Dashboard;
