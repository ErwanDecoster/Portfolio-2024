<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <Navbar />
    <NuxtPage />
    <div id="__cursor-wraper" class="hidden sm:block">
      <div id="__cursor" class="hidden sm:block">
        <span></span>
      </div>
      <div id="__slow-cursor" class="hidden sm:block" />
    </div>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

