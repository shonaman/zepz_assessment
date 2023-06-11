import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

export const getWithHeaders = async (url: any, headers: any) => {
  const response = await axios.get(url.url, url.headers);
  return camelcaseKeys(response, { deep: true });
};
