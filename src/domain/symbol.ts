import { IKeyValueStringToString } from "./key-values";

export type ISymbol = IKeyValueStringToString;

export interface ISymbols {
  success: boolean;
  symbols: ISymbol;
}
