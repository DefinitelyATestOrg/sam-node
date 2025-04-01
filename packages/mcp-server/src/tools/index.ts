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

export const tools: Tool[] = [];

export type HandlerFunction = (client: Sam, args: any) => Promise<any>;
export const handlers: Record<string, HandlerFunction> = {};

function addEndpoint(endpoint: { tool: Tool; handler: HandlerFunction }) {
  tools.push(endpoint.tool);
  handlers[endpoint.tool.name] = endpoint.handler;
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
