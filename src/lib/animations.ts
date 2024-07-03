const animations = {
  navbar: {
    name: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: {
        delay: 0,
        duration: 0.05,
        ease: "easeInOut",
      },
    },
    mapleLeaf: {
      initial: { opacity: 0, y: 5 },
      whileInView: { opacity: 1, y: 0 },
      transition: {
        delay: 1.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    button: {
      initial: { opacity: 0, y: 5 },
      whileInView: { opacity: 1, y: 0 },
      transition: {
        delay: 0.3,
        duration: 0.05,
        ease: "easeInOut",
      },
    },
    getMenuItem: function (index: number) {
      return {
        initial: { opacity: 0, y: 5 },
        whileInView: { opacity: 1, y: 0 },
        transition: {
          delay: 0.1 + index / 10,
          duration: 0.05,
          ease: "easeInOut",
        },
      };
    },
  },
  hero: {
    avatarMobile: {
      initial: { opacity: 0, scale: 0.5 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { delay: 0, duration: 0.55, ease: "easeInOut" },
    },
    tagline: {
      hi: {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay: 0.15, duration: 0.75, ease: "easeInOut" },
      },
      firstLine: {
        initial: { opacity: 0, y: 0, scale: 0.75 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: { delay: 0.85, duration: 0.5, ease: "easeInOut" },
      },
      secondLine: {
        initial: { opacity: 0, y: 5 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay: 1.05, duration: 0.5, ease: "easeInOut" },
      },
    },
    bio: {
      initial: { opacity: 0, y: 5 },
      whileInView: { opacity: 1, y: 0 },
      transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
    },
    buttons: {
      primary: {
        initial: { opacity: 0, scale: 0.5, y: 5 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        transition: { delay: 1.1, duration: 0.05, ease: "easeInOut" },
      },
      secondary: {
        initial: { opacity: 0, scale: 0.5, y: 5 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        transition: { delay: 1.15, duration: 0.05, ease: "easeInOut" },
      },
    },
    skills: {
      initial: { opacity: 0, y: 5 },
      whileInView: { opacity: 1, y: 0 },
      transition: { delay: 1.75, duration: 0.5, ease: "easeInOut" },
    },
    avatar: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { delay: 1.05, duration: 1, ease: "easeInOut" },
      // initial: { opacity: 0, scale: 0.75, y: 5 },
      // whileInView: { opacity: 1, scale: 1, y: 0 },
      // transition: { delay: 1.2, duration: 0.5, ease: "easeInOut" },
    },
  },
};

export default animations;
