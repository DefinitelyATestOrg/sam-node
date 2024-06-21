// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ReferenceSessionsAPI from './reference-sessions';
import { type Response } from '../_shims/index';

export class ReferenceSessions extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/api/v1/referencesessions/${id}`, { ...options, __binaryResponse: true });
  }

  update(params: ReferenceSessionUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/api/v1/referencesessions/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
      __binaryResponse: true,
    });
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/referencesessions/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ReferenceSessionUpdateParams {
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
  createdBy?: ReferenceSessionUpdateParams.CreatedBy;

  /**
   * Body param:
   */
  questions?: Array<ReferenceSessionUpdateParams.Question>;

  /**
   * Body param:
   */
  referenceSetId?: string;

  /**
   * Body param:
   */
  updatedBy?: ReferenceSessionUpdateParams.UpdatedBy;
}

export namespace ReferenceSessionUpdateParams {
  export interface CreatedBy {
    id?: string;

    name?: string;
  }

  export interface Question {
    expectedAnswer?: string;

    question?: string;
  }

  export interface UpdatedBy {
    id?: string;

    name?: string;
  }
}

export namespace ReferenceSessions {
  export import ReferenceSessionUpdateParams = ReferenceSessionsAPI.ReferenceSessionUpdateParams;
}
