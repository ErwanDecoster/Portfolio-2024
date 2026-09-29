export default function (str: string) {
  str = str.toLowerCase()
  str = str.normalize('NFD').replaceAll(/[̀-ͯ]/gm, '')
  str = str.replaceAll(' ', '-')
  str = str.replaceAll('_', '-')
  str = str.replaceAll('\'', '-')
  // Retire les caractères non sûrs dans une URL (ex : "?" de "Qui Mène ?")
  str = str.replaceAll(/[^a-z0-9-]/gm, '')
  str = str.replaceAll(/^-+|-+$/gm, '')
  return str;
}