import prisma from "../db";

export default abstract class BaseRepository {
  protected model: string;

  constructor(model: string) {
    this.model = model;
  }

  async findMany<Model>(filters: any = {}) {
    return await prisma[this.model].findMany({
      where: filters,
    });
  }

  async findOne<Model>(id: string) {
    return await prisma[this.model].findUnique({
      where: { id },
    });
  }
}
