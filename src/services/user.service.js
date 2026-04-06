import * as userRepository from "../repositories/user.repository.js";

export const createUserService = async (data) => {
  // future: validation, business rules
  return userRepository.createUser(data);
};

export const getAllUsersService = async () => {
  return userRepository.getAllUsers();
};