<script setup lang="ts">
const form = ref ({
  name: "",
  phone: "",
  email: "",
  message: ""
})

interface Message {
  type: string;
  content: string;
}

let messages = ref<Array<Message>>([])
const waiting = ref(false)
let success = ref(false)

const ValidEmail = ((email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
})

const CheckForm = (() => {
  messages.value = [];
  if (form.value.name.length === 0)
    messages.value.push({type: 'error', content: 'Le champ Nom est requi.'})
  if (form.value.phone.length === 0)
    messages.value.push({type: 'error', content: 'Le champ Téléphone est requi.'})
  if (form.value.email.length === 0)
    messages.value.push({type: 'error', content: 'Le champ E-mail est requi.'})
  else if (!ValidEmail(form.value.email))
    messages.value.push({type: 'error', content: 'Un e-mail valide est requi.'})
  if (form.value.message.length === 0)
    messages.value.push({type: 'error', content: 'Le champ Message est requi.'})
  else if (form.value.message.length <= 20)
    messages.value.push({type: 'error', content: 'Pour eviter le spam, le champ Message doit faire plus de 20 caractères.'})
  if (messages.value.length)
    return (0)
  return (1)
})

const EmailSended = ((response: string) => {
  console.log(response);
  if (response == 'send') {
    waiting.value = false;
    success.value = true;
    form.value = {
      name: "",
      phone: "",
      email: "",
      message: ""
    }
  }
  messages.value.push({ type: 'success', content: 'Le message a bien été envoyé.'});
  waiting.value = false;
})

const EmailSendError = ((response: any) => {
  messages.value.push({ type: 'error', content: 'Une erreur probablement due a votre connection est survenue.'});
  waiting.value = false;
})

const SendEmail = (() => {
  if (waiting.value) {
    messages.value.push({ type: 'waring', content: 'Un message est deja en cour d\'envoi.'});
  } else if (CheckForm() && !waiting.value) {
    messages.value = [];
    waiting.value = true;
    const url = 'https://erwan-decoster.com/api/contact'
    // const url = 'http://localhost:3000/api/contact'
    const response: any = $fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      credentials: 'same-origin',
      body: form.value,
    }).then(
      response => EmailSended(response as string)
    ).catch(
      response => EmailSendError(response as any)
    )
  }
})

const SendForm = (() => {
  success.value = false
  if (CheckForm()) {
    SendEmail()
  }
})

</script>

<template>
  <div id="contact" class="grid sm:grid-cols-2 gap-2 pb-20 scroll-m-28">
    <div class="relative text-white border dark:border-black h-full p-9 rounded-2xl flex justify-end overflow-hidden">
      <div class="__bg-image absolute bg-white dark:bg-black inset-0" />
      <ButtonBig 
        to="mailto:contact@erwan-decoster.com"
        class="mt-auto"
      >
        E-mail
      </ButtonBig>
    </div>
    <div class="p-8 sm:p-16 border rounded-2xl text-2xl">
      <form class="grid gap-8" @submit.prevent="SendForm()">
        <div class="grid gap-1">
          <p 
            v-for="message in messages" 
            :key="message.type"
            class="bg-black rounded-lg py-1 px-4 text-white bg-opacity-85"
            :class="[
              { 'bg-super-red': message.type === 'error'},
              { 'bg-green': message.type === 'success'}
            ]"
          >
            {{ message.content }}
          </p>
        </div>
        <div>
          <div class="py-2.5 relative z-10">
            <label class="dark:bg-white pr-2" for="name">Nom :</label>
            <input 
              class="py-2.5 absolute indent-[74px] inset-0 -z-10 bg-transparent peer focus:outline-none" 
              v-model="form.name" 
              type="text" 
              name="name" 
              id="name"
              autocomplete="name"
              required
            >
            <span class="absolute inset-x-0 bottom-0 h-px rounded-full bg-white dark:bg-black peer-focus:peer-invalid:bg-super-red peer-focus:peer-valid:bg-green duration-150 origin-bottom peer-focus:scale-y-200" />
          </div>
          <div class="py-2.5 relative z-10">
            <label class="dark:bg-white pr-2" for="phone">Téléphone :</label>
            <input 
              class="py-2.5 absolute indent-[134px] inset-0 -z-10 bg-transparent peer focus:outline-none" 
              v-model="form.phone" 
              type="tel" 
              name="phone" 
              id="phone" 
              autocomplete="tel"
              required
            >
            <span class="absolute inset-x-0 bottom-0 h-px rounded-full bg-white dark:bg-black peer-focus:peer-invalid:bg-super-red peer-focus:peer-valid:bg-green duration-150 peer-focus:scale-y-200" />
          </div>
          <div class="py-2.5 relative z-10">
            <label class="dark:bg-white pr-2" for="email">E-mail :</label>
            <input 
              class="py-2.5 absolute indent-[90px] inset-0 -z-10 bg-transparent peer focus:outline-none" 
              v-model="form.email" 
              type="email" 
              name="email" 
              id="email" 
              autocomplete="email"
              required
            >
            <span class="absolute inset-x-0 bottom-0 h-px rounded-full bg-white dark:bg-black peer-focus:peer-invalid:bg-super-red peer-focus:peer-valid:bg-green duration-150 peer-focus:scale-y-200" />
          </div>
          <div class="py-2.5 h-44 relative z-10">
            <label class="dark:bg-white pr-2" for="message">Message :</label>
            <textarea 
              class="absolute indent-[119px] inset-0 inset-y-2.5 -z-10 bg-transparent peer focus:outline-none resize-none" 
              v-model="form.message" 
              name="message" 
              id="message" 
              placeholder="Mon projet en quelques mots..."
              autocomplete="off"
              minlength="21"
              required
            />
            <span class="absolute inset-x-0 bottom-0 h-px rounded-full bg-white dark:bg-black peer-focus:peer-invalid:bg-super-red peer-focus:peer-valid:bg-green duration-150 peer-focus:scale-y-200" />
          </div>
        </div>
        <button 
          class="px-4 py-2 ml-auto border rounded-full hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white hover:border-white dark:hover:border-black duration-150" 
          type="submit"
        >
          <template v-if="waiting">
            Envoie en cours
          </template>
          <template v-if="success">
            Message envoyé
          </template>
          <template v-if="!success && !waiting">
            Envoyer
          </template>
        </button>
      </form>
    </div>
  </div>
</template>
