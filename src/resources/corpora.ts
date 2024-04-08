// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sam/core';
import { APIResource } from 'sam/resource';
import { type Response } from 'sam/_shims/index';
import * as CorporaAPI from 'sam/resources/corpora';

export class Corpora extends APIResource {
  retrieve(corpusId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/api/v1/corpora/${corpusId}`, { ...options, __binaryResponse: true });
  }

  update(
    corpusId: string,
    body: CorporaUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/corpora/${corpusId}`, { body, ...options, __binaryResponse: true });
  }

  delete(corpusId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/corpora/${corpusId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CorporaUpdateParams {
  agentId: string;

  name: string;

  active?: boolean;

  crawlSpec?: CorporaUpdateParams.CrawlSpec;

  createdBy?: CorporaUpdateParams.CreatedBy;

  excludeLastUpdatedBefore?: string;

  htmlTransformer?: 'NONE' | 'EXTRACTUS' | 'READABLE_TEXT' | 'READABLE_TEXT_IF_POSSIBLE';

  includedKbArticleIds?: Array<string>;

  integration?: 'SALESFORCE' | 'ZENDESK' | 'FRESHDESK' | 'SLACK_QA_BOT' | 'TWILIO';

  integrationCategoryId?: string;

  sourceUrl?: string;

  status?: 'PROCESSING' | 'READY' | 'FAILED';

  tags?: Array<string>;

  type?:
    | 'URL'
    | 'MANUAL'
    | 'FILE_UPLOAD'
    | 'EXTERNAL_INTEGRATION'
    | 'FRESHDESK_KB'
    | 'ZENDESK_KB'
    | 'CSV'
    | 'UNKNOWN';

  updatedBy?: CorporaUpdateParams.UpdatedBy;

  urlExclusionPatterns?: Array<string>;
}

export namespace CorporaUpdateParams {
  export interface CrawlSpec {
    exclusionPatterns?: Array<string>;

    htmlTransformer?: 'NONE' | 'EXTRACTUS' | 'READABLE_TEXT' | 'READABLE_TEXT_IF_POSSIBLE';

    ingestionWorkflowId?: string;

    initialConcurrency?: number;

    maxConcurrency?: number;

    maxCrawlDepth?: number;

    maxCrawlPages?: number;

    removeElementsCssSelector?: string;

    saveHtml?: boolean;

    saveMarkdown?: boolean;

    startUrls?: Array<string>;

    timeoutSeconds?: number;

    useSitemaps?: boolean;
  }

  export interface CreatedBy {
    id?: string;

    name?: string;
  }

  export interface UpdatedBy {
    id?: string;

    name?: string;
  }
}

export namespace Corpora {
  export import CorporaUpdateParams = CorporaAPI.CorporaUpdateParams;
}
