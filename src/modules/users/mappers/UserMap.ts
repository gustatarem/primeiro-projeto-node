import User from '../infra/typeorm/entities/User';

interface IUserMap {
  id: string;
  name: string;
  avatar: string;
}

export default class UserMap {
  public static toDTO(user: User): IUserMap {
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
    };
  }
}
