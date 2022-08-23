<template>
  <div
    class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
  >
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">Course:</span>
        {{ name }}
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col"
      >
        <h3>Lessons</h3>
        <NuxtLink
          v-for="lesson in lessons"
          :key="lesson.path"
          :to="lesson.path"
        >
          {{ lesson.title }}
        </NuxtLink>
      </div>

      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtPage :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { name, lessons } = useCourse();
</script>
