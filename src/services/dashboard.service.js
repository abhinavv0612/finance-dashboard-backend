import { getDashboardData } from "../repositories/dashboard.repository.js";

export const getDashboardService = async () => {
  return getDashboardData();
};