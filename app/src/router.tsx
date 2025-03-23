import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BlogsPage from "./pages/Blogs";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import BlissBlogUIBlog from "./pages/blogs/BlissBlogUI";
import Pogoda from "./pages/blogs/Pogoda";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/BlissBlogUI" element={<BlissBlogUIBlog />} />
        <Route path="/blogs/Pogoda" element={<Pogoda />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
