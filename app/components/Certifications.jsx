import React from "react";

const Certifications = ({ isDarkMode }) => {
  const certifications = [
    {
      title: "C Language",
      company: "Naresh i Technologies",
      logo: "https://play-lh.googleusercontent.com/gaTwqWtTeaZwHZ0BFfWFT4_SwOXS7Kid9oCP3hJJcGBb3h6LBg22qmQIYKklMbi8MoU=w600-h300-pc0xffffff-pd",
      date: "Jan 2023"
    },
    {
      title: "Microsoft SQL Server",
      company: "Naresh i Technologies",
      logo: "https://play-lh.googleusercontent.com/gaTwqWtTeaZwHZ0BFfWFT4_SwOXS7Kid9oCP3hJJcGBb3h6LBg22qmQIYKklMbi8MoU=w600-h300-pc0xffffff-pd",
      date: "Jan 2023"
    },
    {
      title: "Python Programming Complete Beginners Course Bootcamp 2024",
      company: "Udemy",
      logo: "https://i.pinimg.com/736x/c5/b8/62/c5b8629f2d33cee6008a49756b6b210a.jpg",
      date: "Aug 2024"
    },
    {
      title: "Artificial General Intelligence AGI : An Introductory Course",
      company: "Udemy",
      logo: "https://i.pinimg.com/736x/c5/b8/62/c5b8629f2d33cee6008a49756b6b210a.jpg",
      date: "Aug 2024"
    },
    {
      title: "ASP.NET Core Web API and Minimal API Development with .NET 6",
      company: "Udemy",
      logo: "https://i.pinimg.com/736x/c5/b8/62/c5b8629f2d33cee6008a49756b6b210a.jpg",
      date: "Aug 2025"
    },
    {
      title: "Crash Course On Python",
      company: "Coursera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png",
      date: "Oct 2023"
    },
    {
      title: "AI Skills in Software Development Life Cycle",
      company: "ACTS CDAC Hyderabad",
      logo: "https://www.presentations.gov.in/wp-content/uploads/2020/06/Preview-22.png",
      date: "July 2025"
    }
  ];

  return (
    <div
      id="certifications"
      className="w-full px-4 md:px-[12%] py-10 scroll-mt-20 overflow-hidden"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My Achievements</h4>
      <h2 className="text-center text-4xl md:text-5xl font-Ovo mb-5">
        Certifications
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-10 font-Ovo">
        A showcase of certifications that validate my technical skills and
        professional expertise.
      </p>

      {/* Auto-scroll container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-6">
          {[...certifications, ...certifications].map((cert, index) => (
            <div
              key={index}
              className={`min-w-[250px] border rounded-lg p-6 flex flex-col items-center justify-between shadow-md ${
                isDarkMode
                  ? "border-white bg-darkHover/50 text-white"
                  : "border-gray-300 bg-white text-gray-800"
              }`}
            >
              <img
                src={cert.logo}
                alt={cert.company}
                className="h-12 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-1 text-center">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {cert.company}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
