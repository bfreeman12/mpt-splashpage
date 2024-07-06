import Navbar from "./components/Navbar";
import "./App.css";
import Dashboard from "./views/Dashboard";
import Settings from "./views/Settings";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const listOfPages = [
    {
      id: 0,
      name: "MPT",
      url: "http://mpt.dev",
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
      url: "http://ip-tool.dev",
      img: "/google.png",
    },
    {
      id: 4,
      name: "DevKit",
      url: "https://google.com",
      img: "/google.png",
    },
    {
      id: 5,
      name: "HiveTool",
      url: "http://hive-tool.dev",
      img: "/google.png",
    },
    {
      id: 6,
      name: "IP Tool",
      url: "http://ip-tool.dev",
      img: "/google.png",
    },
    {
      id: 7,
      name: "Google",
      url: "https://google.com",
      img: "/google.png",
    },
  ];

  const location = useLocation();
  const { hash, pathname, search } = location;
  return (
    <>
      <Navbar path={pathname} />
      <Routes>
        <Route path="/" element={<Dashboard pages={listOfPages} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Dashboard pages={listOfPages} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
