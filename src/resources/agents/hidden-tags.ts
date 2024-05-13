// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { type Response } from '../../_shims/index';
import * as HiddenTagsAPI from './hidden-tags';

export class HiddenTags extends APIResource {
  update(id: string, body: HiddenTagUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/agents/${id}/hiddenTags`, { body, ...options, __binaryResponse: true });
  }
}

export type HiddenTagUpdateParams = Array<string>;

export namespace HiddenTags {
  export import HiddenTagUpdateParams = HiddenTagsAPI.HiddenTagUpdateParams;
}
