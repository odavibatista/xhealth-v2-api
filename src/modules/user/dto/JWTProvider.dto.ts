export type JWTProviderDTO = {
  payload: {
    user?: {
      id_user: string;
      name?: string;
      plan_id?: string;
    };

    administrator?: {
      id: string;
      administrator_name: string;
    };
  };
  secret?: string;
  expiresIn?: number | string;
};

export interface JWTValidateDTO {
  token: string;
  secret: string;
}
