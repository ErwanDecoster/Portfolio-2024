<script setup lang="ts">
  const mounths = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre','décembre']
</script>

<template>
  <div class="dark:text-white">
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
