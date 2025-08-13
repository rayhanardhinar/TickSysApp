import { Link } from "react-router";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Service", path: "/service" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="px-4 py-4 bg-blue-400 shadow">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-6">
          <li>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
