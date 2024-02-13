<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const title = "Mentions Légales - Erwan Decoster";
const desc = "Mentions Légales du site Erwan Decoster"
const img = runtimeConfig.public.siteUrl + "/images/domaine_de_pipangaille_mockup_5.webp"
const url = runtimeConfig.public.siteUrl + route.path
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

const data = ref({
  address: "1 Quartier Les Marettes, 26140, Andancette",
  mapsUrl: "",
  RCS: null,
  NAF: null,
  shareCapital: null,
  tel: "+33625306813",
  email: "contact@erwan-decoster.fr",
  director: "Erwan Decoster",
  company: "Erwan Decoster",
  dev: {
    company: "Erwan Decoster",
    tel: "+33625306813",
    email: "contact@erwan-decoster.com",
    website: "erwan-decoster.com",
    github: "github.com/ErwanDecoster",
    websiteRepo: "github.com/ErwanDecoster/Portfolio-2024",
  },
  design: {
    company: "Amandine REYNAUD",
    tel: null,
    email: "amandine.rynd1@gmail.com ",
    website: "linkedin.com/in/amandine-reynaud/",
  },
  hosting: "Vercel Inc",
  hostingWebsite: "vercel.com",
  domainName: "Hostinger International Ltd",
  domainWebsite: "hostinger.fr",
})

onMounted(() => {
})


</script>

