// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BetaTrueAPI from './beta-true';
import {
  BetaTrue,
  BetaTrueDeleteParams,
  BetaTrueDeleteResponse,
  BetaTrueRetrieveParams,
  BetaTrueRetrieveResponse,
} from './beta-true';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { JSONLDecoder } from '../../../internal/decoders/jsonl';
import { path } from '../../../internal/utils/path';

export class Batches extends APIResource {
  betaTrue: BetaTrueAPI.BetaTrue = new BetaTrueAPI.BetaTrue(this._client);

  /**
   * Send a batch of Message creation requests.
   *
   * The Message Batches API can be used to process multiple Messages API requests at
   * once. Once a Message Batch is created, it begins processing immediately. Batches
   * can take up to 24 hours to complete.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  create(params: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
      ...body
    } = params;
    return this._client.post('/v1/messages/batches', {
      body,
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
   * This endpoint is idempotent and can be used to poll for Message Batch
   * completion. To access the results of a Message Batch, make a request to the
   * `results_url` field in the response.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  retrieve(
    messageBatchID: string,
    params: BatchRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchRetrieveResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
    } = params ?? {};
    return this._client.get(path`/v1/messages/batches/${messageBatchID}`, {
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
   * List all Message Batches within a Workspace. Most recently created batches are
   * returned first.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  list(
    params: BatchListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchListResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
      ...query
    } = params ?? {};
    return this._client.get('/v1/messages/batches', {
      query,
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
    params: BatchDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchDeleteResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
    } = params ?? {};
    return this._client.delete(path`/v1/messages/batches/${messageBatchID}`, {
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
   * Batches may be canceled any time before processing ends. Once cancellation is
   * initiated, the batch enters a `canceling` state, at which time the system may
   * complete any in-progress, non-interruptible requests before finalizing
   * cancellation.
   *
   * The number of canceled requests is specified in `request_counts`. To determine
   * which requests were canceled, check the individual results within the batch.
   * Note that cancellation may not result in any canceled requests if they were
   * non-interruptible.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  cancel(
    messageBatchID: string,
    params: BatchCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchCancelResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
    } = params ?? {};
    return this._client.post(path`/v1/messages/batches/${messageBatchID}/cancel`, {
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
   * Batches may be canceled any time before processing ends. Once cancellation is
   * initiated, the batch enters a `canceling` state, at which time the system may
   * complete any in-progress, non-interruptible requests before finalizing
   * cancellation.
   *
   * The number of canceled requests is specified in `request_counts`. To determine
   * which requests were canceled, check the individual results within the batch.
   * Note that cancellation may not result in any canceled requests if they were
   * non-interruptible.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  cancelBeta(
    messageBatchID: string,
    params: BatchCancelBetaParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchCancelBetaResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
    } = params ?? {};
    return this._client.post(path`/v1/messages/batches/${messageBatchID}/cancel?beta=true`, {
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
   * Streams the results of a Message Batch as a `.jsonl` file.
   *
   * Each line in the file is a JSON object containing the result of a single request
   * in the Message Batch. Results are not guaranteed to be in the same order as
   * requests. Use the `custom_id` field to match results to requests.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  results(
    messageBatchID: string,
    params: BatchResultsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JSONLDecoder<BatchResultsResponse>> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
    } = params ?? {};
    return this._client
      .get(path`/v1/messages/batches/${messageBatchID}/results`, {
        ...options,
        headers: buildHeaders([
          {
            Accept: 'application/x-jsonl',
            ...(anthropicBeta?.toString() != null ?
              { 'anthropic-beta': anthropicBeta?.toString() }
            : undefined),
            ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
            ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
          },
          options?.headers,
        ]),
        __binaryResponse: true,
      })
      ._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller));
  }

  /**
   * Streams the results of a Message Batch as a `.jsonl` file.
   *
   * Each line in the file is a JSON object containing the result of a single request
   * in the Message Batch. Results are not guaranteed to be in the same order as
   * requests. Use the `custom_id` field to match results to requests.
   *
   * Learn more about the Message Batches API in our
   * [user guide](/en/docs/build-with-claude/batch-processing)
   */
  resultsBeta(
    messageBatchID: string,
    params: BatchResultsBetaParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JSONLDecoder<BatchResultsBetaResponse>> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
    } = params ?? {};
    return this._client
      .get(path`/v1/messages/batches/${messageBatchID}/results?beta=true`, {
        ...options,
        headers: buildHeaders([
          {
            Accept: 'application/x-jsonl',
            ...(anthropicBeta?.toString() != null ?
              { 'anthropic-beta': anthropicBeta?.toString() }
            : undefined),
            ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
            ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
          },
          options?.headers,
        ]),
        __binaryResponse: true,
      })
      ._thenUnwrap((_, props) => JSONLDecoder.fromResponse(props.response, props.controller));
  }
}

export interface BatchCreateResponse {
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
  request_counts: BatchCreateResponse.RequestCounts;

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

export namespace BatchCreateResponse {
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

export interface BatchRetrieveResponse {
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
  request_counts: BatchRetrieveResponse.RequestCounts;

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

export namespace BatchRetrieveResponse {
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

export interface BatchListResponse {
  data: Array<BatchListResponse.Data>;

  /**
   * First ID in the `data` list. Can be used as the `before_id` for the previous
   * page.
   */
  first_id: string | null;

  /**
   * Indicates if there are more results in the requested page direction.
   */
  has_more: boolean;

  /**
   * Last ID in the `data` list. Can be used as the `after_id` for the next page.
   */
  last_id: string | null;
}

export namespace BatchListResponse {
  export interface Data {
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
    request_counts: Data.RequestCounts;

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

