declare namespace Express {
  export interface Request {
    user?: {
      id: number;
      plan: string;
    };
    administrator: {
      id: number
    }
  }
}