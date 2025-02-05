import Navbar from "../components/navbar";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar></Navbar>
      <h1 className="text-4xl font-bold text-blue-500">Welcome to My App</h1>
      <p className="text-lg text-gray-700 mt-2">This is a basic projects page.</p>
    </div>
  );
};

export default ProjectsPage;
