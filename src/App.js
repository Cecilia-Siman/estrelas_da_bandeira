import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
