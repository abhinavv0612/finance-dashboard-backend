import { getDashboardService } from "../services/dashboard.service.js";

export const getDashboard = async (req, res) => {
  try {
    const data = await getDashboardService();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};