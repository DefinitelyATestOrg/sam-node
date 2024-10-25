// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as PetsAPI from './pets';
import { type BlobLike } from '../uploads';

export class Pets extends APIResource {
  /**
   * Updates a pet in the store with form data
   */
  create(petId: number, params?: PetCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(petId: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    petId: number,
    params: PetCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.create(petId, {}, params);
    }
    const { name, status } = params;
    return this._client.post(`/pet/${petId}`, {
      query: { name, status },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a single pet
   */
  retrieve(petId: number, options?: Core.RequestOptions): Core.APIPromise<Pet> {
    return this._client.get(`/pet/${petId}`, options);
  }

  /**
   * Update an existing pet by Id
   */
  update(body: PetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Pet> {
    return this._client.put('/pet', { body, ...options });
  }

  /**
   * Deletes a pet
   */
  delete(petId: number, params?: PetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(petId: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    petId: number,
    params: PetDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(petId, {}, params);
    }
    const { api_key } = params;
    return this._client.delete(`/pet/${petId}`, {
      ...options,
      headers: {
        Accept: '*/*',
        ...(api_key != null ? { api_key: api_key } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Multiple status values can be provided with comma separated strings
   */
  findByStatus(
    query?: PetFindByStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PetFindByStatusResponse>;
  findByStatus(options?: Core.RequestOptions): Core.APIPromise<PetFindByStatusResponse>;
  findByStatus(
    query: PetFindByStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PetFindByStatusResponse> {
    if (isRequestOptions(query)) {
      return this.findByStatus({}, query);
    }
    return this._client.get('/pet/findByStatus', { query, ...options });
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3
   * for testing.
   */
  findByTags(
    query?: PetFindByTagsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PetFindByTagsResponse>;
  findByTags(options?: Core.RequestOptions): Core.APIPromise<PetFindByTagsResponse>;
  findByTags(
    query: PetFindByTagsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PetFindByTagsResponse> {
    if (isRequestOptions(query)) {
      return this.findByTags({}, query);
    }
    return this._client.get('/pet/findByTags', { query, ...options });
  }

  /**
   * uploads an image
   */
  uploadImage(
    petId: number,
    params: PetUploadImageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIResponse> {
    const { body, additionalMetadata } = params;
    return this._client.post(`/pet/${petId}/uploadImage`, {
      query: { additionalMetadata },
      body: body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
      __binaryRequest: true,
    });
  }
}

export interface APIResponse {
  code?: number;

  message?: string;

  type?: string;
}

export interface Pet {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: Pet.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';

  tags?: Array<Pet.Tag>;
}

export namespace Pet {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export type PetFindByStatusResponse = Array<Pet>;

export type PetFindByTagsResponse = Array<Pet>;

export interface PetCreateParams {
  /**
   * Name of pet that needs to be updated
   */
  name?: string;

  /**
   * Status of pet that needs to be updated
   */
  status?: string;
}

export interface PetUpdateParams {
  name: string;

  photoUrls: Array<string>;

  id?: number;

  category?: PetUpdateParams.Category;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';

  tags?: Array<PetUpdateParams.Tag>;
}

export namespace PetUpdateParams {
  export interface Category {
    id?: number;

    name?: string;
  }

  export interface Tag {
    id?: number;

    name?: string;
  }
}

export interface PetDeleteParams {
  api_key?: string;
}

export interface PetFindByStatusParams {
  /**
   * Status values that need to be considered for filter
   */
  status?: 'available' | 'pending' | 'sold';
}

export interface PetFindByTagsParams {
  /**
   * Tags to filter by
   */
  tags?: Array<string>;
}

export interface PetUploadImageParams {
  /**
   * Body param:
   */
  body: string | ArrayBufferView | ArrayBuffer | BlobLike;

  /**
   * Query param: Additional Metadata
   */
  additionalMetadata?: string;
}

export namespace Pets {
  export import APIResponse = PetsAPI.APIResponse;
  export import Pet = PetsAPI.Pet;
  export import PetFindByStatusResponse = PetsAPI.PetFindByStatusResponse;
  export import PetFindByTagsResponse = PetsAPI.PetFindByTagsResponse;
  export import PetCreateParams = PetsAPI.PetCreateParams;
  export import PetUpdateParams = PetsAPI.PetUpdateParams;
  export import PetDeleteParams = PetsAPI.PetDeleteParams;
  export import PetFindByStatusParams = PetsAPI.PetFindByStatusParams;
  export import PetFindByTagsParams = PetsAPI.PetFindByTagsParams;
  export import PetUploadImageParams = PetsAPI.PetUploadImageParams;
}
