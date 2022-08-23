const lessons = [
  {
    title: 'Introduction',
    content: 'Welcome to the course!',
    video: 'p4YOXmm839c',
  },
  {
    title: 'Adding Tailwind',
    content:
      'In this lesson we will add TailwindCSS to our app, because it is incredible.',
    video: 'GW05iIpTJN8',
  },
  {
    title: 'Using Pages and Routing with Nuxt 3',
    content:
      'Here we figure out how we can use pages and routing with Nuxt 3.',
  },
  {
    title: 'Doing more stuff',
    content:
      "Okay, now it's time to do some really cool stuff!",
    video: 'pMxrA1-VG6k',
  },
  {
    title: 'Deploying to Netlify',
    content:
      'In this lesson we will deploy our app to Netlify, so everyone can use it!',
  },
];

export default () => {
  return {
    name: 'Mastering Nuxt ',
    lessons: lessons.map((lesson, index) => ({
      ...lesson,
      path: `/course/${index + 1}`,
    })),
  };
};
