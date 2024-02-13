<script setup lang="ts">

const toTop = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <footer class="max-w-screen-4xl mx-auto min-h-96 p-7 gap-2 flex flex-col relative">
    <div class="flex flex-wrap-reverse justify-between items-baseline mt-auto mr-32 gap-4 sm:gap-0">
      <p class="text-4xl sm:text-6xl md:text-8xl">Erwan Decoster</p>
      <div class="flex flex-wrap-reverse sm:justify-end gap-2">
        <ButtonDefault to="https://twitter.com/erwan_decoster">
          X
        </ButtonDefault>
        <ButtonDefault to="https://www.instagram.com/erwan_decoster/">
          Instagram
        </ButtonDefault>
        <ButtonDefault to="https://www.linkedin.com/in/erwan-decoster/">
          Linkedin
        </ButtonDefault>
        <ButtonDefault to="https://github.com/ErwanDecoster">
          Github
        </ButtonDefault>
        <ButtonDefault to="https://bento.me/erwan-decoster">
          Bento
        </ButtonDefault>
      </div>
    </div>
    <div class="flex flex-wrap gap-x-1 sm:gap-10 items-center">
      <p class="text-lg">
        Design : 
        <ButtonInline to="https://linkedin.com/in/amandine-reynaud">
          Amandine REYNAUD
        </ButtonInline>
      </p>
      <ButtonInline to="/legal_notice">
        Mentions légales
      </ButtonInline>
    </div>
    <button class="absolute group flex flex-col items-center gap-4 top-7 sm:bottom-7 right-7 sm:top-auto" @click="toTop()">
      <div class="relative size-20 border-2 p-4 dark:border-white rounded-full">
        <span class="absolute inset-y-0 inset-x-5 overflow-hidden">
          <span class="absolute py-5 group-hover:-translate-y-1/2 duration-200">
            <svg class="w-full h-full fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
              <path d="M14.0705 25.2464C14.8255 25.2464 15.3476 24.7212 15.3476 23.9515V9.39325L15.2072 5.57412L14.4296 5.95826L18.3477 10.319L21.009 12.944C21.2387 13.1758 21.5546 13.3139 21.9181 13.3139C22.6243 13.3139 23.1432 12.7863 23.1432 12.0729C23.1432 11.7305 23.0199 11.4232 22.7508 11.1466L15.0244 3.40851C14.768 3.1425 14.4247 3 14.0705 3C13.7164 3 13.3709 3.1425 13.1166 3.40851L5.39984 11.1466C5.13289 11.4232 5 11.7305 5 12.0729C5 12.7863 5.5189 13.3139 6.22507 13.3139C6.58858 13.3139 6.91202 13.1758 7.1342 12.944L9.79131 10.319L13.7019 5.95826L12.9317 5.57412L12.7913 9.39325V23.9515C12.7913 24.7212 13.3156 25.2464 14.0705 25.2464Z"/>
            </svg>
            <span class="h-10 block"></span>
            <svg class="w-full h-full fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
              <path d="M14.0705 25.2464C14.8255 25.2464 15.3476 24.7212 15.3476 23.9515V9.39325L15.2072 5.57412L14.4296 5.95826L18.3477 10.319L21.009 12.944C21.2387 13.1758 21.5546 13.3139 21.9181 13.3139C22.6243 13.3139 23.1432 12.7863 23.1432 12.0729C23.1432 11.7305 23.0199 11.4232 22.7508 11.1466L15.0244 3.40851C14.768 3.1425 14.4247 3 14.0705 3C13.7164 3 13.3709 3.1425 13.1166 3.40851L5.39984 11.1466C5.13289 11.4232 5 11.7305 5 12.0729C5 12.7863 5.5189 13.3139 6.22507 13.3139C6.58858 13.3139 6.91202 13.1758 7.1342 12.944L9.79131 10.319L13.7019 5.95826L12.9317 5.57412L12.7913 9.39325V23.9515C12.7913 24.7212 13.3156 25.2464 14.0705 25.2464Z"/>
            </svg>
          </span>
        </span>
      </div>
      Haut de page
    </button>
  </footer>
</template>
