import {
  createRecordService,
  getRecordsService,
} from "../services/record.service.js";
import { createRecordSchema } from "../validation/record.validation.js";
import { updateRecordService,deleteRecordService } from "../services/record.service.js";

export const createRecord = async (req, res) => {
  try {
    const { error } = createRecordSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const record = await createRecordService(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getRecords = async (req, res) => {
  try {
    const {
      type,
      category,
      search,
      startDate,
      endDate,
      page = 1,
      limit = 10,
    } = req.query;

    const filters = {};

    if (type) filters.type = type;

     // Search support
    if (search) {
      filters.OR = [
        { category: { contains: search, mode: "insensitive" } },
        { notes: { contains: search, mode: "insensitive" } },
      ];
    }

    if (category) filters.category = category;

    if (startDate && endDate) {
      filters.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    const skip = (page - 1) * limit;

    const records = await getRecordsService(filters, {
      skip: Number(skip),
      take: Number(limit),
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await updateRecordService(id, req.body);

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteRecordService(id);

    res.json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};