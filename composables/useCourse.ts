import createSlug from '~/utils/createSlug';

type ChapterSource = {
  title: string;
  lessons: LessonSource[];
};

type LessonSource = {
  title: string;
  content: string;
  video?: string;
  source?: string;
};

type Course = {
  name: string;
  chapters: Chapter[];
};

type Chapter = {
  id: number;
  title: string;
  slug: string;
  lessons: Lesson[];
};

type Lesson = {
  id: number;
  chapterId: number;
  title: string;
  slug: string;
  content: string;
  path: string;
  video?: string;
  source?: string;
};

const chapters: ChapterSource[] = [
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

export default (): Course => {
  return {
    name: 'Mastering Nuxt ',
    chapters: chapters.map((ch, chapterIndex) => {
      const chapterSlug = createSlug(
        `${chapterIndex + 1}`,
        ch.title
      );

      const lessons: Lesson[] = ch.lessons.map(
        (lesson, lessonIndex) => {
          const lessonSlug = createSlug(
            `${lessonIndex + 1}`,
            lesson.title
          );
          return {
            ...lesson,
            slug: lessonSlug,
            id: lessonIndex + 1,
            chapterId: chapterIndex + 1,
            path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
          };
        }
      );

      return {
        ...ch,
        slug: chapterSlug,
        id: chapterIndex + 1,
        lessons: lessons,
      };
    }),
  };
};
