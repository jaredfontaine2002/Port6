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
  subtitle: "I'm the cycling data analyst",
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
    img: 'Dashboard_Inventory.jpg',
    title: 'Super Store Storyboard',
    info: " Created a storyboard of Super Store sales data to explore the health of the company and drill down on profitability.  Pr-eattentive shades and sizes to emphasis the important aspects of the company.",
    info2: " This dashboard is part of the UC Davis Data Visualization with Tableau Specialization Certification"
    url:'https://public.tableau.com/views/StorySuperStore_16927051610570/Story1?:language=en-US&:display_count=n&:origin=viz_share_link',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Dashboard_Inventory.jpg',
    title: 'Inventory Dashboard with Microsoft PowerBI',
    info: " Inventory management portfolio management dynamic inventory analysis dashboard. Dashboard consists of ABC and XYZ analysis and Warehouse inventory values. Data is supplied from Kaizen Analytic - DataLiteracy4All ",
    info2: " " ,
    url:'',
    repo: '', // if no repo, the button will not show up
  },
   {
    id: nanoid(),
    img: 'University_Class.jpg',
    title: 'Kaggle University Data Exploration',
    info: "  I used Python to clean and explore the Kaggle's University fictional dataset. The dataset contains information about students, faculty, and staff at a fictional university. I used the following steps to clean and explore the dataset:  ",
    info2: "1. I imported the dataset into Python using the Pandas library. 2. I checked for missing values and removed any rows that had missing values. 3. I cleaned up the data by removing any errors or inconsistencies. 4. I explored the data by looking at the distribution of values and identifying outlier",
    url:'https://www.kaggle.com/jaredfontaine/webscraper-ebike-project/edit',
    repo: '', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'Cargo_ebike.jpg',
    title: 'Webscrape For Ebike company ',
    info: "I am passionate about using data to solve problems and make a positive impact on the world. I used my skills as a data analyst to help a client sell more ebikes by webscraping data, cleaning it with Python, using Google's API to find the best neighborhoods, and creating direct mailings to residents of those neighborhoods.  ",
    info2: "",
    url:'https://www.kaggle.com/jaredfontaine/webscraper-ebike-project/edit',
    repo: '', // if no repo, the button will not show up
  },
  {
  id: nanoid(),
  img: 'BikeShare.jpg',
  title: 'Google Data Analytics Capstone Project Case Study 1 on bike share company Cyclistic',
  info: "This is the capstone project for my Google Analytics certification.  Our task is to find out how the members of the bike share company use the product differently. ",
  info2: "To complete this project I used R to wrangle and clean the data and create the CSV and then I used Python with Dash, Plotly, Pythonnywhere and Pandas to create the graph and website",
  url: 'http://jaredfontaine2002.pythonanywhere.com/',
  repo: '', // if no repo, the button will not show up
},
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
    img: 'GOP_LOGO.jpg',
    title: 'Time Day for Ward 5 Washington, DC Council Voter Dashboard',
    info: "I created this Dashboard for the 2008 Tim Day for Ward 5 Council seat.  We needed to create canvass lists for volunteers to know on doors.  I wanted to visualize where the Republican voters lived to target them for the General election.    ",
    info2: '',
    url:'https://public.tableau.com/views/Ward_5_GOP/Dashboard1?:language=en-US&:retry=yes&:display_count=n&:origin=viz_share_link',
    repo: '', // if no repo, the button will not show up
  },
  /*{
    id: nanoid(),
    img: 'Two_bears.jpg',
    title: 'Human Deaths Caused by Bears',
    info: "The first project I have is a bear-human deaths data visualization.  I used MapQuest's free API to get the latitudes and longitudes of all 166-bear mauling's in the United States and plot them on an interactive map.  I presented this project to the Code for the Web meetup group.  I used Pandas, Plotly, Dash and matplotlib and a few other packages to create the visualization.  Dash is a great resource that allows the developer to create and publish online interactive data visualizations with only Python.  The Dash is built on top of React, JavaScript, and other languages so that the developer can focus on creating amazing visuals. I lead the group discussion and demonstrated my proficiencies with the technologies described above to the group.       ",
    info2: '',
    url:'http://jaredfontaine2002.pythonanywhere.com/',
    repo: 'https://github.com/jaredfontaine2002/Bear_Attack', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Bear_Trash.jpg',
    title: 'Nuisance Bears Data Visualization',
    info: "This project expands on the first project.  The first project analyzed only bear deaths.  This project analyzes all negative bear-human interacts.  I used the Federal Freedom of Information act to gather all the bear-human negative interactions from the States of Colorado, and Alaska recorded by their respective department of wildlife.  I want to see if there are any linear correlations between bear-human interactions and depletion of food sources, climate change population density increases, and food storages etc. ",
    info2: "I am using a linear regression and maybe a logistic regression on the data.  I have collected information from Colorado and Alaska for the last 2 years.  Many states have not recorded their bear-human interactions in a digital usable format in the past so this is truly ground break information.  The project is ongoing and I will all more states as their information comes in",
    
    repo: 'https://github.com/jaredfontaine2002/Colorado_bear', // if no repo, the button will not show up
  }," */
  
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
