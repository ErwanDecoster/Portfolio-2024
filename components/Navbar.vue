<script setup lang="ts">
useHead({
  script: [ 
    {
      children: `
        if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
          document.documentElement.setAttribute("data-theme", "dark")
        } else {
          document.documentElement.removeAttribute("data-theme")
        }
      `
    }
  ]
})

const route = useRoute()
const enabled = useState<boolean | null>('theme', () => null)
onMounted(()=>{
  enabled.value = localStorage.getItem("theme") === "dark" ? false : true
  changeSizeOnScroll()
  updateBurgerColor()
})

const toggleTheme = () => {
  enabled.value = !enabled.value
  localStorage.setItem("theme", enabled.value ? "light" : "dark")
  setTheme()
}

const updateBurgerColor = () => {
  document.addEventListener('scroll', () => {
    const whiteZone = document.querySelector('.__white-bg')
    if (whiteZone) {
      if (whiteZone?.getBoundingClientRect().y <= 0) {
        invert.value = true
      } else {
        invert.value = false
      }
    }
  })
}

const changeSizeOnScroll = () => {
  const nav = document.querySelector('#navbar')
  const navHeight = nav?.getBoundingClientRect().height
  const linkContainer = nav?.querySelector('#link_container')
  if (navHeight && linkContainer) {
    document.addEventListener('scroll', () => {
      if (window.scrollY > navHeight) {
        linkContainer.classList.remove("py-5")
        linkContainer.classList.add("sm:py-2")
      } else {
        linkContainer.classList.remove("sm:py-2")
        linkContainer.classList.add("py-5")
      }
    })
  }
}

const setTheme = () => {
  const theme = localStorage.getItem("theme")
  if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.removeAttribute("data-theme")
  }
}

let visible = ref(false)
let invert = ref(false)

</script>

<template>
  <div 
    id="navbar"
    class="sm:border-b-2 fixed z-40 inset-x-0 top-0 bg-white dark:bg-black backdrop-blur-lg duration-200"
    :class="{ 'h-screen sm:h-auto': visible, 'h-0 sm:h-auto': !visible }"
  >
    <button 
      id="navbar-burger"
      @click="visible = !visible"
      aria-label="Ouvrire le menu"
      class="sm:hidden fixed  top-6 pl-4 py-4 -my-4 right-6 w-14 h-16 flex flex-col justify-between"
      :class="{
        '*:bg-black *:dark:bg-white': !invert || visible,
        '*:bg-white *:dark:bg-black': invert && !visible, 
      }"
    >
      <span 
      class="block h-1 rounded-full w-full origin-bottom-right duration-200 " 
      :class="{ '-rotate-45 delay-150': visible }"
      />
      <span 
      class="block h-1 rounded-full w-full origin-top-right duration-200 delay-150" 
      :class="{ 'scale-x-0 delay-0': visible }"
      />
      <span 
        class="block h-1 rounded-full w-full origin-top-right duration-200" 
        :class="{ 'rotate-45 delay-150': visible }"
      />
    </button>
    <nav 
      class="sm:grid max-w-screen-4xl mx-auto grid-cols-5 h-full"
      :class="{ 'flex flex-col justify-evenly': visible, 'hidden': !visible }"
    >
      <div 
        class="hidden md:flex justify-center items-center"
        :class="{ 'hidden': visible }"
      >
        <ButtonInline to="/#index">
          Erwan Decoster
        </ButtonInline> 
      </div>
      <div 
        id="link_container"
        class="col-span-4 md:col-span-3 sm:border-r-2 md:border-l-2 py-5 flex justify-center items-center gap-y-6 lg:gap-x-11 duration-300"
        :class="{ 'flex-col sm:flex-row': visible }"
      >
        <ButtonInline @click="visible = false" to="/#index">
          Accueil
        </ButtonInline> 
        <ButtonInline @click="visible = false" to="/#about">
          À propos
        </ButtonInline> 
        <ButtonInline @click="visible = false" to="/projects">
          Projets
        </ButtonInline>
        <template v-if="route.name == 'projects' || route.name == 'projects-id'">
          <ButtonInline @click="visible = false" to="/projects#contact">
            Contact
          </ButtonInline>
        </template>
        <template v-else>
          <ButtonInline @click="visible = false" to="/#contact">
            Contact
          </ButtonInline>
        </template>
      </div>
      <div class="flex justify-center items-center">
        <form action="">
          <label  class="relative h-8 w-24 block rounded-full border-2 overflow-hidden" for="toggle-theme">
            <input 
              v-model="enabled" 
              @click="toggleTheme()" 
              class="opacity-0 h-0 w-0 peer" 
              type="checkbox" 
              name="toggle-theme" 
              id="toggle-theme"
            >
            <span class="absolute inset-0 bg-white duration-300 
                        before:absolute before:h-full before:w-1/2 before:bg-black before:rounded-full before:duration-300
                        before:peer-checked:translate-x-full">
            </span>
            <svg class="absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2 stroke-white peer-checked:stroke-black duration-150" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66118 10.375C-0.525852 7.18887 1.27714 2.60446 4.66118 1.375C3.5 6.5 6.5 9.5 11.66 8.37594C10.6602 11.875 5.84822 13.5611 2.66118 10.375Z" stroke-width="1" stroke-linejoin="round"/>
            </svg>
            <svg class="absolute top-1/2 -translate-y-1/2 right-1/4 translate-x-1/2 stroke-black peer-checked:stroke-white duration-150" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 3V1M14 8.5H16M8.5 14V16M3 8.5H1M4.5 4.5L3 3M12.5 4.5L14 3M12.5 12.5L14 14M4.5 12.5L3 14M8.5 5C6.567 5 5 6.567 5 8.5C5 10.433 6.567 12 8.5 12C10.433 12 12 10.433 12 8.5C12 6.567 10.433 5 8.5 5Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        </form>
      </div>
    </nav>

  </div>
</template>
