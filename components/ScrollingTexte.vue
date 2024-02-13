<script setup lang="ts">

</script>

<template>
  <div class="h-28">
    <div class="border-y absolute left-1/2 -translate-x-1/2 w-[100vw] overflow-hidden">
      <div class="h-28 text-6xl overflow-visible flex justify-center items-center">
        <p 
          v-for="index in 6"
          class="__srolling uppercase font-medium flex items-center pl-8 gap-8 whitespace-nowrap"  
        >
          <svg class="size-16" viewBox="0 0 143 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-paradise-pink" d="M71.5 0L78.0855 39.6676L100.582 6.05182L90.1178 44.9124L124.635 23.1609L98.9309 54.495L139.501 48.3688L103.001 66.7586L142.608 77.317L101.624 79.5826L133.421 105L95.0387 90.7497L113.527 126.631L84.3832 98.329L86.3657 138.47L71.5 101.01L56.6343 138.47L58.6168 98.329L29.4734 126.631L47.9613 90.7497L9.57919 105L41.3758 79.5826L0.391685 77.317L39.999 66.7586L3.49946 48.3688L44.0691 54.495L18.3651 23.1609L52.8822 44.9124L42.4183 6.05182L64.9145 39.6676L71.5 0Z" />
          </svg>
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.__srolling {
  transform: translateX(0%);
  animation: scroll 5s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

</style>