  export namespace Data {
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
}

export interface BatchDeleteResponse {
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

export interface BatchCancelResponse {
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
  request_counts: BatchCancelResponse.RequestCounts;

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

export namespace BatchCancelResponse {
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

export interface BatchCancelBetaResponse {
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
  request_counts: BatchCancelBetaResponse.RequestCounts;

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

export namespace BatchCancelBetaResponse {
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

/**
 * This is a single line in the response `.jsonl` file and does not represent the
 * response as a whole.
 */
export interface BatchResultsResponse {
  /**
   * Developer-provided ID created for each request in a Message Batch. Useful for
   * matching results to requests, as results may be given out of request order.
   *
   * Must be unique for each request within the Message Batch.
   */
  custom_id: string;

  /**
   * Processing result for this request.
   *
   * Contains a Message output if processing was successful, an error response if
   * processing failed, or the reason why processing was not attempted, such as
   * cancellation or expiration.
   */
  result:
    | BatchResultsResponse.SucceededResult
    | BatchResultsResponse.ErroredResult
    | BatchResultsResponse.CanceledResult
    | BatchResultsResponse.ExpiredResult;
}

export namespace BatchResultsResponse {
  export interface SucceededResult {
    message: SucceededResult.Message;

    type: 'succeeded';
  }

  export namespace SucceededResult {
    export interface Message {
      /**
       * Unique object identifier.
       *
       * The format and length of IDs may change over time.
       */
      id: string;

      /**
       * Content generated by the model.
       *
       * This is an array of content blocks, each of which has a `type` that determines
       * its shape.
       *
       * Example:
       *
       * ```json
       * [{ "type": "text", "text": "Hi, I'm Claude." }]
       * ```
       *
       * If the request input `messages` ended with an `assistant` turn, then the
       * response `content` will continue directly from that last turn. You can use this
       * to constrain the model's output.
       *
       * For example, if the input `messages` were:
       *
       * ```json
       * [
       *   {
       *     "role": "user",
       *     "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"
       *   },
       *   { "role": "assistant", "content": "The best answer is (" }
       * ]
       * ```
       *
       * Then the response `content` might be:
       *
       * ```json
       * [{ "type": "text", "text": "B)" }]
       * ```
       */
      content: Array<
        | Message.ResponseTextBlock
        | Message.ResponseToolUseBlock
        | Message.ResponseThinkingBlock
        | Message.ResponseRedactedThinkingBlock
      >;

      /**
       * The model that handled the request.
       */
      model: string;

      /**
       * Conversational role of the generated message.
       *
       * This will always be `"assistant"`.
       */
      role: 'assistant';

      /**
       * The reason that we stopped.
       *
       * This may be one the following values:
       *
       * - `"end_turn"`: the model reached a natural stopping point
       * - `"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum
       * - `"stop_sequence"`: one of your provided custom `stop_sequences` was generated
       * - `"tool_use"`: the model invoked one or more tools
       *
       * In non-streaming mode this value is always non-null. In streaming mode, it is
       * null in the `message_start` event and non-null otherwise.
       */
      stop_reason: 'end_turn' | 'max_tokens' | 'stop_sequence' | 'tool_use' | null;

      /**
       * Which custom stop sequence was generated, if any.
       *
       * This value will be a non-null string if one of your custom stop sequences was
       * generated.
       */
      stop_sequence: string | null;

      /**
       * Object type.
       *
       * For Messages, this is always `"message"`.
       */
      type: 'message';

      /**
       * Billing and rate-limit usage.
       *
       * Anthropic's API bills and rate-limits by token counts, as tokens represent the
       * underlying cost to our systems.
       *
       * Under the hood, the API transforms requests into a format suitable for the
       * model. The model's output then goes through a parsing stage before becoming an
       * API response. As a result, the token counts in `usage` will not match one-to-one
       * with the exact visible content of an API request or response.
       *
       * For example, `output_tokens` will be non-zero, even for an empty string response
       * from Claude.
       *
       * Total input tokens in a request is the summation of `input_tokens`,
       * `cache_creation_input_tokens`, and `cache_read_input_tokens`.
       */
      usage: Message.Usage;
    }

    export namespace Message {
      export interface ResponseTextBlock {
        /**
         * Citations supporting the text block.
         *
         * The type of citation returned will depend on the type of document being cited.
         * Citing a PDF results in `page_location`, plain text results in `char_location`,
         * and content document results in `content_block_location`.
         */
        citations: Array<
          | ResponseTextBlock.ResponseCharLocationCitation
          | ResponseTextBlock.ResponsePageLocationCitation
          | ResponseTextBlock.ResponseContentBlockLocationCitation
        > | null;

        text: string;

        type: 'text';
      }

      export namespace ResponseTextBlock {
        export interface ResponseCharLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_char_index: number;

          start_char_index: number;

          type: 'char_location';
        }

        export interface ResponsePageLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_page_number: number;

          start_page_number: number;

          type: 'page_location';
        }

        export interface ResponseContentBlockLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_block_index: number;

          start_block_index: number;

          type: 'content_block_location';
        }
      }

      export interface ResponseToolUseBlock {
        id: string;

        input: unknown;

        name: string;

        type: 'tool_use';
      }

      export interface ResponseThinkingBlock {
        signature: string;

        thinking: string;

        type: 'thinking';
      }

      export interface ResponseRedactedThinkingBlock {
        data: string;

        type: 'redacted_thinking';
      }

