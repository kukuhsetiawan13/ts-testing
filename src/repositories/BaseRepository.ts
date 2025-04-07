import prisma from "../db";

export default abstract class BaseRepository {
  async findMany<Model>(model: string, filters: any = {}) {
    return await prisma[model].findMany({
      where: filters,
    });
  }

  async findOne<Model>(model: string, id: string) {
    return await prisma[model].findUnique({
      where: { id },
    });
  }
}
