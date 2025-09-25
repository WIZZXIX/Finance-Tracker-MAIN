// src/routes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardPage from "./app/dashboard/DashboardPage";
import ExpensesPage from "./app/expenses/ExpensesPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<h1 className="text-xl">Income (Coming soon)</h1>} />
          <Route path="/budget" element={<h1 className="text-xl">Budget (Coming soon)</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
