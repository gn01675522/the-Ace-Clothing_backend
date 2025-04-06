import express from "express";
import dotenv from "dotenv";

import type { Express } from "express";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
