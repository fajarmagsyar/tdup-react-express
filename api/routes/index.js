import express from "express";
import { 
    getAllTdup,
    createTdup,
    updateTdup,
    deleteTdup,
    getTdupById
 } from "../controller/TdupController.js";

const router = express.Router();

router.get('/', getAllTdup);
router.get('/:id', getTdupById);
router.post('/', createTdup);
router.patch('/:id', updateTdup);
router.delete('/:id', deleteTdup);

export default router;