declare namespace Express {
  export interface Request {
    userIp: string | string[];
    user?: {
      id: string;
      plan: string;
    };
    administrator?: {
      id: string;
      administrator_name: string;
    };
  }
}
