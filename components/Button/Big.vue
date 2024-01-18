<script setup lang="ts">

</script>

<template>
  <NuxtLink 
    class="relative group flex gap-1 border-black dark:border-white text-black dark:text-white"
  >
    <div class="px-16 py-2 h-10 sm:h-16 text-2xl sm:text-5xl rounded-full border ">
      <span class="absolute inset-y-0 inset-x-16 -mt-0.5 overflow-hidden">
        <span class="absolute py-1.5 sm:py-2 group-hover:-translate-y-1/2 duration-200">
          <slot />
          <span class="h-2.5 sm:h-4 block" />
          <slot />
        </span>
      </span>
      <span class="invisible">
        <slot />
      </span>
    </div>
    <div class="border size-10 sm:size-16 rounded-full p-2 sm:p-4">
      <svg class="w-full h-full rotate-135 group-hover:rotate-180 delay-75 duration-200 fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
        <path d="M14.0705 25.2464C14.8255 25.2464 15.3476 24.7212 15.3476 23.9515V9.39325L15.2072 5.57412L14.4296 5.95826L18.3477 10.319L21.009 12.944C21.2387 13.1758 21.5546 13.3139 21.9181 13.3139C22.6243 13.3139 23.1432 12.7863 23.1432 12.0729C23.1432 11.7305 23.0199 11.4232 22.7508 11.1466L15.0244 3.40851C14.768 3.1425 14.4247 3 14.0705 3C13.7164 3 13.3709 3.1425 13.1166 3.40851L5.39984 11.1466C5.13289 11.4232 5 11.7305 5 12.0729C5 12.7863 5.5189 13.3139 6.22507 13.3139C6.58858 13.3139 6.91202 13.1758 7.1342 12.944L9.79131 10.319L13.7019 5.95826L12.9317 5.57412L12.7913 9.39325V23.9515C12.7913 24.7212 13.3156 25.2464 14.0705 25.2464Z"/>
      </svg>
    </div>
  </NuxtLink>
</template>