import { projects } from '@/assets/js/projects';

export default function () {  
  const pro = projects;

  pro.sort((a, b) =>
    b.publishDate.getTime() - a.publishDate.getTime()
    // b.lastUpdateDate.getTime() - a.lastUpdateDate.getTime()
  )

  return projects.slice(0, 3)
}