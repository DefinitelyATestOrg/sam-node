// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sam-mcp/filtering';
import { asTextContentResult } from 'sam-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Sam from 'sam';

export const metadata: Metadata = {
  resource: 'messages.batches.beta_true',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/messages/batches/{message_batch_id}?beta=true',
  operationId: 'beta_message_batches_retrieve',
};

export const tool: Tool = {
  name: 'retrieve_batches_messages_beta_true',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint is idempotent and can be used to poll for Message Batch completion. To access the results of a Message Batch, make a request to the `results_url` field in the response.\n\nLearn more about the Message Batches API in our [user guide](/en/docs/build-with-claude/batch-processing)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'MessageBatch',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id',\n      description: 'Unique object identifier.\\n\\nThe format and length of IDs may change over time.'\n    },\n    archived_at: {\n      type: 'string',\n      title: 'Archived At',\n      description: 'RFC 3339 datetime string representing the time at which the Message Batch was archived and its results became unavailable.',\n      format: 'date-time'\n    },\n    cancel_initiated_at: {\n      type: 'string',\n      title: 'Cancel Initiated At',\n      description: 'RFC 3339 datetime string representing the time at which cancellation was initiated for the Message Batch. Specified only if cancellation was initiated.',\n      format: 'date-time'\n    },\n    created_at: {\n      type: 'string',\n      title: 'Created At',\n      description: 'RFC 3339 datetime string representing the time at which the Message Batch was created.',\n      format: 'date-time'\n    },\n    ended_at: {\n      type: 'string',\n      title: 'Ended At',\n      description: 'RFC 3339 datetime string representing the time at which processing for the Message Batch ended. Specified only once processing ends.\\n\\nProcessing ends when every request in a Message Batch has either succeeded, errored, canceled, or expired.',\n      format: 'date-time'\n    },\n    expires_at: {\n      type: 'string',\n      title: 'Expires At',\n      description: 'RFC 3339 datetime string representing the time at which the Message Batch will expire and end processing, which is 24 hours after creation.',\n      format: 'date-time'\n    },\n    processing_status: {\n      type: 'string',\n      title: 'Processing Status',\n      description: 'Processing status of the Message Batch.',\n      enum: [        'in_progress',\n        'canceling',\n        'ended'\n      ]\n    },\n    request_counts: {\n      type: 'object',\n      title: 'RequestCounts',\n      description: 'Tallies requests within the Message Batch, categorized by their status.\\n\\nRequests start as `processing` and move to one of the other statuses only once processing of the entire batch ends. The sum of all values always matches the total number of requests in the batch.',\n      properties: {\n        canceled: {\n          type: 'integer',\n          title: 'Canceled',\n          description: 'Number of requests in the Message Batch that have been canceled.\\n\\nThis is zero until processing of the entire Message Batch has ended.'\n        },\n        errored: {\n          type: 'integer',\n          title: 'Errored',\n          description: 'Number of requests in the Message Batch that encountered an error.\\n\\nThis is zero until processing of the entire Message Batch has ended.'\n        },\n        expired: {\n          type: 'integer',\n          title: 'Expired',\n          description: 'Number of requests in the Message Batch that have expired.\\n\\nThis is zero until processing of the entire Message Batch has ended.'\n        },\n        processing: {\n          type: 'integer',\n          title: 'Processing',\n          description: 'Number of requests in the Message Batch that are processing.'\n        },\n        succeeded: {\n          type: 'integer',\n          title: 'Succeeded',\n          description: 'Number of requests in the Message Batch that have completed successfully.\\n\\nThis is zero until processing of the entire Message Batch has ended.'\n        }\n      },\n      required: [        'canceled',\n        'errored',\n        'expired',\n        'processing',\n        'succeeded'\n      ]\n    },\n    results_url: {\n      type: 'string',\n      title: 'Results Url',\n      description: 'URL to a `.jsonl` file containing the results of the Message Batch requests. Specified only once processing ends.\\n\\nResults in the file are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.'\n    },\n    type: {\n      type: 'string',\n      title: 'Type',\n      description: 'Object type.\\n\\nFor Message Batches, this is always `\"message_batch\"`.',\n      enum: [        'message_batch'\n      ]\n    }\n  },\n  required: [    'id',\n    'archived_at',\n    'cancel_initiated_at',\n    'created_at',\n    'ended_at',\n    'expires_at',\n    'processing_status',\n    'request_counts',\n    'results_url',\n    'type'\n  ]\n}\n```",
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
  },
};

export const handler = async (client: Sam, args: Record<string, unknown> | undefined) => {
  const { message_batch_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.messages.batches.betaTrue.retrieve(message_batch_id, body)),
  );
};

export default { metadata, tool, handler };
