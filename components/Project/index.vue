<script setup lang="ts">
import formatDate from '~/composables/formatDate';

const props = defineProps<{
  title: string;
  date: Date;
  shortDesc?: string;
  technos?: string[];
  imgUrl?: string;
  size?: number;
}>();

</script>

<template>
  <NuxtLink 
    :to="`/projects/${toSlug(title)}`"
    class="__project-card group relative snap-start flex flex-col text-white justify-end overflow-hidden rounded-2xl aspect-4/3 duration-100"
    :class="{ 'sm:text-2xl sm:aspect-video': size == 1}"
  >
    <img class="absolute z-0 inset-0 w-full h-full bg-navy-blue object-cover duration-300 group-hover:scale-105" :src="imgUrl" alt="">
    <div 
      class="sticky w-full z-10 p-4 sm:p-7 bg-gradient-to-t from-[#000000ef]"
      :class="{ 'md:p-12': size == 1}"
    >
      <div class="grid gap-5 sm:gap-10">
        <div class="grid gap-0.5">
          <p class="uppercase">{{ formatDate(date) }}</p>
          <h4 
            class="uppercase text-2xl"
            :class="{ 'text-4xl': size == 1}"
          >
            {{ title }}
          </h4>
        </div>
        <div class="grid gap-2 w-1/2">
          <p v-if="shortDesc" class="uppercase">Description</p>
          <p class="text-balance line-clamp-3">{{ shortDesc }}</p>
        </div>
      </div>
      <ul 
        class="absolute bottom-4 sm:bottom-7 right-4 sm:right-7 w-1/2 flex flex-wrap-reverse justify-end gap-3 text-xs"
        :class="{ 'md:bottom-12 md:right-12': size == 1}"
      >
        <li 
          v-for="(techno, index) in technos"
          :key="techno" 
          class="relative group/word px-4 py-2 border rounded-full duration-300 overflow-hidden"
          :class="[{ 'hidden sm:block': index >= 3, 'md:px-7 md:py-2.5 md:text-xl': size == 1 }, (`__contained_${toCssClass(techno)} `)]"
        >
          <span
            class="absolute inset-0 duration-200 -z-10"
          />
          {{ techno }}

        </li>
      </ul>
    </div>
  </NuxtLink>
</template>
