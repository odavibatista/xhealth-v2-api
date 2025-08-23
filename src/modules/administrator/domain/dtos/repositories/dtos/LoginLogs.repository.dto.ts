export interface CreateAdminLoginLogDTO {
  admin_id: string;
  ip: string | string[];
  login_attempt?: number;
  is_blocked: boolean;
}