      /**
       * Billing and rate-limit usage.
       *
       * Anthropic's API bills and rate-limits by token counts, as tokens represent the
       * underlying cost to our systems.
       *
       * Under the hood, the API transforms requests into a format suitable for the
       * model. The model's output then goes through a parsing stage before becoming an
       * API response. As a result, the token counts in `usage` will not match one-to-one
       * with the exact visible content of an API request or response.
       *
       * For example, `output_tokens` will be non-zero, even for an empty string response
       * from Claude.
       *
       * Total input tokens in a request is the summation of `input_tokens`,
       * `cache_creation_input_tokens`, and `cache_read_input_tokens`.
       */
      export interface Usage {
        /**
         * The number of input tokens used to create the cache entry.
         */
        cache_creation_input_tokens: number | null;

        /**
         * The number of input tokens read from the cache.
         */
        cache_read_input_tokens: number | null;

        /**
         * The number of input tokens which were used.
         */
        input_tokens: number;

        /**
         * The number of output tokens which were used.
         */
        output_tokens: number;
      }
    }
  }

  export interface ErroredResult {
    error: ErroredResult.Error;

    type: 'errored';
  }

  export namespace ErroredResult {
    export interface Error {
      error:
        | Error.InvalidRequestError
        | Error.AuthenticationError
        | Error.BillingError
        | Error.PermissionError
        | Error.NotFoundError
        | Error.RateLimitError
        | Error.GatewayTimeoutError
        | Error.APIError
        | Error.OverloadedError;

      type: 'error';
    }

    export namespace Error {
      export interface InvalidRequestError {
        message: string;

        type: 'invalid_request_error';
      }

      export interface AuthenticationError {
        message: string;

        type: 'authentication_error';
      }

      export interface BillingError {
        message: string;

        type: 'billing_error';
      }

      export interface PermissionError {
        message: string;

        type: 'permission_error';
      }

      export interface NotFoundError {
        message: string;

        type: 'not_found_error';
      }

      export interface RateLimitError {
        message: string;

        type: 'rate_limit_error';
      }

      export interface GatewayTimeoutError {
        message: string;

        type: 'timeout_error';
      }

      export interface APIError {
        message: string;

        type: 'api_error';
      }

      export interface OverloadedError {
        message: string;

        type: 'overloaded_error';
      }
    }
  }

  export interface CanceledResult {
    type: 'canceled';
  }

  export interface ExpiredResult {
    type: 'expired';
  }
}

/**
 * This is a single line in the response `.jsonl` file and does not represent the
 * response as a whole.
 */
export interface BatchResultsBetaResponse {
  /**
   * Developer-provided ID created for each request in a Message Batch. Useful for
   * matching results to requests, as results may be given out of request order.
   *
   * Must be unique for each request within the Message Batch.
   */
  custom_id: string;

  /**
   * Processing result for this request.
   *
   * Contains a Message output if processing was successful, an error response if
   * processing failed, or the reason why processing was not attempted, such as
   * cancellation or expiration.
   */
  result:
    | BatchResultsBetaResponse.BetaSucceededResult
    | BatchResultsBetaResponse.BetaErroredResult
    | BatchResultsBetaResponse.BetaCanceledResult
    | BatchResultsBetaResponse.BetaExpiredResult;
}

export namespace BatchResultsBetaResponse {
  export interface BetaSucceededResult {
    message: BetaSucceededResult.Message;

    type: 'succeeded';
  }

  export namespace BetaSucceededResult {
    export interface Message {
      /**
       * Unique object identifier.
       *
       * The format and length of IDs may change over time.
       */
      id: string;

      /**
       * Content generated by the model.
       *
       * This is an array of content blocks, each of which has a `type` that determines
       * its shape.
       *
       * Example:
       *
       * ```json
       * [{ "type": "text", "text": "Hi, I'm Claude." }]
       * ```
       *
       * If the request input `messages` ended with an `assistant` turn, then the
       * response `content` will continue directly from that last turn. You can use this
       * to constrain the model's output.
       *
       * For example, if the input `messages` were:
       *
       * ```json
       * [
       *   {
       *     "role": "user",
       *     "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"
       *   },
       *   { "role": "assistant", "content": "The best answer is (" }
       * ]
       * ```
       *
       * Then the response `content` might be:
       *
       * ```json
       * [{ "type": "text", "text": "B)" }]
       * ```
       */
      content: Array<
        | Message.BetaResponseTextBlock
        | Message.BetaResponseToolUseBlock
        | Message.BetaResponseThinkingBlock
        | Message.BetaResponseRedactedThinkingBlock
      >;

      /**
       * The model that handled the request.
       */
      model: string;

      /**
       * Conversational role of the generated message.
       *
       * This will always be `"assistant"`.
       */
      role: 'assistant';

      /**
       * The reason that we stopped.
       *
       * This may be one the following values:
       *
       * - `"end_turn"`: the model reached a natural stopping point
       * - `"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum
       * - `"stop_sequence"`: one of your provided custom `stop_sequences` was generated
       * - `"tool_use"`: the model invoked one or more tools
       *
       * In non-streaming mode this value is always non-null. In streaming mode, it is
       * null in the `message_start` event and non-null otherwise.
       */
      stop_reason: 'end_turn' | 'max_tokens' | 'stop_sequence' | 'tool_use' | null;

      /**
       * Which custom stop sequence was generated, if any.
       *
       * This value will be a non-null string if one of your custom stop sequences was
       * generated.
       */
      stop_sequence: string | null;

      /**
       * Object type.
       *
       * For Messages, this is always `"message"`.
       */
      type: 'message';

      /**
       * Billing and rate-limit usage.
       *
       * Anthropic's API bills and rate-limits by token counts, as tokens represent the
       * underlying cost to our systems.
       *
       * Under the hood, the API transforms requests into a format suitable for the
       * model. The model's output then goes through a parsing stage before becoming an
       * API response. As a result, the token counts in `usage` will not match one-to-one
       * with the exact visible content of an API request or response.
       *
       * For example, `output_tokens` will be non-zero, even for an empty string response
       * from Claude.
       *
       * Total input tokens in a request is the summation of `input_tokens`,
       * `cache_creation_input_tokens`, and `cache_read_input_tokens`.
       */
      usage: Message.Usage;
    }

