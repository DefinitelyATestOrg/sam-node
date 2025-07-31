// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sam-mcp/filtering';
import { Metadata, asTextContentResult } from 'sam-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Sam from 'sam';

export const metadata: Metadata = {
  resource: 'models_beta_true',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/models?beta=true',
  operationId: 'beta_models_list',
};

export const tool: Tool = {
  name: 'list_models_beta_true',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList available models.\n\nThe Models API response can be used to determine which models are available for use in the API. More recently released models are listed first.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ListResponse[ModelInfo]',\n  properties: {\n    data: {\n      type: 'array',\n      title: 'Data',\n      items: {\n        type: 'object',\n        title: 'ModelInfo',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'Id',\n            description: 'Unique model identifier.'\n          },\n          created_at: {\n            type: 'string',\n            title: 'Created At',\n            description: 'RFC 3339 datetime string representing the time at which the model was released. May be set to an epoch value if the release date is unknown.',\n            format: 'date-time'\n          },\n          display_name: {\n            type: 'string',\n            title: 'Display Name',\n            description: 'A human-readable name for the model.'\n          },\n          type: {\n            type: 'string',\n            title: 'Type',\n            description: 'Object type.\\n\\nFor Models, this is always `\"model\"`.',\n            enum: [              'model'\n            ]\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'display_name',\n          'type'\n        ]\n      }\n    },\n    first_id: {\n      type: 'string',\n      title: 'First Id',\n      description: 'First ID in the `data` list. Can be used as the `before_id` for the previous page.'\n    },\n    has_more: {\n      type: 'boolean',\n      title: 'Has More',\n      description: 'Indicates if there are more results in the requested page direction.'\n    },\n    last_id: {\n      type: 'string',\n      title: 'Last Id',\n      description: 'Last ID in the `data` list. Can be used as the `after_id` for the next page.'\n    }\n  },\n  required: [    'data',\n    'first_id',\n    'has_more',\n    'last_id'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Sam, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.modelsBetaTrue.list(body)));
};

export default { metadata, tool, handler };
