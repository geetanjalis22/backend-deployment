import { Model, Document } from "mongoose";

class BaseService<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>) {
    return this.model.create(data);
  }

  async findAll() {
    return this.model.find();
  }

  async findById(id: string) {
    return this.model.findById(id);
  }

  async update(id: string, data: Partial<T>) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}

export default BaseService;
