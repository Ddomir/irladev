import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BlogsPage from "./pages/Blogs";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import BlissBlogUIBlog from "./pages/blogs/BlissBlogUI";

const AppRouter = () => {
  return (
    <Router basename="/irladev">
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/BlissBlogUI" element={<BlissBlogUIBlog />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
