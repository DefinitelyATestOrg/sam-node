// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OrdersAPI from './orders';
import { Orders } from './orders';

export class Store extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
}

export interface Order {
  id?: number;

  complete?: boolean;

  petId?: number;

  quantity?: number;

  shipDate?: string;

  /**
   * Order Status
   */
  status?: 'placed' | 'approved' | 'delivered';
}

Store.Orders = Orders;

export declare namespace Store {
  export { type Order as Order };

  export { Orders as Orders };
}
