import unwrapArray from '~/utils/unwrapArray';
import { useLocalStorage } from '@vueuse/core';

export default function useLesson() {
  const { chapters } = useCourse();
  const route = useRoute();

  const chapterSlug = computed(() => {
    return unwrapArray(route.params.chapterSlug) || null;
  });
  const lessonSlug = computed(() => {
    return unwrapArray(route.params.lessonSlug) || null;
  });

  const chapter = computed(() => {
    if (chapterSlug.value) {
      return chapters.find(
        (ch) => ch.slug === chapterSlug.value
      );
    }
    return null;
  });
  const lesson = computed(() => {
    if (lessonSlug.value) {
      return chapter.value.lessons.find(
        (lesson) => lesson.slug === lessonSlug.value
      );
    }
    return null;
  });

  const stateProgress = useState('progress', () => {
    return [];
  });
  const progress = useLocalStorage(
    'progress',
    stateProgress
  );

  const isLessonComplete = computed(() => {
    if (!progress.value[lesson.value.chapterId]) {
      return false;
    }

    if (
      !progress.value[lesson.value.chapterId][
        lesson.value.id
      ]
    ) {
      return false;
    }

    return progress.value[lesson.value.chapterId][
      lesson.value.id
    ];
  });

  const toggleComplete = () => {
    if (!progress.value[lesson.value.chapterId]) {
      progress.value[lesson.value.chapterId] = [];
    }

    progress.value[lesson.value.chapterId][
      lesson.value.id
    ] = !isLessonComplete.value;
  };

  return {
    chapter,
    lesson,
    chapterSlug,
    lessonSlug,
    isLessonComplete,
    toggleComplete,
  };
}
