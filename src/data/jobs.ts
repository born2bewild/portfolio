export type Job = {
  company: string;
  dateRange: string;
  position?: string;
  description?: string;
};

const jobs: Job[] = [
  {
    company: 'Full-time Freelancing',
    position: 'Solution-finder',
    dateRange: '2018 - now',
  },
  {
    company: 'NeuroSYS',
    dateRange: '2015 - 2018',
    position: 'Senior Software Developer',
    description:
      'Software house, I assume that everyone knows how does it looks like.\n\
Technologies: PHP, JS, NodeJS, React.',
  },
  {
    company: 'TMSolution',
    dateRange: '2013 - 2015',
    position: 'Software Engineer',
    description:
      'Software development company, with their own product - call center app. \
They were contactor of my previous company, they were developing few apps, for which I was responsible \
tl;dr they recruited me, when previous company was closing. \n\
Technologies: PHP, JS (vanilla, extJS), VoIP (asterisk).',
  },
  {
    company: 'D.WAY',
    dateRange: '2012 - 2013',
    position: 'IT Guy aka "have You tried to turn it OFF and ON again?"',
    description:
      "Insurance Agency - First REAL job. I've started to work here, at final year of studies. \
With some practical knowledge of Web development, and some theoretical \
knowledge of Network & Computer System Administrations. \nAs it turned out after few weeks, \
My role has changed to sth similar as product owner, and additionally software maintenance and development (PHP, JS).",
  },
];

export default jobs;
