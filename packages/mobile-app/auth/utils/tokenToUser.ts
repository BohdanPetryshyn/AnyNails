import { User } from '../entities/User';
import jwtDecode from 'jwt-decode';

export function tokenToUser(accessToken: string): User {
  const payload = jwtDecode(accessToken) as User;

  console.log('payload: ', payload);

  return User.fromPlain(payload);
}
