<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
  const cursor = document.getElementById('__cursor');
  const slowCursor = document.getElementById('__slow-cursor');
  const cursorSpan = cursor!.querySelector('span');

  document.querySelectorAll('a, button, input, textarea, label, .__pointer').forEach(actionElement => {
    actionElement.addEventListener('mouseenter', () => {
      if ((actionElement as HTMLButtonElement).disabled != true) {
        gsap.to(cursorSpan, { scale: 6, ease: 'ease'})
        gsap.to(slowCursor, { scale: .8, ease: 'ease'})
      }
    })
    actionElement.addEventListener('mouseleave', () => {
      if ((actionElement as HTMLButtonElement).disabled != true) {
        gsap.to(cursorSpan, {scale: 1})
        gsap.to(slowCursor, {scale: 1})
      }
    })
  });

  gsap.set(cursor, {xPercent: -50, yPercent: -50});
  gsap.set(slowCursor, {xPercent: -50, yPercent: -50});

  let cursorXTo = gsap.quickTo(cursor, "x", {duration: 0.6, ease: "power3"}),
      cursorYTo = gsap.quickTo(cursor, "y", {duration: 0.6, ease: "power3"});
  let cursorSlowXTo = gsap.quickTo(slowCursor, "x", {duration: 1, ease: "power4"}),
      cursorSlowYTo = gsap.quickTo(slowCursor, "y", {duration: 1, ease: "power4"});

  window.addEventListener("mousemove", e => {
    cursorXTo(e.clientX);
    cursorYTo(e.clientY);
    cursorSlowXTo(e.clientX);
    cursorSlowYTo(e.clientY);
  })
})
</script>

<template>
  <div class="overflow-x-hidden dark:text-white">
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

