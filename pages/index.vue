<script setup lang="ts">
import gsap from 'gsap';
const mounths = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre','décembre']

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = "Erwan Decoster - Développeur Front-End";
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

onMounted(() => {
  const about = document.querySelector<HTMLElement>('#about')
  const pp = document.querySelector<HTMLElement>('#pp')

  gsap.set(pp, {
    xPercent: -50, 
    yPercent: -120 
  });

  let xTo = gsap.quickTo(pp, "x", {duration: 0.6, ease: "power"}),
      yTo = gsap.quickTo(pp, "y", {duration: 0.6, ease: "power"});

  about?.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
  about?.addEventListener('mouseenter', (e) => {
    gsap.to(pp, {
      opacity: 1,
    })
  })
  about?.addEventListener('mouseleave', (e) => {
    gsap.to(pp, {
      opacity: 0,
    })
  })
})

let interactiveDesign = ref([ 
  false, false, false, false,
  true, false, false, false,
  false, true, true, false,
  true, true, false, false,
  false, true, false, false,
  false, true, false, false,
])

const skills = ref([ 
  'Javascript', 'TypeScrypt', 'Nuxt',
  'VueJs', 'PostgreSQL', 'Supabase', 
  'TailwindCSS', 'HTML', 'CSS',
  'SASS', 'PHP', 'SQL',
])

const socials = ref([
  {
    name: 'X',
    url: 'https://twitter.com/erwan_decoster',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/erwan_decoster/',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/erwan-decoster/',
  },
  {
    name: 'Github',
    url: 'https://github.com/ErwanDecoster',
  },
])
</script>

