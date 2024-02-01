<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = "Projets - Erwan Decoster";
const desc = ""
const img = ""
const url = runtimeConfig.public.c + route.path
useHead({
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: url,
    },
  ],
})
useSeoMeta({
  title: title,
  description: desc,
  ogDescription: desc,
  ogTitle: title,
  ogUrl: url,
  ogType: 'article',
  ogImage: img,
  twitterCard: 'summary_large_image',
  twitterSite: '@erwan_decoster',
  twitterCreator: '@erwan_decoster',
  twitterTitle: title,
  twitterDescription: desc,
  twitterImage: img,
})

let nbVisible = ref(7)

const updateNbVisible = (value: number) => {
  nbVisible.value = value
  localStorage.nbVisible = value
}

onMounted(() => {
  if (localStorage.nbVisible) {
    nbVisible.value = localStorage.nbVisible
  }
})

const mounths = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre','décembre']
const isBig = ((index: number) => {
  if (index == 2)
    return 1
  return 0
})


</script>

<template>
  <div id="__projects-page">
    <div class="px-2 sm:px-8 pt-48 grid gap-32 max-w-screen-2xl mx-auto">
      <h1 class="py-5 sm:py-11 border-y mx-auto w-4/5 text-5xl sm:text-8xl flex justify-center items-center text-center">
        Tous les projets
      </h1>
      <div class="grid md:grid-cols-2 gap-4">
        <Project 
          v-for="(project, index) in getProjects().slice(0, nbVisible)"
          :key="project.publishDate.toString()"
          :id="index"
          :title="project.title"
          :date="project.publishDate"
          :shortDesc="project.shortDesc"
          :technos="project.technos"
          :imgUrl="project.img"
          :class="{ 'md:col-span-2': index == 2}"
          :size="isBig(index)"
        />
      </div>
      <ButtonDefault
        v-if="nbVisible <= getProjects().length"
        @click="updateNbVisible(nbVisible + 4)"
        class="mx-auto -mt-12"
      >
        Voir d'avantage de projet
      </ButtonDefault>
    </div>
    <div class="__white-bg bg-black dark:bg-white mt-24 text-white dark:text-black __invert-select __invert-scroll-bar relative rounded-t-[40px] sm:rounded-t-[75px]">
      <div class="h-screen flex flex-col justify-around px-2 sm:px-8 max-w-screen-2xl mx-auto">
        <p class="absolute uppercase top-8 left-1/2 -translate-x-1/2 text-center">
          Disponible dès {{ mounths[(new Date).getMonth()] }} {{ (new Date).getFullYear() }}
        </p>
        <div class="grid justify-center place-items-center gap-1">
          <p class="text-2xl font-medium text-center">Prochaine étape</p>
          <h3 class="text-5xl sm:text-6xl md:text-8xl font-bold uppercase text-center" >Discutons !</h3>
        </div>
      </div>
      <div class="px-2 sm:px-8 max-w-screen-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  </div>
</template>