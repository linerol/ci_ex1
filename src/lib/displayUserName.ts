import { User } from "../interfaces/user.interface";

export const displayUserName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};
