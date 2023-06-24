import express from "express";
import { NEW_CONTACT_URL } from "./urls.js";
const router = express.Router();

import { createNewUser } from "./handlers.js";

router.post(NEW_CONTACT_URL, createNewUser);

export default router;
