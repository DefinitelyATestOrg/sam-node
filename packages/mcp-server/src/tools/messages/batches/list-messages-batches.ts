// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Sam from 'sam';

export const tool: Tool = {
  name: 'list_messages_batches',
  description:
    'List all Message Batches within a Workspace. Most recently created batches are returned first.\n\nLearn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)',
  inputSchema: {
    type: 'object',
    properties: {
      after_id: {
        type: 'string',
        title: 'After Id',
        description:
          'ID of the object to use as a cursor for pagination. When provided, returns the page of results immediately after this object.',
      },
      before_id: {
        type: 'string',
        title: 'Before Id',
        description:
          'ID of the object to use as a cursor for pagination. When provided, returns the page of results immediately before this object.',
      },
      limit: {
        type: 'integer',
        title: 'Limit',
        description: 'Number of items to return per page.\n\nDefaults to `20`. Ranges from `1` to `1000`.',
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
  const { ...body } = args;
  return client.messages.batches.list(body);
};

export default { tool, handler };
