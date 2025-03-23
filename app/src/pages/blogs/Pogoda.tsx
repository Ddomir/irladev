import {Link} from "react-router-dom";
import Navbar from "@/components/Navbar";
import CodeBox from "@/components/CodeBox";
import {styles} from "@/Styles";

const BlissBlogUIBlog = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen overscroll-y-contain">
      <Navbar />

      <div className={styles.container}>
        <h1 className="text-center text-4xl font-bold">Pogoda</h1>

        <div className="flex justify-center">
          <img
            className={`aspect-square w-64 h-auto mt-2 ${styles.image}`}
            src={`${import.meta.env.BASE_URL}images/blogImages/Pogoda/PogodaBlogTN.png`}
            alt="PogodaTN"
          />
        </div>

        <p className={styles.subtitle}>Dynamic Web App Using NWS/EPA API.</p>
        <p className={styles.subtitle}>March, 2025</p>

        <div className="space-y-16"></div>

        <h2 className="mt-8">Introduction</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            For my Software Design class, I had to create a weather app using JavaFX. I was going to keep it simple, as
            I already have a lot of classwork to do, but then I heard a magical phrase. "The top 3 projects get an
            automatic A in the class." And with that, I decided to invest my time in order to hopefully get it back
            later.
          </p>
          <p>
            I spent about 30 hours on this project, including redoing it entirely after the project structure was
            getting too messy. I did end up with a good project in my opinion, but looking back, I would not have done
            the same again.
          </p>
          <p>
            This is not exactly a tutorial or even a list of what I did, but more of the lessons learned while creating
            this project.
          </p>
        </div>

        <h2 className="mt-8">Prototyping</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            Before making the design, I had coded up all the API calls to find out what information I had access to. The
            project folder included a coded API call for daily information about weather from the National Weather
            Service, but I wanted hourly data, so I used a different API URL for this. I also used the Environmental
            Agency API for UV Index data, as I find this kind of information useful. (I had only used non-key APIs for
            this project.)
          </p>
          <p>
            I really wanted the app to not just have a predefined list of locations to choose from, like most people
            decided to do. The NWS API had a call to convert x-y coordinates into the format needed for the forecast
            calls (region and X-grid / Y-grid number.)
          </p>
          <p>
            Inputting an x-y coordinate into an app is not easy or convenient, but everyone knows their zip code, so it
            was obvious to go this route. Locations are stored in a text file, and zip codes can be added/removed via
            the edit mode. There was no free zipcode API that I could find, so I just downloaded a CSV of every zipcode
            in the US, and made a hashtable of zipcodes to x-y coordinates.
          </p>
          <div className="flex justify-center">
            <img
              className={`${styles.image} w-4/5 h-auto`}
              src={`${import.meta.env.BASE_URL}images/blogImages/Pogoda/Pogoda-API-Call-Chart.png`}
            />
          </div>
        </div>

        <h2 className="mt-16">Designing</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            I had used Figma before for little designs here and there, but this was the first time I had to make a full
            app. It was actually pretty theraputic creating a design.
          </p>

          <div className="flex justify-center">
            <img
              className={`${styles.image} w-64 h-auto`}
              src={`${import.meta.env.BASE_URL}images/blogImages/Pogoda/Figma-Pogoda.png`}
            />
          </div>
          <p className={styles.subtitle}>My initial Figma design.</p>

          <p>
            As per project instructions, we could take inspiration from existing apps. I took the UI design from the
            Apple weather app, and the playful elements from the old Google weather app, specifically the cute frog. I
            was so dissapointed when they removed this little mascot from their app, so I wanted to draw backgrounds to
            make the app more fun to look at.
          </p>

          <div className="flex justify-center">
            <img
              className={`${styles.image} w-64 h-auto`}
              src={`${import.meta.env.BASE_URL}images/blogImages/Pogoda/Google-sleep.jpg`}
            />
          </div>
          <p className={styles.subtitle}>An example of a google frog background.</p>

          <p>
            This, however, was my first mistake. I had never drawn before, so I don't know why I even decided to do
            this. I initially wanted to draw a night and day background for rainy, cloudy, snowy, and sunny conditions,
            but I ended up just doing the day and night art. So, while it is good to push yourself to learn new skills,
            I was trying to do too much with too little time. My initial scope should have been smaller.
          </p>

          <div className="flex justify-center">
            <img
              className={`${styles.image} w-64 h-auto`}
              src={`${import.meta.env.BASE_URL}images/blogImages/Pogoda/SunnyNight.png`}
            />
          </div>
          <p className={styles.subtitle}>The sunny night art.</p>
        </div>

        <h2 className="mt-16">Implementing Designs</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            I had assumed that JavaFX used regular CSS, but it has its own, worse version of CSS that despised using. My
            design on Figma had the info cards with a frosted glass effect that is very easy to make in Figma and React
            with tailwind, but from my research online, it seemed really hard to make online and I learned to just drop
            it, no matter how much I wanted to keep my implementation as close to the original as possible.
          </p>
          <p>
            I won't go through every info card made, but just the harder ones. By far the hardest to implement is the
            hourly precipitation chance chart, and involved diving into Bezier curves, which I won't pretend I
            understand the math behind it. I found a great article{" "}
            <Link
              to="http://fxexperience.com/2012/01/curve-fitting-and-styling-areachart/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline underline decoration-dotted hover:text-blue-500 transition-colors"
            >
              here
            </Link>{" "}
            that explained how to implement charts like these. Even now, it still looks buggy, with the highest
            percentage number overlapping the line, but I didn't have any time to fix it, with an impending deadline
            incoming.
          </p>
          <div className="flex justify-center">
            <img
              className={`${styles.image} w-3/5 h-auto`}
              src={`${import.meta.env.BASE_URL}images/blogImages/Pogoda/Pogoda-Precip-Graph.png`}
            />
          </div>

          <p>
            Another component was this scrollable card containing the hourly temperature and conditions for the next 12
            hours in a very concise view. I used Lucide icons as pngs, loaded in as ImageViews. One downside of JavaFX
            is the lack of SVG support, so it was a bit annoying to get to work. I use the shortForecast to choose the
            icon, and the isDaytime data to choose the correct time icon for some that had night versions.
          </p>

          <div className="flex justify-center">
            <img
              className={`${styles.image} w-3/5 h-auto`}
              src={`${import.meta.env.BASE_URL}images/blogImages/Pogoda/Pogoda-Hourly-Temp.png`}
            />
          </div>

          <p>Here is an example (extremely condense and simplified) version of how I implemented this:</p>

          <CodeBox
            language="Java"
            code={`private VBox createHourlyTemperature(List<WeatherData.HourlyData> data) {\n\tHBox cards = new HBox(14);\n\tcards.setAlignment(Pos.TOP_LEFT);\n\tdata.forEach(h -> {\n\t\tVBox card = new VBox(\n\t\t\tnew Label(h.getTime()),\n\t\t\tgetWeatherIcon(h.getShortForecast(), 38, h.getIsDaytime()),\n\t\t\tnew Label(h.getTemperature() + " F°")\n\t\t);\n\t\tcard.setMinWidth(52);\n\t\tcard.setAlignment(Pos.CENTER);\n\t\tcards.getChildren().add(card);\n\t});\n\tScrollPane container = new ScrollPane(cards);\n\tcontainer.setHbarPolicy(ScrollPane.ScrollBarPolicy.NEVER);\n\tcontainer.setVbarPolicy(ScrollPane.ScrollBarPolicy.NEVER);\n\tcontainer.setFitToHeight(true);\n\tcontainer.setStyle("-fx-background: transparent;");\n\tVBox main = new VBox(\n\t\tnew HBox(5, Helpers.getIcon("clock", Color.WHITE, 20), new Label("Hourly Temperature")),\n\t\tcontainer\n\t);\n\tmain.setSpacing(10);\n\treturn createBox(main);\n}`}
          />
        </div>

        <h2 className="mt-16">Key Takeaway</h2>
        <div className="text-lg space-y-4 mt-2 pb-16">
          <p>
            Often, I give up on projects, but with a deadline, I learned to adapt. If you want to finish a project,
            prototype and design before coding anything. Also, learn to drop features if you can't do it or if it will
            sap the motivaton out of you. Overall, I am very happy with how this turned out. The project link can be
            found{" "}
            <Link
              to="https://github.com/Ddomir/Pogoda"
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
