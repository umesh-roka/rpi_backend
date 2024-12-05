import express from 'express'
import { handleAll } from '../services/common.js';
import { fileCheck } from '../middleware/fileCheck.js';
import { getAllNotice, noticeAdd } from '../controllers/noticeController.js';



const router = express.Router();



router.route('/')
.get(getAllNotice)
.post( fileCheck,noticeAdd).all(handleAll);

export default router