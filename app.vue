<script setup lang="ts">

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <div id="__cursor-wraper" class="hidden sm:block">
      <div id="__cursor" class="hidden sm:block">
        <span></span>
      </div>
      <div id="__slow-cursor" class="hidden sm:block" />
    </div>
  </NuxtLayout>
</template>
