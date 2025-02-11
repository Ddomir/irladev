import Navbar from "../components/Navbar";
import {styles} from "../Styles";
import ProjectGrid from "../components/ProjectGrid";

const ProjectsPage = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen overscroll-y-contain">
      <Navbar />

      <div className={styles.container}>
        <h1 className="text-3xl font-bold text-center pt-8">Projects</h1>
        <ProjectGrid />
      </div>
    </div>
  );
};

export default ProjectsPage;
