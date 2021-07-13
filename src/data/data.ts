import { IRate, ISymbols } from "@/domain";
import axios, { AxiosResponse } from "axios";

export const API = "http://data.fixer.io/api/";
export const API_KEY = "access_key=cdc6a68a462df1d36ed44f1b49707093";

const getSymbols = (): Promise<AxiosResponse<ISymbols>> => {
  return axios.get<ISymbols>(`${API}/symbols?${API_KEY}`);
};

const getLatest = (): Promise<AxiosResponse<IRate>> => {
  return axios.get<IRate>(`${API}/latest?${API_KEY}&symbols=GBP,JPY,EUR`);
};

export const data = {
  getSymbols,
  getLatest,
};
