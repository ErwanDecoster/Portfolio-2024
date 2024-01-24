<script setup lang="ts">
  const mounths = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre','décembre']
</script>

<template>
  <div class="dark:text-white">
    <div class="px-2 sm:px-8">
      <slot />
    </div>
    <div class="bg-black dark:bg-white mt-24 text-white dark:text-black __invert-select __invert-scroll-bar relative rounded-t-[40px] sm:rounded-t-[75px]">
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
    <Footer />
    <!-- <div id="__blury-bg">
      <div id="__blury-filter"></div>
    </div> -->
  </div>
</template>
