import { projects } from '@/assets/js/projects';

export default function () {  
  const pro = projects;

  pro.sort((a, b) =>
    b.lastUpdateDate.getTime() - a.lastUpdateDate.getTime()
  )

  return pro;
}