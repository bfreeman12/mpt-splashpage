import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import "../styles/Settings.css";

const Settings = () => {
  const options = [
    {
      name: "Sites",
      data: [
        {
          id: 0,
          name: "MPT",
          url: "http://mpt.space",
          img: "/google.png",
        },
        {
          id: 1,
          name: "Wiki",
          url: "http://wiki.dev",
          img: "/google.png",
        },
        {
          id: 2,
          name: "HiveTool",
          url: "http://hive-tool.dev",
          img: "/google.png",
        },
        {
          id: 3,
          name: "IP Tool",
          url: "http://ip-tool.space",
          img: "/google.png",
        },
        {
          id: 4,
          name: "DevKit",
          url: "https://google.com",
          img: "/google.png",
        },
      ],
    },
  ];

  const [openStates, setOpenStates] = useState(options.map(() => false));

  const toggleOpenSettings = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="settings-body">
      {options.map((option, index) => (
        <>
          <div
            className="settings-option"
            key={index}
            onClick={() => toggleOpenSettings(index)}
          >
            <h1>{option.name}</h1>
            <FaChevronRight
              className={`settings-dropdown-toggle ${
                openStates[index] ? "open" : ""
              }`}
            />
          </div>
          <div>{openStates[index] && <h1>this is open</h1>}</div>
        </>
      ))}
    </div>
  );
};

export default Settings;
