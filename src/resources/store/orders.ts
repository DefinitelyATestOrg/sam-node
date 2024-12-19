// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Orders extends APIResource {
  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will
   * generate exceptions.
   */
  retrieve(orderId: number, options?: Core.RequestOptions): Core.APIPromise<CoolOrder> {
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
}

export interface CoolOrder {
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

export declare namespace Orders {
  export { type CoolOrder as CoolOrder };
}