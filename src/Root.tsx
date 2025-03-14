import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./modules/HomePage";
import { DashboardPage } from "./modules/DashboardPage";
import { PorfilePage } from "./modules/ProfilePage";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="profile" element={<PorfilePage />} />
      </Route>
    </Routes>
  </Router>
);
