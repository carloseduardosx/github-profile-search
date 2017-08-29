import axios from 'axios';
import { constants as gitHubConstants } from './github';

const gitHubConfig = {
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
};

export const get = (baseUrl, endpoint, config) => {
  switch (baseUrl) {
    case gitHubConstants.apiUrl:
      return axios.get(`${baseUrl}/${endpoint}`, config || gitHubConfig);
    default:
      return axios.get(`${baseUrl}/${endpoint}`, config);
  }
};
