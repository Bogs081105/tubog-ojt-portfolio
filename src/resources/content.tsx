import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kyrie Eleison",
  lastName: "Q. Tubog",
  name: `Kyrie Eleison Q. Tubog`,
  role: "Computer Engineering Student | OJT Intern",
  avatar: "/images/avatar.jpg",
  email: "tubogkyrie0811@gmail.com",
  location: "Asia/Manila", // IANA time zone identifier
  languages: ["English", "Filipino"], // optional
  locale: "en",
};

const newsletter: Newsletter = {
  display: false, // no newsletter needed for an OJT portfolio
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on my OJT journey</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Bogs081105",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  // Add LinkedIn/other links later by copying this format:
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://linkedin.com/in/yourprofile",
  //   essential: true,
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s OJT Portfolio`,
  description: `Documenting my On-the-Job Training journey as a ${person.role}`,
  headline: <>Building my journey, one internship day at a time</>,
  featured: {
    display: false,
    title: <></>,
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName}, a Computer Engineering student at{" "}
      <Text as="span" size="xl" weight="strong">
        PUP Sta. Mesa
      </Text>
      , currently completing my 300-hour On-the-Job Training at{" "}
      <Text as="span" size="xl" weight="strong">
        FBSC – Alabang
      </Text>
      . This site documents my journey and required OJT documents.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a Computer Engineering student from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // set true and add your link if you want a "Schedule a call" button
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is an aspiring computer engineer, dedicated to
        improving myself and making it big someday. I'm currently a Computer
        Engineering student at the Polytechnic University of the Philippines
        – Sta. Mesa Campus, completing my 300-hour On-the-Job Training at
        FBSC in Alabang.
      </>
    ),
  },
  work: {
    display: true,
    title: "OJT Experience",
    experiences: [
      {
        company: "FBSC – Alabang",
        timeframe: "OJT — 300 Hours",
        role: "Computer Engineering Intern",
        achievements: [
          <>
            Currently undergoing On-the-Job Training. Tasks and
            accomplishments will be updated here as the internship
            progresses.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Polytechnic University of the Philippines – Sta. Mesa Campus",
        description: <>BS in Computer Engineering.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      // Replace with your actual skills — duplicate this block for more
      {
        title: "Skill name here",
        description: <>Short description of what you can do with it.</>,
        tags: [
          {
            name: "Tag",
            icon: "code",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "OJT Journal",
  description: `Read about ${person.name}'s OJT experience and progress`,
};

const work: Work = {
  path: "/work",
  label: "Documents",
  title: `OJT Documents – ${person.name}`,
  description: `Required OJT documents and reports by ${person.name} — LOI, LOE, monthly reports, and more.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `Photos from my OJT journey`,
  images: [
    // Delete these placeholders and add your own OJT photos later
    // { src: "/images/gallery/photo-1.jpg", alt: "image", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