    export namespace Message {
      export interface BetaResponseTextBlock {
        /**
         * Citations supporting the text block.
         *
         * The type of citation returned will depend on the type of document being cited.
         * Citing a PDF results in `page_location`, plain text results in `char_location`,
         * and content document results in `content_block_location`.
         */
        citations: Array<
          | BetaResponseTextBlock.BetaResponseCharLocationCitation
          | BetaResponseTextBlock.BetaResponsePageLocationCitation
          | BetaResponseTextBlock.BetaResponseContentBlockLocationCitation
        > | null;

        text: string;

        type: 'text';
      }

      export namespace BetaResponseTextBlock {
        export interface BetaResponseCharLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_char_index: number;

          start_char_index: number;

          type: 'char_location';
        }

        export interface BetaResponsePageLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_page_number: number;

          start_page_number: number;

          type: 'page_location';
        }

        export interface BetaResponseContentBlockLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_block_index: number;

          start_block_index: number;

          type: 'content_block_location';
        }
      }

      export interface BetaResponseToolUseBlock {
        id: string;

        input: unknown;

        name: string;

        type: 'tool_use';
      }

      export interface BetaResponseThinkingBlock {
        signature: string;

        thinking: string;

        type: 'thinking';
      }

      export interface BetaResponseRedactedThinkingBlock {
        data: string;

        type: 'redacted_thinking';
      }

      /**
       * Billing and rate-limit usage.
       *
       * Anthropic's API bills and rate-limits by token counts, as tokens represent the
       * underlying cost to our systems.
       *
       * Under the hood, the API transforms requests into a format suitable for the
       * model. The model's output then goes through a parsing stage before becoming an
       * API response. As a result, the token counts in `usage` will not match one-to-one
       * with the exact visible content of an API request or response.
       *
       * For example, `output_tokens` will be non-zero, even for an empty string response
       * from Claude.
       *
       * Total input tokens in a request is the summation of `input_tokens`,
       * `cache_creation_input_tokens`, and `cache_read_input_tokens`.
       */
      export interface Usage {
        /**
         * The number of input tokens used to create the cache entry.
         */
        cache_creation_input_tokens: number | null;

        /**
         * The number of input tokens read from the cache.
         */
        cache_read_input_tokens: number | null;

        /**
         * The number of input tokens which were used.
         */
        input_tokens: number;

        /**
         * The number of output tokens which were used.
         */
        output_tokens: number;
      }
    }
  }

  export interface BetaErroredResult {
    error: BetaErroredResult.Error;

    type: 'errored';
  }

  export namespace BetaErroredResult {
    export interface Error {
      error:
        | Error.BetaInvalidRequestError
        | Error.BetaAuthenticationError
        | Error.BetaBillingError
        | Error.BetaPermissionError
        | Error.BetaNotFoundError
        | Error.BetaRateLimitError
        | Error.BetaGatewayTimeoutError
        | Error.BetaAPIError
        | Error.BetaOverloadedError;

      type: 'error';
    }

    export namespace Error {
      export interface BetaInvalidRequestError {
        message: string;

        type: 'invalid_request_error';
      }

      export interface BetaAuthenticationError {
        message: string;

        type: 'authentication_error';
      }

      export interface BetaBillingError {
        message: string;

        type: 'billing_error';
      }

      export interface BetaPermissionError {
        message: string;

        type: 'permission_error';
      }

      export interface BetaNotFoundError {
        message: string;

        type: 'not_found_error';
      }

      export interface BetaRateLimitError {
        message: string;

        type: 'rate_limit_error';
      }

      export interface BetaGatewayTimeoutError {
        message: string;

        type: 'timeout_error';
      }

      export interface BetaAPIError {
        message: string;

        type: 'api_error';
      }

      export interface BetaOverloadedError {
        message: string;

        type: 'overloaded_error';
      }
    }
  }

  export interface BetaCanceledResult {
    type: 'canceled';
  }

  export interface BetaExpiredResult {
    type: 'expired';
  }
}

export interface BatchCreateParams {
  /**
   * Body param: List of requests for prompt completion. Each is an individual
   * request to create a Message.
   */
  requests: Array<BatchCreateParams.Request>;

  /**
   * Header param: Optional header to specify the beta version(s) you want to use.
   *
   * To use multiple betas, use a comma separated list like `beta1,beta2` or specify
   * the header multiple times for each beta.
   */
  'anthropic-beta'?: Array<string>;

  /**
   * Header param: The version of the Anthropic API you want to use.
   *
   * Read more about versioning and our version history
   * [here](https://docs.anthropic.com/en/api/versioning).
   */
  'anthropic-version'?: string;

  /**
   * Header param: Your unique API key for authentication.
   *
   * This key is required in the header of all API requests, to authenticate your
   * account and access Anthropic's services. Get your API key through the
   * [Console](https://console.anthropic.com/settings/keys). Each key is scoped to a
   * Workspace.
   */
  'x-api-key'?: string;
}

export namespace BatchCreateParams {
  export interface Request {
    /**
     * Developer-provided ID created for each request in a Message Batch. Useful for
     * matching results to requests, as results may be given out of request order.
     *
     * Must be unique for each request within the Message Batch.
     */
    custom_id: string;

    /**
     * Messages API creation parameters for the individual request.
     *
     * See the [Messages API reference](/en/api/messages) for full documentation on
     * available parameters.
     */
    params: Request.Params;
  }

