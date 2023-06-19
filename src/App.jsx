import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Contact from "./pages/Contact"
import Room from "./components/Rooms/Room"
import RoomDetail from "./components/Rooms/RoomDetail";
import Restaurant from "./components/Rooms/Restaurant";
import Chef from "./components/Rooms/Chef";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/room" element={<Room />} />
        <Route path="/roomDetail" element={<RoomDetail />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/chef" element={<Chef />} />

      </Routes>
    </>
  );
};

export default App;
