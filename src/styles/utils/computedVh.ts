export default function computedVh(value: number) {
  return `var(--vh, 1vh) * ${value}`;
}
