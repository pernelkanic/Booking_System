import express from 'express';

const router = express.Router();

router.post("/train" , createTrain);
router.get("/train" , getTrain);
router.put("/train" , updateTrain);
router.delete("/train" , deleteTrain);
export default router;