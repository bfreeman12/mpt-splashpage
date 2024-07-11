import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useDebounce } from "use-debounce";
import Card from "../components/Card";
import "../styles/Dashboard.css";

const Dashboard = ({ pages }) => {
  const [searchValue, setSearchValue] = useState("");
  const [debounceValue] = useDebounce(searchValue, 250);
  const [displaySelector, setDisplaySelector] = useState(
    localStorage.getItem("displaySelector") || "grid"
  );
  const [displaySizeToggle, setDisplaySizeToggle] = useState(false);

  const debouncedSearch = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("displaySelector", displaySelector);
  }, [displaySelector]);

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

          <div>
            <FaChevronDown onClick={() => setDisplaySizeToggle( !displaySizeToggle)} />
          </div>
        {displaySizeToggle && (
          <>
            <div className="display-selector">
              <button
                className={`selector-button ${
                  displaySelector === "grid" ? "active" : ""
                }`}
                onClick={() => setDisplaySelector("grid")}
              >
                Large
              </button>
              <button
                className={`selector-button ${
                  displaySelector === "list" ? "active" : ""
                }`}
                onClick={() => setDisplaySelector("list")}
              >
                Small
              </button>
            </div>
           
          </>
        )}
      </div>
      <div className={`page-container ${displaySelector}`}>
              <Card
                pages={pages}
                searchValue={debounceValue}
                displaySelector={displaySelector}
              />
            </div>
    </div>
  );
};

export default Dashboard;
