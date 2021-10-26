import qs from 'qs';
import _devConfig from '../utils/devConfig';

const { apibaseurl } = _devConfig();
interface Config extends RequestInit {
  data?: object;
}

export const http = async (endpoint: string, { data, headers, ...customerConfig }: Config = {}) => {
  const config = {
    method: 'GET',
    headers: {
      'Contend-Type': data ? 'application/json' : '',
    },
    ...customerConfig,
  };
  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window.fetch(`${apibaseurl}${endpoint}`, config).then(async (res) => {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  return (...[endpoint, config]: Parameters<typeof http>) => {
    return http(endpoint, config);
  };
};
