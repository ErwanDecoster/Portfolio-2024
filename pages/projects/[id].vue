<script setup lang="ts">
const route = useRoute()
const projet = getProject((route.params.id as string))
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div>
    <div class="pt-48 grid gap-16 sm:gap-32">
      <h1 class="py-5 sm:py-11 border-y mx-auto w-4/5 text-5xl sm:text-8xl flex justify-center items-center text-center">
        {{ projet?.title }}
      </h1>
      <div class="grid gap-4 sm:gap-24">
        <div class="grid gap-8">
          <img v-if="projet?.img" class="rounded-2xl aspect-video object-cover" :src="projet?.img" alt="">
          <SectionSeparator>
            <h2 class="uppercase">À propos du projet</h2>
          </SectionSeparator>
        </div>
        <div class="grid md:grid-cols-2 gap-8 sm:gap-36">
          <div class="sm:text-2xl">
            <p class="py-2" v-for="row in projet?.desc">{{ row }}</p>
          </div>
          <div class="grid items-start sm:grid-cols-2 gap-14">
            <div class="grid gap-2">
              <h3 v-if="projet?.publishDate && projet.lastUpdateDate">Dates clés</h3>
              <h3 v-else>Date clés</h3>
              <div class="grid gap-1">
                <p v-if="projet?.publishDate" class="opacity-50 text-base">Publication : {{ formatDate(projet?.publishDate) }}</p>
                <p v-if="projet?.lastUpdateDate" class="opacity-50 text-base">Dernière mise a jour : {{ formatDate(projet?.lastUpdateDate) }}</p>
              </div>
            </div>
            <div class="grid gap-2" v-if="projet?.customer">
              <h3>Client</h3>
              <p class="opacity-50 text-base">{{ projet?.customer }}</p>
            </div>
            <div class="grid gap-2" v-if="projet?.technos.length">
              <h3 v-if="projet.technos.length > 1">Technologies</h3>
              <h3 v-else>Technologie</h3>
              <div class="grid grid-cols-2 sm:grid-cols-1 gap-1">
                <p class="opacity-50 text-base" v-for="techno in projet?.technos" :key="techno">{{ techno }}</p>
              </div>
            </div>
            <div class="grid gap-2" v-if="projet?.industry">
              <h3>Industrie</h3>
              <p class="opacity-50 text-base">{{ projet?.industry }}</p>
            </div>
            <div class="grid gap-2" v-if="projet?.collaborators.length">
              <h3 v-if="projet.collaborators.length > 1">Colaborateurs</h3>
              <h3 v-else>Colaborateur</h3>
              <div class="grid gap-1">
                <p class="opacity-50 text-base" v-for="collaborator in projet?.collaborators" :key="collaborator.name">
                  <ButtonInline :size="-1" class="text-base" :to="collaborator.url">
                    {{ collaborator.name }} 
                    <span>({{ collaborator.role }})</span>
                  </ButtonInline>
                </p>
              </div>
            </div>
            <ButtonBig class="sm:col-span-2">Site web</ButtonBig>
          </div>
        </div>
      </div>
      <div class="grid gap-12" v-for="screen in projet?.screens" :key="screen.name">
        <div>
          <h3>{{ screen.name }}</h3>
          <p class="opacity-50">{{ screen.format }}</p>
        </div>
        <img class="border-2 border-black dark:border-white" :src="screen.asset" alt="">
      </div>
    </div>
  </div>
</template>