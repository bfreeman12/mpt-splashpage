import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import "../styles/Settings.css";

const Settings = () => {
  const [openStates, setOpenStates] = useState([false, false]);

  const toggleOpenSettings = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="settings-body">
      {openStates.map((isOpen, index) => (
        <div
          className="settings-option"
          key={index}
          onClick={() => toggleOpenSettings(index)}
        >
          <h1>Hello</h1>
          <FaChevronRight
            className={`settings-dropdown-toggle ${isOpen ? "open" : ""}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Settings;
