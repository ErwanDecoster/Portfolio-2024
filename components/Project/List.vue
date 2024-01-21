<script setup lang="ts">

const props = defineProps<{
  projects: project[]
}>()

onMounted(() => {
  const img = (document.querySelector('#__appear-img') as HTMLImageElement);
  (document.querySelectorAll('.__appear-button') as NodeListOf<HTMLElement>).forEach(button => {
    button.addEventListener('mouseenter', () => {
      img.classList.remove('opacity-0');
      img.classList.add('opacity-100');
      img.src = `${button.dataset.img}`;
    })
    button.addEventListener('mouseleave', () => {
      img.classList.remove('opacity-100');
      img.classList.add('opacity-0');
    })
  })

  window.addEventListener("mousemove", (event) => {
    const mousePos = { x: event.clientX, y: event.clientY }
    img.style.transform = `translate(calc(-25% + ${mousePos.x / 8}px), calc(-15% + ${mousePos.y / 8}px))`
  })
})

</script>

<template>
  <div class="grid sm:grid-cols-2 gap-8 md:gap-14 items-center overflow-x-hidden">
    <div class="relative border h-full p-9 rounded-2xl flex justify-end overflow-hidden">
      <div class="__backdrop-unblur absolute bg-black inset-0" />
      <ButtonBig 
        to="/projects"
        class="mt-auto"
      >
        Tous les projets
      </ButtonBig>
    </div>
    <div class="relative">
      <img 
        id="__appear-img"
        class="absolute hidden sm:block w-96 opacity-0 -translate-y-1/2 transition-opacity z-10 pointer-events-none" 
        src=""
      >
      <div class="grid">
        <NuxtLink 
          v-for="(project, index) in projects"
          :key="project.publishDate.toString()"
          :to="`/projects/${toSlug(project.title)}`"
          class="__appear-button relative group text-2xl uppercase py-6 duration-150 hover:tracking-widest hover:z-10 hover:font-bold"
          :data-img="project.img"
        >
          {{ project.title }}
          <span v-if="index" class="block border-b absolute -z-20 inset-x-0 top-0 duration-50 group-hover:opacity-0" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="css">

</style>