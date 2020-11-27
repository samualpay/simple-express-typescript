import { Request, Response, RequestHandler } from "express";
export type Rout = {
    action: string;
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    middleware?: RequestHandler[]
    runner: (req: Request, res: Response) => Promise<void>
}
