import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_API_URL } from './constants'

const instance: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

function getOptions(endpoint: string): AxiosRequestConfig {
  const preset: AxiosRequestConfig = {
    url: endpoint,
    method: 'GET',
    headers: {},
    data: undefined,
  };
  return preset;
}
//TODO add error handling
async function sendRequest(endpoint: string): Promise<any> {
  const config: AxiosRequestConfig = getOptions(endpoint);
  const { data } = await instance(config);
  return data;
}

export default sendRequest;