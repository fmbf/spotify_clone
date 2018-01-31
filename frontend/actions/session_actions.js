import * as APISessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APISessionUtil.signup(user)
    .then(serverUser => dispatch(receiveCurrentUser(serverUser)),
           err =>  dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APISessionUtil.login(user)
    .then(serverUser => dispatch(receiveCurrentUser(serverUser)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APISessionUtil.logout()
    .then(user => dispatch(receiveCurrentUser(null)))
);
