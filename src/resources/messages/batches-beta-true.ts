// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class BatchesBetaTrue extends APIResource {
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
  create(
    params: BatchesBetaTrueCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BatchesBetaTrueCreateResponse> {
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
      ...body
    } = params;
    return this._client.post('/v1/messages/batches?beta=true', {
      body,
      ...options,
      headers: {
        ...(anthropicBeta?.toString() != null ? { 'anthropic-beta': anthropicBeta?.toString() } : undefined),
        ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
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
    params?: BatchesBetaTrueListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BatchesBetaTrueListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BatchesBetaTrueListResponse>;
  list(
    params: BatchesBetaTrueListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BatchesBetaTrueListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const {
      'anthropic-beta': anthropicBeta,
      'anthropic-version': anthropicVersion,
      'x-api-key': xAPIKey,
      ...query
    } = params;
    return this._client.get('/v1/messages/batches?beta=true', {
      query,
      ...options,
      headers: {
        ...(anthropicBeta?.toString() != null ? { 'anthropic-beta': anthropicBeta?.toString() } : undefined),
        ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface BatchesBetaTrueCreateResponse {
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
  request_counts: BatchesBetaTrueCreateResponse.RequestCounts;

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

export namespace BatchesBetaTrueCreateResponse {
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

export interface BatchesBetaTrueListResponse {
  data: Array<BatchesBetaTrueListResponse.Data>;

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

export namespace BatchesBetaTrueListResponse {
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

export interface BatchesBetaTrueCreateParams {
  /**
   * Body param: List of requests for prompt completion. Each is an individual
   * request to create a Message.
   */
  requests: Array<BatchesBetaTrueCreateParams.Request>;

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

export namespace BatchesBetaTrueCreateParams {
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
      thinking?: Params.BetaThinkingConfigEnabled | Params.BetaThinkingConfigDisabled;

      /**
       * How the model should use the provided tools. The model can use a specific tool,
       * any available tool, decide by itself, or not use tools at all.
       */
      tool_choice?:
        | Params.BetaToolChoiceAuto
        | Params.BetaToolChoiceAny
        | Params.BetaToolChoiceTool
        | Params.BetaToolChoiceNone;

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
      tools?: Array<
        | Params.BetaTool
        | Params.BetaComputerUseTool20241022
        | Params.BetaBashTool20241022
        | Params.BetaTextEditor20241022
        | Params.BetaComputerUseTool20250124
        | Params.BetaBashTool20250124
        | Params.BetaTextEditor20250124
      >;

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
              | Message.BetaRequestTextBlock
              | Message.BetaRequestImageBlock
              | Message.BetaRequestToolUseBlock
              | Message.BetaRequestToolResultBlock
              | Message.BetaRequestDocumentBlock
              | Message.BetaRequestThinkingBlock
              | Message.BetaRequestRedactedThinkingBlock
            >;

        role: 'user' | 'assistant';
      }

      export namespace Message {
        export interface BetaRequestTextBlock {
          text: string;

          type: 'text';

          cache_control?: BetaRequestTextBlock.CacheControl | null;

          citations?: Array<
            | BetaRequestTextBlock.BetaRequestCharLocationCitation
            | BetaRequestTextBlock.BetaRequestPageLocationCitation
            | BetaRequestTextBlock.BetaRequestContentBlockLocationCitation
          > | null;
        }

        export namespace BetaRequestTextBlock {
          export interface CacheControl {
            type: 'ephemeral';
          }

          export interface BetaRequestCharLocationCitation {
            cited_text: string;

            document_index: number;

            document_title: string | null;

            end_char_index: number;

            start_char_index: number;

            type: 'char_location';
          }

          export interface BetaRequestPageLocationCitation {
            cited_text: string;

            document_index: number;

            document_title: string | null;

            end_page_number: number;

            start_page_number: number;

            type: 'page_location';
          }

          export interface BetaRequestContentBlockLocationCitation {
            cited_text: string;

            document_index: number;

            document_title: string | null;

            end_block_index: number;

            start_block_index: number;

            type: 'content_block_location';
          }
        }

        export interface BetaRequestImageBlock {
          source: BetaRequestImageBlock.BetaBase64ImageSource | BetaRequestImageBlock.BetaURLImageSource;

          type: 'image';

          cache_control?: BetaRequestImageBlock.CacheControl | null;
        }

        export namespace BetaRequestImageBlock {
          export interface BetaBase64ImageSource {
            data: string;

            media_type: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';

            type: 'base64';
          }

          export interface BetaURLImageSource {
            type: 'url';

            url: string;
          }

          export interface CacheControl {
            type: 'ephemeral';
          }
        }

        export interface BetaRequestToolUseBlock {
          id: string;

          input: unknown;

          name: string;

          type: 'tool_use';

          cache_control?: BetaRequestToolUseBlock.CacheControl | null;
        }

        export namespace BetaRequestToolUseBlock {
          export interface CacheControl {
            type: 'ephemeral';
          }
        }

        export interface BetaRequestToolResultBlock {
          tool_use_id: string;

          type: 'tool_result';

          cache_control?: BetaRequestToolResultBlock.CacheControl | null;

          content?:
            | string
            | Array<
                | BetaRequestToolResultBlock.BetaRequestTextBlock
                | BetaRequestToolResultBlock.BetaRequestImageBlock
              >;

          is_error?: boolean;
        }

        export namespace BetaRequestToolResultBlock {
          export interface CacheControl {
            type: 'ephemeral';
          }

          export interface BetaRequestTextBlock {
            text: string;

            type: 'text';

            cache_control?: BetaRequestTextBlock.CacheControl | null;

            citations?: Array<
              | BetaRequestTextBlock.BetaRequestCharLocationCitation
              | BetaRequestTextBlock.BetaRequestPageLocationCitation
              | BetaRequestTextBlock.BetaRequestContentBlockLocationCitation
            > | null;
          }

          export namespace BetaRequestTextBlock {
            export interface CacheControl {
              type: 'ephemeral';
            }

            export interface BetaRequestCharLocationCitation {
              cited_text: string;

              document_index: number;

              document_title: string | null;

              end_char_index: number;

              start_char_index: number;

              type: 'char_location';
            }

            export interface BetaRequestPageLocationCitation {
              cited_text: string;

              document_index: number;

              document_title: string | null;

              end_page_number: number;

              start_page_number: number;

              type: 'page_location';
            }

            export interface BetaRequestContentBlockLocationCitation {
              cited_text: string;

              document_index: number;

              document_title: string | null;

              end_block_index: number;

              start_block_index: number;

              type: 'content_block_location';
            }
          }

          export interface BetaRequestImageBlock {
            source: BetaRequestImageBlock.BetaBase64ImageSource | BetaRequestImageBlock.BetaURLImageSource;

            type: 'image';

            cache_control?: BetaRequestImageBlock.CacheControl | null;
          }

          export namespace BetaRequestImageBlock {
            export interface BetaBase64ImageSource {
              data: string;

              media_type: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';

              type: 'base64';
            }

            export interface BetaURLImageSource {
              type: 'url';

              url: string;
            }

            export interface CacheControl {
              type: 'ephemeral';
            }
          }
        }

        export interface BetaRequestDocumentBlock {
          source:
            | BetaRequestDocumentBlock.BetaBase64PdfSource
            | BetaRequestDocumentBlock.BetaPlainTextSource
            | BetaRequestDocumentBlock.BetaContentBlockSource
            | BetaRequestDocumentBlock.BetaUrlpdfSource;

          type: 'document';

          cache_control?: BetaRequestDocumentBlock.CacheControl | null;

          citations?: BetaRequestDocumentBlock.Citations;

          context?: string | null;

          title?: string | null;
        }

        export namespace BetaRequestDocumentBlock {
          export interface BetaBase64PdfSource {
            data: string;

            media_type: 'application/pdf';

            type: 'base64';
          }

          export interface BetaPlainTextSource {
            data: string;

            media_type: 'text/plain';

            type: 'text';
          }

          export interface BetaContentBlockSource {
            content:
              | string
              | Array<
                  BetaContentBlockSource.BetaRequestTextBlock | BetaContentBlockSource.BetaRequestImageBlock
                >;

            type: 'content';
          }

          export namespace BetaContentBlockSource {
            export interface BetaRequestTextBlock {
              text: string;

              type: 'text';

              cache_control?: BetaRequestTextBlock.CacheControl | null;

              citations?: Array<
                | BetaRequestTextBlock.BetaRequestCharLocationCitation
                | BetaRequestTextBlock.BetaRequestPageLocationCitation
                | BetaRequestTextBlock.BetaRequestContentBlockLocationCitation
              > | null;
            }

            export namespace BetaRequestTextBlock {
              export interface CacheControl {
                type: 'ephemeral';
              }

              export interface BetaRequestCharLocationCitation {
                cited_text: string;

                document_index: number;

                document_title: string | null;

                end_char_index: number;

                start_char_index: number;

                type: 'char_location';
              }

              export interface BetaRequestPageLocationCitation {
                cited_text: string;

                document_index: number;

                document_title: string | null;

                end_page_number: number;

                start_page_number: number;

                type: 'page_location';
              }

              export interface BetaRequestContentBlockLocationCitation {
                cited_text: string;

                document_index: number;

                document_title: string | null;

                end_block_index: number;

                start_block_index: number;

                type: 'content_block_location';
              }
            }

            export interface BetaRequestImageBlock {
              source: BetaRequestImageBlock.BetaBase64ImageSource | BetaRequestImageBlock.BetaURLImageSource;

              type: 'image';

              cache_control?: BetaRequestImageBlock.CacheControl | null;
            }

            export namespace BetaRequestImageBlock {
              export interface BetaBase64ImageSource {
                data: string;

                media_type: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';

                type: 'base64';
              }

              export interface BetaURLImageSource {
                type: 'url';

                url: string;
              }

              export interface CacheControl {
                type: 'ephemeral';
              }
            }
          }

          export interface BetaUrlpdfSource {
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

        export interface BetaRequestThinkingBlock {
          signature: string;

          thinking: string;

          type: 'thinking';
        }

        export interface BetaRequestRedactedThinkingBlock {
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
          | UnionMember1.BetaRequestCharLocationCitation
          | UnionMember1.BetaRequestPageLocationCitation
          | UnionMember1.BetaRequestContentBlockLocationCitation
        > | null;
      }

      export namespace UnionMember1 {
        export interface CacheControl {
          type: 'ephemeral';
        }

        export interface BetaRequestCharLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_char_index: number;

          start_char_index: number;

          type: 'char_location';
        }

        export interface BetaRequestPageLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_page_number: number;

          start_page_number: number;

          type: 'page_location';
        }

        export interface BetaRequestContentBlockLocationCitation {
          cited_text: string;

          document_index: number;

          document_title: string | null;

          end_block_index: number;

          start_block_index: number;

          type: 'content_block_location';
        }
      }

      export interface BetaThinkingConfigEnabled {
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

      export interface BetaThinkingConfigDisabled {
        type: 'disabled';
      }

      /**
       * The model will automatically decide whether to use tools.
       */
      export interface BetaToolChoiceAuto {
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
      export interface BetaToolChoiceAny {
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
      export interface BetaToolChoiceTool {
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
      export interface BetaToolChoiceNone {
        type: 'none';
      }

      export interface BetaTool {
        /**
         * [JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.
         *
         * This defines the shape of the `input` that your tool accepts and that the model
         * will produce.
         */
        input_schema: BetaTool.InputSchema;

        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: string;

        cache_control?: BetaTool.CacheControl | null;

        /**
         * Description of what this tool does.
         *
         * Tool descriptions should be as detailed as possible. The more information that
         * the model has about what the tool is and how to use it, the better it will
         * perform. You can use natural language descriptions to reinforce important
         * aspects of the tool input JSON schema.
         */
        description?: string;

        type?: 'custom' | null;
      }

      export namespace BetaTool {
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

      export interface BetaComputerUseTool20241022 {
        /**
         * The height of the display in pixels.
         */
        display_height_px: number;

        /**
         * The width of the display in pixels.
         */
        display_width_px: number;

        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: 'computer';

        type: 'computer_20241022';

        cache_control?: BetaComputerUseTool20241022.CacheControl | null;

        /**
         * The X11 display number (e.g. 0, 1) for the display.
         */
        display_number?: number | null;
      }

      export namespace BetaComputerUseTool20241022 {
        export interface CacheControl {
          type: 'ephemeral';
        }
      }

      export interface BetaBashTool20241022 {
        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: 'bash';

        type: 'bash_20241022';

        cache_control?: BetaBashTool20241022.CacheControl | null;
      }

      export namespace BetaBashTool20241022 {
        export interface CacheControl {
          type: 'ephemeral';
        }
      }

      export interface BetaTextEditor20241022 {
        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: 'str_replace_editor';

        type: 'text_editor_20241022';

        cache_control?: BetaTextEditor20241022.CacheControl | null;
      }

      export namespace BetaTextEditor20241022 {
        export interface CacheControl {
          type: 'ephemeral';
        }
      }

      export interface BetaComputerUseTool20250124 {
        /**
         * The height of the display in pixels.
         */
        display_height_px: number;

        /**
         * The width of the display in pixels.
         */
        display_width_px: number;

        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: 'computer';

        type: 'computer_20250124';

        cache_control?: BetaComputerUseTool20250124.CacheControl | null;

        /**
         * The X11 display number (e.g. 0, 1) for the display.
         */
        display_number?: number | null;
      }

      export namespace BetaComputerUseTool20250124 {
        export interface CacheControl {
          type: 'ephemeral';
        }
      }

      export interface BetaBashTool20250124 {
        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: 'bash';

        type: 'bash_20250124';

        cache_control?: BetaBashTool20250124.CacheControl | null;
      }

      export namespace BetaBashTool20250124 {
        export interface CacheControl {
          type: 'ephemeral';
        }
      }

      export interface BetaTextEditor20250124 {
        /**
         * Name of the tool.
         *
         * This is how the tool will be called by the model and in tool_use blocks.
         */
        name: 'str_replace_editor';

        type: 'text_editor_20250124';

        cache_control?: BetaTextEditor20250124.CacheControl | null;
      }

      export namespace BetaTextEditor20250124 {
        export interface CacheControl {
          type: 'ephemeral';
        }
      }
    }
  }
}

export interface BatchesBetaTrueListParams {
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

export declare namespace BatchesBetaTrue {
  export {
    type BatchesBetaTrueCreateResponse as BatchesBetaTrueCreateResponse,
    type BatchesBetaTrueListResponse as BatchesBetaTrueListResponse,
    type BatchesBetaTrueCreateParams as BatchesBetaTrueCreateParams,
    type BatchesBetaTrueListParams as BatchesBetaTrueListParams,
  };
}
