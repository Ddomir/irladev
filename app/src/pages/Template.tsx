import Navbar from "../components/Navbar";
import {styles} from "../Styles";

const Tmp = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen overscroll-y-contain">
      <Navbar />

      <div className={styles.container}>
        <h1 className="text-center text-3xl font-bold">About Me</h1>
      </div>
    </div>
  );
};

export default Tmp;
