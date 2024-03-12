import { Router, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { parse } from 'csv-parse';

import { saveStaff } from '../services/DatabaseService'
import { Staff } from '../db/entity/Staff';

async function upload(req: Request, res: Response, next: NextFunction) {
    if (req.headers['content-type'] !== 'text/csv') {
        return res.status(StatusCodes.BAD_REQUEST).send('Please send the file as CSV with content-type text/csv.');
    }
    
    req.pipe(parse({
    columns: true,
    bom: true
    }))
    .on('data', async (data) => {
        const staff = {
            staffPassId: data.staff_pass_id,
            teamName: data.team_name,
            createdAt: new Date(parseInt(data.created_at)),
        } as Staff;
        await saveStaff(staff);
    })
    .on('end', () => {
        // Process the rows, for example, insert them into a database
        res.send('CSV processed');
    })
    .on('error', (error) => {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error processing CSV');
    });
}

const uploadController: Router = Router();

uploadController.route('/').post(upload);

export default uploadController;