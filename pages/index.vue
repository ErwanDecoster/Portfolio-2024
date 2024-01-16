<script setup lang="ts">

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

onMounted(() => {
  const header = document.querySelector<HTMLElement>('#__header')
  const divider = 2.5
  document.addEventListener('scroll', () => {
    if (window.scrollY > window.screen.height / divider) {
      header.style.transform = `translateY(-${window.scrollY - window.screen.height / divider}px)`
    }
  })
  
})

</script>

<template>
  <div 
    id="__index-page"
    class="grid gap-24"  
  >
    <header
      id="__header"
      class="sticky top-0 pt-48 h-screen duration-75"
    >
      <div class="text-8xl">
        <h2>Erwan Decoster</h2>
        <h1>Développeur Front-End</h1>
        <p class="text-lg">Lyon, France</p>
      </div>
    </header>
    <section
      id="__about-description"
      class="pb-4"
    >
      <div class="w-full py-16 px-4 rounded-2xl border flex items-center gap-48">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque voluptate ipsa dolorum, saepe, accusamus dolorem quae aperiam eveniet corporis id quos praesentium, vitae sit officiis fugiat officia doloremque assumenda.</p>
        <ButtonBig to="/">
          Scroll
        </ButtonBig>
      </div>
    </section>
    <section 
      id="__about"
    >
      <SectionSeparator>
        <span>02</span>
        <h3>À propos</h3>
      </SectionSeparator>
      <div class="grid gap-7">
        <div class="grid grid-cols-4 gap-7 h-[480px]">
          <div class="bg-light-purple rounded-2xl flex flex-col justify-evenly items-center">
            <svg class="fill-navy-blue" width="143" height="139" viewBox="0 0 143 139" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M71.5 0L78.0855 39.6676L100.582 6.05182L90.1178 44.9124L124.635 23.1609L98.9309 54.495L139.501 48.3688L103.001 66.7586L142.608 77.317L101.624 79.5826L133.421 105L95.0387 90.7497L113.527 126.631L84.3832 98.329L86.3657 138.47L71.5 101.01L56.6343 138.47L58.6168 98.329L29.4734 126.631L47.9613 90.7497L9.57919 105L41.3758 79.5826L0.391685 77.317L39.999 66.7586L3.49946 48.3688L44.0691 54.495L18.3651 23.1609L52.8822 44.9124L42.4183 6.05182L64.9145 39.6676L71.5 0Z" />
            </svg>
            <ButtonDefault class="text-navy-blue text-2xl">
              Télécharger mon CV
            </ButtonDefault>
          </div>
          <div class="px-12 rounded-2xl border flex flex-col justify-evenly items-center">
            <p class="text-2xl text-balance text-center">DÉVELOPPEMENT WEB ET MOBILE</p>
          </div>
          <div class="px-12 rounded-2xl border flex flex-col justify-evenly items-center">
            <p class="text-2xl text-balance text-center">DESIGN <br> INTÉRACTIF</p>
          </div>
          <div class="px-12 rounded-2xl border flex flex-col justify-evenly items-center">
            <p class="text-2xl text-balance text-center">DIRECTION ARTISTIQUE</p>
          </div>
        </div>
        <div class="flex w-full gap-7">
          <p class="border rounded-2xl py-14 grow px-6">Erwan Decoster</p>
          <NuxtLink 
            to="https://twitter.com/erwan_decoster"
            class="w-32 border rounded-2xl px-6 flex items-center justify-center hover:bg-white hover:text-black duration-200"
          >
            X
          </NuxtLink>
          <NuxtLink 
            to="https://www.instagram.com/erwan_decoster/"
            class="w-32 border rounded-2xl px-6 flex items-center justify-center hover:bg-white hover:text-black duration-200"
          >
            Imstagram
          </NuxtLink>
          <NuxtLink 
            to="https://www.linkedin.com/in/erwan-decoster/"
            class="w-32 border rounded-2xl px-6 flex items-center justify-center hover:bg-white hover:text-black duration-200"
          >
            LinkedIn
          </NuxtLink>
          <NuxtLink 
            to="https://github.com/ErwanDecoster"
            class="w-32 border rounded-2xl px-6 flex items-center justify-center hover:bg-white hover:text-black duration-200"
          >
            Github
          </NuxtLink>
        </div>
      </div>
    </section>
    <section
      id="__primary-projects"
    >
      <SectionSeparator>
        <span>03</span>
        <h3>Mes projets</h3>
      </SectionSeparator>
      <ProjectCarousel
        :projects="[
          {
            title: 'Domaine de pipangaille',
            date: 2023,
            desc: 'lorem',
            technos: ['Nuxt', 'Vuejs', 'Javascript'],
            imgUrl: '/images/img1.png'
          },
          {
            title: 'Domaine de pipangaille',
            date: 2023,
            desc: 'lorem',
            technos: ['Nuxt', 'Vuejs', 'Javascript'],
            imgUrl: '/images/img2.png'
          },
          {
            title: 'Domaine de pipangaille',
            date: 2023,
            desc: 'lorem',
            technos: ['Nuxt', 'Vuejs', 'Javascript'],
            imgUrl: '/images/img3.png'
          },
        ]" 
      />
    </section>
    <section 
      id="__other-projects"
      class="grid gap-20"
    >
      <ScrollingTexte>
        explorer les archives 
      </ScrollingTexte>
      <ProjectList
        :projects="[
          {
            title: 'Message app',
            date: 2023,
            desc: 'lorem',
            technos: ['Nuxt', 'Vuejs', 'Javascript'],
            imgUrl: '/images/img1.png'
          },
          {
            title: 'Phoenix Vêtements et protections',
            date: 2023,
            desc: 'lorem',
            technos: ['Nuxt', 'Vuejs', 'Javascript'],
            imgUrl: '/images/img2.png'
          },
          {
            title: '42 So Long',
            date: 2023,
            desc: 'lorem',
            technos: ['Nuxt', 'Vuejs', 'Javascript'],
            imgUrl: '/images/img3.png'
          },
          {
            title: 'Les nuits de fourvière',
            date: 2023,
            desc: 'lorem',
            technos: ['Nuxt', 'Vuejs', 'Javascript'],
            imgUrl: '/images/img2.png'
          },
        ]"
      />
    </section>
  </div>
</template>

<style lang="css">

</style>