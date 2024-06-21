// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ReferenceSetsAPI from './reference-sets';
import { type Response } from '../_shims/index';

export class ReferenceSets extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/api/v1/referencesets/${id}`, { ...options, __binaryResponse: true });
  }

  update(params: ReferenceSetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/api/v1/referencesets/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
      __binaryResponse: true,
    });
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/referencesets/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ReferenceSetUpdateParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param:
   */
  body_id?: string;

  /**
   * Body param:
   */
  agentId?: string;

  /**
   * Body param:
   */
  createdBy?: ReferenceSetUpdateParams.CreatedBy;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  type?: 'MANUAL' | 'CSV';

  /**
   * Body param:
   */
  updatedBy?: ReferenceSetUpdateParams.UpdatedBy;
}

export namespace ReferenceSetUpdateParams {
  export interface CreatedBy {
    id?: string;

    name?: string;
  }

  export interface UpdatedBy {
    id?: string;

    name?: string;
  }
}

export namespace ReferenceSets {
  export import ReferenceSetUpdateParams = ReferenceSetsAPI.ReferenceSetUpdateParams;
}
