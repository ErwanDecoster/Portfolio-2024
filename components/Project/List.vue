<script setup lang="ts">

const props = defineProps<{
  projects: project[]
}>()

onMounted(() => {
  // const img = (document.querySelector('#__appear-img') as HTMLImageElement);
  // (document.querySelectorAll('.__appear-button') as NodeListOf<HTMLElement>).forEach(button => {
  //   button.addEventListener('mouseenter', () => {
  //     img.classList.remove('opacity-0');
  //     img.classList.add('opacity-100');
  //     img.src = `${button.dataset.img}`;
  //   })
  //   button.addEventListener('mouseleave', () => {
  //     img.classList.remove('opacity-100');
  //     img.classList.add('opacity-0');
  //   })
  // })

  // window.addEventListener("mousemove", (event) => {
  //   const mousePos = { x: event.clientX, y: event.clientY }
  //   img.style.transform = `translate(calc(-25% + ${mousePos.x / 8}px), calc(-15% + ${mousePos.y / 8}px))`
  // })
})

</script>

<template>
  <div class="grid sm:grid-cols-2 gap-8 md:gap-14 items-center overflow-visible">
    <div class="relative border h-full p-9 rounded-2xl flex justify-end overflow-hidden">
      <div class="__backdrop-unblur absolute bg-black inset-0" />
      <ButtonBig 
        to="/projects"
        class="mt-auto"
      >
        Tous les projets
      </ButtonBig>
    </div>
    <div class="relative overflow-visible">
      <div class="grid">
        <NuxtLink 
          v-for="(project, index) in projects"
          :key="project.publishDate.toString()"
          :to="`/projects/${toSlug(project.title)}`"
          class="__appear-button flex items-center gap-1 group h-20 sm:hover:h-64 md:hover:h-80 relative group text-2xl uppercase py-6 hover:py-0 duration-150 hover:tracking-widest hover:z-10 hover:font-bold"
          :data-img="project.img"
        >
          <img 
            id="__appear-img"
            class="h-full w-0 group-hover:w-full bottom-0 aspect-video group-hover:opacity-100 hidden sm:block duration-300 opacity-0 transition-opacity z-10 pointer-events-none object-cover" 
            :src="project.img"
          >
          <span class="absolute z-10 sm:group-hover:bottom-2 sm:group-hover:left-2">
            {{ project.title }}
          </span>
          <span v-if="index" class="block border-b absolute -z-20 inset-x-0 top-0" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="css">

</style>