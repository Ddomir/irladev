import {Link} from "react-router-dom";
import Navbar from "../components/navbar";

const BlogsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Content */}
      <div className="flex flex-col items-center justify-center pt-20">
        <Link to="/about" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Learn More
        </Link>
        <Link to="/projects" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default BlogsPage;
