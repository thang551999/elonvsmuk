export enum CREATE_LAUNCHPAD_ENUM {
  TOKEN_ADDRESS = 'token-address',
  CURRENCY = 'currency',
  FEE_OPTIONS = 'fee-options',
  LISTING_OPTIONS = 'listing-options',
}

export type CREATE_LAUNCHPAD_TYPE = {
  [CREATE_LAUNCHPAD_ENUM.TOKEN_ADDRESS]: string;
  [CREATE_LAUNCHPAD_ENUM.CURRENCY]: string | string[];
  [CREATE_LAUNCHPAD_ENUM.FEE_OPTIONS]: string | string[];
  [CREATE_LAUNCHPAD_ENUM.LISTING_OPTIONS]: string | string[];
};
