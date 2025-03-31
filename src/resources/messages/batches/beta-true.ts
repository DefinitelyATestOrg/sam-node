// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BetaTrue extends APIResource {
  /**
   * This endpoint is idempotent and can be used to poll for Message Batch
   * completion. To access the results of a Message Batch, make a request to the
   * `results_url` field in the response.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  retrieve(
    messageBatchID: string,
    params: BetaTrueRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaTrueRetrieveResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
    } = params ?? {};
    return this._client.get(path`/v1/messages/batches/${messageBatchID}?beta=true`, {
      ...options,
      headers: buildHeaders([
        {
          ...(anthropicBeta?.toString() != null ?
            { 'anthropic-beta': anthropicBeta?.toString() }
          : undefined),
          ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
          ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete a Message Batch.
   *
   * Message Batches can only be deleted once they've finished processing. If you'd
   * like to delete an in-progress batch, you must first cancel it.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  delete(
    messageBatchID: string,
    params: BetaTrueDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BetaTrueDeleteResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
    } = params ?? {};
    return this._client.delete(path`/v1/messages/batches/${messageBatchID}?beta=true`, {
      ...options,
      headers: buildHeaders([
        {
          ...(anthropicBeta?.toString() != null ?
            { 'anthropic-beta': anthropicBeta?.toString() }
          : undefined),
          ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
          ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface BetaTrueRetrieveResponse {
  /**
   * Unique object identifier.
   *
   * The format and length of IDs may change over time.
   */
  id: string;

  /**
   * RFC 3339 datetime string representing the time at which the Message Batch was
   * archived and its results became unavailable.
   */
  archived_at: string | null;

  /**
   * RFC 3339 datetime string representing the time at which cancellation was
   * initiated for the Message Batch. Specified only if cancellation was initiated.
   */
  cancel_initiated_at: string | null;

  /**
   * RFC 3339 datetime string representing the time at which the Message Batch was
   * created.
   */
  created_at: string;

  /**
   * RFC 3339 datetime string representing the time at which processing for the
   * Message Batch ended. Specified only once processing ends.
   *
   * Processing ends when every request in a Message Batch has either succeeded,
   * errored, canceled, or expired.
   */
  ended_at: string | null;

  /**
   * RFC 3339 datetime string representing the time at which the Message Batch will
   * expire and end processing, which is 24 hours after creation.
   */
  expires_at: string;

  /**
   * Processing status of the Message Batch.
   */
  processing_status: 'in_progress' | 'canceling' | 'ended';

  /**
   * Tallies requests within the Message Batch, categorized by their status.
   *
   * Requests start as `processing` and move to one of the other statuses only once
   * processing of the entire batch ends. The sum of all values always matches the
   * total number of requests in the batch.
   */
  request_counts: BetaTrueRetrieveResponse.RequestCounts;

  /**
   * URL to a `.jsonl` file containing the results of the Message Batch requests.
   * Specified only once processing ends.
   *
   * Results in the file are not guaranteed to be in the same order as requests. Use
   * the `custom_id` field to match results to requests.
   */
  results_url: string | null;

  /**
   * Object type.
   *
   * For Message Batches, this is always `"message_batch"`.
   */
  type: 'message_batch';
}

export namespace BetaTrueRetrieveResponse {
  /**
   * Tallies requests within the Message Batch, categorized by their status.
   *
   * Requests start as `processing` and move to one of the other statuses only once
   * processing of the entire batch ends. The sum of all values always matches the
   * total number of requests in the batch.
   */
  export interface RequestCounts {
    /**
     * Number of requests in the Message Batch that have been canceled.
     *
     * This is zero until processing of the entire Message Batch has ended.
     */
    canceled: number;

    /**
     * Number of requests in the Message Batch that encountered an error.
     *
     * This is zero until processing of the entire Message Batch has ended.
     */
    errored: number;

    /**
     * Number of requests in the Message Batch that have expired.
     *
     * This is zero until processing of the entire Message Batch has ended.
     */
    expired: number;

    /**
     * Number of requests in the Message Batch that are processing.
     */
    processing: number;

    /**
     * Number of requests in the Message Batch that have completed successfully.
     *
     * This is zero until processing of the entire Message Batch has ended.
     */
    succeeded: number;
  }
}

export interface BetaTrueDeleteResponse {
  /**
   * ID of the Message Batch.
   */
  id: string;

  /**
   * Deleted object type.
   *
   * For Message Batches, this is always `"message_batch_deleted"`.
   */
  type: 'message_batch_deleted';
}

export interface BetaTrueRetrieveParams {
  /**
   * Optional header to specify the beta version(s) you want to use.
   *
   * To use multiple betas, use a comma separated list like `beta1,beta2` or specify
   * the header multiple times for each beta.
   */
  'anthropic-beta'?: Array<string>;

  /**
   * The version of the Anthropic API you want to use.
   *
   * Read more about versioning and our version history
   * [here](https://docs.anthropic.com/en/api/versioning).
   */
  'anthropic-version'?: string;

  /**
   * Your unique API key for authentication.
   *
   * This key is required in the header of all API requests, to authenticate your
   * account and access Anthropic's services. Get your API key through the
   * [Console](https://console.anthropic.com/settings/keys). Each key is scoped to a
   * Workspace.
   */
  'x-api-key'?: string;
}

export interface BetaTrueDeleteParams {
  /**
   * Optional header to specify the beta version(s) you want to use.
   *
   * To use multiple betas, use a comma separated list like `beta1,beta2` or specify
   * the header multiple times for each beta.
   */
  'anthropic-beta'?: Array<string>;

  /**
   * The version of the Anthropic API you want to use.
   *
   * Read more about versioning and our version history
   * [here](https://docs.anthropic.com/en/api/versioning).
   */
  'anthropic-version'?: string;

  /**
   * Your unique API key for authentication.
   *
   * This key is required in the header of all API requests, to authenticate your
   * account and access Anthropic's services. Get your API key through the
   * [Console](https://console.anthropic.com/settings/keys). Each key is scoped to a
   * Workspace.
   */
  'x-api-key'?: string;
}

export declare namespace BetaTrue {
  export {
    type BetaTrueRetrieveResponse as BetaTrueRetrieveResponse,
    type BetaTrueDeleteResponse as BetaTrueDeleteResponse,
    type BetaTrueRetrieveParams as BetaTrueRetrieveParams,
    type BetaTrueDeleteParams as BetaTrueDeleteParams,
  };
}
