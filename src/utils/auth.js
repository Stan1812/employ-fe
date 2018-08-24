import config from '../config';
import { getCookie, delCookie } from './common';

export function getAuthHeader(csrf_token) {
  return {
    headers: {
      'x-csrf-token': csrf_token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
}

export function authenticated() {
  const csrf_token = getCookie('csrf_token');
  if (!csrf_token) {
    redirectLogin();
  }
}

export function logOut() {
  delCookie({
    name: 'csrf_token',
    path: '/',
    domain: '127.0.0.1',
  });
  authenticated();
}
