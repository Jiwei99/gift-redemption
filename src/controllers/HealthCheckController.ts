import { Router, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

async function healthCheck(req: Request, res: Response, next: NextFunction) {
  res.sendStatus(StatusCodes.OK);
}

const healthCheckRouter: Router = Router();

healthCheckRouter.route('/').get(healthCheck);

export default healthCheckRouter;
