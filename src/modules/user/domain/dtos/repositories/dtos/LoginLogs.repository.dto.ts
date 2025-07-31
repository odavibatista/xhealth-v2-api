export interface CreateLoginLogDTO {
  user_id: string;
  ip: string | string[];
  login_attempt?: number;
  is_blocked: boolean;
}

export interface UpdateLastLoginAttemptDTO {
  last_login_attempt_id: string;
  login_attempt: number;
  is_blocked: boolean;
}
