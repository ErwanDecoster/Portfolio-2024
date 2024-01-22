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

const isBig = ((index: number) => {
  if (index == 2)
    return 1
  return 0
})

</script>

<template>
  <div>
    <div class="pt-48 grid gap-32 max-w-screen-2xl mx-auto">
      <h1 class="py-5 sm:py-11 border-y mx-auto w-4/5 text-5xl sm:text-8xl flex justify-center items-center text-center">
        Tous les projets
      </h1>
      <div class="grid md:grid-cols-2 gap-4">
        <Project 
          v-for="(project, index) in getProjects()"
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
    </div>
  </div>
</template>