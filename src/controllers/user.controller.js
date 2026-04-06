import {
  createUserService,
  getAllUsersService,
} from "../services/user.service.js";
import { createUserSchema } from "../validation/user.validation.js";


export const createUser = async (req, res) => {
  try {
    const { error } = createUserSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};