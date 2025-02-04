type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Prashant Kumar Rajput",
    fullName: "Prashant",
    email: "prashantrajput827327@gmail.com",
  },
  hero: {
    name: "Prashant",
    p: ["I Build intuitive and scalable web applications with React, MERN, and modern technologies to create seamless user experiences"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a Full Stack Developer passionate about building scalable, high-performance web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in creating dynamic, full-stack solutions with a seamless user experience.
      I have experience working with Redux Toolkit, Tailwind CSS, APIs, authentication, and cloud services to develop responsive and efficient applications. From resume builders and e-commerce platforms to AI-integrated tools and workflow automation, I enjoy tackling complex challenges and optimizing performance.`,
    },
    experience: {
      p: "I have hands on practice on ",
      h2: "MY Skills",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
