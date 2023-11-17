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
    img: 'HR_dashboard_picture.PNG',
    title: 'HR Dashboard',
    info: " Self Guide Course for creating an HR Dashboard using Tableau. The tutorial was from Data Tutorials. I enjoyed using the background to spice up the dashboard.Data Tutorials has another video on how to create backgrounds like this one and I highly suggest it. Thank you to Luke Barousse for the Youtube Views on Data Analytics!",
    info2: " Please view this dynamic dashboard on Human Resources. One can filter the dashboard by Education to see the attrition rate segmented by gender. Here is the link to the project: https://lnkd.in/eCpcH7FE",
    url:'https://public.tableau.com/app/profile/jared.fontaine/viz/HRANALYTICSDASHBOARDFINAL/HRAnalDashbaord',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SuperStore_Story_board.PNG',
    title: 'Super Store Storyboard with Tableau',
    info: " Created a storyboard of Super Store sales data to explore the health of the company and drill down on profitability.  Pr-eattentive shades and sizes to emphasis the important aspects of the company.",
    info2: " This dashboard is part of the UC Davis Data Visualization with Tableau Specialization Certification",
    url:'https://public.tableau.com/views/StorySuperStore_16927051610570/Story1?:language=en-US&:display_count=n&:origin=viz_share_link',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Picture_dashboard.PNG',
    title: 'US State Fiscal Health Dashboard',
    info: " The states are color coded based on their budget rank. You can use the filter to see the trends throughout the years. This dashboard uses a dataset from Heritage organization and the background is from Freepix. I used Tableau for this project and it shows how I can create an appealing dashboard in Tableau.",
    info2: " The states are color coded based on their budget rank. You can use the filter to see the trends throughout the years. This dashboard uses a dataset from Heritage organization and the background is from Freepix. I used Tableau for this project and it shows how I can create an appealing dashboard in Tableau.",
    url:'https://public.tableau.com/app/profile/jared.fontaine/viz/US_State_Fiscal_Health/Dashboard1',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Dashboard_Inventory.jpg',
    title: 'Inventory Dashboard with Microsoft PowerBI',
    info: " Inventory management portfolio management dynamic inventory analysis dashboard. Dashboard consists of ABC and XYZ analysis and Warehouse inventory values. Data is supplied from Kaizen Analytic - DataLiteracy4All ",
    info2: " " ,
    url:'',
    
  },
  {
    id: nanoid(),
    img: 'TIm_Day_Dashboard.PNG',
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
