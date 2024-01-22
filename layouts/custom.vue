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
  })
  
</script>

<template>
  <div class="dark:text-white">
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
