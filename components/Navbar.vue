<script setup lang="ts">

</script>

<template>
  <div class="border-b-2 fixed z-30 inset-x-0 top-0 backdrop-blur-lg">
    <nav class="max-w-screen-4xl mx-auto grid grid-cols-5">
      <div class="flex justify-center items-center">
        <ButtonInline to="/">
          Erwan Decoster
        </ButtonInline> 
      </div>
      <div class="col-span-3 border-x py-5 flex justify-center items-center gap-11">
        <ButtonInline to="/">
          Accueil
        </ButtonInline> 
        <ButtonInline to="/">
          À propos
        </ButtonInline> 
        <ButtonInline to="/">
          Projets
        </ButtonInline> 
        <ButtonInline to="/">
          Contact
        </ButtonInline> 
      </div>
      <div class="flex justify-center items-center">
        <form action="">
          <label class="relative h-8 w-24 block rounded-full border-2 overflow-hidden" for="toggle-theme">
            <input class="opacity-0 h-0 w-0 peer" type="checkbox" name="toggle-theme" id="toggle-theme">
            <span class="absolute cursor-pointer inset-0 bg-white duration-300 
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
