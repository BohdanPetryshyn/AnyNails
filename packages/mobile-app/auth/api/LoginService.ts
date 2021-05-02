import appClient from '../../common/api/appClient';
import { AuthResponse } from '../entities/AuthResponse';

const BASE_PATH = '/login';

export async function loginWithGoogleAccessToken(
  accessToken: string,
): Promise<AuthResponse> {
  const url = `${BASE_PATH}/google`;
  const response = await appClient.post(url, { accessToken });
  return AuthResponse.fromPlain(response.data);
}
