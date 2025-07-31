declare namespace Express {
  export interface Request {
    user?: {
      id: string;
      userIp: string | string[]
      plan: string;
    };
    administrator: {
      id: number;
    };
  }
}
