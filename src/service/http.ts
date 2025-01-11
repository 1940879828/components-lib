import type API from "@/types"
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from "axios"

interface ResponseData {
  code: number
  message: string
  data:
    | AxiosResponse<unknown, unknown>
    | Promise<AxiosResponse<unknown, unknown>>
}

interface OverwriteAxiosInstance
  extends Omit<AxiosInstance, "get" | "post" | "delete" | "put"> {
  get<URL extends keyof API>(
    url: URL,
    config?: AxiosRequestConfig<API[URL]["params"]>
  ): Promise<API[URL]["data"]>
  delete<URL extends keyof API>(
    url: URL,
    config?: AxiosRequestConfig<API[URL]["params"]>
  ): Promise<API[URL]["data"]>
  post<URL extends keyof API>(
    url: URL,
    data?: API[URL]["params"],
    config?: AxiosRequestConfig<API[URL]["params"]>
  ): Promise<API[URL]["data"]>
  put<URL extends keyof API>(
    url: URL,
    data?: API[URL]["params"],
    config?: AxiosRequestConfig<API[URL]["params"]>
  ): Promise<API[URL]["data"]>
}

export const request = axios.create({
  timeout: 20000,
  baseURL: import.meta.env.VITE_BASE_URL
})

export const http: OverwriteAxiosInstance = axios.create({
  timeout: 20000,
  baseURL: import.meta.env.VITE_BASE_URL
})

http.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  return config
})

export class NetworkError extends Error {
  name = "NetworkError"
}

http.interceptors.response.use((response: AxiosResponse<ResponseData>) => {
  const { code, message, data } = response.data
  if (code !== 0) {
    throw new NetworkError(message)
  }
  return data
})
