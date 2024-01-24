<script setup lang="ts">
const props = defineProps<{
  a?: boolean;
}>();
</script>

<template>
  <a v-if="a"
    class="relative group px-5 py-2 text-lg rounded-full border"
  >
    <span class="absolute inset-y-0 inset-x-5 overflow-hidden">
      <span class="absolute py-2 -mt-0.5 group-hover:-translate-y-1/2 duration-200">
        <slot />
        <span class="h-4 block" />
        <slot />
      </span>
    </span>
    <span class="invisible">
      <slot />
    </span>
  </a>
  <NuxtLink 
    v-else
    class="relative group px-5 py-2 text-lg rounded-full border"
  >
    <span class="absolute inset-y-0 inset-x-5 overflow-hidden">
      <span class="absolute py-2 -mt-0.5 group-hover:-translate-y-1/2 duration-200">
        <slot />
        <span class="h-4 block" />
        <slot />
      </span>
    </span>
    <span class="invisible">
      <slot />
    </span>
  </NuxtLink>
</template>
