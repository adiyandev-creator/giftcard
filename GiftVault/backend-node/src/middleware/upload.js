import multer from 'multer';import {env} from '../config/env.js';
const storage=multer.diskStorage({destination:env.uploadDir,filename:(req,file,cb)=>cb(null,`${Date.now()}-${file.originalname.replace(/[^a-z0-9.\-_]/gi,'')}`)});
export const upload=multer({storage,limits:{fileSize:5*1024*1024},fileFilter:(req,file,cb)=>cb(null,['image/png','image/jpeg','application/pdf'].includes(file.mimetype))});
