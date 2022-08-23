<template>
  <iframe
    width="560"
    height="315"
    :src="`https://www.youtube.com/embed/${props.videoId}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});
</script>
