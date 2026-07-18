import {env} from '../config/env.js';import {ReloadlySupplier} from '../suppliers/reloadly/reloadlySupplier.js';
const suppliers={reloadly:new ReloadlySupplier(env.reloadly)};
export const supplierService={get(name='reloadly'){if(!suppliers[name])throw new Error(`Supplier ${name} not configured`);return suppliers[name]},async syncProducts(name='reloadly'){const supplier=this.get(name);return supplier.getProducts()},async placeOrder(name,payload){return this.get(name).placeOrder(payload)}};
