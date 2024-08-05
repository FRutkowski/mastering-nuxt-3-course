<template>
  <NuxtLayout>
    <div class="prose">
      <div v-if="error.statusCode === '404'">
        <h1>404 Page not found.</h1>
      </div>
      <div>
        <p>The page probably doesn't exists.</p>
        <strong>{{ error.message }}</strong>
      </div>
      <div>
        Go to the
        <a 
          class="hover:cursor-pointer"
          @click="handleError"
        >
          firstLesson
        </a>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError()
const handleError = () => {
  clearError({
    redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  })
}
</script>