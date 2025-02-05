import React from "react";

const timelineData = [
  {
    date: "July, 2024 - Now",
    title: "🚀 Web Developer Aide",
    description: "Creating staff web tools for UIC Engineering.",
    ongoing: true
  },
  {
    date: "Aug, 2023 - May, 2026/27",
    title: "🎓 Bachelors",
    description: "Computer Science at University of Illinois, Chicago 🇺🇸",
    ongoing: true
  },
  {
    date: "June, 2023",
    title: "🏅 Award",
    description: "FBLA IL UI/UX Competition (1st)"
  }
];

const Timeline = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {timelineData.map((item, index) => (
        <div key={index} className="flex gap-x-3">
          {/* Timeline Vertical Line & Circle */}
          <div
            className={`relative ${
              index === timelineData.length - 1 ? "after:hidden" : "after:absolute after:top-7 after:bottom-0"
            } after:start-3.5 after:w-[2px] after:-translate-x-[0.5px] after:bg-gray-700 dark:after:bg-gray-500`}
          >
            <div className="relative z-10 size-7 flex justify-center items-center">
              {/* Ongoing Event: Outlined Dot */}
              {item.ongoing ? (
                <div className="size-3 rounded-full border-2 border-gray-700 dark:border-gray-400 bg-transparent"></div>
              ) : (
                <div className="size-3 rounded-full bg-gray-700 dark:bg-gray-400"></div>
              )}
            </div>
          </div>

          {/* Timeline Content */}
          <div className="grow pt-0.5 pb-8">
            <h3 className="font-bold text-black dark:text-white">{item.title}</h3>
            {item.description && <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">{item.description}</p>}
            <h3 className="text-xs font-medium uppercase text-gray-700 dark:text-gray-400 mt-2">{item.date}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
