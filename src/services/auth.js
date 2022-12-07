import { basicRequest } from './base';

const SERVICE = '/auth';

export const signup = async (email, password) => {
  const res = await basicRequest.post(`${SERVICE}/signup`, { email, password });
  return res;
};

export const signin = async (email, password) => {
  const res = await basicRequest.post(`${SERVICE}/signin`, { email, password });
  return res;
};
