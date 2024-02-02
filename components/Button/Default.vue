<script setup lang="ts">
const props = defineProps<{
  a?: boolean;
  button?: boolean;
}>();
</script>

<template>
  <a v-if="a && !button"
    class="relative group px-5 py-2 text-lg rounded-full border"
  >
    <span class="absolute inset-y-0 inset-x-5 overflow-hidden">
      <span class="absolute py-2 group-hover:-translate-y-1/2 duration-200">
        <slot />
        <span class="h-4 block" />
        <slot />
      </span>
    </span>
    <span class="invisible">
      <slot />
    </span>
  </a>
  <button 
    v-else-if="button && !a"
    class="relative group px-5 py-2 text-lg rounded-full border"
  >
    <span class="absolute inset-y-0 inset-x-5 overflow-hidden">
      <span class="absolute py-2 group-hover:-translate-y-1/2 duration-200">
        <slot />
        <span class="h-4 block" />
        <slot />
      </span>
    </span>
    <span class="invisible">
      <slot />
    </span>
  </button>
  <NuxtLink 
    v-else
    class="relative group px-5 py-2 text-lg rounded-full border"
  >
    <span class="absolute inset-y-0 inset-x-5 overflow-hidden">
      <span class="absolute py-2 group-hover:-translate-y-1/2 duration-200">
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
