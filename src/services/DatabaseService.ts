import { Redemption } from '../db/entity/Redemption';
import {db} from '../db/db';
import { Staff } from '../db/entity/Staff';

async function saveStaff(staff: Staff): Promise<Staff> {
  return db.getRepository(Staff).save(staff);
}

async function getStaffTeam(id: string): Promise<string> {
  return (await db.getRepository(Staff).findOneBy({staffPassId: id} as Staff)).teamName;
}

async function saveRedemption(redemption: Redemption): Promise<Redemption> {
    return db.getRepository(Redemption).save(redemption);
}

async function getRedeemed(team: string): Promise<Boolean> {
    return (await db.getRepository(Redemption).findOneBy({teamName: team} as Redemption)) !== null;
}

export {
    saveStaff,
    getStaffTeam,
    saveRedemption,
    getRedeemed
};