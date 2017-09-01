import axios from 'axios';
import { gitHubApiUrl } from './constants';

const gitHubConfig = {
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
};

export const get = (baseUrl, endpoint, config) => {
  switch (baseUrl) {
    case gitHubApiUrl:
      return axios.get(`${baseUrl}/${endpoint}`, config || gitHubConfig);
    default:
      return axios.get(`${baseUrl}/${endpoint}`, config);
  }
};

export const put = (baseUrl, endpoint, body, config) => {
  switch (baseUrl) {
    case gitHubApiUrl:
      return axios.put(`${baseUrl}/${endpoint}`, body, config || gitHubConfig);
    default:
      return axios.put(`${baseUrl}/${endpoint}`, body, config);
  }
};
