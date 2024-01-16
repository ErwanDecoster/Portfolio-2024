<script setup lang="ts">

interface project {
  title: string;
  date?: number;
  desc?: string;
  technos?: string[];
  imgUrl?: string;
}
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
    img.style.transform = `translate(${mousePos.x / 8}px, calc(-50% + ${mousePos.y / 8}px))`
  })
})

</script>

<template>
  <div class="h-[50vh] max-h-[500px] grid grid-cols-2 gap-14 items-center overflow-x-hidden">
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
        class="absolute w-96 opacity-0 -translate-y-1/2 transition-opacity pointer-events-none" 
        src="/images/img1.png"
      >
      <div class="grid">
        <NuxtLink 
          v-for="(project, index) in projects"
          :key="project.date"
          to="/projects/"
          class="__appear-button relative text-2xl uppercase py-6"
          :data-img="project.imgUrl"
        >
          {{ project.title }}
          <span v-if="index" class="block border-b absolute -z-20 inset-x-0 top-0" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="css">

</style>