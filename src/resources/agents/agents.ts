// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sam/core';
import { APIResource } from 'sam/resource';
import { type Response } from 'sam/_shims/index';
import * as AgentsAPI from 'sam/resources/agents/agents';
import * as HiddenTagsAPI from 'sam/resources/agents/hidden-tags';
import * as ConfigsAPI from 'sam/resources/agents/configs/configs';
import { type Uploadable } from 'sam/core';

export class Agents extends APIResource {
  hiddenTags: HiddenTagsAPI.HiddenTags = new HiddenTagsAPI.HiddenTags(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);

  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/api/v1/agents/${id}`, { ...options, __binaryResponse: true });
  }

  update(id: string, body: AgentUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.put(`/api/v1/agents/${id}`, { body, ...options, __binaryResponse: true });
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/agents/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AgentUpdateParams {
  agent: AgentUpdateParams.Agent;

  chatIcon?: Uploadable;

  chatIconDeleted?: boolean;

  logo?: Uploadable;

  logoDeleted?: boolean;
}

export namespace AgentUpdateParams {
  export interface Agent {
    id?: string;

    additionalPromptText?: string;

    bailoutIntegration?: 'SALESFORCE' | 'ZENDESK' | 'FRESHDESK' | 'SLACK_QA_BOT' | 'TWILIO';

    bailoutText?: string;

    bailoutType?: 'INTEGRATION' | 'TEXT';

    brandColor?: string;

    createdBy?: Agent.CreatedBy;

    hiddenTicketTags?: Array<string>;

    internal__salesStatus?: 'LIVE' | 'ONBOARDING' | 'PROSPECT' | 'TESTING' | 'Z_INACTIVE';

    name?: string;

    persona?:
      | 'ANY'
      | 'CASUAL_BUDDY'
      | 'EMPATHETIC_SUPPORTER'
      | 'FORMAL_PROFESSIONAL'
      | 'CONCISE_EXPERT'
      | 'ENTHUSIASTIC_HELPER'
      | 'PATIENT_EDUCATOR'
      | 'PIRATE';

    popularQuestions?: Array<string>;

    updatedBy?: Agent.UpdatedBy;
  }

  export namespace Agent {
    export interface CreatedBy {
      id?: string;

      name?: string;
    }

    export interface UpdatedBy {
      id?: string;

      name?: string;
    }
  }
}

export namespace Agents {
  export import AgentUpdateParams = AgentsAPI.AgentUpdateParams;
  export import HiddenTags = HiddenTagsAPI.HiddenTags;
  export import Configs = ConfigsAPI.Configs;
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
}
