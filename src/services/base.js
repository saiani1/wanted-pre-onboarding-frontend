import axios from 'axios';

// baseurl
export const baseURL = 'https://pre-onboarding-selection-task.shop/';

// 요청
export const basicRequest = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
