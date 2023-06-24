import  express  from "express"
import newContactRoute from "./src/contact/routes.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/contact", newContactRoute)

export default app