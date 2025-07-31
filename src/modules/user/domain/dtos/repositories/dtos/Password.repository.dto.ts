export interface CreatePasswordHistoryDTO {
  user_id: string;
  password: string;
}

export interface GetLastPasswordHashDTO {
  user_id: string;
  count: number;
}
