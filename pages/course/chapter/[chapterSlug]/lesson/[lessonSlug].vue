<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ lesson.chapterId + 1 }} -
      {{ lesson.id + 1 }}
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
    <ClientOnly>
      <label
        class="rounded text-white font-bold py-2 px-4 cursor-pointer"
        :class="{
          'bg-green-500': isLessonComplete,
          'bg-gray-500': !isLessonComplete,
        }"
      >
        <input
          type="checkbox"
          :value="isLessonComplete"
          @input="toggleComplete"
          class="hidden"
        />
        {{
          isLessonComplete
            ? 'Completed!'
            : 'Mark as complete'
        }}
      </label>
    </ClientOnly>
  </div>
</template>

<script setup>
const { name } = useCourse();
const { lesson, isLessonComplete, toggleComplete } =
  useLesson();

useHead({
  titleTemplate: () => `${lesson.value.title} | ${name}`,
});
</script>
