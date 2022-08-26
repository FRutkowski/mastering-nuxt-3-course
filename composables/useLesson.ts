import unwrapArray from '~/utils/unwrapArray';

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

  return {
    chapter,
    lesson,
    chapterSlug,
    lessonSlug,
  };
}
