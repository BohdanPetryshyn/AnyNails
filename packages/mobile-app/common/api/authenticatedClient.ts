import createAppClient from './createAppClient';
import { AxiosRequestConfig } from 'axios';
import { selectAccessToken } from '../../auth/store/slice';
import { store } from '../store/store';

const appClient = createAppClient();

function addAuthHeaderFromStore(
  config: AxiosRequestConfig,
): AxiosRequestConfig {
  const accessToken = selectAccessToken(store.getState());

  if (!accessToken) {
    throw new Error(
      `Access tokes was not defined in store. AccessToken: ${accessToken}`,
    );
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      ['Authorization']: `Bearer ${accessToken}`,
    },
  };
}

appClient.interceptors.request.use(addAuthHeaderFromStore);

export default appClient;
