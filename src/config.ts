export const siteConfig = {
  name: "Dania Zein",
  title: "CS and Math Undergraduate",
  description: "Portfolio website of Dania",
  accentColor: "#1d4ed8",
  social: {
    email: "daniazein20@gmail.com",
    linkedin: "https://www.linkedin.com/in/dania-zein/",
    github: "https://github.com/dmz4484",
  },
  aboutMe:
    "I'm a senior Math and Computer Science major at the historic Tougaloo College interested in applying data science and machine learning methods to medicine, biology, and public health!",
  skills: ["C++", "Python", "R", "MATLAB", "Wolfram Language", "SQL", "Xcode", "Git/Github", "Linux command line", "Jupyter Notebook"],
  projects: [
    {
      name: "Patient Directory System",
      description:
        "C++ program of over 400 lines implementing basic CRUD operations displaying a menu interface storing patient records as a vector of patients Structs",
      link: "https://github.com/dmz4484/Patient-Directory-System",
      skills: ["C++"],
    },
    {
      name: "Research Lab Network Design",
      description:
        "Network design using Cisco Packet Tracer supporting research PCs, student devices, and IoT equipment using 3 VLANs for traffic separation, wired and wireless connectivity, and basic security",
      link: "https://github.com/dmz4484/Research-Lab-Network-Design",
      skills: ["Cisco Packet Tracer"],
    },
    {
      name: "DDR Fitness",
      description:
        "Website developed using HTML, CSS, and JavaScript with over 1,080 lines of code providing 60+ randomized workouts to users and an unlimited number of healthy recipes with Spoonacular API",
      link: "https://github.com/dmz4484/CSSI_22_Project_DDRfitness",
      skills: ["HTML", "C++", "JavaScript"],
    },
  ],
  experience: [
    {
      company: "Wang Research Group @ Tougaloo College",
      title: "Undergraduate Research Fellow",
      dateRange: "Aug 2023 - Present",
      bullets: [
        "Using machine learning to analyze biomedical data on cloud-based platforms",
        "Present findings at national and regional conferences",
        "Predicting COVID-19 cases from survey data",
        "Qualtiy Control on scRNA-seq data",
      ],
    },
    {
      company: "Boston University",
      title: "AHA SURE Scholar",
      dateRange: "June 2025 - Aug 2025",
      bullets: [
        "10-week mentored research project with VA Boston Healthcare System",
        "Analyzed cardiovascular outcomes in prostate cancer patients",
        "Experience in data analysis, biostatistics, and scientific communication",
        "Presented results at virtual symposium",
      ],
    },
    {
      company: "Tougaloo College",
      title: "Teaching Assistant",
      dateRange: "Sept 2024 - May 2025",
      bullets: [
        "Served as a weekly Calculus I tutor across 2 classes",
        "Assisted students with coursework and created exam preparation materials",
        "Graded Calculus I quizzes for a class of 20 students",
      ],
    },
        {
      company: "Purdue University",
      title: "Summer Undergraduate Research Fellow",
      dateRange: "May 2024 - July 2024",
      bullets: [
        "10-week mentored research project with SCALE HBCU Radiation Hardening cohort",
        "Investigated electron emission mechanisms in semiconductors",
        "Authored a technical paper and poster and presented at symposium",
      ],
    },
        {
      company: "Google",
      title: "Computer Science Summer Institute Participant",
      dateRange: "July 2022 - Aug 2022",
      bullets: [
        "4-week intensive summer program on HTML/CSS and JavaScript",
        "Configured 15 coding projects in JavaScript",
        "Applied concepts such as variables, data types, and functions",
        "Presented collaborative final project with live demo to Google engineers",
      ],
    },
  ],
  education: [
    {
      school: "Tougaloo College",
      degree: "Bachelor of Science: Double Major in Computer Science and Mathematics",
      dateRange: "2022 - 2026",
      achievements: [
        "Minor in Data Science",
        "Presidential Academic Scholar",
        "Alpha Lambda Delta Scholar, Tougaloo Cybersecurity Clinic Intern, Tougaloo STEM-X Club Member",
        "Relevant Coursework: Biostatistics, Calculus IV, Numerical Analysis, Introduction to Machine Learning",
      ],
    },
  ],
};
