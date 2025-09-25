// src/components/layout/Layout.jsx
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Expenses", path: "/expenses" },
    { name: "Income", path: "/income" },
    { name: "Budget", path: "/budget" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">💰 Finance Tracker</h1>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4">
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 rounded-md font-medium transition 
                      ${
                        location.pathname === item.path
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-100"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 text-center p-4">
        <p>© 2025 Finance Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
