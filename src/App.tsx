import { MainPage } from "./components/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormPage } from "./components/FormPage";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Default route */}
        <Route path="/form" element={<FormPage />} />
        Form page
      </Routes>
    </Router>
  );
}
