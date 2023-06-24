import * as dotenv from "dotenv";
dotenv.config();
import { constants } from "./src/constants/appConstants.js";
import app from "./app.js";
const PORT = 4002


app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT PORT ${PORT}`);
});
