// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Sam from 'sam';

export const tool: Tool = {
  name: 'retrieve_beta_models',
  description:
    'Get a specific model.\n\nThe Models API response can be used to determine information about a specific model or resolve a model alias to a model ID.',
  inputSchema: {
    type: 'object',
    properties: {
      model_id: {
        type: 'string',
        title: 'Model Id',
        description: 'Model identifier or alias.',
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
  const { model_id, ...body } = args;
  return client.models.retrieveBeta(model_id, body);
};

export default { tool, handler };
