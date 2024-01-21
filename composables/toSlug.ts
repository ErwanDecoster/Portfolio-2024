export default function (str: string) {
  str = str.toLowerCase() 
  str = str.replaceAll(/é|ê|è/gm, 'e')
  str = str.replaceAll(/à/gm, 'a')
  str = str.replaceAll(' ', '-')
  str = str.replaceAll('_', '-')
  str = str.replaceAll('\'', '-')
  return str;
}