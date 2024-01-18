export default function (date: Date | undefined) {
  if (date)
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
}