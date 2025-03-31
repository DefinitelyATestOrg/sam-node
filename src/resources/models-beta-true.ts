// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class ModelsBetaTrue extends APIResource {
  /**
   * List available models.
   *
   * The Models API response can be used to determine which models are available for
   * use in the API. More recently released models are listed first.
   */
  list(
    params: ModelsBetaTrueListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelsBetaTrueListResponse> {
    const { 'anthropic-version': anthropicVersion, 'x-api-key': xAPIKey, ...query } = params ?? {};
    return this._client.get('/v1/models?beta=true', {
      query,
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

export interface ModelsBetaTrueListResponse {
  data: Array<ModelsBetaTrueListResponse.Data>;

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

export namespace ModelsBetaTrueListResponse {
  export interface Data {
    /**
     * Unique model identifier.
     */
    id: string;

    /**
     * RFC 3339 datetime string representing the time at which the model was released.
     * May be set to an epoch value if the release date is unknown.
     */
    created_at: string;

    /**
     * A human-readable name for the model.
     */
    display_name: string;

    /**
     * Object type.
     *
     * For Models, this is always `"model"`.
     */
    type: 'model';
  }
}

export interface ModelsBetaTrueListParams {
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

export declare namespace ModelsBetaTrue {
  export {
    type ModelsBetaTrueListResponse as ModelsBetaTrueListResponse,
    type ModelsBetaTrueListParams as ModelsBetaTrueListParams,
  };
}
