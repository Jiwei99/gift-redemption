import { Redemption } from "../db/entity/Redemption";
import { getRedeemed, getStaffTeam, saveRedemption } from "./DatabaseService";

async function redeem(staff_id: string) {
    const team = await getStaffTeam(staff_id);
    const redeemed: Boolean = await getRedeemed(team);

    if (redeemed) {
        throw new Error('Already redeemed!');
    } else {
        await saveRedemption({
            teamName: team,
            redeemedBy: staff_id,
        } as Redemption);
    }
}

export {
    redeem
}