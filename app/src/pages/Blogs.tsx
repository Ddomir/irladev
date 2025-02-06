import Navbar from "@/components/Navbar";
import {styles} from "@/Styles";
import BlogGrid from "@/components/BlogGrid";

const Tmp = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen overscroll-y-contain">
      <Navbar />

      <div className={styles.container}>
        <h1>My Blogs</h1>
        <p>Write-ups and tutorials on topics I found interesting.</p>
        <BlogGrid />
      </div>
    </div>
  );
};

export default Tmp;
