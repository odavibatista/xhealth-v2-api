export const validateNumber = (number: string): boolean => {
  return /^[0-9a-zA-Z-{1,10}]+$/.test(number);
};