  export namespace Request {
    /**
     * Messages API creation parameters for the individual request.
     *
     * See the [Messages API reference](/en/api/messages) for full documentation on
     * available parameters.
     */
    export interface Params {
      /**
       * The maximum number of tokens to generate before stopping.
       *
       * Note that our models may stop _before_ reaching this maximum. This parameter
       * only specifies the absolute maximum number of tokens to generate.
       *
       * Different models have different maximum values for this parameter. See
       * [models](https://docs.anthropic.com/en/docs/models-overview) for details.
       */
      max_tokens: number;

      /**
       * Input messages.
       *
       * Our models are trained to operate on alternating `user` and `assistant`
       * conversational turns. When creating a new `Message`, you specify the prior
       * conversational turns with the `messages` parameter, and the model then generates
       * the next `Message` in the conversation. Consecutive `user` or `assistant` turns
       * in your request will be combined into a single turn.
       *
       * Each input message must be an object with a `role` and `content`. You can
       * specify a single `user`-role message, or you can include multiple `user` and
       * `assistant` messages.
       *
       * If the final message uses the `assistant` role, the response content will
       * continue immediately from the content in that message. This can be used to
       * constrain part of the model's response.
       *
       * Example with a single `user` message:
       *
       * ```json
       * [{ "role": "user", "content": "Hello, Claude" }]
       * ```
       *
       * Example with multiple conversational turns:
       *
       * ```json
       * [
       *   { "role": "user", "content": "Hello there." },
       *   { "role": "assistant", "content": "Hi, I'm Claude. How can I help you?" },
       *   { "role": "user", "content": "Can you explain LLMs in plain English?" }
       * ]
       * ```
       *
       * Example with a partially-filled response from Claude:
       *
       * ```json
       * [
       *   {
       *     "role": "user",
       *     "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"
       *   },
       *   { "role": "assistant", "content": "The best answer is (" }
       * ]
       * ```
       *
       * Each input message `content` may be either a single `string` or an array of
       * content blocks, where each block has a specific `type`. Using a `string` for
       * `content` is shorthand for an array of one content block of type `"text"`. The
       * following input messages are equivalent:
       *
       * ```json
       * { "role": "user", "content": "Hello, Claude" }
       * ```
       *
       * ```json
       * { "role": "user", "content": [{ "type": "text", "text": "Hello, Claude" }] }
       * ```
       *
       * Starting with Claude 3 models, you can also send image content blocks:
       *
       * ```json
       * {
       *   "role": "user",
       *   "content": [
       *     {
       *       "type": "image",
       *       "source": {
       *         "type": "base64",
       *         "media_type": "image/jpeg",
       *         "data": "/9j/4AAQSkZJRg..."
       *       }
       *     },
       *     { "type": "text", "text": "What is in this image?" }
       *   ]
       * }
       * ```
       *
       * We currently support the `base64` source type for images, and the `image/jpeg`,
       * `image/png`, `image/gif`, and `image/webp` media types.
       *
       * See [examples](https://docs.anthropic.com/en/api/messages-examples#vision) for
       * more input examples.
       *
       * Note that if you want to include a
       * [system prompt](https://docs.anthropic.com/en/docs/system-prompts), you can use
       * the top-level `system` parameter — there is no `"system"` role for input
       * messages in the Messages API.
       */
      messages: Array<Params.Message>;

      /**
       * The model that will complete your prompt.
       *
       * See [models](https://docs.anthropic.com/en/docs/models-overview) for additional
       * details and options.
       */
      model: string;

      /**
       * An object describing metadata about the request.
       */
      metadata?: Params.Metadata;

      /**
       * Custom text sequences that will cause the model to stop generating.
       *
       * Our models will normally stop when they have naturally completed their turn,
       * which will result in a response `stop_reason` of `"end_turn"`.
       *
       * If you want the model to stop generating when it encounters custom strings of
       * text, you can use the `stop_sequences` parameter. If the model encounters one of
       * the custom sequences, the response `stop_reason` value will be `"stop_sequence"`
       * and the response `stop_sequence` value will contain the matched stop sequence.
       */
      stop_sequences?: Array<string>;

      /**
       * Whether to incrementally stream the response using server-sent events.
       *
       * See [streaming](https://docs.anthropic.com/en/api/messages-streaming) for
       * details.
       */
      stream?: boolean;

      /**
       * System prompt.
       *
       * A system prompt is a way of providing context and instructions to Claude, such
       * as specifying a particular goal or role. See our
       * [guide to system prompts](https://docs.anthropic.com/en/docs/system-prompts).
       */
      system?: string | Array<Params.UnionMember1>;

      /**
       * Amount of randomness injected into the response.
       *
       * Defaults to `1.0`. Ranges from `0.0` to `1.0`. Use `temperature` closer to `0.0`
       * for analytical / multiple choice, and closer to `1.0` for creative and
       * generative tasks.
       *
       * Note that even with `temperature` of `0.0`, the results will not be fully
       * deterministic.
       */
      temperature?: number;

      /**
       * Configuration for enabling Claude's extended thinking.
       *
       * When enabled, responses include `thinking` content blocks showing Claude's
       * thinking process before the final answer. Requires a minimum budget of 1,024
       * tokens and counts towards your `max_tokens` limit.
       *
       * See
       * [extended thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)
       * for details.
       */
      thinking?: Params.ThinkingConfigEnabled | Params.ThinkingConfigDisabled;

      /**
       * How the model should use the provided tools. The model can use a specific tool,
       * any available tool, decide by itself, or not use tools at all.
       */
      tool_choice?:
        | Params.ToolChoiceAuto
        | Params.ToolChoiceAny
        | Params.ToolChoiceTool
        | Params.ToolChoiceNone;

