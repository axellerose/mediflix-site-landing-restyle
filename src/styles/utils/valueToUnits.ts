export default function createValueToUnits(units: string = "px") {
  return function valueToUnits(value?: string | number) {
    if (typeof value === "number") {
      return `${value}${units}`;
    }
    return value;
  };
}

export const valueToPx = createValueToUnits();
