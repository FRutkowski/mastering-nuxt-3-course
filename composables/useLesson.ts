export default function useLesson() {
  const { chapters } = useCourse();
  const route = useRoute();

  const chapterId = computed(() => {
    if (route.params.chapterId) {
      return parseInt(route.params.chapterId as string);
    }
    return null;
  });
  const lessonId = computed(() => {
    if (route.params.lessonId) {
      return parseInt(route.params.lessonId as string);
    }
    return null;
  });
  const lesson = computed(() => {
    if (chapterId.value && lessonId.value) {
      return chapters[chapterId.value - 1].lessons[
        lessonId.value - 1
      ];
    }
    return null;
  });

  return {
    lesson,
    chapterId,
    lessonId,
  };
}
