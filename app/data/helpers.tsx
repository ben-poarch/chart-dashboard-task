import { faker } from "@faker-js/faker";

export const randomNumber = (): number => {
  return faker.number.float({ min: -10, max: 110 });
};
