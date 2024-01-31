export const valueFormatter = (number: number) => {
  return `${new Intl.NumberFormat("us").format(number).toString()}%`;
};
