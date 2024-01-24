import {  } from "@/types/index"

export const projects: project[] = [
  {
    title: "Message App",
    img: "/images/messages_app_messages.png",
    publishDate: new Date('11/01/2023'),
    lastUpdateDate: new Date('01/24/2024'),
    url: "https://messages-app-beta.vercel.app/",
    github: "https://github.com/ErwanDecoster/MessagesApp",
    shortDesc: "Développement d'un site d'échange de messages instantanés.",
    desc: [
      "Message App est un site web d'échange de messages instantanés entre différents utilisateurs. Les messages peuvent être envoyés, supprimés et modifiés. Les nouveaux messages apparaissent directement chez le destinataire sans nécessiter de rafraîchissement."
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
    screens: {
      desktop: [
        {
          name: "accueil",
          asset: "/images/messages_app_accueil.png"
        },
        {
          name: "inscription",
          asset: "/images/messages_app_inscription.png"
        },
        {
          name: "messages",
          asset: "/images/messages_app_messages.png"
        },
      ],
      mobile: [],
    }
  },
  {
    title: "Who's coming",
    img: "/images/who_s_comming_mockup_1.webp",
    publishDate: new Date('07/15/2023'),
    lastUpdateDate: new Date('08/03/2023'),
    url: "https://who-s-coming.vercel.app/",
    github: "https://github.com/ErwanDecoster/Who-s-coming",
    shortDesc: "Développement d'un site de gestion d'événements",
    desc: [
      "Il s'agit ici d'un site de gestion d'événements, permettant l'envoi d'invitations et l'ajout à l'événement de ce qui est nécessaire. Il s'agit là des choses manquantes pour la bonne organisation de l'événement. Cela peut être utilisé pour demander aux invités ce qu'ils doivent apporter. L'organisateur peut ainsi savoir ce qui lui manquera pour son événement.",
      "Aucun compte n'est requis pour les invités. Ils recevront chacun une invitation par SMS qu'ils devront accepter ou décliner.",
      "L'organisateur a la possibilité d'accepter les 'plus 1' et peut ainsi savoir exactement le nombre de participants à l'événement."
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
    screens: {
      desktop: [
        {
          name: "Page d'acceuil",
          asset: "/images/who_s_comming_accueil.png",
        },
        {
          name: "Connection",
          asset: "/images/who_s_comming_connection.png",
        },
        {
          name: "Inscription",
          asset: "/images/who_s_comming_insrciption.png",
        },
        {
          name: "Evenements",
          asset: "/images/who_s_comming_evenements.png",
        },
      ],
      mobile: []
    }
  },
  {
    title: "42 So-long",
    img: "/images/so_long.webp",
    publishDate: new Date('05/01/2023'),
    lastUpdateDate: new Date('05/01/2023'),
    url: "",
    github: "https://github.com/ErwanDecoster/42_so_long",
    shortDesc: "Création d'un jeu 2D au sein de l'école 42 Lyon",
    desc: [
      "So Long est un projet de l'école 42 Lyon Auvergne Rhône-Alpes. Il consiste à réaliser un jeu vidéo 2D en respectant les contraintes du sujet.",
      "Le jeu doit être en 2D avec une vue de haut ou de devant. Le personnage doit pouvoir se déplacer sur l'ensemble de la carte sans passer au travers des murs. L'objectif est de ramasser tous les 'collectibles' pour débloquer la porte de sortie.",
      "Lorsque l'utilisateur lance le jeu, il doit choisir la carte. Le programme se charge de vérifier la faisabilité de la carte en utilisant l'algorithme de propagation.",
      "Il était possible de réaliser des bonus : ajout de patrouilles/ennemis, ajout d'animations et affichage du nombre de pas sur l'écran."
    ],
    customer: null,
    industry: null,
    collaborators: [],
    technos: [
      "C",
      "Figma",
    ],
    screens: {
      desktop: [
        {
          name: "Classique",
          asset: "/images/so_long_1.png",
        },
        {
          name: "Classique",
          asset: "/images/so_long_2.png",
        },
        {
          name: "Bonus",
          asset: "/images/so_long_bonus_1.png",
        },
        {
          name: "Bonus",
          asset: "/images/so_long_bonus_2.png",
        },
      ],
      mobile: []
    }
  },
  {
    title: "Les Nuits de Fourvière",
    img: "/images/les_nuits_de_fourviere_mockup_2.png",
    publishDate: new Date('03/17/2023'),
    lastUpdateDate: new Date('03/20/2023'),
    url: "https://42-x-sup-de-pub.vercel.app/",
    github: "https://github.com/ErwanDecoster/42_x_Sup_de_Pub",
    shortDesc: "Développement de la nouvelle identité du site en collaboration avec Sup de Pub Lyon.",
    desc: [
      "Il s'agit d'un projet réalisé entre l'école 42 Lyon Auvergne Rhône-Alpes et Sup de Pub Lyon. Le projet consiste à développer une maquette réalisée par les étudiants de l'école Sup de Pub. Les équipes de développeurs et de designers collaborent ensemble pour réaliser le site de la façon la plus conforme à la maquette en un temps défini d'une semaine. L'équipe des développeurs est libre sur le choix des technologies, seuls 2 des développeurs avaient déjà fait du web avant ce projet. Le développement du site Les Nuits de Fourvière fut un superbe moment d'échange de connaissances permettant à chacun de développer son savoir."
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
    screens: {
      desktop: [
        {
          name: "Accueil",
          asset: "/images/les_nuits_de_fourviere_accueil.png",
        },
        {
          name: "Infos Pratiques",
          asset: "/images/les_nuits_de_fourviere_infos_pratiques.png",
        },
        {
          name: "Qui somme nous",
          asset: "/images/les_nuits_de_fourviere_qui_somme_nous.png",
        },
        {
          name: "Programme et Billetterie",
          asset: "/images/les_nuits_de_fourviere_prog_et_billetterie.png",
        },
      ],
      mobile: [
        {
          name: "Accueil",
          asset: "/images/m_les_nuits_de_fourviere_accueil.png",
        },
        {
          name: "Infos Pratiques",
          asset: "/images/m_les_nuits_de_fourviere_infos_pratiques.png",
        },
        {
          name: "Qui somme nous",
          asset: "/images/m_les_nuits_de_fourviere_qui_somme_nous.png",
        },
        {
          name: "Programme et Billetterie",
          asset: "/images/m_les_nuits_de_fourviere_prog_et_billetterie.png",
        },
      ],
    }
  },
  {
    title: "Notes",
    img: "/images/notes_mockup_2.png",
    publishDate: new Date('03/07/2023'),
    lastUpdateDate: new Date('03/07/2023'),
    url: "https://notes-tawny-delta.vercel.app/",
    github: "https://github.com/ErwanDecoster/Notes",
    shortDesc: "Développement d'un site de prise de notes.",
    desc: [
      "Il s'agit là d'un site de prise de notes rapide. L'expérience utilisateur était un point important du projet, c'est pour cette raison que la sauvegarde automatique a été utilisée sur l'ensemble du site. Les utilisateurs peuvent créer des notes de plusieurs types : liste, liste de cases à cocher, texte. Les notes peuvent changer de type une fois créées, rendant l'utilisation du site aussi simple que possible et sans aucune frustration."
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
    screens: {
      desktop: [
        {
          name: "Page d'acceuil",
          asset: "/images/notes_accueil.png",
        },
        {
          name: "Inscription",
          asset: "/images/notes_inscription.png",
        },
        {
          name: "Notes",
          asset: "/images/notes_notes.png",
        },
      ],
      mobile: [
        {
          name: "Page d'acceuil",
          asset: "/images/m_notes_accueil.png",
        },
        {
          name: "Inscription",
          asset: "/images/m_notes_inscription.png",
        },
        {
          name: "Notes",
          asset: "/images/m_notes_notes.png",
          
        },
      ],
    }
  },
  {
    title: "Domaine de Pipangaille",
    img: "/images/domaine_de_pipangaille_mockup_2.png",
    publishDate: new Date('12/01/2022'),
    lastUpdateDate: new Date('01/25/2024'),
    url: "https://domaine-de-pipangaille.fr/",
    github: "https://github.com/ErwanDecoster/Domaine-de-Pipangaille",
    shortDesc: "Création de l'identité visuelle et développement du site vitrine de l'entreprise Domaine de Pipangaille.",
    desc: [
      "Développement du site vitrine de l'entreprise Domaine de Pipangaille. Le site présente les services, produits et informations pertinents liés à l'entreprise, offrant ainsi une vitrine en ligne pour les visiteurs.",
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
    screens: { 
      desktop: [
        {
          name: "Page d'acceuil",
          asset: "/images/domaine_de_pipangaille_accueil.png",
        },
        {
          name: "Le lieu",
          asset: "/images/domaine_de_pipangaille_le_lieu.png",
        },
        {
          name: "Hebergements",
          asset: "/images/domaine_de_pipangaille_hebergements.png",
        },
        {
          name: "Chambre",
          asset: "/images/domaine_de_pipangaille_chambre.png",
        },
        {
          name: "A proximiter",
          asset: "/images/domaine_de_pipangaille_a_proximiter.png",
        },
        {
          name: "Contact",
          asset: "/images/domaine_de_pipangaille_contact.png",
        },
      ],
      mobile: [
        {
          name: "Page d'acceuil",
          asset: "/images/m_domaine_de_pipangaille_accueil.png",
        },
        {
          name: "Le lieu",
          asset: "/images/m_domaine_de_pipangaille_le_lieu.png",
        },
        {
          name: "Hebergements",
          asset: "/images/m_domaine_de_pipangaille_hebergements.png",
        },
        {
          name: "Chambre",
          asset: "/images/m_domaine_de_pipangaille_chambre.png",
        },
        {
          name: "A proximiter",
          asset: "/images/m_domaine_de_pipangaille_a_proximiter.png",
        },
        {
          name: "Contact",
          asset: "/images/m_domaine_de_pipangaille_contact.png",
        },
      ],
    }
  },
  {
    title: "Phoenix Vêtements et Protection",
    img: "/images/phoenix_vetements_mockup_1.webp",
    publishDate: new Date('08/26/2022'),
    lastUpdateDate: new Date('08/26/2022'),
    url: "https://www.phoenix-vetements.com/",
    github: "https://github.com/ErwanDecoster/Phoenix-Vetements-et-Protection",
    shortDesc: "Création de l'identité visuelle et développement du site vitrine de l'entreprise Phoenix Vêtements et Protection",
    desc: [
      "Création complète d'un site vitrine pour l'entreprise Phoenix Vêtements et Protection. Le projet inclut le développement du site, ainsi que la conception et la mise en place de l'identité visuelle, offrant une présentation complète et attrayante des produits et services de l'entreprise en ligne.",
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
    screens: {
      desktop: [
        {
          name: "Page d'acceuil",
          asset: "/images/phoenix_vetements_accueil.png",
        },
        {
          name: "A propos",
          asset: "/images/phoenix_vetements_a_propos.png",
        },
        {
          name: "Produits",
          asset: "/images/phoenix_vetements_produit.png",
        },
        {
          name: "Services",
          asset: "/images/phoenix_vetements_services.png",
        },
        {
          name: "Vêtements sur mesure",
          asset: "/images/phoenix_vetements_vetement_sur_mesure.png",
        },
        {
          name: "Contact",
          asset: "/images/phoenix_vetements_contact.png",
        },
      ],
      mobile: [
        {
          name: "Page d'acceuil",
          asset: "/images/m_phoenix_vetements_accueil.png",
        },
        {
          name: "A propos",
          asset: "/images/m_phoenix_vetements_a_propos.png",
        },
        {
          name: "Produits",
          asset: "/images/m_phoenix_vetements_produit.png",
        },
        {
          name: "Services",
          asset: "/images/m_phoenix_vetements_services.png",
        },
        {
          name: "Vêtements sur mesure",
          asset: "/images/m_phoenix_vetements_vetement_sur_mesure.png",
        },
        {
          name: "Contact",
          asset: "/images/m_phoenix_vetements_contact.png",
        },
      ],
    }
  },
]