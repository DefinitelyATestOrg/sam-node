// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { type Response } from '../_shims/index';
import * as MembersAPI from './members';

export class Members extends APIResource {
  update(
    memberId: string,
    body: MemberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/members/${memberId}`, { body, ...options, __binaryResponse: true });
  }

  delete(memberId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/members/${memberId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MemberUpdateParams {
  id?: string;

  email?: string;

  name?: string;

  orgId?: string;

  pictureUrl?: string;

  role?: 'OWNER' | 'ADMIN' | 'READER';
}

export namespace Members {
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
}
