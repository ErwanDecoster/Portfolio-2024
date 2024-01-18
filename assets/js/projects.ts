import {  } from "@/types/index"

export const projects: project[] = [
  {
    title: "Message App",
    img: "",
    publishDate: new Date('11/01/2023'),
    lastUpdateDate: null,
    url: "https://messages-app-beta.vercel.app/",
    github: "https://github.com/ErwanDecoster/MessagesApp",
    shortDesc: "Développement d'un site d'échange de messages instantané.",
    desc: [
      "Message App est un site web d'échange de messages instantané entre différents utilisateurs. Les messages peuvent être envoyés supprimer et modifier, les nouveaux messages apparaissent directement au destinataire sans aucune actualisation.",
    ],
    customer: null,
    industry: null,
    collaborators: [],
    technos: [
      "Nuxt",
      "VueJs",
      "Javascript",
      "Tailwind",
      "HTML",
      "CSS",
      "Figma",
    ],
    screens: [
    ]
  },
  {
    title: "Who's coming",
    img: "/images/img3.png",
    publishDate: new Date('07/15/2023'),
    lastUpdateDate: new Date('08/03/2023'),
    url: "https://who-s-coming.vercel.app/",
    github: "https://github.com/ErwanDecoster/Who-s-coming",
    shortDesc: "Développement d'un site de gestion d'evements",
    desc: [
      "Il s'agit la d'un site de gestions d'événement, permettant l'envoie d'invitations et l'ajout à l'événement de “nécessaires” il s'agit la des chose manquant pour la bonne organisation de l'événement ceci peut être utiliser pour demander aux inviter ce qu'il ramener, l'organisateur peut ainsi savoir ce qu'il lui manquera pour son événement.",
      "Aucun compte n'est requis pour les invités il recevront chacun une invitation par SMS qu'ils devront accepter ou décliner. ",
      "L'organisateur a la possibilité d'accepter les “plus 1” et peut ainsi savoir exactement le nombre de participants à l'événement.",
    ],
    customer: null,
    industry: null,
    collaborators: [],
    technos: [
      "Nuxt",
      "VueJs",
      "Javascript",
      "Tailwind",
      "Supabase",
      "Postgres",
      "HTML",
      "CSS",
      "Figma",
    ],
    screens: [
      {
        name: "Page d'acceuil",
        format: "Desktop",
        asset: "/images/who_s_comming_accueil.png",
      },
      {
        name: "Connection",
        format: "Desktop",
        asset: "/images/who_s_comming_connection.png",
      },
      {
        name: "Inscription",
        format: "Desktop",
        asset: "/images/who_s_comming_insrciption.png",
      },
      {
        name: "Evenements",
        format: "Desktop",
        asset: "/images/who_s_comming_evenements.png",
      },
    ]
  },
  {
    title: "42 So-long",
    img: "",
    publishDate: new Date('05/01/2023'),
    lastUpdateDate: null,
    url: "",
    github: "https://github.com/ErwanDecoster/42_so_long",
    shortDesc: "Creation d'un jeu 2D au sain de l'ecole 42 Lyon",
    desc: [
      "So Long est un projet de l'école 42 Lyon Auvergne Rhône Alpes il consiste a réalisé un jeu vidéo 2D en respectant les contraintes du sujet.",
      "Le jeu doit être en 2D avec une vue de haut ou de devant, le personnage doit pouvoir se déplacer sur l'ensemble de la carte sans passer au travers des murs. L'objectif est de ramasser tous les “collectibles” pour débloquer la porte de sortie.",
      "Lorsque l'utilisateur lance le jeu il doit choisir le carte, le programme se charge de vérifier la faisabilité de la carte en utilisant l' algorithme de propagation.",
      "Il était possible de réaliser des bonus : ajout des patrouilles / ennemies, ajout d'animations et affichage de nombre de pas sur l'écran.",
    ],
    customer: null,
    industry: null,
    collaborators: [],
    technos: [
      "C",
      "Figma",
    ],
    screens: [
    ]
  },
  {
    title: "Les Nuits de Fourvière",
    img: "",
    publishDate: new Date('03/17/2023'),
    lastUpdateDate: new Date('03/20/2023'),
    url: "https://42-x-sup-de-pub.vercel.app/",
    github: "https://github.com/ErwanDecoster/42_x_Sup_de_Pub",
    shortDesc: "Développement de la nouvelle identité du site en colaboration avec Sub de Pub Lyon.",
    desc: [
      "Il s'agit d'un projet réalisé entre l'école 42 Lyon Auvergne Rhône Alpes et Sup de Pub Lyon. Le projet consiste à développer une maquette réalisée par les étudiants de l'école Sup de Pub. Les équipes de développeurs et de designers collaborent ensemble pour réaliser le site de la façon la plus conforme à la maquette en un temps défini d'une semaine, l'équipe des développeurs est libre sur le choix des technoslogie seul 2 des développeurs avait déjà fait du web avant ce projet. Le développement du site Les Nuits de Fourvière fut un superbe moment d'échange de connaissance permettant à chacun de développer son savoir.",
    ],
    customer: null,
    industry: null,
    collaborators: [
      {
        name: "Hervé Dupuy",
        role: "Développeur",
        url: "",
      },
      {
        name: "Aymeric Jakubczyk",
        role: "Développeur",
        url: "",
      },
      {
        name: "Florian",
        role: "Développeur",
        url: "",
      },
      {
        name: "Maxime BRUEL",
        role: "Designer",
        url: "",
      },
      {
        name: "Louis DEMANGE",
        role: "Designer",
        url: "",
      },
      {
        name: "Léa NIETO",
        role: "Designer",
        url: "",
      },
      {
        name: "Ellora GUIGUET",
        role: "Designer",
        url: "",
      },
      {
        name: "Julie DA SILVA",
        role: "Designer",
        url: "",
      },
      {
        name: "Cécile LEMAITRE",
        role: "Designer",
        url: "",
      },
    ],
    technos: [
      "Nuxt",
      "VueJs",
      "Javascript",
      "Tailwind",
      "HTML",
      "CSS",
      "Figma Dev",
    ],
    screens: [
    ]
  },
  {
    title: "Notes",
    img: "",
    publishDate: new Date('03/07/2023'),
    lastUpdateDate: null,
    url: "https://notes-tawny-delta.vercel.app/",
    github: "https://github.com/ErwanDecoster/Notes",
    shortDesc: "Développement d'un site de prise de note.",
    desc: [
      "Il s'agit là d'un site de prise de note rapide, l'expérience utilisateurs était un point important du projet c'est pour cette raison que la sauvegarde automatique fut utilisée sur l'ensemble du site. Les utilisateurs peuvent créer des notes de plusieurs types : liste, liste de case à cocher, texte. Les notes peuvent changer de type une fois créé rendant l'utilisation du site aussi simple que possible et sans aucune frustration.",
    ],
    customer: null,
    industry: null,
    collaborators: [],
    technos: [
      "Nuxt",
      "VueJs",
      "Javascript",
      "Tailwind",
      "Supabase",
      "Postgress",
      "HTML",
      "CSS",
      "Figma",
    ],
    screens: [
      {
        name: "Page d'acceuil",
        format: "Desktop",
        asset: "/images/note_accueil.png",
      },
      {
        name: "Inscription",
        format: "Desktop",
        asset: "/images/note_insciption.png",
      },
      {
        name: "Notes",
        format: "Desktop",
        asset: "/images/note_note.png",
      },
    ]
  },
  {
    title: "Domaine de Pipangaille",
    img: "/images/img1.png",
    publishDate: new Date('12/01/2022'),
    lastUpdateDate: new Date('01/16/2024'),
    url: "https://domaine-de-pipangaille.fr/",
    github: "https://github.com/ErwanDecoster/Domaine-de-Pipangaille",
    shortDesc: "Creation de l'identité visuel et développement du site vitrine de l'entreprise Domaine de Pipangaille.",
    desc: [
      "Développement du site vitrine de l'entreprise Domaine de Pipangaille.",
    ],
    customer: "Domaine de Pipangaille",
    industry: "Hôtellerie",
    collaborators: [],
    technos: [
      "Nuxt",
      "VueJs",
      "Javascript",
      "Tailwind",
      "HTML",
      "CSS",
      "Figma",
    ],
    screens: [
      {
        name: "Page d'acceuil",
        format: "Desktop",
        asset: "/images/domaine-de-pipangaille_accueil.png",
      },
      {
        name: "Le lieu",
        format: "Desktop",
        asset: "/images/domaine-de-pipangaille_le_lieu.png",
      },
      {
        name: "Hebergement",
        format: "Desktop",
        asset: "/images/domaine-de-pipangaille_hebergement.png",
      },
      {
        name: "Chambre",
        format: "Desktop",
        asset: "/images/domaine-de-pipangaille_chambre[id].png",
      },
      {
        name: "A proximiter",
        format: "Desktop",
        asset: "/images/domaine-de-pipangaille_a_proximiter.png",
      },
      {
        name: "Contact",
        format: "Desktop",
        asset: "/images/domaine-de-pipangaille_contact.png",
      },
    ]
  },
  {
    title: "Phoenix Vêtements et Protection",
    img: "/images/img2.png",
    publishDate: new Date('08/26/2022'),
    lastUpdateDate: null,
    url: "https://www.phoenix-vetements.com/",
    github: "https://github.com/ErwanDecoster/Phoenix-Vetements-et-Protection",
    shortDesc: "Creation de l'identité visuel et développement du site vitrine de l'entreprise Phoenix Vêtements et Protection",
    desc: [
      "Création complète d'un site vitrine de l'entreprise Phoenix Vêtement et Protection",
    ],
    customer: "Phoenix Vêtements et Protection",
    industry: "Vêtements de travail et EPI",
    collaborators: [],
    technos: [
      "VueJs",
      "Javascript",
      "Tailwind",
      "HTML",
      "CSS",
      "Figma",
    ],
    screens: [
      {
        name: "Page d'acceuil",
        format: "Desktop",
        asset: "/images/phoenix-vetements_accueil.png",
      },
      {
        name: "A propos",
        format: "Desktop",
        asset: "/images/phoenix-vetements_a_propo.png",
      },
      {
        name: "Produits",
        format: "Desktop",
        asset: "/images/phoenix-vetements_produit.png",
      },
      {
        name: "Services",
        format: "Desktop",
        asset: "/images/phoenix-vetements_services.png",
      },
      {
        name: "Vêtements sur mesure",
        format: "Desktop",
        asset: "/images/phoenix-vetements_vetement_sur_mesure.png",
      },
      {
        name: "Contact",
        format: "Desktop",
        asset: "/images/phoenix-vetements_contact.png",
      },
    ]
  },
]