<template>
  <div id="index">
    <div class="max-w-screen-2xl mx-auto grid gap-24 px-2 sm:px-8">
      <NuxtImg
        id="pp" 
        class="pointer-events-none fixed size-96 rounded-full opacity-0" 
        src="/images/photo_erwan_decoster.jpg"
        placeholder
        format="webp"
        quality="70"
        width="384"
        height="384"
        alt="Photo d'erwan decoster"
      />
      <header id="__header" class="-mb-12 pb-8 h-screen">
        <div class="sticky top-[25vh] text-4xl sm:text-6xl md:text-8xl">
          <h2>Erwan Decoster</h2>
          <h1>Développeur Front-End</h1>
          <p class="text-lg">Lyon, France</p>
        </div>
      </header>
      <section id="about" class="pb-4 scroll-m-20 sm:scroll-m-28">
        <div class="w-full py-8 sm:py-16 px-4 rounded-2xl border flex flex-wrap sm:flex-nowrap items-center gap-y-8 gap-24 md:gap-x-48">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque voluptate ipsa dolorum, saepe, accusamus dolorem quae aperiam eveniet corporis id quos praesentium, vitae sit officiis fugiat officia doloremque assumenda.</p>
          <ButtonBig class="ml-auto sm:ml-0" to="/#about2">
            Scroll
          </ButtonBig>
        </div>
      </section>
      <section id="about2" class="scroll-m-28">
        <SectionSeparator>
          <span>02</span>
          <h3>À propos</h3>
        </SectionSeparator>
        <div class="grid gap-7">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            <div class="h-[450px] sm:h-[480px] overflow-hidden bg-light-purple rounded-2xl flex flex-col justify-evenly items-center">
              <svg class="fill-navy-blue" width="143" height="139" viewBox="0 0 143 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M71.5 0L78.0855 39.6676L100.582 6.05182L90.1178 44.9124L124.635 23.1609L98.9309 54.495L139.501 48.3688L103.001 66.7586L142.608 77.317L101.624 79.5826L133.421 105L95.0387 90.7497L113.527 126.631L84.3832 98.329L86.3657 138.47L71.5 101.01L56.6343 138.47L58.6168 98.329L29.4734 126.631L47.9613 90.7497L9.57919 105L41.3758 79.5826L0.391685 77.317L39.999 66.7586L3.49946 48.3688L44.0691 54.495L18.3651 23.1609L52.8822 44.9124L42.4183 6.05182L64.9145 39.6676L71.5 0Z" />
              </svg>
              <ButtonDefault :a="true" href="/documents/CV_dev_front_Decoster_Erwan.pdf" download class="text-navy-blue text-2xl">
                Télécharger mon CV
              </ButtonDefault>
            </div>
            <div class="h-[450px] sm:h-[480px] overflow-hidden group relative px-4 rounded-2xl border border-black dark:border-white duration-300 bg-navy-blue sm:bg-transparent sm:hover:bg-navy-blue text-pink">
              <p class="
                w-full pl-4 absolute top-8 sm:opacity-0 duration-300
                before:absolute before:left-0.5 before:top-1/2 before:-translate-y-1/2 before:size-2 before:bg-pink before:rounded-full
                sm:group-hover:opacity-100
              ">
                Compétences
              </p>
              <p class="
                absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-2xl sm:text-center sm:text-black sm:dark:text-white duration-300 
                text-left left-4 top-20 translate-x-0 translate-y-0
                sm:group-hover:text-left sm:group-hover:text-pink sm:group-hover:left-4 sm:group-hover:top-20 sm:group-hover:translate-x-0 sm:group-hover:translate-y-0
              ">
                DÉVELOPPEMENT<br>
                WEB ET MOBILE
              </p>
              <p class="
                absolute top-44 inset-x-4 sm:opacity-0 duration-300
                sm:group-hover:opacity-100
              ">
                Developpement d'interface responsive, rapide, optimisé et instalable en PWA.
              </p>
              <div class="
                absolute top-72 inset-x-4 grid gap-2 grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-4 sm:opacity-0 duration-300
                sm:group-hover:opacity-100
              ">
                <span 
                v-for="skill in skills" 
                class="__pointer grow rounded-full py-1 duration-300 text-center text-xs border border-pink hover:bg-pink hover:text-navy-blue">{{ skill }}</span>
              </div>
            </div>
            <div class="h-[450px] sm:h-[480px] overflow-hidden group relative px-4 rounded-2xl border border-black dark:border-white duration-300 bg-pink sm:bg-transparent sm:hover:bg-pink text-navy-blue">
              <p class="
                w-full pl-4 absolute top-8 sm:opacity-0 duration-300
                before:absolute before:left-0.5 before:top-1/2 before:-translate-y-1/2 before:size-2 before:bg-navy-blue before:rounded-full
                sm:group-hover:opacity-100
              ">
                Compétences
              </p>
              <p class="
                absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-2xl sm:text-center sm:text-black sm:dark:text-white duration-300 
                text-left left-4 top-20 translate-x-0 translate-y-0
                sm:group-hover:text-left sm:group-hover:text-navy-blue sm:group-hover:left-4 sm:group-hover:top-20 sm:group-hover:translate-x-0 sm:group-hover:translate-y-0
              ">
                DESIGN<br>
                INTÉRACTIF
              </p>
              <p class="
                absolute top-44 inset-x-4 sm:opacity-0 duration-300
                sm:group-hover:opacity-100
              ">
                Designe intéractif, mise en place de micro interaction pour maintenir les utilisateurs et leurs offrire une experience unique.
              </p>
              <div class="
                absolute top-72 left-1/2 -translate-x-1/2 place-items-center grid grid-cols-6 text-xs sm:opacity-0 w-max duration-300
                sm:group-hover:opacity-100
              ">
                <span 
                  v-for="(row, index) in interactiveDesign" 
                  @click="interactiveDesign[index] = !interactiveDesign[index]"
                  class="__pointer block size-7 m-1 rounded-full duration-100" 
                  :class="{
                    'bg-white sm:hover:bg-navy-blue': row === false,
                    'bg-navy-blue sm:hover:bg-white': row === true
                  }"
                />
              </div>
            </div>
            <div class="h-[450px] lg:h-40 xl:h-[480px] lg:col-span-3 xl:col-span-1 sm:h-[480px] overflow-hidden group relative px-4 rounded-2xl border border-black dark:border-white duration-300 bg-black sm:bg-transparent sm:hover:bg-black text-white">
              <p class="
                w-full pl-4 absolute top-8 sm:opacity-0 duration-300
                before:absolute before:left-0.5 before:top-1/2 before:-translate-y-1/2 before:size-2 before:bg-white before:rounded-full
                sm:group-hover:opacity-100
              ">
                Compétences
              </p>
              <p class="
                absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-2xl sm:text-center sm:text-black sm:dark:text-white duration-300 
                text-left left-4 top-20 translate-x-0 translate-y-0
                sm:group-hover:text-left sm:group-hover:text-white sm:group-hover:left-4 sm:group-hover:top-20 sm:group-hover:translate-x-0 sm:group-hover:translate-y-0
              ">
                DIRECTION<br class="lg:hidden xl:block">
                ARTISTIQUE
              </p>
              <p class="
                absolute top-44 sm:opacity-0 duration-300 lg:inset-x-4 
                lg:top-10 lg:left-2/3 lg:-translate-x-1/2 
                xl:top-44 xl:left-4 xl:-translate-x-0
                sm:group-hover:opacity-100
              ">
                Creation de design inovant a votre image.
              </p>
              <div class="
                absolute top-72 text-xs inset-x-4 sm:opacity-0 duration-300
                lg:top-20 lg:left-2/3 lg:-translate-x-1/2 
                xl:top-72 xl:left-4 xl:-translate-x-0
                sm:group-hover:opacity-100
              ">
                <p class="__pointer underline-offset-2 hover:underline">CRÉATION DESIGN MAQUETTE WEB ET MOBILE</p>
                <hr class="my-2">
                <p class="__pointer underline-offset-2 hover:underline">CRÉATION DESIGN MAQUETTE WEB ET MOBILE</p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap w-full gap-7">
            <p class="border rounded-2xl py-4 sm:py-14 grow px-6">Erwan Decoster</p>
            <NuxtLink 
              v-for="social in socials"
              :key="social.name"
              :to="social.url"
              class="relative overflow-hidden w-32 border group/word rounded-2xl px-6 py-4 sm:py-14 grow flex items-center justify-center hover:font-bold hover:tracking-wide duration-200"
              :class="'__contained_' + toCssClass(social.name)" 
            >
              <span
                class="absolute inset-0 duration-200 -z-10"
              />
              {{ social.name }}
            </NuxtLink>
          </div>
        </div>
      </section>
      <section id="__primary-projects">
        <SectionSeparator>
          <span>03</span>
          <h3>Mes projets</h3>
        </SectionSeparator>
        <ProjectCarousel
          :projects="getLastProjects()" 
        />
      </section>
      <section id="__other-projects" class="grid gap-20">
        <ScrollingTexte>
          explorer les archives 
        </ScrollingTexte>
        <ProjectList
          :projects="getOtherProjects()"
        />
      </section>
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
