// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as OrdersAPI from './orders';
import { Orders } from './orders';

export class Stores extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will
   * generate exceptions.
   */
  retrieve(orderId: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Order> {
    return this._client.get(`/store/order/${orderId}`, options);
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or
   * nonintegers will generate API errors
   */
  delete(orderId: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/store/order/${orderId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Place a new order in the store
   */
  createOrder(body?: StoreCreateOrderParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Order>;
  createOrder(options?: Core.RequestOptions): Core.APIPromise<Shared.Order>;
  createOrder(
    body: StoreCreateOrderParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Order> {
    if (isRequestOptions(body)) {
      return this.createOrder({}, body);
    }
    return this._client.post('/store/order', { body, ...options });
  }

  /**
   * Returns a map of status codes to quantities
   */
  inventory(options?: Core.RequestOptions): Core.APIPromise<StoreInventoryResponse> {
    return this._client.get('/store/inventory', options);
  }
}

export type StoreInventoryResponse = Record<string, number>;

export interface StoreCreateOrderParams {
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

Stores.Orders = Orders;

export declare namespace Stores {
  export {
    type StoreInventoryResponse as StoreInventoryResponse,
    type StoreCreateOrderParams as StoreCreateOrderParams,
  };

  export { Orders as Orders };
}
