import { Route, Routes } from "react-router";
import LandingPage from "./Pages/LandingPage";
import AllPages from "./Routes/AllPages";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<AllPages />} />
      </Routes>
  );
}

export default App;
