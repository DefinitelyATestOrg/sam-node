// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { type Response } from '../_shims/index';
import * as ActionsAPI from './actions';

export class Actions extends APIResource {
  retrieve(actionId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/api/v1/actions/${actionId}`, { ...options, __binaryResponse: true });
  }

  update(
    actionId: string,
    body: ActionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/actions/${actionId}`, { body, ...options, __binaryResponse: true });
  }
}

export interface ActionUpdateParams {
  actionSetId?: string;

  agentId?: string;

  createdBy?: ActionUpdateParams.CreatedBy;

  description?: string;

  errorMessage?: string;

  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';

  name?: string;

  parameters?: Array<ActionUpdateParams.Parameter>;

  path?: string;

  requestBodyType?: 'JSON';

  status?: 'ACTIVE' | 'INACTIVE' | 'UNSUPPORTED';

  updatedBy?: ActionUpdateParams.UpdatedBy;
}

export namespace ActionUpdateParams {
  export interface CreatedBy {
    id?: string;

    name?: string;
  }

  export interface Parameter {
    description?: string;

    errorMessage?: string;

    name?: string;

    required?: boolean;

    status?: 'USER_CONTEXT' | 'EDITABLE' | 'UNSUPPORTED';

    type?: 'PATH' | 'QUERY' | 'BODY';

    validationType?: 'STRING' | 'BOOLEAN' | 'NUMBER';
  }

  export interface UpdatedBy {
    id?: string;

    name?: string;
  }
}

export namespace Actions {
  export import ActionUpdateParams = ActionsAPI.ActionUpdateParams;
}
