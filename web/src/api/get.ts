import { axiosInstance } from "./axios";

export const get = async (endpoint: string) => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};