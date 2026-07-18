import cron from 'node-cron';import {logger} from '../utils/logger.js';
cron.schedule('*/15 * * * *',()=>logger.info('Scheduled supplier sync heartbeat'));
cron.schedule('0 2 * * *',()=>logger.info('Scheduled daily reporting heartbeat'));
