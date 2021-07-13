import { KeyValueStringToString } from "./key-values";

export type SymbolType = KeyValueStringToString;

export interface Symbols {
  success: boolean;
  symbols: SymbolType;
}
