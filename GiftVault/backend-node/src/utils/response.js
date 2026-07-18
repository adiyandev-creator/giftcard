export const ok=(res,data={},meta={})=>res.json({success:true,data,meta});
export const created=(res,data={})=>res.status(201).json({success:true,data});
export const fail=(res,status,message,details)=>res.status(status).json({success:false,error:{message,details}});
export const pageMeta=(page,limit,total)=>({page,limit,total,pages:Math.ceil(total/limit)});
