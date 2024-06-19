import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Lost from "./pages/lost";
import Report from "./pages/report";
import Found from "./pages/found";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost-items" element={<Lost />} />
          <Route path="/report-items" element={<Report />} />
          <Route path="/found-items" element={<Found />} />
        </Routes>
       </div>
    </>
  );
}

export default App;
