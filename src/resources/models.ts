// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Models extends APIResource {
  /**
   * Get a specific model.
   *
   * The Models API response can be used to determine information about a specific
   * model or resolve a model alias to a model ID.
   */
  retrieve(
    modelId: string,
    params?: ModelRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelRetrieveResponse>;
  retrieve(modelId: string, options?: Core.RequestOptions): Core.APIPromise<ModelRetrieveResponse>;
  retrieve(
    modelId: string,
    params: ModelRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(modelId, {}, params);
    }
    const { 'anthropic-version': anthropicVersion, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/v1/models/${modelId}`, {
      ...options,
      headers: {
        ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * List available models.
   *
   * The Models API response can be used to determine which models are available for
   * use in the API. More recently released models are listed first.
   */
  list(params?: ModelListParams, options?: Core.RequestOptions): Core.APIPromise<ModelListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse>;
  list(
    params: ModelListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'anthropic-version': anthropicVersion, 'x-api-key': xAPIKey, ...query } = params;
    return this._client.get('/v1/models', {
      query,
      ...options,
      headers: {
        ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Get a specific model.
   *
   * The Models API response can be used to determine information about a specific
   * model or resolve a model alias to a model ID.
   */
  retrieveBeta(
    modelId: string,
    params?: ModelRetrieveBetaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelRetrieveBetaResponse>;
  retrieveBeta(modelId: string, options?: Core.RequestOptions): Core.APIPromise<ModelRetrieveBetaResponse>;
  retrieveBeta(
    modelId: string,
    params: ModelRetrieveBetaParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelRetrieveBetaResponse> {
    if (isRequestOptions(params)) {
      return this.retrieveBeta(modelId, {}, params);
    }
    const { 'anthropic-version': anthropicVersion, 'x-api-key': xAPIKey } = params;
    return this._client.get(`/v1/models/${modelId}?beta=true`, {
      ...options,
      headers: {
        ...(anthropicVersion != null ? { 'anthropic-version': anthropicVersion } : undefined),
        ...(xAPIKey != null ? { 'x-api-key': xAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface ModelRetrieveResponse {
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

export interface ModelListResponse {
  data: Array<ModelListResponse.Data>;

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

export namespace ModelListResponse {
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

export interface ModelRetrieveBetaResponse {
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

export interface ModelRetrieveParams {
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

export interface ModelListParams {
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

export interface ModelRetrieveBetaParams {
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

export declare namespace Models {
  export {
    type ModelRetrieveResponse as ModelRetrieveResponse,
    type ModelListResponse as ModelListResponse,
    type ModelRetrieveBetaResponse as ModelRetrieveBetaResponse,
    type ModelRetrieveParams as ModelRetrieveParams,
    type ModelListParams as ModelListParams,
    type ModelRetrieveBetaParams as ModelRetrieveBetaParams,
  };
}
