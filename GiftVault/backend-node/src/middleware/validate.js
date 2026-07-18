import {fail} from '../utils/response.js';
export const validate=schema=>(req,res,next)=>{const parsed=schema.safeParse({body:req.body,query:req.query,params:req.params});if(!parsed.success)return fail(res,422,'Validation failed',parsed.error.flatten());req.validated=parsed.data;next()};
