<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

onMounted(() => {
  const cursorWrapper = document.getElementById('__cursor-wraper');
  const cursor = document.getElementById('__cursor');
  const slowCursor = document.getElementById('__slow-cursor');
  const cursorSpan = cursor!.querySelector('span');
  const actionSelector = 'a, button, input, textarea, select, label, .__pointer';

  gsap.set(cursor, {xPercent: -50, yPercent: -50});
  gsap.set(slowCursor, {xPercent: -50, yPercent: -50});

  let cursorXTo = gsap.quickTo(cursor, "x", {duration: 0.6, ease: "power3"}),
      cursorYTo = gsap.quickTo(cursor, "y", {duration: 0.6, ease: "power3"});
  let cursorSlowXTo = gsap.quickTo(slowCursor, "x", {duration: 1, ease: "power4"}),
      cursorSlowYTo = gsap.quickTo(slowCursor, "y", {duration: 1, ease: "power4"});

  // Le curseur reste masqué tant que la position de la souris est inconnue : sinon il
  // apparaît dans le coin supérieur gauche puis glisse jusqu'à la souris.
  let visible = false;
  const hideCursor = () => {
    visible = false;
    gsap.to(cursorWrapper, { autoAlpha: 0, duration: 0.2, overwrite: 'auto' });
  }

  // Délégation depuis le document plutôt qu'un écouteur par élément : les liens et boutons
  // rendus après le montage (changement de page, v-if…) sont aussi pris en compte.
  let hovering = false;
  const updateHover = (target: EventTarget | null) => {
    const actionElement = target instanceof Element ? target.closest(actionSelector) : null;
    const isHovering = !!actionElement && (actionElement as HTMLButtonElement).disabled !== true;
    if (isHovering === hovering) return;
    hovering = isHovering;
    gsap.to(cursorSpan, { scale: isHovering ? 6 : 1, ease: 'power2.out', overwrite: 'auto' })
    gsap.to(slowCursor, { scale: isHovering ? .8 : 1, ease: 'power2.out', overwrite: 'auto' })
  }

  window.addEventListener("mousemove", e => {
    if (!visible) {
      // Première position connue : on part directement de la souris, sans animation.
      visible = true;
      cursorXTo(e.clientX, e.clientX);
      cursorYTo(e.clientY, e.clientY);
      cursorSlowXTo(e.clientX, e.clientX);
      cursorSlowYTo(e.clientY, e.clientY);
      gsap.to(cursorWrapper, { autoAlpha: 1, duration: 0.2, overwrite: 'auto' });
    } else {
      cursorXTo(e.clientX);
      cursorYTo(e.clientY);
      cursorSlowXTo(e.clientX);
      cursorSlowYTo(e.clientY);
    }
    updateHover(e.target);
  })
  // Couvre les changements d'élément survolé sans mousemove (défilement, contenu qui change).
  document.addEventListener("mouseover", e => updateHover(e.target))
  document.addEventListener("mouseout", e => {
    if (!e.relatedTarget) hideCursor();
  })



  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  // gsap.to('#navbar-burger', { 
  //   scrollTrigger: {
  //     trigger: '.__white-bg',
  //     start: `top top`,
  //     end: 'top top',
  //     markers: true,
  //     scrub: true,
  //   },
  //   ease: 'none',
  //   background: 'blue',
  // })
})

useHead({
  title: "Erwan Decoster - Développeur Front-End",
  htmlAttrs: {
    lang: 'fr-FR',
    // dir: head.value.htmlAttrs.dir
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow'},
    { name: 'theme-color', content: '#ffffff'},
  ],
})
</script>

<template>
  <div class="dark:text-white overflow-x-hidden">
    <Navbar />
    <NuxtPage />
    <Footer />
    <div id="__cursor-wraper" class="hidden sm:block">
      <div id="__cursor" class="hidden sm:block">
        <span></span>
      </div>
      <div id="__slow-cursor" class="hidden sm:block" />
    </div>
  </div>
</template>

<style>
#__cursor-wraper {
  /* display: none; */
  inset: 0;
  z-index: 9999;
  position: fixed;
  mix-blend-mode: difference;
  pointer-events: none;
  /* Affiché au premier mouvement de souris (voir onMounted) */
  opacity: 0;
  visibility: hidden;
}
#__cursor-wraper #__cursor {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  /* transition: .05s; */
  pointer-events: none;
}
#__cursor-wraper #__cursor span {
  display: block;
  background-color: #fff;
  border-radius: 50%;
  /* transition: .2s; */
  width: 100%;
  height: 100%;
  mix-blend-mode: difference;
}
#__cursor-wraper #__slow-cursor {
  /* transition: .15s; */
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #aaa;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

