import prisma from "../config/prisma.js";

export const createUser = async (data) => {
  return prisma.user.create({ data });
};

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const getUserById = async (id) => {
  return prisma.user.findUnique({ where: { id } });
};