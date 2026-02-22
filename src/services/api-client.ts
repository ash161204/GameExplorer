import axios, { type AxiosRequestConfig } from "axios";
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class apiClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data.results);
  }
}

const createApiClient = (endpoint: string) => new apiClient(endpoint);

export default createApiClient;
