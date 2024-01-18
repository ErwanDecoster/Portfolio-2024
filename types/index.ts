export {};

declare global {
  interface collaborator {
    name: string;
    role: string;
    url: string;
  }
  
  interface screen {
    name: string;
    format: string;
    asset: string;
  }
  
  interface project {
    title: string;
    img: string;
    publishDate: Date;
    lastUpdateDate: Date | null;
    url: string;
    github: string
    shortDesc: string
    desc: string[];
    customer: string | null;
    industry: string | null;
    collaborators: collaborator[];
    technos: string[];
    screens: screen[];
  }
}