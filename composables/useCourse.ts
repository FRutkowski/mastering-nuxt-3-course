const chapters = [
  {
    title: 'Chapter 1',
    lessons: [
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
        source: 'https://github.com/tesla3327',
      },
      {
        title: 'Using Pages and Routing',
        content:
          'Here we figure out how we can use pages and routing with Nuxt 3.',
        source: 'https://github.com/tesla3327',
      },
    ],
  },
  {
    title: 'Chapter 2',
    lessons: [
      {
        title: 'Doing more stuff',
        content:
          "Okay, now it's time to do some really cool stuff!",
        video: 'pMxrA1-VG6k',
        source: 'https://github.com/tesla3327',
      },
      {
        title: 'Deploying to Netlify',
        content:
          'In this lesson we will deploy our app to Netlify, so everyone can use it!',
        source: 'https://github.com/tesla3327',
      },
    ],
  },
];

export default () => {
  return {
    name: 'Mastering Nuxt ',
    chapters: chapters.map((ch, chapterIndex) => ({
      ...ch,
      lessons: ch.lessons.map((lesson, lessonIndex) => ({
        ...lesson,
        path: `/course/${chapterIndex + 1}/${
          lessonIndex + 1
        }`,
      })),
    })),
  };
};
