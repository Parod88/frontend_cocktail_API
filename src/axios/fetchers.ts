import axios from "axios";

type HttpHeaders = {
  [key: string]: string;
};

type RequestConfig = {
  headers: HttpHeaders;
};

export async function get<T>(path: string, config?: RequestConfig): Promise<T> {
  const { data } = await axios.get<T>(path, config);
  return data;
}
