import authenticatedClient from '../../common/api/authenticatedClient';
import { Role } from '../entities/User';
import { AuthResponse } from '../entities/AuthResponse';

const BASE_PATH = '/role';

export async function selectRole(role: Role): Promise<AuthResponse> {
  const url = `${BASE_PATH}/select`;
  const response = await authenticatedClient.post(url, { role });
  return AuthResponse.fromPlain(response.data);
}
