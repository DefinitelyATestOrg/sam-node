// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Sam from 'sam';

export const metadata: Metadata = {
  resource: 'messages.batches',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_messages_batches',
  description:
    'This endpoint is idempotent and can be used to poll for Message Batch completion. To access the results of a Message Batch, make a request to the `results_url` field in the response.\n\nLearn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)',
  inputSchema: {
    type: 'object',
    properties: {
      message_batch_id: {
        type: 'string',
        title: 'Message Batch Id',
        description: 'ID of the Message Batch.',
      },
      'anthropic-beta': {
        type: 'array',
        title: 'Anthropic-Beta',
        description:
          'Optional header to specify the beta version(s) you want to use.\n\nTo use multiple betas, use a comma separated list like `beta1,beta2` or specify the header multiple times for each beta.',
        items: {
          type: 'string',
        },
      },
      'anthropic-version': {
        type: 'string',
        title: 'Anthropic-Version',
        description:
          'The version of the Anthropic API you want to use.\n\nRead more about versioning and our version history [here](https://docs.anthropic.com/en/api/versioning).',
      },
      'x-api-key': {
        type: 'string',
        title: 'X-Api-Key',
        description:
          "Your unique API key for authentication.\n\nThis key is required in the header of all API requests, to authenticate your account and access Anthropic's services. Get your API key through the [Console](https://console.anthropic.com/settings/keys). Each key is scoped to a Workspace.",
      },
    },
  },
};

export const handler = (client: Sam, args: any) => {
  const { message_batch_id, ...body } = args;
  return client.messages.batches.retrieve(message_batch_id, body);
};

export default { metadata, tool, handler };
