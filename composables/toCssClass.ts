export default function(str: string) {
  str = str.toLowerCase();
  str = str.replaceAll(/ |-|\'/gm, '_');
  str = str.replaceAll('#', 'sharp');
  return str
}