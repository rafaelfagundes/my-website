import { BracketsCurly, Code, GearFine } from "@phosphor-icons/react/dist/ssr";

const config = {
  navbar: {
    button: "Contact Me",
  },
  hero: {
    tagline: {
      firstLine: "Hi! I am",
      secondLine: "Rafael Fagundes",
    },
    avatar: { img: "/img/avatar.alt.png", alt: "Rafael Fagundes" },
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
        image: "/img/logos/linux.svg",
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
    title: "of experience in IT industry",
    roles: [
      {
        title: "Front End Development",
        image: <Code size={64} weight="duotone" className="text-white" />,
        startColor: "#00ee6e",
        endColor: "#0c75e6",
        description:
          "I create user-friendly interfaces using React, Next.js, and TailwindCSS. I've worked on multiple projects, focusing on responsive and intuitive web design.",
      },
      {
        title: "Back End Development",
        image: (
          <BracketsCurly className="text-white" size={64} weight="duotone" />
        ),
        startColor: "#fa9372",
        endColor: "#ef709b",
        description:
          "I build robust server-side applications with Node.js, Express, and PostgreSQL. My projects demonstrate my skills in data management and server logic.",
      },
      {
        title: "DevOps Engineering",
        image: <GearFine size={64} weight="duotone" className="text-white" />,
        startColor: "#07c8f9",
        endColor: "#0d41e1",
        description:
          "I implement CI/CD pipelines and manage cloud infrastructure using Docker, Kubernetes, and AWS. My projects show my ability to streamline development and maintain systems.",
      },
    ],
  },
};

export default config;
