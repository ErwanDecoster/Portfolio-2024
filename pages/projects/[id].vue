<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const project = getProject((route.params.id as string))

const title = project?.title + " - Erwan Decoster";
const desc = project?.shortDesc;
const img = runtimeConfig.public.siteUrl + project?.img;
const url = runtimeConfig.public.siteUrl + route.path;
useHead({
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: url,
    },
  ],
})
useSeoMeta({
  title: title,
  description: desc,
  ogDescription: desc,
  ogTitle: title,
  ogUrl: url,
  ogType: 'article',
  ogImage: img,
  twitterCard: 'summary_large_image',
  twitterSite: '@erwan_decoster',
  twitterCreator: '@erwan_decoster',
  twitterTitle: title,
  twitterDescription: desc,
  twitterImage: img,
})
const nextProjectTitle = getNextProjectTitle(route.params.id as string)?.title
</script>

<template>
  <div>
    <div class="pt-48 grid gap-16 sm:gap-32 max-w-screen-2xl mx-auto px-2 sm:px-8">
      <h1 class="py-5 sm:py-11 border-y mx-auto w-4/5 text-5xl sm:text-8xl flex justify-center items-center text-center text-balance">
        {{ project?.title }}
      </h1>
      <div class="grid gap-4 sm:gap-24">
        <div class="grid gap-8">
          <NuxtImg 
            v-if="project?.img"
            class="rounded-2xl aspect-video object-cover w-full"
            :src="project?.img"
            placeholder
            format="webp"
            quality="70"
            sizes="
              xs:576px
              sm:704px
              md:960px
              lg:1216px
              xl:1472px
              2xl:1472px
            "
          />
          <!-- <img v-if="project?.img" class="rounded-2xl aspect-video object-cover" :src="project?.img" alt=""> -->
          <SectionSeparator>
            <h2 class="uppercase">À propos du projet</h2>
          </SectionSeparator>
        </div>
        <div class="grid md:grid-cols-2 gap-8 sm:gap-36">
          <div class="sm:text-2xl">
            <p class="py-2" v-for="row in project?.desc">{{ row }}</p>
          </div>
          <div class="grid items-start sm:grid-cols-2 gap-14">
            <div class="grid gap-2">
              <h3 v-if="project?.lastUpdateDate.getTime() !== project?.publishDate.getTime()">Dates clés</h3>
              <h3 v-else>Date clés</h3>
              <div class="grid gap-1">
                <p v-if="project?.publishDate" class="opacity-60 text-base">Publication : {{ formatDate(project?.publishDate) }}</p>
                <p v-if="project?.lastUpdateDate.getTime() != project?.publishDate.getTime()" class="opacity-60 text-base">Dernière mise à jour : {{ formatDate(project?.lastUpdateDate) }}</p>
              </div>
            </div>
            <div class="grid gap-2" v-if="project?.customer">
              <h3>Client</h3>
              <p class="opacity-60 text-base">{{ project?.customer }}</p>
            </div>
            <div class="grid gap-2" v-if="project?.technos.length">
              <h3 v-if="project.technos.length > 1">Technologies</h3>
              <h3 v-else>Technologie</h3>
              <div class="grid grid-cols-2 sm:grid-cols-1 gap-1">
                <p 
                v-for="techno in project?.technos" 
                :key="techno"
                class="opacity-60 hover:opacity-100 text-base duration-200 hover:font-black hover:tracking-widest" 
                :class="'__text_' + toCssClass(techno)" 
                >
                  {{ techno }}
                </p>
              </div>
            </div>
            <div class="grid gap-2" v-if="project?.industry">
              <h3>Industrie</h3>
              <p class="opacity-60 text-base">{{ project?.industry }}</p>
            </div>
            <div class="grid gap-2" v-if="project?.collaborators.length">
              <h3 v-if="project.collaborators.length > 1">Colaborateurs</h3>
              <h3 v-else>Colaborateur</h3>
              <div class="grid gap-1">
                <p class="opacity-60 text-base" v-for="collaborator in project?.collaborators" :key="collaborator.name">
                  <ButtonInline :size="-1" class="text-base" :to="collaborator.url">
                    {{ collaborator.name }} 
                    <span>({{ collaborator.role }})</span>
                  </ButtonInline>
                </p>
              </div>
            </div>
            <div class="grid gap-2" v-if="project?.links && project?.links.length">
              <h3 v-if="project.links.length > 1">Liens</h3>
              <h3 v-else>Lien</h3>
              <div class="grid gap-1">
                <p class="opacity-60 text-base" v-for="link in project?.links" :key="link.name">
                  <ButtonInline :size="-1" class="text-base" :to="link.url">
                    {{ link.name }}
                  </ButtonInline>
                </p>
              </div>
            </div>
            <ButtonBig 
              v-if="project?.url"
              :to="project.url"
              target="_blank"
              class="sm:col-span-2"
            >
              Site web
            </ButtonBig>
          </div>
        </div>
      </div>
      <div v-if="project?.screens.desktop.length" class="grid gap-16 sm:gap-32">
        <div class="grid gap-12" v-for="screen in project?.screens.desktop" :key="screen.name">
          <div>
            <h3>{{ screen.name }}</h3>
            <p class="opacity-60 uppercase">desktop</p>
          </div>
          <NuxtImg
            class="border-2 border-black dark:border-white w-full"
            :src="screen.asset"
            placeholder
            format="webp"
            quality="70"
            sizes="
              xs:576px
              sm:704px
              md:960px
              lg:1216px
              xl:1472px
              2xl:1472px
            "
          />
        </div>
      </div>
      <div v-else class="grid sm:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-32">
        <div class="grid gap-12" v-for="screen in project?.screens.mobile" :key="screen.name">
          <div>
            <h3>{{ screen.name }}</h3>
            <p class="opacity-60 uppercase">mobile</p>
          </div>
          <NuxtImg
            class="border-2 border-black dark:border-white w-full"
            :src="screen.asset"
            placeholder
            format="webp"
            quality="70"
            sizes="
              xs:612px
              sm:312px
              md:416px
              lg:534px
              xl:405px
              2xl:405px
            "
          />
          <!-- <img class="border-2 border-black dark:border-white" :src="screen.asset" alt=""> -->
        </div>
      </div>
    </div>
    <div class="bg-black dark:bg-white mt-24 text-white dark:text-black py-36 __invert-select __invert-scroll-bar relative rounded-t-[40px] sm:rounded-t-[75px]">
      <div class="grid justify-center place-items-center gap-4">
        <p class="text-2xl font-medium text-center">Prochain project</p>
        <NuxtLink 
          :to="`/projects/${toSlug(nextProjectTitle as string)}`"
          class="text-5xl sm:text-5xl md:text-8xl md:mx-36 text-balance font-bold uppercase underline text-center">{{ nextProjectTitle }}</NuxtLink>
      </div>
    </div>
  </div>
</template>