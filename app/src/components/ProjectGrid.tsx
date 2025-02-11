import {styles} from "@/Styles";
import Projects from "@/data/projects.json";

const ProjectGrid = () => {
  // Split projects into two equal parts
  const midIndex = Math.ceil(Projects.length / 2);
  const firstColumn = Projects.slice(0, midIndex);
  const secondColumn = Projects.slice(midIndex);

  return (
    <div className="pt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* First Column */}
      <div className="flex flex-col gap-4">
        {firstColumn.map(project => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} bg-gray-200 dark:bg-gray-900 overflow-hidden`}
          >
            {/* Image */}
            <div>
              <img src={project.thumbnail} alt={project.title} className="w-full h-auto" />
            </div>

            {/* Text Content */}
            <div className="p-4 text-center">
              <h2 className="font-bold text-lg">{project.title}</h2>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">{project.description}</p>
              <p className="text-xs font-medium uppercase text-gray-700 dark:text-gray-400 mt-2">{project.date}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-4">
        {secondColumn.map(project => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} bg-gray-200 dark:bg-gray-900 overflow-hidden`}
          >
            {/* Image */}
            <div>
              <img src={project.thumbnail} alt={project.title} className="w-full h-auto" />
            </div>

            {/* Text Content */}
            <div className="p-4 text-center">
              <h2 className="font-bold text-lg">{project.title}</h2>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">{project.description}</p>
              <p className="text-xs font-medium uppercase text-gray-700 dark:text-gray-400 mt-2">{project.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
