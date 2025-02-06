import {Link} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import {styles} from "@/Styles";

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen overscroll-y-contain">
      <Navbar />

      <div className={styles.container}>
        <h1>About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 mb-8">
          {/* PFP IMG */}
          <img
            className={`col-span-full md:col-span-1 rounded-md max-sm:hidden ${styles.card}`}
            src="/images/irladevpfp.jpg"
            alt="Profile"
          />

          <div className={`col-span-full md:col-span-3 ${styles.textBox} ${styles.card}`}>
            <p>
              👋 Hello! I am <strong>Dominic Irla</strong>, an aspiring software engineer based in Chicago. Currently, I
              am learning:
            </p>
            <p className="mt-2">○ 🌐 Full-stack web development</p>
            <p>○ 🖌️ UI Design (does it look good?)</p>
            <p>○ 🕹️ Verse for UEFN</p>
          </div>

          <div className={`col-span-full md:col-span-2 ${styles.textBox} ${styles.card}`}>
            <p>Want to talk?</p>
            <p className="mt-2">✉️ irladominic@gmail.com</p>

            {/* LinkedIn */}
            <Link
              to="https://www.linkedin.com/in/dominic-irla/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="text-xl" /> linkedin.com/in/dominic-irla/
            </Link>
          </div>

          <div className={`col-span-full md:col-span-2 ${styles.textBox} ${styles.card}`}>
            <p>Other Platforms:</p>
            {/* Instagram */}
            <Link
              to="https://www.instagram.com/dominic_i._/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 hover:text-blue-500 transition-colors"
            >
              <FaInstagram className="text-xl" /> instagram.com/dominic_i._
            </Link>

            {/* GitHub */}
            <Link
              to="https://github.com/Ddomir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 hover:text-blue-500 transition-colors"
            >
              <FaGithub className="text-xl" /> github.com/Ddomir
            </Link>
          </div>
        </div>
        <Timeline />
      </div>
    </div>
  );
};

export default AboutPage;
