import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Lost from "./pages/lost";
import Report from "./pages/report";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/report" element={<Report />} />
        </Routes>
       </div>
    </>
  );
}

export default App;
