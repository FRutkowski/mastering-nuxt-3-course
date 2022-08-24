<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ lesson.chapterId }} - {{ lesson.id }}
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
const { name } = useCourse();
const { lesson } = useLesson();
useHead({
  titleTemplate: () => `${lesson.value.title} | ${name}`,
});
</script>
