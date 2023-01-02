import { regex } from "./const";

export const validateIp = (ip) => {
  const isValid = regex.test(ip);
  console.log(isValid);
  return isValid;
};
