<template>
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
      <h3>Chapters</h3>
      <div
        class="space-y-1 mb-4 flex flex-col"
        v-for="chapter in chapters"
      >
        <h4>
          {{ chapter.title }}
          <span class="font-medium"
            >({{ chapter.progress.completed }})</span
          >
        </h4>
        <NuxtLink
          v-for="(lesson, index) in chapter.lessons"
          class="no-underline prose-sm font-normal py-1 px-4 -mx-4 border border-white rounded-md even:bg-gray-100 hover:bg-blue-50 hover:cursor-pointer transition-colors"
          :key="lesson.path"
          :to="lesson.path"
          :class="{
            'text-blue-500': lesson.path === $route.path,
            'text-gray-500': lesson.path !== $route.path,
          }"
        >
          {{ index + 1 }}. {{ lesson.title }}
        </NuxtLink>
      </div>
    </div>

    <div class="prose p-12 bg-white rounded-md w-[65ch]">
      <NuxtErrorBoundary>
        <NuxtPage />

        <template #error="{ error }">
          <p>
            Oh no , this lesson didn't load properly.
            <code>{{ error }}</code>
          </p>

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
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<script setup>
const { name, chapters } = useCourse();

const clearLessonError = () => {
  clearError({ redirect: '/course/1/1' });
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