<template>
  <div class="mb-8">
    <section class="px-2 sm:px-8 pt-48 grid gap-32 max-w-screen-2xl mx-auto">
      <h1 class="py-5 sm:py-11 border-y mx-auto w-4/5 text-5xl sm:text-8xl flex justify-center items-center text-center">
        Mentions Légales
      </h1>
      <div class="grid lg:grid-cols-2 gap-y-8 lg:gap-y-32 gap-x-16">
        <div class="flex flex-col gap-2">
          <h2 class="text-4xl uppercase">
            ÉDITEUR DU SITE
          </h2>
          <div>
            <p>
              Identification de la Société :
              <span>{{ data.company }}</span>
            </p>
            <p>
              Siège social :
              <span>
                <a 
                  href="https://www.google.fr/maps/dir//domaine+de+pipangaille/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53e41af912869:0xe0c49553166e1500?sa=X&ved=2ahUKEwj59IKk0474AhUa_4UKHTamDM0Q9Rd6BAhbEAQ"
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.address }}
                </a>
              </span>
            </p>
            <div v-if="data.RCS || data.NAF || data.shareCapital" class="flex gap-2">
              <p v-if="data.RCS">RCS : <span>{{ data.RCS }}</span> /</p>
              <p v-if="data.NAF">Code NAF : <span>{{ data.NAF }}</span> /</p>
              <p v-if="data.shareCapital">Capital social : <span>{{ data.shareCapital }} €</span></p>
            </div>
            <p>
              Téléphone  : 
              <span>
                <a 
                  :href="`tel:${data.tel}`"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.tel }}
                </a>
              </span>
            </p>
            <p>
              Email : 
              <span>
                <a 
                  :href="`mailto:${data.email}`"
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.email }}
                </a>
              </span>
            </p>
            <p>Dirigeant : <span>{{ data.director }}</span></p>
            <p>Directeur de la Publication : <span>{{ data.director }}</span></p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-4xl uppercase">
            DÉVELOPPEMENT DU SITE
          </h2>
          <div>
            <p>Société  : <span>{{ data.dev.company }}</span></p>
            <p>
              Téléphone : 
              <span>
                <a 
                  href="tel:+33625306813"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.dev.tel }}
                </a>
              </span>
            </p>
            <p>
              Email : 
              <span>
                <a 
                  :href="`mailto:${data.dev.email}`"
                  target="_blank" 
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.dev.email }}
                </a>
              </span>
            </p>
            <p>
              Site : 
              <span>
                <a 
                  :href="`https://${data.dev.website}`"
                  target="_blank" 
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.dev.website }}
                </a>
              </span>
            </p>
            <p>
              Github : 
              <span>
                <a 
                  :href="`https://${data.dev.github}`"
                  target="_blank" 
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.dev.github }}
                </a>
              </span>
            </p>
            <p>
              Repo Github :
              <span>
                <a 
                  href="https://github.com/ErwanDecoster/Domaine-de-Pipangaille" 
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.dev.websiteRepo }}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-4xl uppercase">
            CONCEPTION DU SITE
          </h2>
          <div>
            <p>Société  : <span>{{ data.design.company }}</span></p>
            <p v-if="data.design.tel">
              Téléphone : 
              <span>
                <a 
                  href="tel:+33625306813"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.design.tel }}
                </a>
              </span>
            </p>
            <p v-if="data.design.email">
              Email : 
              <span>
                <a 
                  :href="`mailto:${data.design.email}`"
                  target="_blank" 
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.design.email }}
                </a>
              </span>
            </p>
            <p>
              Site :
              <span>
                <a 
                  :href="`https://${data.design.website}`"
                  target="_blank" 
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.design.website }}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-4xl uppercase">
            Hébergement DU SITE
          </h2>
          <div>
            <p>
              {{ data.hosting }} : 
              <span>
                <a 
                  :href="`https://${data.hostingWebsite}`"
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.hostingWebsite }}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-4xl uppercase">
            POSSÈSSION DU NOM DE DOMAINE
          </h2>
          <div>
            <p>
              {{ data.domainName }} : 
              <span>
                <a 
                  :href="`https://${data.domainWebsite}`"
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ data.domainWebsite }}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-4xl uppercase">
            CRÉDIT PHOTOS
          </h2>
          <div>
            <p>Toutes les photos sont la propriété de Erwan Decoster</p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-4xl uppercase">
            UTILISATION DES COOKIES
          </h2>
          <div class="grid">
            <p>Ce site utilise les cookies dans un but de statistiques et de fonctionnement uniquement.</p>
          </div>
        </div>
        <div class="flex flex-col gap-2 lg:col-span-2">
          <h2 class="text-4xl uppercase">
            UTILISATION DES DONNÉES PERSONNELLES
          </h2>
          <div>
            <p>
              En utilisant les formulaires présents sur le site, vous acceptez le stockage des données ainsi transmises et le traitement de celles-ci. Elles sont conservées et traitées à des fins de gestion, d'historique et d'amélioration de nos services.
            </p>
            <p>
              Les données sont conservées pour une durée raisonnable de 10 ans.
            </p>
            <p>
              Pour toute demande de suppression, de rectification ou d'accès aux données, veuillez effectuer une demande par email à : {{ data.email }} ou par courrier à l'adresse : {{ data.address }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 lg:col-span-2">
          <h2 class="text-4xl uppercase">
            RESPONSABILITÉ DE {{ data.company }}
          </h2>
          <div>
            <p>
              Dans les conditions autorisées par la loi, {{ data.company }} n'encourt aucune responsabilité :
            </p>
            <ul>
              <li>
                Pour toute imprécision, inexactitude, omission ou pour tous dommages résultant d'une intrusion d'un tiers ayant entraîné une modification des informations mises à disposition sur le Site.
              </li>
              <li>
                En cas de dommages provoqués en raison de l'accès d'un tiers non autorisé sur le Site ou rendant impossible son accès.
              </li>
              <li>
                Le visiteur est informé que l'accès au Site pourra être interrompu à tout moment par {{ data.company }} en raison de maintenance, de sécurité ou toute autre contrainte technique.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-4xl uppercase">
            DROIT APPLICABLE
          </h2>
          <div>
            <p>Les présentes mentions sont régies par le droit français. Les juridictions françaises sont seules compétentes pour connaître tout litige se rapportant directement ou indirectement à l'accès au présent Site ou à son utilisation.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
