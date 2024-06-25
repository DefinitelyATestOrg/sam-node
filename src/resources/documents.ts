// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as DocumentsAPI from './documents';
import { type Response } from '../_shims/index';

export class Documents extends APIResource {
  retrieve(
    docId: string,
    query?: DocumentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  retrieve(docId: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieve(
    docId: string,
    query: DocumentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrieve(docId, {}, query);
    }
    return this._client.get(`/api/v1/document/${docId}`, { query, ...options, __binaryResponse: true });
  }

  update(
    docId: string,
    body: DocumentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/document/${docId}`, { body, ...options, __binaryResponse: true });
  }

  delete(docId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/document/${docId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DocumentRetrieveParams {
  text?: boolean;
}

export interface DocumentUpdateParams {
  id?: string;

  corpusPolicy?: 'INCLUDE' | 'EXCLUDE_ALWAYS';

  createdBy?: DocumentUpdateParams.CreatedBy;

  externalLookupKey?: string;

  languageCode?: DocumentUpdateParams.LanguageCode;

  processingVersion?: number;

  sourceAuthor?: string;

  sourceCreatedAt?: string;

  sourceUpdatedAt?: string;

  sourceUrl?: string;

  text?: string;

  title?: string;

  updatedBy?: DocumentUpdateParams.UpdatedBy;
}

export namespace DocumentUpdateParams {
  export interface CreatedBy {
    id?: string;

    name?: string;
  }

  export interface LanguageCode {
    code?: string;

    detected?: boolean;
  }

  export interface UpdatedBy {
    id?: string;

    name?: string;
  }
}

export namespace Documents {
  export import DocumentRetrieveParams = DocumentsAPI.DocumentRetrieveParams;
  export import DocumentUpdateParams = DocumentsAPI.DocumentUpdateParams;
}
