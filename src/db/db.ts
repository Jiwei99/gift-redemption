import { DataSource } from "typeorm"

import { Redemption } from "../db/entity/Redemption"
import { Staff } from "../db/entity/Staff"

export const db = new DataSource({
    type: "sqlite",
    database: "./db.sqlite3",
    entities: [Redemption, Staff],
    logging: true,
    synchronize: true,
})