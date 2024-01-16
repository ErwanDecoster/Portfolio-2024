<script setup lang="ts">

</script>

<template>
  <NuxtLink 
    class="relative group px-5 py-2 text-lg rounded-full"
  >
    <slot />
    <span class="block absolute bottom-1 left-4 right-4 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 duration-200 bg-white"></span>
  </NuxtLink>
</template>
