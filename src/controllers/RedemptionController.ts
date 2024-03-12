import { Router, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { redeem } from '../services/RedemptionService';

async function redemption(req: Request, res: Response, next: NextFunction) {
  try {
    await redeem(req.body.staff_pass_id);
    res.status(StatusCodes.OK).send('Redeemed Successfully!');
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

const redemptionController: Router = Router();

redemptionController.route('/redeem').post(redemption);

export default redemptionController;