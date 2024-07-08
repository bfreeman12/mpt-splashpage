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
<<<<<<< HEAD
      url: "http://mpt.space",
=======
      url: "http://mpt.dev",
>>>>>>> 147394a61d0bab6846c38dd95ce3f7dc1058c213
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
<<<<<<< HEAD
      url: "http://ip-tool.space",
=======
      url: "http://ip-tool.dev",
>>>>>>> 147394a61d0bab6846c38dd95ce3f7dc1058c213
      img: "/google.png",
    },
    {
      id: 4,
      name: "DevKit",
      url: "https://google.com",
      img: "/google.png",
    },
<<<<<<< HEAD
=======
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
>>>>>>> 147394a61d0bab6846c38dd95ce3f7dc1058c213
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
