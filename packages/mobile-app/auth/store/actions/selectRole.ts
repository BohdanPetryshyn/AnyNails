import { AppThunk } from '../../../common/store/types';
import { Role } from '../../entities/User';
import * as RolesService from '../../api/RolesService';
import { accessTokenReceived } from '../slice';

export default (role: Role): AppThunk => async dispatch => {
  const updatedAccessToken = await RolesService.selectRole(role);

  dispatch(
    accessTokenReceived({ accessToken: updatedAccessToken.accessToken }),
  );
};