      /**
       * Definitions of tools that the model may use.
       *
       * If you include `tools` in your API request, the model may return `tool_use`
       * content blocks that represent the model's use of those tools. You can then run
       * those tools using the tool input generated by the model and then optionally
       * return results back to the model using `tool_result` content blocks.
       *
       * Each tool definition includes:
       *
       * - `name`: Name of the tool.
       * - `description`: Optional, but strongly-recommended description of the tool.
       * - `input_schema`: [JSON schema](https://json-schema.org/draft/2020-12) for the
       *   tool `input` shape that the model will produce in `tool_use` output content
       *   blocks.
       *
       * For example, if you defined `tools` as:
       *
       * ```json
       * [
       *   {
       *     "name": "get_stock_price",
       *     "description": "Get the current stock price for a given ticker symbol.",
       *     "input_schema": {
       *       "type": "object",
       *       "properties": {
       *         "ticker": {
       *           "type": "string",
       *           "description": "The stock ticker symbol, e.g. AAPL for Apple Inc."
       *         }
       *       },
       *       "required": ["ticker"]
       *     }
       *   }
       * ]
       * ```
       *
       * And then asked the model "What's the S&P 500 at today?", the model might produce
       * `tool_use` content blocks in the response like this:
       *
       * ```json
       * [
       *   {
       *     "type": "tool_use",
       *     "id": "toolu_01D7FLrfh4GYq7yT1ULFeyMV",
       *     "name": "get_stock_price",
       *     "input": { "ticker": "^GSPC" }
       *   }
       * ]
       * ```
       *
       * You might then run your `get_stock_price` tool with `{"ticker": "^GSPC"}` as an
       * input, and return the following back to the model in a subsequent `user`
       * message:
       *
       * ```json
       * [
       *   {
       *     "type": "tool_result",
       *     "tool_use_id": "toolu_01D7FLrfh4GYq7yT1ULFeyMV",
       *     "content": "259.75 USD"
       *   }
       * ]
       * ```
       *
       * Tools can be used for workflows that include running client-side tools and
       * functions, or more generally whenever you want the model to produce a particular
       * JSON structure of output.
       *
       * See our [guide](https://docs.anthropic.com/en/docs/tool-use) for more details.
       */
      tools?: Array<Params.Tool | Params.BashTool20250124 | Params.TextEditor20250124>;

      /**
       * Only sample from the top K options for each subsequent token.
       *
       * Used to remove "long tail" low probability responses.
       * [Learn more technical details here](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277).
       *
       * Recommended for advanced use cases only. You usually only need to use
       * `temperature`.
       */
      top_k?: number;

      /**
       * Use nucleus sampling.
       *
       * In nucleus sampling, we compute the cumulative distribution over all the options
       * for each subsequent token in decreasing probability order and cut it off once it
       * reaches a particular probability specified by `top_p`. You should either alter
       * `temperature` or `top_p`, but not both.
       *
       * Recommended for advanced use cases only. You usually only need to use
       * `temperature`.
       */
      top_p?: number;
    }

    export namespace Params {
      export interface Message {
        content:
          | string
          | Array<
              | Message.RequestTextBlock
              | Message.RequestImageBlock
              | Message.RequestToolUseBlock
              | Message.RequestToolResultBlock
              | Message.RequestDocumentBlock
              | Message.RequestThinkingBlock
              | Message.RequestRedactedThinkingBlock
            >;

        role: 'user' | 'assistant';
      }

      export namespace Message {
        export interface RequestTextBlock {
          text: string;

          type: 'text';

          cache_control?: RequestTextBlock.CacheControl | null;

          citations?: Array<
            | RequestTextBlock.RequestCharLocationCitation
            | RequestTextBlock.RequestPageLocationCitation
            | RequestTextBlock.RequestContentBlockLocationCitation
          > | null;
        }

        export namespace RequestTextBlock {
          export interface CacheControl {
            type: 'ephemeral';
          }

          export interface RequestCharLocationCitation {
            cited_text: string;

            document_index: number;

            document_title: string | null;

            end_char_index: number;

            start_char_index: number;

            type: 'char_location';
          }

          export interface RequestPageLocationCitation {
            cited_text: string;

            document_index: number;

            document_title: string | null;

            end_page_number: number;

            start_page_number: number;

            type: 'page_location';
          }

          export interface RequestContentBlockLocationCitation {
            cited_text: string;

            document_index: number;

            document_title: string | null;

            end_block_index: number;

            start_block_index: number;

            type: 'content_block_location';
          }
        }

        export interface RequestImageBlock {
          source: RequestImageBlock.Base64ImageSource | RequestImageBlock.URLImageSource;

          type: 'image';

          cache_control?: RequestImageBlock.CacheControl | null;
        }

        export namespace RequestImageBlock {
          export interface Base64ImageSource {
            data: string;

            media_type: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';

            type: 'base64';
          }

          export interface URLImageSource {
            type: 'url';

            url: string;
          }

          export interface CacheControl {
            type: 'ephemeral';
          }
        }

        export interface RequestToolUseBlock {
          id: string;

          input: unknown;

          name: string;

          type: 'tool_use';

          cache_control?: RequestToolUseBlock.CacheControl | null;
        }

        export namespace RequestToolUseBlock {
          export interface CacheControl {
            type: 'ephemeral';
          }
        }

        export interface RequestToolResultBlock {
          tool_use_id: string;

          type: 'tool_result';

          cache_control?: RequestToolResultBlock.CacheControl | null;

          content?:
            | string
            | Array<RequestToolResultBlock.RequestTextBlock | RequestToolResultBlock.RequestImageBlock>;

          is_error?: boolean;
        }

        export namespace RequestToolResultBlock {
          export interface CacheControl {
            type: 'ephemeral';
          }

          export interface RequestTextBlock {
            text: string;

