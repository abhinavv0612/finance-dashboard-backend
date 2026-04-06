import prisma from "../config/prisma.js";

export const getDashboardData = async () => {

  const records = await prisma.financialRecord.findMany({
  where: { isDeleted: false },
  });

  const recentTransactions = await prisma.financialRecord.findMany({
  where: { isDeleted: false },
  orderBy: { date: "desc" },
  take: 5,
  });

  let totalIncome = 0;
  let totalExpense = 0;
  const categoryBreakdown = {};

  records.forEach((record) => {
    if (record.type === "INCOME") {
      totalIncome += record.amount;
    } else {
      totalExpense += record.amount;
    }

    if (!categoryBreakdown[record.category]) {
      categoryBreakdown[record.category] = 0;
    }

    categoryBreakdown[record.category] += record.amount;
  });

  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
    categoryBreakdown,
    recentTransactions, 
  };
};