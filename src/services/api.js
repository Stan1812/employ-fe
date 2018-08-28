import request from '../utils/request';
const baseUrl = '127.0.0.1';
export function query() {
  return request('/api/users');
}
export async function login({ data }) {
  return await request(`${baseUrl}/login`, { data });
}
