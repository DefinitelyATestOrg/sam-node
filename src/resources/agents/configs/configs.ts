// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { type Response } from '../../../_shims/index';
import * as ConfigsAPI from './configs';
import * as ChatAPI from './chat';

export class Configs extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);

  retrieve(
    agentId: string,
    integration: 'SALESFORCE' | 'ZENDESK' | 'FRESHDESK' | 'SLACK_QA_BOT' | 'TWILIO',
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/api/v1/agents/${agentId}/configs/${integration}`, {
      ...options,
      __binaryResponse: true,
    });
  }

  update(
    agentId: string,
    integration: 'SALESFORCE' | 'ZENDESK' | 'FRESHDESK' | 'SLACK_QA_BOT' | 'TWILIO',
    body: ConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/agents/${agentId}/configs/${integration}`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface ConfigUpdateParams {
  '@class': string;
}

export namespace Configs {
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export import Chat = ChatAPI.Chat;
  export import ChatUpdateParams = ChatAPI.ChatUpdateParams;
}
