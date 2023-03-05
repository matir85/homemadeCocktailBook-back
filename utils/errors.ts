import {NextFunction, Request, Response} from "express";

export class ValidateErrors extends Error {
}

export const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res
        .status(err instanceof ValidateErrors ? 400 : 500)
        .json({
            message: err instanceof ValidateErrors ? err.message : "Coś poszło nie tak, spróbuj ponownie później"
        })

}
