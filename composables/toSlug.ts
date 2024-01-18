export default function (str: string) {
  str = str.replaceAll(' ', '-')
  str = str.replaceAll('_', '-')
  str = str.replaceAll('\'', '-')
  str = str.toLowerCase()
  return str;
}