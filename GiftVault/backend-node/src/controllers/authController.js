import {z} from 'zod';import * as auth from '../services/authService.js';import {created,ok} from '../utils/response.js';
export const registerSchema=z.object({body:z.object({name:z.string().min(2),email:z.string().email(),password:z.string().min(8)}),query:z.any(),params:z.any()});
export const loginSchema=z.object({body:z.object({email:z.string().email(),password:z.string().min(8)}),query:z.any(),params:z.any()});
export const register=async(req,res)=>created(res,await auth.register(req.validated.body));
export const login=async(req,res)=>ok(res,await auth.login(req.validated.body));
export const me=async(req,res)=>ok(res,{user:req.user});
