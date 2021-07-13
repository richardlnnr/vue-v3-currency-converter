import { KeyValueStringToNumber } from "./key-values";

export type RateType = KeyValueStringToNumber;

export interface Latest {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: RateType;
}
