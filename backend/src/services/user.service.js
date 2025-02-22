import User from "../models/user.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id, name, username, email, avatar, background) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, avatar, background }
  );

const deleteService = (id) => User.findByIdAndDelete(id);

export default { createService, findAllService, findByIdService, updateService, deleteService };
