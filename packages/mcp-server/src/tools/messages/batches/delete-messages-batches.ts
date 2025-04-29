// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Sam from 'sam';

export const metadata: Metadata = {
  resource: 'messages.batches',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_messages_batches',
  description:
    "Delete a Message Batch.\n\nMessage Batches can only be deleted once they've finished processing. If you'd like to delete an in-progress batch, you must first cancel it.\n\nLearn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)",
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

export const handler = (client: Sam, args: Record<string, unknown> | undefined) => {
  const { message_batch_id, ...body } = args as any;
  return client.messages.batches.delete(message_batch_id, body);
};

export default { metadata, tool, handler };
