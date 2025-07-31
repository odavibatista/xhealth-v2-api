export type JWTProviderDTO = {
  payload: {
    id_user: string;
    name?: string;
    plan_id?: string;
  };
  secret?: string;
  expiresIn?: number | string;
};

export interface JWTValidateDTO {
  token: string;
  secret: string;
}
