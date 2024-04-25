// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sam/core';
import { APIResource } from 'sam/resource';
import { type Response } from 'sam/_shims/index';
import * as ChatAPI from 'sam/resources/agents/configs/chat';

export class Chat extends APIResource {
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/api/v1/agents/${agentId}/configs/chat`, { ...options, __binaryResponse: true });
  }

  update(agentId: string, body: ChatUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/agents/${agentId}/configs/chat`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface ChatUpdateParams {
  id?: string;

  welcomeMessage?: string;
}

export namespace Chat {
  export import ChatUpdateParams = ChatAPI.ChatUpdateParams;
}