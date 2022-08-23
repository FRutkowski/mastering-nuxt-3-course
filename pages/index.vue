<template>
  <!-- Extra div required because of a bad interaction between Transition and Suspense,
       we cannot have multiple root nodes here.
       https://github.com/nuxt/framework/issues/3141 -->
  <div>
    This is the main page
    <NuxtPage />
  </div>
</template>
