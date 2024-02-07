import {  } from "@/types/index"

export const projects: project[] = [
  {
    title: "Message App",
    img: "/images/message_app_mockup_9.webp",
    publishDate: new Date('11/01/2023'),
    lastUpdateDate: new Date('01/24/2024'),
    url: "https://messages-app-beta.vercel.app/",
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/MessagesApp",
      }
    ],
    shortDesc: "Développement d'un site d'échange de messages instantanés.",
    desc: [
      "Message App est une plateforme en ligne dédiée à l'échange de messages instantanés entre utilisateurs. Elle permet l'envoi, la suppression et la modification des messages. L'interface est conçue de manière à ce que les nouveaux messages s'affichent instantanément chez le destinataire, sans nécessiter de rafraîchissement de la page.",
      "Ce projet avait également pour objectif de me former sur l'utilisation de base de données en temps réel.",
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
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/Who-s-coming",
      },
      {
        name: "Figma",
        url:  "https://www.figma.com/file/O96sl8paur22MGavI9G9TT/Who%E2%80%99s-coming?type=design&node-id=0%3A1&mode=design&t=f71L1C0hymFNV7xa-1",
      },
    ],
    shortDesc: "Développement d'un site de gestion d'événements.",
    desc: [
      "Il s'agit d'une plateforme de gestion d'événements permettant d'envoyer des invitations et d'ajouter les éléments nécessaires à l'événement. Cela inclut les éléments manquants pour assurer une organisation optimale de l'événement, ainsi que la possibilité de demander aux invités ce qu'ils doivent apporter. Cela permet à l'organisateur de connaître les besoins de son événement.",
      "Aucun compte n'est requis pour les invités, qui recevront chacun une invitation par SMS à accepter ou à décliner. L'organisateur a également la possibilité d'accepter les 'plus 1', lui permettant ainsi de connaître précisément le nombre de participants à l'événement.",
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
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/42_so_long",
      },
      {
        name: "Figma",
        url:  "https://www.figma.com/file/cXiC447eX49ehafv1jZmVD/Untitled?type=design&mode=design&t=f71L1C0hymFNV7xa-1",
      },
    ],
    shortDesc: "Création d'un jeu 2D au sein de l'école 42 Lyon.",
    desc: [
      "So Long est un projet développé dans le cadre de l'école 42 Lyon Auvergne Rhône-Alpes. Il consiste à concevoir un jeu vidéo 2D en respectant les contraintes imposées par le sujet.",
      "Le jeu doit offrir une perspective en 2D avec une vue de haut ou de face. Le personnage doit pouvoir se déplacer sur toute la carte sans traverser les murs, avec pour objectif de collecter tous les \"collectibles\" pour débloquer la sortie.",
      "Au lancement du jeu, l'utilisateur doit choisir la carte. Le programme vérifie alors la faisabilité de la carte à l'aide de l'algorithme de propagation.",
      "Des fonctionnalités supplémentaires pouvaient être implémentées, telles que l'ajout de patrouilles/ennemis, d'animations et l'affichage du nombre de pas sur l'écran.",
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
          name: "Bonus",
          asset: "/images/so_long_bonus_1.png",
        },
        {
          name: "Bonus 2",
          asset: "/images/so_long_bonus_2.png",
        },
      ],
      mobile: []
    }
  },
  {
    title: "Les Nuits de Fourvière",
    img: "/images/les_nuits_de_fourviere_mockup_8.webp",
    publishDate: new Date('03/17/2023'),
    lastUpdateDate: new Date('03/20/2023'),
    url: "https://42-x-sup-de-pub.vercel.app/",
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/42_x_Sup_de_Pub",
      },
      {
        name: "Figma",
        url:  "https://www.figma.com/file/CqnNhX1CkzN8CF0V9uHEnO/les-nuits-de-fourvi%C3%A8res?type=design&node-id=1%3A83&mode=design&t=BWhHEfvoxlSc9Xdi-1",
      },
    ],
    shortDesc: "Projet fictif de développement d'une identité graphique, en collaboration avec Sup de Pub Lyon.",
    desc: [
      "Ce projet est le fruit d'une collaboration entre l'école 42 Lyon Auvergne Rhône-Alpes et Sup de Pub Lyon. Son objectif est de transformer la maquette conçue par les étudiants de Sup de Pub en un site web fonctionnel. Les équipes de développement et de design unissent leurs compétences pour concrétiser le projet dans un délai d'une semaine, en veillant à respecter fidèlement la conception initiale.",
      "Les développeurs bénéficient d'une liberté totale dans le choix des technologies à utiliser, même si seuls deux d'entre eux avaient une expérience antérieure dans le domaine du développement web. Cette collaboration autour du développement du site pour Les Nuits de Fourvière a été une occasion enrichissante d'échange de connaissances, permettant à chaque participant de développer ses compétences et de contribuer au succès du projet.",
    ],
    customer: null,
    industry: null,
    collaborators: [
      {
        name: "Hervé Dupuy",
        role: "Développeur",
        url: "https://www.linkedin.com/in/herv%C3%A9-dupuy-971789236/",
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
        url: "https://www.linkedin.com/in/maxime-bruel/",
      },
      {
        name: "Louis DEMANGE",
        role: "Designer",
        url: "https://www.linkedin.com/in/louis-demange/",
      },
      {
        name: "Léa NIETO",
        role: "Designer",
        url: "https://www.linkedin.com/in/leanieto/",
      },
      {
        name: "Ellora GUIGUET",
        role: "Designer",
        url: "https://www.linkedin.com/in/ellora-guiguet-2b1970196/",
      },
      {
        name: "Julie DA SILVA",
        role: "Designer",
        url: "https://www.linkedin.com/in/julie-da-silva-679a42188/",
      },
      {
        name: "Cécile LEMAITRE",
        role: "Designer",
        url: "https://www.linkedin.com/in/c%C3%A9cile-lemaitre-b94251160/",
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
    img: "/images/notes_mockup_7-2.webp",
    publishDate: new Date('03/07/2023'),
    lastUpdateDate: new Date('03/07/2023'),
    url: "https://notes-tawny-delta.vercel.app/",
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/Notes",
      },
      {
        name: "Figma",
        url:  "https://www.figma.com/file/67P9ZZh4fBWMF4wQQuwoTI/Notes?type=design&node-id=0%3A1&mode=design&t=f71L1C0hymFNV7xa-1",
      },
    ],
    shortDesc: "Développement d'un site de prise de notes.",
    desc: [
      "Notes est une plateforme de prise de notes rapide, où l'expérience utilisateur a été au cœur du développement. Pour garantir une expérience fluide, la fonction de sauvegarde automatique a été intégrée à l'ensemble du site. Les utilisateurs ont la possibilité de créer des notes de différents types, tels que des listes, des listes de cases à cocher ou simplement du texte. De plus, la flexibilité du système permet aux utilisateurs de changer le type de leurs notes une fois créées, offrant ainsi une utilisation intuitive et sans frustration."
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
    img: "/images/domaine_de_pipangaille_mockup_5.webp",
    publishDate: new Date('12/01/2022'),
    lastUpdateDate: new Date('01/25/2024'),
    url: "https://domaine-de-pipangaille.fr/",
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/Domaine-de-Pipangaille",
      },
      {
        name: "Figma",
        url:  "https://www.figma.com/file/BHaZm46N0kIMT2QY4ehNFE/Domaine-de-Pipangaille?type=design&node-id=59%3A3425&mode=design&t=f71L1C0hymFNV7xa-1",
      }
    ],
    shortDesc: "Création de l'identité visuelle et développement du site vitrine de l'entreprise Domaine de Pipangaille.",
    desc: [
      "Le Domaine de Pipangaille, établissement de chambres d'hôtes situé à Andancette, dans la Drôme en France, a souhaiter développé son site web dans le but de mieux présenter ses hébergements et de réduire les réservations via les Agences de Tourisme en Ligne (OTAs). L'objectif principal du site est de mettre en valeur le domaine et ses hébergements, tout en proposant des suggestions de lieux à visiter à proximité. Une page de réservation, avec un formulaire de recherche rapide de disponibilité, a été intégrée à la plateforme.",
      "Plusieurs éléments clés ont été pris en compte dans le développement du site. Tout d'abord, un design responsive assure une expérience optimale sur toutes les tailles d'écran. Ensuite, l'utilisation de Nuxt a permis d'optimiser la vitesse du site en préchargeant le contenu des pages liées à l'écran.",
      "L'accessibilité a été une priorité, avec l'ajout de textes alternatifs pour chaque image et des labels Aria pour tous les boutons sans texte visible. Des descriptions meta ont également été intégrées à chaque page pour améliorer le classement dans les moteurs de recherche et garantir une apparence attrayante lors du partage sur les réseaux sociaux ou via des messages.",
      "Enfin, une attention particulière a été portée au confort visuel, avec le choix de couleurs assurant une lisibilité optimale du texte à tout moment. Des ombres ont été ajoutées pour faciliter la lecture du texte superposé sur les images, tout en maintenant un bon contraste.",
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
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/Phoenix-Vetements-et-Protection",
      }
    ],
    shortDesc: "Création de l'identité visuelle et développement du site vitrine de Phoenix Vêtements et Protection.",
    desc: [
      "Réalisé de A à Z, le site vitrine de l'entreprise Phoenix Vêtements et Protection offre une expérience complète. Ce projet englobe le développement du site ainsi que la conception et l'implémentation de l'identité visuelle, garantissant une présentation en ligne attrayante et exhaustive des produits et services de l'entreprise.",
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
  {
    title: "Portfolio 2022",
    img: "/images/portfolio_2022_mockup_5.webp",
    publishDate: new Date('05/03/2022'),
    lastUpdateDate: new Date('05/03/2022'),
    url: "",
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/Phoenix-Vetements-et-Protection",
      },
      {
        name: "Figma",
        url:  "https://www.figma.com/file/QVtNbHqqIeCu0HjKhejkCj/Portfolio-2022?type=design&node-id=0%3A1&mode=design&t=f71L1C0hymFNV7xa-1",
      },
    ],
    shortDesc: "Remonter dans les archives et visualiser mon site personnel des dernières années.",
    desc: [
      "Portfolio 2022 est tout simplement, comme son nom l'indique, mon site personnel de l'année 2022 jusqu'à sa nouvelle version en 2024. Le projet avait pour objectif d'intégrer un certain nombre d'animations et d'interactions avec les utilisateurs afin de captiver leur attention.",
    ],
    customer: null,
    industry: "Dévelopement web",
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
          name: "Acceuil",
          asset: "/images/portfolio_2022_accueil.png",
        },
        {
          name: "Projet",
          asset: "/images/portfolio_2022_projet.png",
        },
        {
          name: "Entreprise",
          asset: "/images/portfolio_2022_entreprise.png",
        },
      ],
      mobile: [
      ],
    }
  },
  {
    title: "Covoit Admin",
    img: "/images/covoit_admin_mockup_11.webp",
    publishDate: new Date('05/02/2022'),
    lastUpdateDate: new Date('05/02/2022'),
    url: "",
    links: [
      {
        name: "Github",
        url:  "https://github.com/ErwanDecoster/Covoit-Admin",
      }
    ],
    shortDesc: "Application windows destiné au administrateur du projet covoit",
    desc: [
      "L'application Covoir Admin est un projet fictif elle permet de modifier la base de donnée Covoit, adeal pour les administateur et le support de Covoit.",
    ],
    customer: null,
    industry: null,
    collaborators: [
      {
        name: "Trsistan Boudra",
        role: "Développeur",
        url: "https://www.linkedin.com/in/tristan-boudra/"
      }
    ],
    technos: [
      "C#",
      "WPF",
      "MYSQL",
    ],
    screens: {
      desktop: [
        {
          name: "Connection",
          asset: "/images/covoit_admin_connection.png",
        },
        {
          name: "Utilisateurs",
          asset: "/images/covoit_admin_utilisateurs.png",
        },
        {
          name: "Modification utilisateur",
          asset: "/images/covoit_admin_edit_user.png",
        },
        {
          name: "Ajout d'utilisateurs",
          asset: "/images/covoit_admin_add_user.png",
        },
        {
          name: "Motorisations",
          asset: "/images/covoit_admin_motorisation.png",
        },
      ],
      mobile: [
      ],
    }
  },
  {
    title: "Covoit",
    img: "/images/covoit_mockup_10.webp",
    publishDate: new Date('04/28/2022'),
    lastUpdateDate: new Date('04/28/2022'),
    url: "",
    links: [
      {
        name: "Github Front",
        url:  "https://github.com/ErwanDecoster/Covoit-Front",
      },
      {
        name: "Github Back",
        url:  "https://github.com/ErwanDecoster/Covoit-Back",
      },
      {
        name: "Figma",
        url:  "https://www.figma.com/file/IlDMB37HhdRwhDEbAcXcsz/CoVoit?type=design&node-id=0%3A1&mode=design&t=f71L1C0hymFNV7xa-1",
      },
    ],
    shortDesc: "Projet fictife de site de covoiturage.",
    desc: [
      "Covoit est directement lié à l'application Covoir Admin, tous deux étant des projets fictifs. Covoit est un site internet de covoiturage.",
    ],
    customer: null,
    industry: null,
    collaborators: [
      {
        name: "Trsistan Boudra",
        role: "Développeur",
        url: "https://www.linkedin.com/in/tristan-boudra/"
      }
    ],
    technos: [
      "VueJs",
      "Tailwind",
      "CSS",
      "PHP",
      "MYSQL",
      "Javascript",
    ],
    screens: {
      desktop: [
      ],
      mobile: [
        {
          name: "Accueil",
          asset: "/images/covoit_home.png",
        },
        {
          name: "Recherche de trajets",
          asset: "/images/covoit_search_trip.png",
        },
        {
          name: "Trajet actuel",
          asset: "/images/covoit_actual_trips.png",
        },
        {
          name: "Crée un trajet",
          asset: "/images/covoit_create_trip.png",
        },
        {
          name: "Ajouter un vehicule",
          asset: "/images/covoit_add_vehicul.png",
        },
        {
          name: "Modifier un vehicule",
          asset: "/images/covoit_edit_vehicul.png",
        },
        {
          name: "Historique des voyages",
          asset: "/images/covoit_trips_history.png",
        },
        {
          name: "Suppresion du compte",
          asset: "/images/covoit_delete_account.png",
        },
      ],
    }
  },
  {
    title: "WaterCollect - Simulateur",
    img: "/images/watercollect_simulateur_mockup_7.webp",
    publishDate: new Date('05/28/2021'),
    lastUpdateDate: new Date('05/28/2021'),
    url: "",
    links: [
      {
        name: "Figma",
        url: "https://www.figma.com/file/obmVmdaFsRdahAhuJwnAo4/WaterCollect-Simulateur?type=design&mode=design&t=f71L1C0hymFNV7xa-1",
      },
    ],
    shortDesc: "Ajout de diferents simulateurs interactif au site Wordpresse de l'entreprise WaterCollect.",
    desc: [
      "Sur le site Wordpress de WaterCollect, nous avons mis en place un simulateur des économies d'eau réalisables grâce à l'installation des équipements WaterCollect. Ce simulateur permet aux clients de visualiser facilement le nombre de mètres cubes d'eau pouvant être économisés par mois et par an, le tout grâce à des sliders permettant de définir certains paramètres.",
    ],
    customer: 'WaterCollect',
    industry: null,
    collaborators: [
    ],
    technos: [
      "WordPress",
      "HTML",
      "CSS",
      "Javascript",
    ],
    screens: {
      desktop: [
        {
          name: "Maquette",
          asset: "/images/watercollect_simulateur.png",
        },
      ],
      mobile: [
      ],
    }
  },
  {
    title: "WaterCollect - Dashboard",
    img: "/images/watercollect_dashboard_mockup_4.webp",
    publishDate: new Date('05/28/2021'),
    lastUpdateDate: new Date('05/28/2021'),
    url: "",
    links: [
    ],
    shortDesc: "Création d'un dashboard avec une partie clients et administrateurs.",
    desc: [
      "Nous avons créé une plateforme de visualisation dédiée aux futurs clients, leur permettant de suivre leurs économies réalisées, le nombre d'équipements installés et ceux en attente d'installation, ainsi que des propositions pour d'autres équipements.",
    ],
    customer: 'WaterCollect',
    industry: null,
    collaborators: [
    ],
    technos: [
      "PHP",
      "HTML",
      "CSS",
      "MYSQL",
      "Javascript",
    ],
    screens: {
      desktop: [
        {
          name: "Connection",
          asset: "/images/watercollect_dashboard_connection.png",
        },
        {
          name: "Dashboard",
          asset: "/images/watercollect_dashboard_dashboard.png",
        },
        {
          name: "Ajout utilisateur",
          asset: "/images/watercollect_dashboard_ajout_utilisateur.png",
        },
      ],
      mobile: [
      ],
    }
  },
]