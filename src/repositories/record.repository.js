import prisma from "../config/prisma.js";

export const createRecord = async (data) => {
  return prisma.financialRecord.create({ data });
};

export const getRecords = async (filters, pagination) => {
  return prisma.financialRecord.findMany({
    where: filters,
    skip: pagination?.skip,
    take: pagination?.take,
    orderBy: {
      date: "desc",
    },
  });
};

export const updateRecord = async (id, data) => {
  return prisma.financialRecord.update({
    where: { id },
    data,
  });
};

export const deleteRecord = async (id) => {
  return prisma.financialRecord.delete({
    where: { id },
  });
};