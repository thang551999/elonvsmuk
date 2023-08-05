export enum CREATE_LOCK_ENUM {
  TOKEN_ADDRESS = 'token-address',
  TOKEN_OWNER_ADDRESS = 'token-owner-address',
  TITLE = 'title',
  AMOUNT = 'amount',
  LOCK_UNTIL = 'lock-until',
}

export type CREATE_LOCK_TYPE = {
  [CREATE_LOCK_ENUM.TOKEN_ADDRESS]: string;
  [CREATE_LOCK_ENUM.TOKEN_OWNER_ADDRESS]: string | string[];
  [CREATE_LOCK_ENUM.TITLE]: string | string[];
  [CREATE_LOCK_ENUM.AMOUNT]: string | string[];
  [CREATE_LOCK_ENUM.LOCK_UNTIL]: string | string[];
};
