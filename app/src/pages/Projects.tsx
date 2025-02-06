import Navbar from "../components/Navbar";
import {styles} from "../Styles";

const ProjectsPage = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen overscroll-y-contain">
      <Navbar />

      <div className={styles.container}>
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default ProjectsPage;
