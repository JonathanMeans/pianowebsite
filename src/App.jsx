import Curriculum from "./Curriculum.jsx";
import MainPage from "./MainPage.jsx";
import { Route, Routes } from "react-router-dom";
import StudioPolicies from "./StudioPolicies.jsx";
import FAQs from "./FAQs.jsx";
import FreeLesson from "./FreeLesson.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Curriculum" element={<Curriculum />} />
        <Route path="/StudioPolicies" element={<StudioPolicies />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="FreeLesson" element={<FreeLesson />} />
      </Routes>
    </>
  );
}

export default App;