            type: 'text';

            cache_control?: RequestTextBlock.CacheControl | null;

            citations?: Array<
              | RequestTextBlock.RequestCharLocationCitation
              | RequestTextBlock.RequestPageLocationCitation
              | RequestTextBlock.RequestContentBlockLocationCitation
            > | null;
          }

          export namespace RequestTextBlock {
            export interface CacheControl {
              type: 'ephemeral';
            }

            export interface RequestCharLocationCitation {
              cited_text: string;

              document_index: number;

              document_title: string | null;

              end_char_index: number;

              start_char_index: number;

              type: 'char_location';
            }

            export interface RequestPageLocationCitation {
              cited_text: string;

              document_index: number;

              document_title: string | null;

              end_page_number: number;

              start_page_number: number;

              type: 'page_location';
            }

            export interface RequestContentBlockLocationCitation {
              cited_text: string;

              document_index: number;

              document_title: string | null;

              end_block_index: number;

              start_block_index: number;

              type: 'content_block_location';
            }
          }

          export interface RequestImageBlock {
            source: RequestImageBlock.Base64ImageSource | RequestImageBlock.URLImageSource;

            type: 'image';

            cache_control?: RequestImageBlock.CacheControl | null;
          }

          export namespace RequestImageBlock {
            export interface Base64ImageSource {
              data: string;

              media_type: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';

              type: 'base64';
            }

            export interface URLImageSource {
              type: 'url';

              url: string;
            }

            export interface CacheControl {
              type: 'ephemeral';
            }
          }
        }

        export interface RequestDocumentBlock {
          source:
            | RequestDocumentBlock.Base64PdfSource
            | RequestDocumentBlock.PlainTextSource
            | RequestDocumentBlock.ContentBlockSource
            | RequestDocumentBlock.UrlpdfSource;

          type: 'document';

          cache_control?: RequestDocumentBlock.CacheControl | null;

          citations?: RequestDocumentBlock.Citations;

          context?: string | null;

          title?: string | null;
        }

        export namespace RequestDocumentBlock {
          export interface Base64PdfSource {
            data: string;

            media_type: 'application/pdf';

            type: 'base64';
          }

          export interface PlainTextSource {
            data: string;

            media_type: 'text/plain';

            type: 'text';
          }

          export interface ContentBlockSource {
            content:
              | string
              | Array<ContentBlockSource.RequestTextBlock | ContentBlockSource.RequestImageBlock>;

            type: 'content';
          }

          export namespace ContentBlockSource {
            export interface RequestTextBlock {
              text: string;

              type: 'text';

              cache_control?: RequestTextBlock.CacheControl | null;

              citations?: Array<
                | RequestTextBlock.RequestCharLocationCitation
                | RequestTextBlock.RequestPageLocationCitation
                | RequestTextBlock.RequestContentBlockLocationCitation
              > | null;
            }

            export namespace RequestTextBlock {
              export interface CacheControl {
                type: 'ephemeral';
              }

              export interface RequestCharLocationCitation {
                cited_text: string;

                document_index: number;

                document_title: string | null;

                end_char_index: number;

                start_char_index: number;

                type: 'char_location';
              }

              export interface RequestPageLocationCitation {
                cited_text: string;

                document_index: number;

                document_title: string | null;

                end_page_number: number;

                start_page_number: number;

                type: 'page_location';
              }

              export interface RequestContentBlockLocationCitation {
                cited_text: string;

                document_index: number;

                document_title: string | null;

                end_block_index: number;

                start_block_index: number;

                type: 'content_block_location';
              }
            }

            export interface RequestImageBlock {
              source: RequestImageBlock.Base64ImageSource | RequestImageBlock.URLImageSource;

              type: 'image';

              cache_control?: RequestImageBlock.CacheControl | null;
            }

            export namespace RequestImageBlock {
              export interface Base64ImageSource {
                data: string;

                media_type: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';

                type: 'base64';
              }

              export interface URLImageSource {
                type: 'url';

                url: string;
              }

              export interface CacheControl {
                type: 'ephemeral';
              }
            }
          }

          export interface UrlpdfSource {
            type: 'url';

            url: string;
          }

          export interface CacheControl {
            type: 'ephemeral';
          }

          export interface Citations {
            enabled?: boolean;
          }
        }

        export interface RequestThinkingBlock {
          signature: string;

          thinking: string;

          type: 'thinking';
        }

        export interface RequestRedactedThinkingBlock {
          data: string;

          type: 'redacted_thinking';
        }
      }

      /**
       * An object describing metadata about the request.
       */
      export interface Metadata {
        /**
         * An external identifier for the user who is associated with the request.
         *
         * This should be a uuid, hash value, or other opaque identifier. Anthropic may use
         * this id to help detect abuse. Do not include any identifying information such as
         * name, email address, or phone number.
         */
        user_id?: string | null;
      }

      export interface UnionMember1 {
        text: string;

        type: 'text';

        cache_control?: UnionMember1.CacheControl | null;

        citations?: Array<
          | UnionMember1.RequestCharLocationCitation
          | UnionMember1.RequestPageLocationCitation
          | UnionMember1.RequestContentBlockLocationCitation
        > | null;
      }

      export namespace UnionMember1 {
        export interface CacheControl {
          type: 'ephemeral';
        }

        export interface RequestCharLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_char_index: number;

          start_char_index: number;

          type: 'char_location';
        }

        export interface RequestPageLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_page_number: number;

          start_page_number: number;

          type: 'page_location';
        }

        export interface RequestContentBlockLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_block_index: number;

          start_block_index: number;

          type: 'content_block_location';
        }
      }

