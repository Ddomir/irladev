import {Link} from "react-router-dom";
import {styles} from "@/Styles";
import Blogs from "@/data/blogs.json";

const BlogGrid = () => {
  return (
    <div className="pt-8 mb-8">
      {Blogs.map(blog => (
        <Link
          key={blog.id}
          to={blog.link}
          className={`${styles.card} bg-gray-200 dark:bg-gray-900 flex flex-row items-start gap-4 relative overflow-hidden mb-4`}
        >
          <div className="flex-1 p-4 min-w-0">
            <h2 className="font-bold text-lg flex items-center gap-2">{blog.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 max-sm:max-w-48 truncate">{blog.description}</p>
            <p className="mt-2">{blog.date}</p>
          </div>

          <div className="w-24 md:w-36 lg:w-48 flex-shrink-0 relative">
            <img
              src={blog.thumbnail}
              className="w-full h-full object-cover blog-thumbnail-clip aspect-square"
              alt={blog.title}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogGrid;
