import axios from 'axios';

export const baseURL = 'https://pre-onboarding-selection-task.shop/';

export const basicRequest = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
