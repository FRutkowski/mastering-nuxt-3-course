<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ lessonNumber }}
    </p>
    <h2 class="mt-0">{{ lesson.title }}</h2>
    <Video v-if="lesson.video" :video-id="lesson.video" />
    <p>{{ lesson.content }}</p>
  </div>
</template>

<script setup>
const { lessons } = useCourse();
const route = useRoute();
const lessonNumber = ref(route.params.slug[0]);
const lesson = computed(() => {
  return lessons[lessonNumber.value - 1];
});
</script>
