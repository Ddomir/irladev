import Navbar from "@/components/Navbar";
import {styles} from "@/Styles";
import BlissBlogUITN from "/images/blogImages/BlissBlogUI/BlissBlogUITN.png";

const BlissBlogUIBlog = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen overscroll-y-contain">
      <Navbar />

      <div className={styles.container}>
        <h1 className="text-center text-3xl font-bold">BlissBlogUI</h1>
        <img className={`col-span-full md:col-span-1 rounded-md ${styles.card}`} src={BlissBlogUITN} alt="Profile" />
      </div>
    </div>
  );
};

export default BlissBlogUIBlog;
