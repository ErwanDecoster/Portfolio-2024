<script setup lang="ts">
import {  } from "@/types/index"
// interface project {
//   title: string
//   date?: number
//   desc?: string
//   technos?: string[]
//   imgUrl?: string
// }
const props = defineProps<{
  projects: project[]
}>()

onMounted(() => {
  const carousel = document.getElementById("__carousel")
  const carouselCards = document.querySelectorAll<HTMLElement>(".__project-card")
  const scrollIndicators = document.querySelectorAll<HTMLElement>(".__scroll-indicator span")
  carousel?.addEventListener('scroll', () => {
    for (let i = 0; i < carouselCards.length; i++) {
      const carouselCard: HTMLElement = carouselCards[i];
      const left: number = carousel.getBoundingClientRect().left - carouselCard.getBoundingClientRect().left 
      const cardWidth: number = carouselCard.getBoundingClientRect().width
      const scrollProgres: number = carousel.scrollLeft
      if (left >= 0 - cardWidth / 2 && left < cardWidth / 2) {
        scrollIndicators[i].classList.add("w-8");
        (scrollIndicators[i].parentElement as HTMLButtonElement).disabled = true;
      } else {
        scrollIndicators[i].classList.remove("w-8");
        (scrollIndicators[i].parentElement as HTMLButtonElement).disabled = false;
      }
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.getBoundingClientRect().width - cardWidth / 2) {
        (document.getElementById('__right-button') as HTMLButtonElement).disabled = true
      } else if (scrollProgres <= cardWidth / 2) {
        (document.getElementById('__left-button') as HTMLButtonElement).disabled = true
      } else {
        (document.getElementById('__right-button') as HTMLButtonElement).disabled = false;
        (document.getElementById('__left-button') as HTMLButtonElement).disabled = false;
      }
    }

  })
})

const ChangeSlide = (dir: number) => {
  const carousel = document.getElementById("__carousel")
  const carouselCard = document.getElementsByClassName("__project-card")[0]
  const width = carouselCard!.getBoundingClientRect().width
  carousel!.scrollBy({
    left: dir * width,
    behavior: 'smooth'
  })
}
const GoToSlide = (slideId: number) => {
  const carousel = document.getElementById("__carousel")
  const carouselCard = document.getElementsByClassName("__project-card")[0]
  const width = carouselCard!.getBoundingClientRect().width
  carousel!.scroll({
    left: (width + 16) * slideId,
    behavior: 'smooth'
  })
}

</script>

<template>
  <div class="grid gap-11 relative ">
    <div 
      id="__carousel"
      class="-mx-2 px-2 sm:-mx-8 sm:px-8 2xl:-mx-32 2xl:px-32 scroll-pl-2 sm:scroll-pl-8 2xl:scroll-p-32 grid grid-flow-col auto-cols-[minmax(350px,60%)] sm:auto-cols-[minmax(500px,60%)] md:auto-cols-[minmax(700px,60%)] gap-4 overflow-auto no-scrollbar snap-x snap-proximity"
    >
    <Project 
      v-for="(project, index) in projects"
      :key="project.publishDate.toString()"
      :id="index"
      :title="project.title"
      :date="project.publishDate"
      :shortDesc="project.shortDesc"
      :technos="project.technos"
      :imgUrl="project.img"
    />
  </div>
    <div class="
      absolute z-30 top-0 bottom-16 pointer-events-none inset-0
      before:absolute before:top-0 before:bottom-16 before:-left-2 before:sm:-left-8 before:2xl:-left-32 before:block before:w-2 before:sm:w-8 before:2xl:w-32 before:h-full before:bg-gradient-to-r before:from-[#ffffffdd] dark:before:from-[#000000dd]
      after:absolute after:top-0 after:bottom-16 after:-right-2 after:sm:-right-8 after:2xl:-right-32 after:block after:w-2 after:sm:w-8 after:2xl:w-32 after:h-full after:bg-gradient-to-l after:from-[#ffffffdd] dark:after:from-[#000000dd]
    " />
    <div class="border flex h-11">
      <button 
        id="__left-button"
        class="py-2.5 px-2 sm:px-4 group"
        aria-label="Precedent"
        @click="ChangeSlide(-1)"
        disabled
      >
        <svg class="w-full h-full -rotate-90 fill-black dark:fill-white group-disabled:opacity-30 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
          <path d="M14.0705 25.2464C14.8255 25.2464 15.3476 24.7212 15.3476 23.9515V9.39325L15.2072 5.57412L14.4296 5.95826L18.3477 10.319L21.009 12.944C21.2387 13.1758 21.5546 13.3139 21.9181 13.3139C22.6243 13.3139 23.1432 12.7863 23.1432 12.0729C23.1432 11.7305 23.0199 11.4232 22.7508 11.1466L15.0244 3.40851C14.768 3.1425 14.4247 3 14.0705 3C13.7164 3 13.3709 3.1425 13.1166 3.40851L5.39984 11.1466C5.13289 11.4232 5 11.7305 5 12.0729C5 12.7863 5.5189 13.3139 6.22507 13.3139C6.58858 13.3139 6.91202 13.1758 7.1342 12.944L9.79131 10.319L13.7019 5.95826L12.9317 5.57412L12.7913 9.39325V23.9515C12.7913 24.7212 13.3156 25.2464 14.0705 25.2464Z"/>
        </svg>
      </button>
      <div class="grow border-x px-12 flex gap-0.5 items-center justify-center">
        <button 
          v-for="(project, index) in projects"
          :key="project.publishDate.toString()"
          :aria-label="`Afficher a l'ecran le projet ${index + 1}`"
          @click="GoToSlide(index)"
          class="__scroll-indicator py-4 px-1" 
        >
          <span 
            class="block rounded-full bg-black dark:bg-white size-2 duration-200" 
            :class="{ 'w-8': index === 0 }"
          />
        </button>
      </div>
      <button 
        id="__right-button"
        class="py-2.5 px-2 sm:px-4 group"
        aria-label="Suivant"
        @click="ChangeSlide(1)"
      >
        <svg class="w-full h-full rotate-90 fill-black dark:fill-white group-disabled:opacity-30 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
          <path d="M14.0705 25.2464C14.8255 25.2464 15.3476 24.7212 15.3476 23.9515V9.39325L15.2072 5.57412L14.4296 5.95826L18.3477 10.319L21.009 12.944C21.2387 13.1758 21.5546 13.3139 21.9181 13.3139C22.6243 13.3139 23.1432 12.7863 23.1432 12.0729C23.1432 11.7305 23.0199 11.4232 22.7508 11.1466L15.0244 3.40851C14.768 3.1425 14.4247 3 14.0705 3C13.7164 3 13.3709 3.1425 13.1166 3.40851L5.39984 11.1466C5.13289 11.4232 5 11.7305 5 12.0729C5 12.7863 5.5189 13.3139 6.22507 13.3139C6.58858 13.3139 6.91202 13.1758 7.1342 12.944L9.79131 10.319L13.7019 5.95826L12.9317 5.57412L12.7913 9.39325V23.9515C12.7913 24.7212 13.3156 25.2464 14.0705 25.2464Z"/>
        </svg>
      </button>
    </div>
  </div>
</template>
