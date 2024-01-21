import { projects } from '@/assets/js/projects';

export default function (formatedTitle: string) {  
  const pro = projects;

  for (let i = 0; i < pro.length; i++) {
    const project = pro[i];
    if (toSlug(project.title) === formatedTitle) {
      if (i === pro.length - 1)
        return projects[0]
      else
        return projects[i + 1]
    }
  }
  return null
}