export interface CreateAdminPasswordHistoryDTO {
  admin_id: string;
  password: string;
}

export interface GetLastAdminPasswordHashDTO {
  admin_id: string;
  count: number;
}
