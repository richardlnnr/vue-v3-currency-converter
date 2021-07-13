import { IKeyValueStringToString } from "./key-values";

export type IRate = IKeyValueStringToString;

export interface IRates {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: IRate;
}
