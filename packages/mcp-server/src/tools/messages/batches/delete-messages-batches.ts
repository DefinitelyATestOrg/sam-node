// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sam-mcp/filtering';
import { Metadata, asTextContentResult } from 'sam-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Sam from 'sam';

export const metadata: Metadata = {
  resource: 'messages.batches',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/messages/batches/{message_batch_id}',
  operationId: 'message_batches_delete',
};

export const tool: Tool = {
  name: 'delete_messages_batches',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a Message Batch.\n\nMessage Batches can only be deleted once they've finished processing. If you'd like to delete an in-progress batch, you must first cancel it.\n\nLearn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'DeleteMessageBatchResponse',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id',\n      description: 'ID of the Message Batch.'\n    },\n    type: {\n      type: 'string',\n      title: 'Type',\n      description: 'Deleted object type.\\n\\nFor Message Batches, this is always `\"message_batch_deleted\"`.',\n      enum: [        'message_batch_deleted'\n      ]\n    }\n  },\n  required: [    'id',\n    'type'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['message_batch_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Sam, args: Record<string, unknown> | undefined) => {
  const { message_batch_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.messages.batches.delete(message_batch_id, body)),
  );
};

export default { metadata, tool, handler };
