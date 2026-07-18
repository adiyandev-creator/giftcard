import {Router} from 'express';import {validate} from '../middleware/validate.js';import {requireAuth,requirePermission} from '../middleware/auth.js';import {upload} from '../middleware/upload.js';import * as auth from '../controllers/authController.js';import * as catalog from '../controllers/catalogController.js';import * as wallet from '../controllers/walletController.js';import * as orders from '../controllers/orderController.js';import * as admin from '../controllers/adminController.js';
export const router=Router();
router.get('/health',(req,res)=>res.json({success:true,data:{status:'ok',time:new Date().toISOString()}}));
router.post('/auth/register',validate(auth.registerSchema),auth.register);router.post('/auth/login',validate(auth.loginSchema),auth.login);router.get('/auth/me',requireAuth,auth.me);
router.get('/products',catalog.listProducts);router.get('/products/:slug',catalog.productDetails);
router.get('/wallet',requireAuth,wallet.summary);router.post('/wallet/deposits',requireAuth,upload.single('proof'),wallet.requestDeposit);
router.get('/orders',requireAuth,orders.listOrders);router.post('/orders',requireAuth,orders.createOrder);
router.get('/admin/dashboard',requireAuth,requirePermission('admin.dashboard.view'),admin.dashboard);router.post('/admin/deposits/:id/approve',requireAuth,requirePermission('wallet.deposits.approve'),admin.approveDeposit);router.post('/admin/suppliers/:supplier/sync',requireAuth,requirePermission('suppliers.sync'),admin.syncSupplier);
