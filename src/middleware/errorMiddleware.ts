import HttpException from "exception/HttpException";
import { NextFunction, Request, Response } from "express";

function errorMiddleware(err: HttpException, res: Request, rep: Response, next: NextFunction) {
    const status = err.status || 500
    const message = err.message || 'Something went wrong'
    rep.status(status).send({ status, message })
}

export default errorMiddleware