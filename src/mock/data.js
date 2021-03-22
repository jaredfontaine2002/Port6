import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jared Fontaine', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jared Fontaine',
  subtitle: "I'm the data analyst cyclist",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Fontaine_Profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://resume.io/r/kpko1cs5N', // if no resume, the button will not show up
}; 

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Grizzly_bear2.jpg',
    title: 'Bear Bubble Plot',
    info: "Used Pandas to create a bubble scatter map that shows the total calls where the bear was described as aggressive to the department of wild",
    info2: '',
    url:'http://fontainej04.pythonanywhere.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Two_bears.jpg',
    title: 'Human Deaths Caused by Bears',
    info: "The first project I have is a bear-human deaths data visualization.  I used MapQuest's free API to get the latitudes and longitudes of all 166-bear mauling's in the United States and plot them on an interactive map.  I presented this project to the Code for the Web meetup group.  I used Pandas, Plotly, Dash and matplotlib and a few other packages to create the visualization.  Dash is a great resource that allows the developer to create and publish online interactive data visualizations with only Python.  The Dash is built on top of React, JavaScript, and other languages so that the developer can focus on creating amazing visuals. I lead the group discussion and demonstrated my proficiencies with the technologies described above to the group.       ",
    info2: '',
    
    repo: 'https://github.com/jaredfontaine2002/Bear_Attack', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Bear_Trash.jpg',
    title: 'Nuisance Bears Data Visualization',
    info: "This project expands on the first project.  The first project analyzed only bear deaths.  This project analyzes all negative bear-human interacts.  I used the Federal Freedom of Information act to gather all the bear-human negative interactions from the States of Colorado, and Alaska recorded by their respective department of wildlife.  I want to see if there are any linear correlations between bear-human interactions and depletion of food sources, climate change population density increases, and food storages etc. ",
    info2: "I am using a linear regression and maybe a logistic regression on the data.  I have collected information from Colorado and Alaska for the last 2 years.  Many states have not recorded their bear-human interactions in a digital usable format in the past so this is truly ground break information.  The project is ongoing and I will all more states as their information comes in",
    
    repo: 'https://github.com/jaredfontaine2002/Colorado_bear', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jaredfontaine2002@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jared-fontaine-71116116/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jaredfontaine2002',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