      export interface ThinkingConfigEnabled {
        /**
         * Determines how many tokens Claude can use for its internal reasoning process.
         * Larger budgets can enable more thorough analysis for complex problems, improving
         * response quality.
         *
         * Must be ≥1024 and less than `max_tokens`.
         *
         * See
         * [extended thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)
         * for details.
         */
        budget_tokens: number;

        type: 'enabled';
      }

      export interface ThinkingConfigDisabled {
        type: 'disabled';
      }

      /**
       * The model will automatically decide whether to use tools.
       */
      export interface ToolChoiceAuto {
        type: 'auto';

        /**
         * Whether to disable parallel tool use.
         *
         * Defaults to `false`. If set to `true`, the model will output at most one tool
         * use.
         */
        disable_parallel_tool_use?: boolean;
      }

      /**
       * The model will use any available tools.
       */
      export interface ToolChoiceAny {
        type: 'any';

        /**
         * Whether to disable parallel tool use.
         *
         * Defaults to `false`. If set to `true`, the model will output exactly one tool
         * use.
         */
        disable_parallel_tool_use?: boolean;
      }

      /**
       * The model will use the specified tool with `tool_choice.name`.
       */
      export interface ToolChoiceTool {
        /**
         * The name of the tool to use.
         */
        name: string;

        type: 'tool';

        /**
         * Whether to disable parallel tool use.
         *
         * Defaults to `false`. If set to `true`, the model will output exactly one tool
         * use.
         */
        disable_parallel_tool_use?: boolean;
      }

      /**
       * The model will not be allowed to use tools.
       */
      export interface ToolChoiceNone {
        type: 'none';
      }

      export interface Tool {
        /**
         * [JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.
         *
         * This defines the shape of the `input` that your tool accepts and that the model
         * will produce.
         */
        input_schema: Tool.InputSchema;

        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: string;

        cache_control?: Tool.CacheControl | null;

        /**
         * Description of what this tool does.
         *
         * Tool descriptions should be as detailed as possible. The more information that
         * the model has about what the tool is and how to use it, the better it will
         * perform. You can use natural language descriptions to reinforce important
         * aspects of the tool input JSON schema.
         */
        description?: string;
      }

      export namespace Tool {
        /**
         * [JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.
         *
         * This defines the shape of the `input` that your tool accepts and that the model
         * will produce.
         */
        export interface InputSchema {
          type: 'object';

          properties?: unknown | null;
          [k: string]: unknown;
        }

        export interface CacheControl {
          type: 'ephemeral';
        }
      }

      export interface BashTool20250124 {
        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: 'bash';

        type: 'bash_20250124';

        cache_control?: BashTool20250124.CacheControl | null;
      }

      export namespace BashTool20250124 {
        export interface CacheControl {
          type: 'ephemeral';
        }
      }

      export interface TextEditor20250124 {
        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: 'str_replace_editor';

        type: 'text_editor_20250124';

        cache_control?: TextEditor20250124.CacheControl | null;
      }

      export namespace TextEditor20250124 {
        export interface CacheControl {
          type: 'ephemeral';
        }
      }
    }
  }
}

export interface BatchRetrieveParams {
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

export interface BatchListParams {
  /**
   * Query param: ID of the object to use as a cursor for pagination. When provided,
   * returns the page of results immediately after this object.
   */
  after_id?: string;

  /**
   * Query param: ID of the object to use as a cursor for pagination. When provided,
   * returns the page of results immediately before this object.
   */
  before_id?: string;

  /**
   * Query param: Number of items to return per page.
   *
   * Defaults to `20`. Ranges from `1` to `1000`.
   */
  limit?: number;

  /**
   * Header param: Optional header to specify the beta version(s) you want to use.
   *
   * To use multiple betas, use a comma separated list like `beta1,beta2` or specify
   * the header multiple times for each beta.
   */
  'anthropic-beta'?: Array<string>;

  /**
   * Header param: The version of the Anthropic API you want to use.
   *
   * Read more about versioning and our version history
   * [here](https://docs.anthropic.com/en/api/versioning).
   */
  'anthropic-version'?: string;

  /**
   * Header param: Your unique API key for authentication.
   *
   * This key is required in the header of all API requests, to authenticate your
   * account and access Anthropic's services. Get your API key through the
   * [Console](https://console.anthropic.com/settings/keys). Each key is scoped to a
   * Workspace.
   */
  'x-api-key'?: string;
}

export interface BatchDeleteParams {
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

export interface BatchCancelParams {
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

export interface BatchCancelBetaParams {
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

export interface BatchResultsParams {
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

export interface BatchResultsBetaParams {
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

Batches.BetaTrue = BetaTrue;

export declare namespace Batches {
  export {
    type BatchCreateResponse as BatchCreateResponse,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchListResponse as BatchListResponse,
    type BatchDeleteResponse as BatchDeleteResponse,
    type BatchCancelResponse as BatchCancelResponse,
    type BatchCancelBetaResponse as BatchCancelBetaResponse,
    type BatchResultsResponse as BatchResultsResponse,
    type BatchResultsBetaResponse as BatchResultsBetaResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchRetrieveParams as BatchRetrieveParams,
    type BatchListParams as BatchListParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchCancelParams as BatchCancelParams,
    type BatchCancelBetaParams as BatchCancelBetaParams,
    type BatchResultsParams as BatchResultsParams,
    type BatchResultsBetaParams as BatchResultsBetaParams,
  };

  export {
    BetaTrue as BetaTrue,
    type BetaTrueRetrieveResponse as BetaTrueRetrieveResponse,
    type BetaTrueDeleteResponse as BetaTrueDeleteResponse,
    type BetaTrueRetrieveParams as BetaTrueRetrieveParams,
    type BetaTrueDeleteParams as BetaTrueDeleteParams,
  };
}
