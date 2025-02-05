import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BlogsPage from "./pages/Blogs";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
