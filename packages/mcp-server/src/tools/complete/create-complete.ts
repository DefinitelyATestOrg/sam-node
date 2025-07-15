// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sam-mcp/filtering';
import { Metadata, asTextContentResult } from 'sam-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Sam from 'sam';

export const metadata: Metadata = {
  resource: 'complete',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/complete',
  operationId: 'complete_post',
};

export const tool: Tool = {
  name: 'create_complete',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n[Legacy] Create a Text Completion.\n\nThe Text Completions API is a legacy API. We recommend using the [Messages API](https://docs.anthropic.com/en/api/messages) going forward.\n\nFuture models and features will not be compatible with Text Completions. See our [migration guide](https://docs.anthropic.com/en/api/migrating-from-text-completions-to-messages) for guidance in migrating from Text Completions to Messages.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'CompletionResponse',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id',\n      description: 'Unique object identifier.\\n\\nThe format and length of IDs may change over time.'\n    },\n    completion: {\n      type: 'string',\n      title: 'Completion',\n      description: 'The resulting completion up to and excluding the stop sequences.'\n    },\n    model: {\n      type: 'string',\n      title: 'Model',\n      description: 'The model that handled the request.'\n    },\n    stop_reason: {\n      type: 'string',\n      title: 'Stop Reason',\n      description: 'The reason that we stopped.\\n\\nThis may be one the following values:\\n* `\"stop_sequence\"`: we reached a stop sequence — either provided by you via the `stop_sequences` parameter, or a stop sequence built into the model\\n* `\"max_tokens\"`: we exceeded `max_tokens_to_sample` or the model\\'s maximum'\n    },\n    type: {\n      type: 'string',\n      title: 'Type',\n      description: 'Object type.\\n\\nFor Text Completions, this is always `\"completion\"`.',\n      enum: [        'completion'\n      ]\n    }\n  },\n  required: [    'id',\n    'completion',\n    'model',\n    'stop_reason',\n    'type'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      max_tokens_to_sample: {
        type: 'integer',
        title: 'Max Tokens To Sample',
        description:
          'The maximum number of tokens to generate before stopping.\n\nNote that our models may stop _before_ reaching this maximum. This parameter only specifies the absolute maximum number of tokens to generate.',
      },
      model: {
        type: 'string',
        title: 'Model',
        description:
          'The model that will complete your prompt.\n\nSee [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.',
      },
      prompt: {
        type: 'string',
        title: 'Prompt',
        description:
          'The prompt that you want Claude to complete.\n\nFor proper response generation you will need to format your prompt using alternating `\\n\\nHuman:` and `\\n\\nAssistant:` conversational turns. For example:\n\n```\n"\\n\\nHuman: {userQuestion}\\n\\nAssistant:"\n```\n\nSee [prompt validation](https://docs.anthropic.com/en/api/prompt-validation) and our guide to [prompt design](https://docs.anthropic.com/en/docs/intro-to-prompting) for more details.',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
        description: 'An object describing metadata about the request.',
        properties: {
          user_id: {
            type: 'string',
            title: 'User Id',
            description:
              'An external identifier for the user who is associated with the request.\n\nThis should be a uuid, hash value, or other opaque identifier. Anthropic may use this id to help detect abuse. Do not include any identifying information such as name, email address, or phone number.',
          },
        },
        required: [],
      },
      stop_sequences: {
        type: 'array',
        title: 'Stop Sequences',
        description:
          'Sequences that will cause the model to stop generating.\n\nOur models stop on `"\\n\\nHuman:"`, and may include additional built-in stop sequences in the future. By providing the stop_sequences parameter, you may include additional strings that will cause the model to stop generating.',
        items: {
          type: 'string',
        },
      },
      stream: {
        type: 'boolean',
        title: 'Stream',
        description:
          'Whether to incrementally stream the response using server-sent events.\n\nSee [streaming](https://docs.anthropic.com/en/api/streaming) for details.',
      },
      temperature: {
        type: 'number',
        title: 'Temperature',
        description:
          'Amount of randomness injected into the response.\n\nDefaults to `1.0`. Ranges from `0.0` to `1.0`. Use `temperature` closer to `0.0` for analytical / multiple choice, and closer to `1.0` for creative and generative tasks.\n\nNote that even with `temperature` of `0.0`, the results will not be fully deterministic.',
      },
      top_k: {
        type: 'integer',
        title: 'Top K',
        description:
          'Only sample from the top K options for each subsequent token.\n\nUsed to remove "long tail" low probability responses. [Learn more technical details here](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277).\n\nRecommended for advanced use cases only. You usually only need to use `temperature`.',
      },
      top_p: {
        type: 'number',
        title: 'Top P',
        description:
          'Use nucleus sampling.\n\nIn nucleus sampling, we compute the cumulative distribution over all the options for each subsequent token in decreasing probability order and cut it off once it reaches a particular probability specified by `top_p`. You should either alter `temperature` or `top_p`, but not both.\n\nRecommended for advanced use cases only. You usually only need to use `temperature`.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.complete.create(body)));
};

export default { metadata, tool, handler };
