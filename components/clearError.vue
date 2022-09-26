<template>
  <p>
    Go to the
    <a
      class="hover:cursor-pointer"
      @click="clearLessonError"
    >
      first lesson.
    </a>
  </p>
</template>

<script setup>
const clearLessonError = () => {
  clearError({
    redirect:
      '/course/chapter/1-chapter-1/lesson/1-introduction',
  });
};
</script>
