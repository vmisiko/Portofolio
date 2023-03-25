import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

const elegal= require('../img/portofolio/elegal.png');
const haq = require('../img/portofolio/haq2.png');
const quantumgrad = require('../img/portofolio/quantumgrad.png');
const essayGenius = require('../img/portofolio/essaygenius.png');
const webPayment = require('../img/portofolio/web-payment.png');
const flutterPayment = require('../img/portofolio/flutter-payment.png');


export const info = {
  firstName: ' Victor',
  lastName: 'Misiko',
  initials: 'VM', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Engineer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇰🇪',
      text: 'Based in the Nairobi, Kenya',
    },
    {
      emoji: '💻',
      text: 'Software Engineer at Sendy(Frontend/Mobile)',
    },
    {
      emoji: '📧',
      text: 'victormisiko.vm@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://andy8647.com/victor-misiko-resume.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://gitlab.com/vmisiko',
      icon: 'fa fa-gitlab',
      label: 'github',
    },
    {
      link: 'https://github.com/vmisiko',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/victor-misiko-32101212b/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/victor_misiko',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio: `Hello! I'm Victor Misiko. I'm a Full Stack Software Engineer. 
  I studied Statics and Computer Science at MKSU, I enjoy building web applications and 
  learning new technologies. I'm currently working at Sendy as a
   Full Stack Software Engineer. I'm also a freelance photographer. I love to 
   travel and explore new places. I'm currently based in Nairobi, 
   Kenya.`,
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['TypeScript', 'JavaScript','Python', 'Java','Dart'],
    frameworks: [
      'React',
      'Redux',
      'Nextjs',
      'Tailwind CSS',
      'Vue',
      'Nuxtjs',
      'Express',
      'Adonisjs',
      'NestJS',
      'Quarkus',
      'Bootstrap/jQuery',
      'Django',
      'FastAPI',
      'Flutter'
    ],
    databases: ['MySQl','PostgreSQL', 'MongoDB', 'TypeORM', 'LucidORM','TOrtoiseORM'],
    cloudServices: ['AWS S3', 'AWS EC2', 'AWS SNS', 'Google Analytics', 'Heroku', 'Netlify', 'Onrender', 'CloudFront'],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'Swagger',
      'Elasticsearch',
      'npm',
      'yarn',
      'pip',
      'Maven',
      'Jenkins',
      'Jira',
      'Confluence',
      'DataDog',
      'Metabase',
    ],
  },
  hobbies: [
    {
      label: 'Cycling',
      emoji: '🚲',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Guitar',
      emoji: '🎸',
    },
    {
      label: 'Movies',
      emoji: '🎞',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Law Firm Management System',
      live: "https://www.elegal.ascendth.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://gitlab.com/elegal-oficcial/elegal-frontend-v2", // this should be a link to the **repository** of the project, where the code is hosted.
      image: elegal
    },
    {
      title: 'QuantumGrad(Quantum Computing Platform)',
      live: "https://www.quantumgrad.com",
      source: 'https://github.com/quantumgrad/frontend',
      image: quantumgrad,
    },

    {
      title: 'haq.ai(Leetcode Like platform)',
      live: 'https://www.haq.ai/',
      source:'https://github.com/theheavygluon/haq.ai---Frontend',
      image: haq,
    },

    {
      title: 'EssayGenius(Upwork Like System)',
      live: 'https://www.haq.ai/',
      source:'https://github.com/theheavygluon/haq.ai---Frontend',
      image: essayGenius,
    },
    {
      title: 'Web Payment Ui Library(Checkout/Payout)',
      live: 'https://www.npmjs.com/package/@sendyit/pay',
      source:'https://github.com/sendyhq/vue-3-payment-lib',
      image: webPayment,
    },
    {
      title: 'Flutter Payment Ui Package(Checkout/Payout)',
      live: 'https://www.npmjs.com/package/@sendyit/pay',
      source:'https://github.com/sendyhq/Flutter-Payment-Lib',
      image: flutterPayment,
    },
  ],
};
