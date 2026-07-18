import {fail} from '../utils/response.js';import {logger} from '../utils/logger.js';
export function notFound(req,res){return fail(res,404,`Route ${req.method} ${req.originalUrl} not found`)}
export function errorHandler(err,req,res,next){logger.error(err.message,{stack:err.stack,path:req.originalUrl});return fail(res,err.status||500,err.publicMessage||'Internal server error',process.env.NODE_ENV==='development'?err.message:undefined)}
