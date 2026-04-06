import * as recordRepo from "../repositories/record.repository.js";

export const createRecordService = async (data) => {
  return recordRepo.createRecord(data);
};

export const getRecordsService = async (filters, pagination) => {
  return recordRepo.getRecords(filters, pagination);
};

export const updateRecordService = async (id, data) => {
  return recordRepo.updateRecord(id, data);
};

export const deleteRecordService = async (id) => {
  return recordRepo.deleteRecord(id);
};