import {Link, useLocation} from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation(); // Get current route

  return (
    <nav
      className="fixed top-0 w-full z-50
            bg-white dark:bg-black 
            font-sans font-extrabold text-lg text-black dark:text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center py-2">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4 sm:space-x-10">
          {[
            {name: "Blogs", path: "/blogs"},
            {name: "Projects", path: "/projects"},
            {name: "About", path: "/"}
          ].map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="relative inline-block transition-all duration-300 ease-in-out group"
            >
              {/* Background highlight effect */}
              <span
                className={`absolute left-0 bottom-0 w-0 h-full transition-all duration-300 ease-in-out group-hover:w-full rounded-md
                ${location.pathname === link.path ? "w-full" : ""}
                bg-black dark:bg-gray-200`}
              ></span>

              {/* Text with proper layering */}
              <span
                className={`relative z-10 transition-colors duration-300 px-1
                ${location.pathname === link.path ? "text-white dark:text-black" : "text-black dark:text-gray-200"}
                group-hover:text-white dark:group-hover:text-black`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
