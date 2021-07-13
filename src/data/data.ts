import { Latest, Symbols } from "@/domain";
import axios, { AxiosResponse } from "axios";

export const API = "http://data.fixer.io/api/";
export const API_KEY = "access_key=cdc6a68a462df1d36ed44f1b49707093";

export const SYMBOLS_API_URL = `${API}/symbols?${API_KEY}`;
const getSymbols = (): Promise<AxiosResponse<Symbols>> => {
  return axios.get<Symbols>(SYMBOLS_API_URL);
};

export const LATEST_API_URL = `${API}/latest?${API_KEY}`;
const getLatest = (): Promise<AxiosResponse<Latest>> => {
  return axios.get<Latest>(LATEST_API_URL);
};

export const data = {
  getSymbols,
  getLatest,
};
