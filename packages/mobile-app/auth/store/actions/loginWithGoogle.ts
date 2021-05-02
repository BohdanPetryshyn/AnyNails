import { AppThunk } from '../../../common/store/types';
import { accessTokenReceived } from '../slice';
import * as LoginService from '../../api/LoginService';

export default (
  accessToken: string,
): AppThunk<Promise<void>> => async dispatch => {
  const authResponse = await LoginService.loginWithGoogleAccessToken(
    accessToken,
  );

  dispatch(accessTokenReceived({ accessToken: authResponse.accessToken }));
};
