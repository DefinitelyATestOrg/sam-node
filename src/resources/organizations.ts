// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as OrganizationsAPI from './organizations';
import { type Response } from '../_shims/index';

export class Organizations extends APIResource {
  update(body: OrganizationUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put('/api/v1/organizations', { body, ...options, __binaryResponse: true });
  }
}

export interface OrganizationUpdateParams {
  id: string;

  friendlyId: string;

  name: string;

  defaultLanguage?: OrganizationUpdateParams.DefaultLanguage;
}

export namespace OrganizationUpdateParams {
  export interface DefaultLanguage {
    code?: string;

    detected?: boolean;
  }
}

export namespace Organizations {
  export import OrganizationUpdateParams = OrganizationsAPI.OrganizationUpdateParams;
}
