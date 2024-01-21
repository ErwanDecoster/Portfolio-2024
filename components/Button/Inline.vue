<script setup lang="ts">
const props = defineProps<{
  size?: number;
}>();
</script>

<template>
  <NuxtLink 
    class="relative group py-2 text-lg rounded-full"
    :class="{ 'px-0 sm:px-0': size === -1, 'sm:px-5': size === 1 || !size  }"
  >
    <slot />
    <span 
      class="block absolute bottom-1 inset-x-0 scale-x-0 origin-left group-hover:scale-x-100 h-0.5 duration-200 bg-black dark:bg-white"
      :class="{ 'sm:inset-x-0': size === -1, 'sm:inset-x-4': size === 1 || !size }"
    />
  </NuxtLink>
</template>
