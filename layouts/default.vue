<script setup lang="ts">
  import { onMounted } from 'vue';

  const mounths = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre','décembre']
  onMounted(() => {
    const cursor = document.getElementById('__cursor');
    const slowCursor = document.getElementById('__slow-cursor');
    const cursorSpan = cursor!.querySelector('span');
    let cursorScale = 1;
    let slowCursorScale = 1;
    let mousePos = { x: 0, y: 0 };
  
    document.querySelectorAll('a, button, input, textarea, label, .__pointer').forEach(actionElement => {
      actionElement.addEventListener('mouseenter', () => {
        if ((actionElement as HTMLButtonElement).disabled != true) {
          cursorScale = 6
          slowCursorScale = 0.8
        } else {

        }
      })
      actionElement.addEventListener('mouseleave', () => {
        if ((actionElement as HTMLButtonElement).disabled != true) {
          cursorScale = 1
          slowCursorScale = 1
        }
      })
    });
    
    document.addEventListener('click', (event) => {
      cursorScale = 1
      slowCursorScale = 0.2
      slowCursor!.style.transform = `translate(${mousePos.x - 32}px, ${mousePos.y - 32}px) scale(${slowCursorScale})`
      cursorSpan!.style.transform = `scale(${cursorScale})`
      setTimeout(() => {
        slowCursorScale = 1
        cursorScale = 1
        cursorSpan!.style.transform = `scale(${cursorScale})`
        slowCursor!.style.transform = `translate(${mousePos.x - 32}px, ${mousePos.y - 32}px) scale(${slowCursorScale})`
      }, 200);
    })
    window.addEventListener("mousemove", (event) => {
      document.getElementById('__cursor-wraper')!.style.display = 'block';
      mousePos = { x: event.clientX, y: event.clientY }
      cursor!.style.transform = `translate(${mousePos.x - 4}px, ${mousePos.y - 4}px)`
      slowCursor!.style.transform = `translate(${mousePos.x - 32}px, ${mousePos.y - 32}px) scale(${slowCursorScale})`
      cursorSpan!.style.transform = `scale(${cursorScale})`
    })
    document.addEventListener('scroll', (event) => {
      const bluryCalque = (document.querySelector('#__blury-filter') as HTMLElement)
      bluryCalque.style.opacity = (scrollY / 750).toString()
    })
  })

</script>

<template>
  <div class="dark:text-white">
    <Navbar />
    <div class="px-2 sm:px-8 max-w-screen-2xl mx-auto">
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
    <div id="__blury-bg">
      <div id="__blury-filter"></div>
    </div>
  </div>
</template>
