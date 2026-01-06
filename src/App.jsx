import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSelection from "./pages/HomeSelection";
import TicketFormPage from "./pages/TicketFormPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSelection />} />
        <Route path="/form/:family/:count" element={<TicketFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
