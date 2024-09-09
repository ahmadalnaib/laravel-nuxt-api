<script setup lang="ts">
const route=useRoute();

useHead({
  title:<string>route.meta.title
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
