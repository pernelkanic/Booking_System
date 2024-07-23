import express from 'express';

const router = express.Router();

router.post("/login" , loginUser);
router.get("/logout" ,logoutUser);
export default router;