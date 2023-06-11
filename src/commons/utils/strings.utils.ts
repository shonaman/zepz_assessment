export const toNumbersArray = (input: string) =>
  !input ? [] : input.split(',').map(Number);
