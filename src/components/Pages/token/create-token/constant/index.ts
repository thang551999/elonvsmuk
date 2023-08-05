import BigNumber from 'bignumber.js';

export enum CREATE_TOKEN_ENUM {
  NAME = 'name',
  SYMBOL = 'symbol',
  DECIMALS = 'decimals',
  TOTAL_SUPPLY = 'totalSupply',
}

export type CREATE_TOKEN_TYPE = {
  [CREATE_TOKEN_ENUM.NAME]: string;
  [CREATE_TOKEN_ENUM.SYMBOL]: string;
  [CREATE_TOKEN_ENUM.DECIMALS]: number | BigNumber;
  [CREATE_TOKEN_ENUM.TOTAL_SUPPLY]: string | BigNumber;
};
