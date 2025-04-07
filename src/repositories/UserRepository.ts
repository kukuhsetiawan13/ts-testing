import BaseRepository from "./BaseRepository";
import {} from "@prisma/client";

class UserRepository extends BaseRepository {
  constructor() {
    super("User");
  }

  async findByEmail(email: string) {
    return await this.findOne(email);
  }
}

export default new UserRepository();
