import axios from'axios';
export const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'/backend/api',withCredentials:true});
api.interceptors.request.use(c=>{const t=localStorage.getItem('token');if(t)c.headers.Authorization=`Bearer ${t}`;return c});
export const auth={login:d=>api.post('/auth/login.php',d),register:d=>api.post('/auth/register.php',d),me:()=>api.get('/auth/me.php'),forgot:d=>api.post('/auth/forgot.php',d),reset:d=>api.post('/auth/reset.php',d)};
export const catalog={products:p=>api.get('/products/list.php',{params:p}),product:id=>api.get('/products/detail.php',{params:{id}}),countries:()=>api.get('/products/countries.php')};
export const wallet={summary:()=>api.get('/wallet/summary.php'),deposit:d=>api.post('/wallet/request.php',d,{headers:{'Content-Type':'multipart/form-data'}})};
export const orders={create:d=>api.post('/orders/create.php',d),list:()=>api.get('/orders/list.php'),detail:id=>api.get('/orders/detail.php',{params:{id}})};
export const support={tickets:()=>api.get('/support/tickets.php'),create:d=>api.post('/support/create.php',d)};
export const admin={stats:()=>api.get('/admin/stats.php'),approve:id=>api.post('/admin/wallet-approve.php',{id}),reject:d=>api.post('/admin/wallet-reject.php',d),sync:()=>api.post('/admin/reloadly-sync.php')};
