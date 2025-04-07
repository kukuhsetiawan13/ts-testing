import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository {
  async findByEmail(email: string) {
    return await this.findOne("user", email);
  }
}

export default new UserRepository();
