// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_messages from './messages/create-messages';
import count_tokens_messages from './messages/count-tokens-messages';
import count_tokens_beta_messages from './messages/count-tokens-beta-messages';
import create_messages_batches from './messages/batches/create-messages-batches';
import retrieve_messages_batches from './messages/batches/retrieve-messages-batches';
import list_messages_batches from './messages/batches/list-messages-batches';
import delete_messages_batches from './messages/batches/delete-messages-batches';
import cancel_messages_batches from './messages/batches/cancel-messages-batches';
import cancel_beta_messages_batches from './messages/batches/cancel-beta-messages-batches';
import results_messages_batches from './messages/batches/results-messages-batches';
import results_beta_messages_batches from './messages/batches/results-beta-messages-batches';
import retrieve_batches_messages_beta_true from './messages/batches/beta-true/retrieve-batches-messages-beta-true';
import delete_batches_messages_beta_true from './messages/batches/beta-true/delete-batches-messages-beta-true';
import create_messages_batches_beta_true from './messages/batches-beta-true/create-messages-batches-beta-true';
import list_messages_batches_beta_true from './messages/batches-beta-true/list-messages-batches-beta-true';
import create_complete from './complete/create-complete';
import retrieve_models from './models/retrieve-models';
import list_models from './models/list-models';
import retrieve_beta_models from './models/retrieve-beta-models';
import create_messages_beta_true from './messages-beta-true/create-messages-beta-true';
import list_models_beta_true from './models-beta-true/list-models-beta-true';

export type HandlerFunction = (client: Sam, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_messages);
addEndpoint(count_tokens_messages);
addEndpoint(count_tokens_beta_messages);
addEndpoint(create_messages_batches);
addEndpoint(retrieve_messages_batches);
addEndpoint(list_messages_batches);
addEndpoint(delete_messages_batches);
addEndpoint(cancel_messages_batches);
addEndpoint(cancel_beta_messages_batches);
addEndpoint(results_messages_batches);
addEndpoint(results_beta_messages_batches);
addEndpoint(retrieve_batches_messages_beta_true);
addEndpoint(delete_batches_messages_beta_true);
addEndpoint(create_messages_batches_beta_true);
addEndpoint(list_messages_batches_beta_true);
addEndpoint(create_complete);
addEndpoint(retrieve_models);
addEndpoint(list_models);
addEndpoint(retrieve_beta_models);
addEndpoint(create_messages_beta_true);
addEndpoint(list_models_beta_true);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
