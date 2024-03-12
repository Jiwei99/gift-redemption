import express from 'express';

import router from './router';
import { db } from './db/db';

const app = express();
const port = 3000;

app.use(express.json());

db.initialize()
.then(() => {
  console.log("Database has been initialized!")
})
.catch((err) => {
  console.error("Error during Database initialization:", err)
})

app.use('/', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

