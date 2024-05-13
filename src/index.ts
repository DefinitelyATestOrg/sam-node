// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['MAVENAGI_AUTH_TOKEN'].
   */
  authToken?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['SAM_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Sam API. */
export class Sam extends Core.APIClient {
  authToken: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Sam API.
   *
   * @param {string | null | undefined} [opts.authToken=process.env['MAVENAGI_AUTH_TOKEN'] ?? null]
   * @param {string} [opts.baseURL=process.env['SAM_BASE_URL'] ?? http://localhost:8085/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('SAM_BASE_URL'),
    authToken = Core.readEnv('MAVENAGI_AUTH_TOKEN') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      authToken,
      ...opts,
      baseURL: baseURL || `http://localhost:8085/`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.authToken = authToken;
  }

  referenceSets: API.ReferenceSets = new API.ReferenceSets(this);
  referenceSessions: API.ReferenceSessions = new API.ReferenceSessions(this);
  organizations: API.Organizations = new API.Organizations(this);
  members: API.Members = new API.Members(this);
  feedbacks: API.Feedbacks = new API.Feedbacks(this);
  documents: API.Documents = new API.Documents(this);
  corpora: API.Corpora = new API.Corpora(this);
  agents: API.Agents = new API.Agents(this);
  actionSets: API.ActionSets = new API.ActionSets(this);
  actions: API.Actions = new API.Actions(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.authToken && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the authToken to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.authToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.authToken}` };
  }

  static Sam = this;

  static SamError = Errors.SamError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  SamError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Sam {
  export import RequestOptions = Core.RequestOptions;

  export import ReferenceSets = API.ReferenceSets;
  export import ReferenceSetUpdateParams = API.ReferenceSetUpdateParams;

  export import ReferenceSessions = API.ReferenceSessions;
  export import ReferenceSessionUpdateParams = API.ReferenceSessionUpdateParams;

  export import Organizations = API.Organizations;
  export import OrganizationUpdateParams = API.OrganizationUpdateParams;

  export import Members = API.Members;
  export import MemberUpdateParams = API.MemberUpdateParams;

  export import Feedbacks = API.Feedbacks;
  export import FeedbackUpdateParams = API.FeedbackUpdateParams;

  export import Documents = API.Documents;
  export import DocumentRetrieveParams = API.DocumentRetrieveParams;
  export import DocumentUpdateParams = API.DocumentUpdateParams;

  export import Corpora = API.Corpora;
  export import CorporaUpdateParams = API.CorporaUpdateParams;

  export import Agents = API.Agents;
  export import AgentUpdateParams = API.AgentUpdateParams;

  export import ActionSets = API.ActionSets;
  export import ActionSetUpdateParams = API.ActionSetUpdateParams;

  export import Actions = API.Actions;
  export import ActionUpdateParams = API.ActionUpdateParams;
}

export default Sam;
