// src/data/projects.ts

export type Project = {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  tags?: string[]; //technologies used
};

export const projects: Project[] = [
  {
    title: "Lorum Ipsum Event Center",
    description:
      "My first project, built using only HTML and CSS. I designed the logo, and used CaptureOne to make all of colors consistant in the images and Photoshop to make them all the same size.",
    link: "https://lorumipsumeventcenter.netlify.app/",
    github: "https://github.com/jbunds801/Event-Center-Website",
  },
  {
    title: "Jessica Bundy Polaroid Gallery",
    description:
      "A project where HTML and CSS are used along with Bootstrap, and some 'pre' JavaScript ideas that are not yet functional.",
    link: "https://jbunds801.github.io/Recreate-Your-Favorite-Website-Assignment/",
    github:
      "https://github.com/jbunds801/Recreate-Your-Favorite-Website-Assignment",
  },
  {
    title: "Pokemon API",
    description:
      "A project using the PokeAPI website to gain experience using API's.",
    link: "https://jbunds801.github.io/Pokemon-API/",
    github: "https://github.com/jbunds801/Pokemon-API",
  },
  {
    title: "All Things Film",
    description:
      "An ecommerce app sight using React and components with props. I used Photoshop to make the images consistent to eliminate any responisive issues related to different size images.",
    link: "https://allthingsfilm.netlify.app/",
    github: "https://github.com/jbunds801/Ecommerce-App",
  },
  {
    title: "OpenTrivia App",
    description: "",
    link: "https://jbunds-trivia-app.netlify.app/",
    github: "https://github.com/jbunds801/Trivia-App",
  },
];
