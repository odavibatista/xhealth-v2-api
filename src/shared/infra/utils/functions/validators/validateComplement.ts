export const validateComplement = (number: string): boolean => {
  return /^[0-9a-zA-Z-{0,100}]+$/.test(number);
};
