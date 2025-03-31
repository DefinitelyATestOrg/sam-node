// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Complete extends APIResource {
  /**
   * [Legacy] Create a Text Completion.
   *
   * The Text Completions API is a legacy API. We recommend using the
   * [Messages API](https://docs.anthropic.com/en/api/messages) going forward.
   *
   * Future models and features will not be compatible with Text Completions. See our
   * [migration guide](https://docs.anthropic.com/en/api/migrating-from-text-completions-to-messages)
   * for guidance in migrating from Text Completions to Messages.
   */
  create(params: CompleteCreateParams, options?: RequestOptions): APIPromise<CompleteCreateResponse> {
    const { 'anthropic-version': anthropicVersion, 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post('/v1/complete', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
          ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface CompleteCreateResponse {
  /**
   * Unique object identifier.
   *
   * The format and length of IDs may change over time.
   */
  id: string;

  /**
   * The resulting completion up to and excluding the stop sequences.
   */
  completion: string;

  /**
   * The model that handled the request.
   */
  model: string;

  /**
   * The reason that we stopped.
   *
   * This may be one the following values:
   *
   * - `"stop_sequence"`: we reached a stop sequence — either provided by you via the
   *   `stop_sequences` parameter, or a stop sequence built into the model
   * - `"max_tokens"`: we exceeded `max_tokens_to_sample` or the model's maximum
   */
  stop_reason: string | null;

  /**
   * Object type.
   *
   * For Text Completions, this is always `"completion"`.
   */
  type: 'completion';
}

export interface CompleteCreateParams {
  /**
   * Body param: The maximum number of tokens to generate before stopping.
   *
   * Note that our models may stop _before_ reaching this maximum. This parameter
   * only specifies the absolute maximum number of tokens to generate.
   */
  max_tokens_to_sample: number;

  /**
   * Body param: The model that will complete your prompt.
   *
   * See [models](https://docs.anthropic.com/en/docs/models-overview) for additional
   * details and options.
   */
  model: string;

  /**
   * Body param: The prompt that you want Claude to complete.
   *
   * For proper response generation you will need to format your prompt using
   * alternating `\n\nHuman:` and `\n\nAssistant:` conversational turns. For example:
   *
   * ```
   * "\n\nHuman: {userQuestion}\n\nAssistant:"
   * ```
   *
   * See [prompt validation](https://docs.anthropic.com/en/api/prompt-validation) and
   * our guide to
   * [prompt design](https://docs.anthropic.com/en/docs/intro-to-prompting) for more
   * details.
   */
  prompt: string;

  /**
   * Body param: An object describing metadata about the request.
   */
  metadata?: CompleteCreateParams.Metadata;

  /**
   * Body param: Sequences that will cause the model to stop generating.
   *
   * Our models stop on `"\n\nHuman:"`, and may include additional built-in stop
   * sequences in the future. By providing the stop_sequences parameter, you may
   * include additional strings that will cause the model to stop generating.
   */
  stop_sequences?: Array<string>;

  /**
   * Body param: Whether to incrementally stream the response using server-sent
   * events.
   *
   * See [streaming](https://docs.anthropic.com/en/api/streaming) for details.
   */
  stream?: boolean;

  /**
   * Body param: Amount of randomness injected into the response.
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
   * Body param: Only sample from the top K options for each subsequent token.
   *
   * Used to remove "long tail" low probability responses.
   * [Learn more technical details here](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277).
   *
   * Recommended for advanced use cases only. You usually only need to use
   * `temperature`.
   */
  top_k?: number;

  /**
   * Body param: Use nucleus sampling.
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

export namespace CompleteCreateParams {
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
}

export declare namespace Complete {
  export {
    type CompleteCreateResponse as CompleteCreateResponse,
    type CompleteCreateParams as CompleteCreateParams,
  };
}
