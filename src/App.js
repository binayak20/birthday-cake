import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import MacBookPro from "./view/MacBookPro";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound404";
import CreateEventPage from "./pages/CreateEventPage";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/create-event" element={<CreateEventPage />} />
        <Route exact path="/event" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
