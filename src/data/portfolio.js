const about = {
  title: "Hi 👋 , I am Praveen",
  description:
    "I am a full stack developer. I love working with React, React Native, TypeScript, PHP, React Testing Library etc",
  github: "https://github.com/spraveenitpro",
  linkedin: "https://www.linkedin.com/in/spraveenitpro",
  cv: "#",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
        title: "Calypso",
        description:
          "Contributed numerous PR's to the WordPress.com frontend - calypso",
        technologies: ["React", "TypeScript", "Redux", "React Testing Library"],
        github: "https://github.com/Automattic/wp-calypso/pulls?q=is%3Apr+is%3Aclosed+assignee%3Aspraveenitpro+",
      },

      {
        title: "WPCOM backend",
        description:
          "Developed Features, fixed bugs, wrote tests, refactored code for WordPress.com  backend in PHP",
        technologies: ["PHP"],
        github: "https://code.a8c.com/people/commits/630/"
      },
    {
      title: "Audio Player",
      description:
        "Made to practice product design while thinking holistically about UX",
      technologies: ["JavaScript", "CSS"],
      github: "https://github.com/spraveenitpro/js-projects/tree/main/audio-player",
      demo: "https://audio-player-praveen.surge.sh/",
    },
    {
      title: "Mortgage Calculator",
      description:
        "Mortgage calculator built in React with a focus on usability and minimalism",
      technologies: ["React"],
      github: "https://github.com/spraveenitpro/mortgage/blob/main/src/Components/Navbar.jsx",
      demo: "https://mortgageapp.surge.sh/",
    },

    {
        title: "Feedback Form",
        description:
          "Feedback form built with React with the ability to save to local storage",
        technologies: ["React"],
        github: "https://github.com/spraveenitpro/reactstepbystep/tree/b6dc2d42c2e13218e663886dbb2821b1c2928c42/feedback-app",
        demo: "https://feedback-app-praveen.surge.sh/",
      },

      {
        title: "Conference App",
        description:
          "Conference profile app with QR code to generate a payment request",
        technologies: ["React Native"],
        github: "https://github.com/spraveenitpro/reactnative/tree/main/BusinessCard",
      },



  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Frontend Developer",
      company: "XYZ Company",
      duration: "Mar 2021 - Present",
      description:
        "I am currently working as a frontend developer at XYZ Company. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi incidunt, repellendus doloribus voluptates debitis porro ut illo eaque repudiandae corporis tenetur unde quae consectetur obcaecati iusto nostrum expedita iste! ",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages & Frameworks",
      skills: [
        "#JavaScript",
        "#HTML",
        "#CSS",
        "#TypeScript",
        "#React.js",
        "#Next.js",
        "#Node.js",
        "#Express.js",
        "#PHP",
        "#TailWindCSS"
      ],
    },
    {
      title: "Testing",
      skills: ["#ReactTestingLibrary, #Jest", "#PHPunit"]
    },
    {
      title: "Others",
      skills: ["#Git",  "#CI/CD"],
    },
  ],
};

export { about, projects, experience, skills };
