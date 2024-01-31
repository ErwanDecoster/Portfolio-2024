export {};

declare global {
  interface collaborator {
    name: string;
    role: string;
    url: string;
  }
  
  interface screen {
    name: string;
    asset: string;
  }
  
  interface link {
    name: string;
    url: string;
  }

  interface project {
    title: string;
    img: string;
    publishDate: Date;
    lastUpdateDate: Date;
    url: string | null;
    links: link[] | null;
    shortDesc: string;
    desc: string[];
    customer: string | null;
    industry: string | null;
    collaborators: collaborator[];
    technos: string[];
    screens: {
      desktop: screen[];
      mobile: screen[];
    };
  }
}