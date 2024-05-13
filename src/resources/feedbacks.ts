// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { type Response } from '../_shims/index';
import * as FeedbacksAPI from './feedbacks';

export class Feedbacks extends APIResource {
  update(
    feedbackId: string,
    body: FeedbackUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/feedbacks/${feedbackId}`, { body, ...options, __binaryResponse: true });
  }
}

export interface FeedbackUpdateParams {
  agentId: string;

  ticketMessageId: string;

  id?: string;

  createdBy?: FeedbackUpdateParams.CreatedBy;

  text?: string;

  type?: 'THUMBS_UP' | 'THUMBS_DOWN' | 'INSERT';

  updatedBy?: FeedbackUpdateParams.UpdatedBy;
}

export namespace FeedbackUpdateParams {
  export interface CreatedBy {
    id?: string;

    name?: string;
  }

  export interface UpdatedBy {
    id?: string;

    name?: string;
  }
}

export namespace Feedbacks {
  export import FeedbackUpdateParams = FeedbacksAPI.FeedbackUpdateParams;
}
