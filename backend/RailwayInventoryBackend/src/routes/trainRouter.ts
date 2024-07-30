import express from 'express';
import { createTrain, getTrainById, getTrains } from '../controllers/railwayController';

const router = express.Router();

router.post("/train" , createTrain);
router.get("/train" , getTrains);
router.get("/train/:id" , getTrainById);
// router.put("/train" , updateTrain);
// router.delete("/train" , deleteTrain);
export default router;