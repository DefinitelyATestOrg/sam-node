// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrdersAPI from './orders';
import { Orders } from './orders';

export class Store extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
}

Store.Orders = Orders;

export declare namespace Store {
  export { Orders as Orders };
}
