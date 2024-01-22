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
  
  interface project {
    title: string;
    img: string;
    publishDate: Date;
    lastUpdateDate: Date;
    url: string;
    github: string
    shortDesc: string
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