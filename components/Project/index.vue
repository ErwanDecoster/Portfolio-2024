<script setup lang="ts">
const props = defineProps<{
  title: string
  date?: number | string
  desc?: string
  technos?: string[]
  imgUrl?: string
}>()
</script>

<template>
  <NuxtLink 
    :to="`/projects/${title.replaceAll(' ', '-').toLowerCase()}`"
    class="__project-card relative snap-start flex flex-col text-white justify-end overflow-hidden rounded-2xl aspect-4/3 duration-100"
  >
    <img class="absolute z-0 inset-0 w-full h-full object-cover" :src="imgUrl" alt="">
    <div class="sticky w-full z-10 p-7 bg-gradient-to-t from-[#000000aa]">
      <div class="grid gap-10">
        <div class="grid gap-0.5">
          <p class="">{{ date }}</p>
          <h4 class="uppercase text-2xl">{{ title }}</h4>
        </div>
        <div class="grid gap-2 w-1/2">
          <p v-if="desc" class="uppercase">Description</p>
          <p class="text-balance">{{ desc }}</p>
        </div>
      </div>
      <ul class="absolute bottom-7 right-7 w-1/2 flex flex-wrap-reverse justify-end gap-3 text-xs">
        <li 
          v-for="techno in technos" 
          :key="techno" 
          class="px-4 py-2 border rounded-full hover:bg-white hover:text-black hover:border-white duration-200"
        >
          {{ techno }}
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
