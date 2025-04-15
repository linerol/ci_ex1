import { User } from "../interfaces/user.interface";

export const displayUserName = (user: User): string => {
  const validName = `${user.firstName} ${user.lastName}`;
  return validName;
};
