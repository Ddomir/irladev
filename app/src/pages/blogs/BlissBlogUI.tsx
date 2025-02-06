import {Link} from "react-router-dom";
import Navbar from "@/components/Navbar";
import CodeBox from "@/components/CodeBox";
import {styles} from "@/Styles";

const BlissBlogUIBlog = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen overscroll-y-contain">
      <Navbar />

      <div className={styles.container}>
        <h1 className="text-center text-4xl font-bold">BlissBlogUI</h1>

        <div className="flex justify-center">
          <img
            className={`aspect-square w-64 h-auto mt-2 ${styles.image}`}
            src={`${import.meta.env.BASE_URL}images/blogImages/BlissBlogUI/BlissBlogUITN.png`}
            alt="BlissBlogUI"
          />
        </div>

        <p className={styles.subtitle}>The mistakes from not preplanning.</p>
        <p className={styles.subtitle}>January, 2025</p>

        <div className="space-y-16"></div>
        <h2 className="mt-8">Why Did I Create a Custom Framework?</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            CSS frameworks are necessary in web development to create stylized websites quickly. In the past, I would
            use TailwindCSS for its flexibility and ease-of-use. So why create a custom CSS framework?
          </p>
          <p>
            Well, when I was creating this website, I just wanted a super quick framework that is non-customizable for
            devblogs like these. I just needed a predefined style to use over and over without having to custom create
            these components using TailwindCSS. So, I decided to just create my own framework for quick and easy use in
            this and other projects down the line.
          </p>
        </div>

        <h2 className="mt-16">What to Include?</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            I wanted to keep the project very simple, but also fun to use and look at. I looked at cool devblogs like
            these:
          </p>
          <div className={`${styles.card} ${styles.textBox}`}>
            <Link
              to="hhttps://jackhumbert.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              jackhumbert.com
            </Link>
            <Link
              to="https://www.adriancourreges.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              adriancourreges.com
            </Link>
            <Link
              to="https://benui.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              benui.ca
            </Link>
          </div>
          <p>
            After looking at these blogs, I found the necessary components needed to run a blog. Here are some
            components I included as examples:
          </p>
          <div className="ml-16">
            <p>○ Buttons</p>
            <p>○ Links</p>
            <p>○ A top navbar</p>
            <p>○ Titles, text, subtitles</p>
            <p>○ A timeline for an about page</p>
            <p>○ A grid-like system for layouts/images.</p>
            <p>○ Playful hover-effects</p>
          </div>
          <div className={`${styles.card} ${styles.textBox}`}>
            <p>I also wanted to create little notes like these!</p>
          </div>
        </div>

        <h2 className="mt-16">How Do You Create a Framework?</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>The framework runs on SCSS, which allows for variables, nesting, and more.</p>
          <div className={`${styles.card} ${styles.textBox}`}>
            <p>
              🖋️ I am also using postcss, cssnano,and autoprefixer for SCSS compilation, autoprefixing, and
              minification.
            </p>
          </div>
          <p>I decided to keep my project contents separated to easily read and adjust any variable later on.</p>
          <div className="flex justify-center">
            <img
              className={`${styles.image} w-64 h-auto`}
              src={`${import.meta.env.BASE_URL}images/blogImages/BlissBlogUI/EarlySCSSExample.png`}
            />
          </div>
          <p className={styles.subtitle}>An early example of my SCSS folder layout.</p>
          <p>
            It was actually much easier than I thought creating a CSS framework. It just revolved around making SCSS
            elements using predefined utilities, and then compiling it into a CSS file. For example, this was a utility
            for image alignment:
          </p>
          <CodeBox
            language="SCSS"
            code={`.image--left {\n   float: left; // Align image to the left\n   margin-right: 1rem; // Add space between image and text\n   margin-bottom: 1rem\n};`}
          />
          <p>
            I could also create loops to generate certain utilities with many options instead of typing them all out.
          </p>
          <CodeBox
            language="SCSS"
            code={`@mixin generate-width-classes($width-map) {\n   @each $key, $val in $width-map {\n      .w-#{$key} {\n         width: $val;\n      }\n   }\n}`}
          />
          <p>Along with these, I created code blocks, notes, highlighting, and even a navbar.</p>
        </div>

        <h2 className="mt-16">Why Did I Stop Creating It?</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            I finished most of the framework before reevaluating what I will be using it for. I realized I made a
            mistake developers should not make: I didn’t make the project modular enough. As I was creating components,
            I found it harder and harder to iterate through my code, and felt that my project was all over the place.
          </p>
          <p>
            Along with that, I realized that I didn’t actually want a non-customizable framework, because it would
            prevent me from showcasing projects if I ever wanted to in the future.
          </p>
          <p>Ultimately, I was creating something for yesterday’s me with no way for tomorrow’s me to improve on it.</p>
        </div>

        <h2 className="mt-16">So What’s This Website Using?</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            After the failure of the BlissBlogUI framework, I decided to create a more modular, dev-friendly website. I
            used React-TS and tailwind to create a website I could easily add onto.
          </p>
          <p>
            Along with that, I realized that I didn’t actually want a non-customizable framework, because it would
            prevent me from showcasing projects if I ever wanted to in the future.
          </p>
          <p>Ultimately, I was creating something for yesterday’s me with no way for tomorrow’s me to improve on it.</p>
          <p>I have another blog walking through the steps to create a website like this (link coming soon).</p>
          <p>
            If you go to the BlissBlogUI and try to use it, you will notice that it actually looks very similar to this
            website. It does actually work, and if you really need a super quick to put together static HTML blog, it
            would actually suffice.
          </p>
        </div>

        <h2 className="mt-16">Key Takeaway</h2>
        <div className="text-lg space-y-4 mt-2 pb-16">
          <p>
            It's okay to make mistakes as long as I learn from them. In the future, I know to make sure I have an
            easy-to-iterate-on project, and preplan better. The project link can be found{" "}
            <Link
              to="https://github.com/Ddomir/BlissBlogUI-CSS-Framework"
              target="_blank"
              rel="noopener noreferrer"
              className="inline underline decoration-dotted hover:text-blue-500 transition-colors"
            >
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlissBlogUIBlog;
