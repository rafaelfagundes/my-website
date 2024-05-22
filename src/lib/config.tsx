import {
  BracketsCurly,
  Code,
  GearFine,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { calculateYearsOfExperience } from "./utils";

const config = {
  me: {
    firstName: "Rafael",
    lastName: "Fagundes",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/rafaelfagundes",
        icon: <GithubLogo size={24} />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rafaelcfl/",
        icon: <LinkedinLogo size={24} />,
      },
    ],
  },
  navbar: {
    firstName: "Rafael",
    button: "Contact Me",
  },
  hero: {
    tagline: {
      firstLine: "Hi! I am",
      secondLine: "Rafael Fagundes",
    },
    avatar: { img: "/img/avatar.png", alt: "Rafael Fagundes" },
    subtitle:
      "I'm a passionate full-stack developer dedicated to building innovative and efficient solutions. Currently based in Canada.",
    buttons: {
      primary: "Hire Me",
      secondary: "Know More",
    },
    bio: {
      text: "Full-Stack Developer specializing in building web/mobile apps, APIs, and other fun stuff.",
    },
    featuredSkills: [
      {
        title: "React",
        image: "/img/logos/react.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Next.js",
        image: "/img/logos/next.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Svelte",
        image: "/img/logos/svelte.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Tailwind CSS",
        image: "/img/logos/tailwind.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "TypeScript",
        image: "/img/logos/typescript.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Nest.js",
        image: "/img/logos/nest.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "React Native",
        image: "/img/logos/react-native.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Flutter",
        image: "/img/logos/flutter.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Python",
        image: "/img/logos/python.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: ".NET Core",
        image: "/img/logos/net-core.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Linux",
        image: "/img/logos/tux.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Docker",
        image: "/img/logos/docker.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "PostgreSQL",
        image: "/img/logos/postgresql.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "MongoDB",
        image: "/img/logos/mongodb.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
      {
        title: "Redis",
        image: "/img/logos/redis.svg",
        bgColor: "bg-black",
        textColor: "text-white",
      },
    ],
  },
  roles: {
    title: "of experience in the IT industry",
    roles: [
      {
        title: "Front End Development",
        image: <Code size={64} weight="duotone" className="text-white" />,
        startColor: "#00ee6e",
        endColor: "#0c75e6",
        description:
          "I create user-friendly interfaces using React, Next.js, TailwindCSS.",
      },
      {
        title: "Back End Development",
        image: (
          <BracketsCurly className="text-white" size={64} weight="duotone" />
        ),
        startColor: "#fa9372",
        endColor: "#ef709b",
        description:
          "I build robust server-side applications with Node.js, Express, and PostgreSQL.",
      },
      {
        title: "DevOps Engineering",
        image: <GearFine size={64} weight="duotone" className="text-white" />,
        startColor: "#07c8f9",
        endColor: "#0d41e1",
        description:
          "I implement CI/CD pipelines and manage cloud infrastructure.",
      },
    ],
  },
  about: {
    aboutMe: {
      title: "About Me",
      paragraphs: [
        "I'm a software engineer with a passion for building performant, scalable applications that solve real-world problems. I specialize in building full-stack applications with a focus on the frontend.",
        `I have ${calculateYearsOfExperience()} years of experience in the software development industry and have worked with a variety of technologies and frameworks.`,
        "I'm currently based in Canada and am open to new opportunities. If you have a project you'd like to discuss, feel free to reach out to me.",
        "In my free time, I enjoy reading, hiking, and playing video games.",
        "I'm always looking to learn new things and improve my skills. I believe that the best way to grow as a developer is to work on projects that challenge you and push you out of your comfort zone.",
      ],
    },
    mySkills: {
      frontend: ["React", "Next.js", "Svelte", "Tailwind CSS", "TypeScript"],
      backend: ["Node.js", "Express", "Nest.js", ".NET Core", "Python"],
      databases: ["PostgreSQL", "MongoDB", "Redis"],
      devopsAndOthers: ["Docker", "Kubernetes", "AWS", "Linux", "Git"],
    },
  },
  contact: {
    sectionTitle: "Get in Touch",
    introParagraph:
      "Have a question or want to work together? Fill out the form below or reach out to me on social media.",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Enter your message",
    submitButton: "Send Message",
    connectTitle: "Connect with me",
    connectParagraph: "Follow me on social media to stay up to date.",
  },
};

export default config;
