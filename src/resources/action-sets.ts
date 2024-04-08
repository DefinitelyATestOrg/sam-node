// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sam/core';
import { APIResource } from 'sam/resource';
import { type Response } from 'sam/_shims/index';
import * as ActionSetsAPI from 'sam/resources/action-sets';

export class ActionSets extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/api/v1/actionsets/${id}`, { ...options, __binaryResponse: true });
  }

  update(params: ActionSetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/api/v1/actionsets/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
      __binaryResponse: true,
    });
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/actionsets/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ActionSetUpdateParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param:
   */
  name: string;

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
  createdBy?: ActionSetUpdateParams.CreatedBy;

  /**
   * Body param:
   */
  openApiUrl?: string;

  /**
   * Body param:
   */
  serverUrl?: string;

  /**
   * Body param:
   */
  type?: 'OPEN_API' | 'MANUAL';

  /**
   * Body param:
   */
  updatedBy?: ActionSetUpdateParams.UpdatedBy;
}

export namespace ActionSetUpdateParams {
  export interface CreatedBy {
    id?: string;

    name?: string;
  }

  export interface UpdatedBy {
    id?: string;

    name?: string;
  }
}

export namespace ActionSets {
  export import ActionSetUpdateParams = ActionSetsAPI.ActionSetUpdateParams;
}
