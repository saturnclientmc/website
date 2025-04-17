export default function smartSplit(
  str: string,
  separator: string,
  limit: number
) {
  const parts = str.split(separator);
  if (parts.length <= limit) return parts;

  const head = parts.slice(0, limit - 1);
  const tail = parts.slice(limit - 1).join(separator);
  return [...head, tail];
}
