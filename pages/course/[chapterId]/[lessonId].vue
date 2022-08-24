<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ lessonId }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson.source"
        class="font-normal text-md text-gray-500"
        :to="lesson.source"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson.video"
        class="font-normal text-md text-gray-500"
        :to="`https://youtube.com/watch?v=${lesson.video}`"
      >
        Download Video
      </NuxtLink>
    </div>
    <Video v-if="lesson.video" :video-id="lesson.video" />
    <p>{{ lesson.content }}</p>
  </div>
</template>

<script setup>
const { chapters, name } = useCourse();
const route = useRoute();
const chapterId = computed(() =>
  parseInt(route.params.chapterId)
);
const lessonId = computed(() =>
  parseInt(route.params.lessonId)
);
const lesson = computed(() => {
  return chapters[chapterId.value - 1].lessons[
    lessonId.value - 1
  ];
});

useHead({
  titleTemplate: () => `${lesson.value.title} | ${name}`,
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
