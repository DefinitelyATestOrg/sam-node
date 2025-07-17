// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'sam-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Sam from 'sam';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/messages/count_tokens',
  operationId: 'messages_count_tokens_post',
};

export const tool: Tool = {
  name: 'count_tokens_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCount the number of tokens in a Message.\n\nThe Token Count API can be used to count the number of tokens in a Message, including tools, images, and documents, without creating it.\n\nLearn more about token counting in our [user guide](/en/docs/build-with-claude/token-counting)",
  inputSchema: {
    type: 'object',
    properties: {
      messages: {
        type: 'array',
        title: 'Messages',
        description:
          'Input messages.\n\nOur models are trained to operate on alternating `user` and `assistant` conversational turns. When creating a new `Message`, you specify the prior conversational turns with the `messages` parameter, and the model then generates the next `Message` in the conversation. Consecutive `user` or `assistant` turns in your request will be combined into a single turn.\n\nEach input message must be an object with a `role` and `content`. You can specify a single `user`-role message, or you can include multiple `user` and `assistant` messages.\n\nIf the final message uses the `assistant` role, the response content will continue immediately from the content in that message. This can be used to constrain part of the model\'s response.\n\nExample with a single `user` message:\n\n```json\n[{"role": "user", "content": "Hello, Claude"}]\n```\n\nExample with multiple conversational turns:\n\n```json\n[\n  {"role": "user", "content": "Hello there."},\n  {"role": "assistant", "content": "Hi, I\'m Claude. How can I help you?"},\n  {"role": "user", "content": "Can you explain LLMs in plain English?"},\n]\n```\n\nExample with a partially-filled response from Claude:\n\n```json\n[\n  {"role": "user", "content": "What\'s the Greek name for Sun? (A) Sol (B) Helios (C) Sun"},\n  {"role": "assistant", "content": "The best answer is ("},\n]\n```\n\nEach input message `content` may be either a single `string` or an array of content blocks, where each block has a specific `type`. Using a `string` for `content` is shorthand for an array of one content block of type `"text"`. The following input messages are equivalent:\n\n```json\n{"role": "user", "content": "Hello, Claude"}\n```\n\n```json\n{"role": "user", "content": [{"type": "text", "text": "Hello, Claude"}]}\n```\n\nStarting with Claude 3 models, you can also send image content blocks:\n\n```json\n{"role": "user", "content": [\n  {\n    "type": "image",\n    "source": {\n      "type": "base64",\n      "media_type": "image/jpeg",\n      "data": "/9j/4AAQSkZJRg...",\n    }\n  },\n  {"type": "text", "text": "What is in this image?"}\n]}\n```\n\nWe currently support the `base64` source type for images, and the `image/jpeg`, `image/png`, `image/gif`, and `image/webp` media types.\n\nSee [examples](https://docs.anthropic.com/en/api/messages-examples#vision) for more input examples.\n\nNote that if you want to include a [system prompt](https://docs.anthropic.com/en/docs/system-prompts), you can use the top-level `system` parameter — there is no `"system"` role for input messages in the Messages API.',
        items: {
          type: 'object',
          title: 'InputMessage',
          properties: {
            content: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'array',
                  items: {
                    anyOf: [
                      {
                        type: 'object',
                        title: 'RequestTextBlock',
                        properties: {
                          text: {
                            type: 'string',
                            title: 'Text',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['text'],
                          },
                          cache_control: {
                            type: 'object',
                            title: 'CacheControlEphemeral',
                            properties: {
                              type: {
                                type: 'string',
                                title: 'Type',
                                enum: ['ephemeral'],
                              },
                            },
                            required: ['type'],
                          },
                          citations: {
                            type: 'array',
                            title: 'Citations',
                            items: {
                              anyOf: [
                                {
                                  type: 'object',
                                  title: 'RequestCharLocationCitation',
                                  properties: {
                                    cited_text: {
                                      type: 'string',
                                      title: 'Cited Text',
                                    },
                                    document_index: {
                                      type: 'integer',
                                      title: 'Document Index',
                                    },
                                    document_title: {
                                      type: 'string',
                                      title: 'Document Title',
                                    },
                                    end_char_index: {
                                      type: 'integer',
                                      title: 'End Char Index',
                                    },
                                    start_char_index: {
                                      type: 'integer',
                                      title: 'Start Char Index',
                                    },
                                    type: {
                                      type: 'string',
                                      title: 'Type',
                                      enum: ['char_location'],
                                    },
                                  },
                                  required: [
                                    'cited_text',
                                    'document_index',
                                    'document_title',
                                    'end_char_index',
                                    'start_char_index',
                                    'type',
                                  ],
                                },
                                {
                                  type: 'object',
                                  title: 'RequestPageLocationCitation',
                                  properties: {
                                    cited_text: {
                                      type: 'string',
                                      title: 'Cited Text',
                                    },
                                    document_index: {
                                      type: 'integer',
                                      title: 'Document Index',
                                    },
                                    document_title: {
                                      type: 'string',
                                      title: 'Document Title',
                                    },
                                    end_page_number: {
                                      type: 'integer',
                                      title: 'End Page Number',
                                    },
                                    start_page_number: {
                                      type: 'integer',
                                      title: 'Start Page Number',
                                    },
                                    type: {
                                      type: 'string',
                                      title: 'Type',
                                      enum: ['page_location'],
                                    },
                                  },
                                  required: [
                                    'cited_text',
                                    'document_index',
                                    'document_title',
                                    'end_page_number',
                                    'start_page_number',
                                    'type',
                                  ],
                                },
                                {
                                  type: 'object',
                                  title: 'RequestContentBlockLocationCitation',
                                  properties: {
                                    cited_text: {
                                      type: 'string',
                                      title: 'Cited Text',
                                    },
                                    document_index: {
                                      type: 'integer',
                                      title: 'Document Index',
                                    },
                                    document_title: {
                                      type: 'string',
                                      title: 'Document Title',
                                    },
                                    end_block_index: {
                                      type: 'integer',
                                      title: 'End Block Index',
                                    },
                                    start_block_index: {
                                      type: 'integer',
                                      title: 'Start Block Index',
                                    },
                                    type: {
                                      type: 'string',
                                      title: 'Type',
                                      enum: ['content_block_location'],
                                    },
                                  },
                                  required: [
                                    'cited_text',
                                    'document_index',
                                    'document_title',
                                    'end_block_index',
                                    'start_block_index',
                                    'type',
                                  ],
                                },
                              ],
                            },
                          },
                        },
                        required: ['text', 'type'],
                      },
                      {
                        type: 'object',
                        title: 'RequestImageBlock',
                        properties: {
                          source: {
                            anyOf: [
                              {
                                type: 'object',
                                title: 'Base64ImageSource',
                                properties: {
                                  data: {
                                    type: 'string',
                                    title: 'Data',
                                  },
                                  media_type: {
                                    type: 'string',
                                    title: 'Media Type',
                                    enum: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
                                  },
                                  type: {
                                    type: 'string',
                                    title: 'Type',
                                    enum: ['base64'],
                                  },
                                },
                                required: ['data', 'media_type', 'type'],
                              },
                              {
                                type: 'object',
                                title: 'URLImageSource',
                                properties: {
                                  type: {
                                    type: 'string',
                                    title: 'Type',
                                    enum: ['url'],
                                  },
                                  url: {
                                    type: 'string',
                                    title: 'Url',
                                  },
                                },
                                required: ['type', 'url'],
                              },
                            ],
                            title: 'Source',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['image'],
                          },
                          cache_control: {
                            type: 'object',
                            title: 'CacheControlEphemeral',
                            properties: {
                              type: {
                                type: 'string',
                                title: 'Type',
                                enum: ['ephemeral'],
                              },
                            },
                            required: ['type'],
                          },
                        },
                        required: ['source', 'type'],
                      },
                      {
                        type: 'object',
                        title: 'RequestToolUseBlock',
                        properties: {
                          id: {
                            type: 'string',
                            title: 'Id',
                          },
                          input: {
                            type: 'object',
                            title: 'Input',
                          },
                          name: {
                            type: 'string',
                            title: 'Name',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['tool_use'],
                          },
                          cache_control: {
                            type: 'object',
                            title: 'CacheControlEphemeral',
                            properties: {
                              type: {
                                type: 'string',
                                title: 'Type',
                                enum: ['ephemeral'],
                              },
                            },
                            required: ['type'],
                          },
                        },
                        required: ['id', 'input', 'name', 'type'],
                      },
                      {
                        type: 'object',
                        title: 'RequestToolResultBlock',
                        properties: {
                          tool_use_id: {
                            type: 'string',
                            title: 'Tool Use Id',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['tool_result'],
                          },
                          cache_control: {
                            type: 'object',
                            title: 'CacheControlEphemeral',
                            properties: {
                              type: {
                                type: 'string',
                                title: 'Type',
                                enum: ['ephemeral'],
                              },
                            },
                            required: ['type'],
                          },
                          content: {
                            anyOf: [
                              {
                                type: 'string',
                              },
                              {
                                type: 'array',
                                items: {
                                  anyOf: [
                                    {
                                      type: 'object',
                                      title: 'RequestTextBlock',
                                      properties: {
                                        text: {
                                          type: 'string',
                                          title: 'Text',
                                        },
                                        type: {
                                          type: 'string',
                                          title: 'Type',
                                          enum: ['text'],
                                        },
                                        cache_control: {
                                          type: 'object',
                                          title: 'CacheControlEphemeral',
                                          properties: {
                                            type: {
                                              type: 'string',
                                              title: 'Type',
                                              enum: ['ephemeral'],
                                            },
                                          },
                                          required: ['type'],
                                        },
                                        citations: {
                                          type: 'array',
                                          title: 'Citations',
                                          items: {
                                            anyOf: [
                                              {
                                                type: 'object',
                                                title: 'RequestCharLocationCitation',
                                                properties: {
                                                  cited_text: {
                                                    type: 'string',
                                                    title: 'Cited Text',
                                                  },
                                                  document_index: {
                                                    type: 'integer',
                                                    title: 'Document Index',
                                                  },
                                                  document_title: {
                                                    type: 'string',
                                                    title: 'Document Title',
                                                  },
                                                  end_char_index: {
                                                    type: 'integer',
                                                    title: 'End Char Index',
                                                  },
                                                  start_char_index: {
                                                    type: 'integer',
                                                    title: 'Start Char Index',
                                                  },
                                                  type: {
                                                    type: 'string',
                                                    title: 'Type',
                                                    enum: ['char_location'],
                                                  },
                                                },
                                                required: [
                                                  'cited_text',
                                                  'document_index',
                                                  'document_title',
                                                  'end_char_index',
                                                  'start_char_index',
                                                  'type',
                                                ],
                                              },
                                              {
                                                type: 'object',
                                                title: 'RequestPageLocationCitation',
                                                properties: {
                                                  cited_text: {
                                                    type: 'string',
                                                    title: 'Cited Text',
                                                  },
                                                  document_index: {
                                                    type: 'integer',
                                                    title: 'Document Index',
                                                  },
                                                  document_title: {
                                                    type: 'string',
                                                    title: 'Document Title',
                                                  },
                                                  end_page_number: {
                                                    type: 'integer',
                                                    title: 'End Page Number',
                                                  },
                                                  start_page_number: {
                                                    type: 'integer',
                                                    title: 'Start Page Number',
                                                  },
                                                  type: {
                                                    type: 'string',
                                                    title: 'Type',
                                                    enum: ['page_location'],
                                                  },
                                                },
                                                required: [
                                                  'cited_text',
                                                  'document_index',
                                                  'document_title',
                                                  'end_page_number',
                                                  'start_page_number',
                                                  'type',
                                                ],
                                              },
                                              {
                                                type: 'object',
                                                title: 'RequestContentBlockLocationCitation',
                                                properties: {
                                                  cited_text: {
                                                    type: 'string',
                                                    title: 'Cited Text',
                                                  },
                                                  document_index: {
                                                    type: 'integer',
                                                    title: 'Document Index',
                                                  },
                                                  document_title: {
                                                    type: 'string',
                                                    title: 'Document Title',
                                                  },
                                                  end_block_index: {
                                                    type: 'integer',
                                                    title: 'End Block Index',
                                                  },
                                                  start_block_index: {
                                                    type: 'integer',
                                                    title: 'Start Block Index',
                                                  },
                                                  type: {
                                                    type: 'string',
                                                    title: 'Type',
                                                    enum: ['content_block_location'],
                                                  },
                                                },
                                                required: [
                                                  'cited_text',
                                                  'document_index',
                                                  'document_title',
                                                  'end_block_index',
                                                  'start_block_index',
                                                  'type',
                                                ],
                                              },
                                            ],
                                          },
                                        },
                                      },
                                      required: ['text', 'type'],
                                    },
                                    {
                                      type: 'object',
                                      title: 'RequestImageBlock',
                                      properties: {
                                        source: {
                                          anyOf: [
                                            {
                                              type: 'object',
                                              title: 'Base64ImageSource',
                                              properties: {
                                                data: {
                                                  type: 'string',
                                                  title: 'Data',
                                                },
                                                media_type: {
                                                  type: 'string',
                                                  title: 'Media Type',
                                                  enum: [
                                                    'image/jpeg',
                                                    'image/png',
                                                    'image/gif',
                                                    'image/webp',
                                                  ],
                                                },
                                                type: {
                                                  type: 'string',
                                                  title: 'Type',
                                                  enum: ['base64'],
                                                },
                                              },
                                              required: ['data', 'media_type', 'type'],
                                            },
                                            {
                                              type: 'object',
                                              title: 'URLImageSource',
                                              properties: {
                                                type: {
                                                  type: 'string',
                                                  title: 'Type',
                                                  enum: ['url'],
                                                },
                                                url: {
                                                  type: 'string',
                                                  title: 'Url',
                                                },
                                              },
                                              required: ['type', 'url'],
                                            },
                                          ],
                                          title: 'Source',
                                        },
                                        type: {
                                          type: 'string',
                                          title: 'Type',
                                          enum: ['image'],
                                        },
                                        cache_control: {
                                          type: 'object',
                                          title: 'CacheControlEphemeral',
                                          properties: {
                                            type: {
                                              type: 'string',
                                              title: 'Type',
                                              enum: ['ephemeral'],
                                            },
                                          },
                                          required: ['type'],
                                        },
                                      },
                                      required: ['source', 'type'],
                                    },
                                  ],
                                },
                              },
                            ],
                            title: 'Content',
                          },
                          is_error: {
                            type: 'boolean',
                            title: 'Is Error',
                          },
                        },
                        required: ['tool_use_id', 'type'],
                      },
                      {
                        type: 'object',
                        title: 'RequestDocumentBlock',
                        properties: {
                          source: {
                            anyOf: [
                              {
                                type: 'object',
                                title: 'Base64PDFSource',
                                properties: {
                                  data: {
                                    type: 'string',
                                    title: 'Data',
                                  },
                                  media_type: {
                                    type: 'string',
                                    title: 'Media Type',
                                    enum: ['application/pdf'],
                                  },
                                  type: {
                                    type: 'string',
                                    title: 'Type',
                                    enum: ['base64'],
                                  },
                                },
                                required: ['data', 'media_type', 'type'],
                              },
                              {
                                type: 'object',
                                title: 'PlainTextSource',
                                properties: {
                                  data: {
                                    type: 'string',
                                    title: 'Data',
                                  },
                                  media_type: {
                                    type: 'string',
                                    title: 'Media Type',
                                    enum: ['text/plain'],
                                  },
                                  type: {
                                    type: 'string',
                                    title: 'Type',
                                    enum: ['text'],
                                  },
                                },
                                required: ['data', 'media_type', 'type'],
                              },
                              {
                                type: 'object',
                                title: 'ContentBlockSource',
                                properties: {
                                  content: {
                                    anyOf: [
                                      {
                                        type: 'string',
                                      },
                                      {
                                        type: 'array',
                                        items: {
                                          anyOf: [
                                            {
                                              type: 'object',
                                              title: 'RequestTextBlock',
                                              properties: {
                                                text: {
                                                  type: 'string',
                                                  title: 'Text',
                                                },
                                                type: {
                                                  type: 'string',
                                                  title: 'Type',
                                                  enum: ['text'],
                                                },
                                                cache_control: {
                                                  type: 'object',
                                                  title: 'CacheControlEphemeral',
                                                  properties: {
                                                    type: {
                                                      type: 'string',
                                                      title: 'Type',
                                                      enum: ['ephemeral'],
                                                    },
                                                  },
                                                  required: ['type'],
                                                },
                                                citations: {
                                                  type: 'array',
                                                  title: 'Citations',
                                                  items: {
                                                    anyOf: [
                                                      {
                                                        type: 'object',
                                                        title: 'RequestCharLocationCitation',
                                                        properties: {
                                                          cited_text: {
                                                            type: 'string',
                                                            title: 'Cited Text',
                                                          },
                                                          document_index: {
                                                            type: 'integer',
                                                            title: 'Document Index',
                                                          },
                                                          document_title: {
                                                            type: 'string',
                                                            title: 'Document Title',
                                                          },
                                                          end_char_index: {
                                                            type: 'integer',
                                                            title: 'End Char Index',
                                                          },
                                                          start_char_index: {
                                                            type: 'integer',
                                                            title: 'Start Char Index',
                                                          },
                                                          type: {
                                                            type: 'string',
                                                            title: 'Type',
                                                            enum: ['char_location'],
                                                          },
                                                        },
                                                        required: [
                                                          'cited_text',
                                                          'document_index',
                                                          'document_title',
                                                          'end_char_index',
                                                          'start_char_index',
                                                          'type',
                                                        ],
                                                      },
                                                      {
                                                        type: 'object',
                                                        title: 'RequestPageLocationCitation',
                                                        properties: {
                                                          cited_text: {
                                                            type: 'string',
                                                            title: 'Cited Text',
                                                          },
                                                          document_index: {
                                                            type: 'integer',
                                                            title: 'Document Index',
                                                          },
                                                          document_title: {
                                                            type: 'string',
                                                            title: 'Document Title',
                                                          },
                                                          end_page_number: {
                                                            type: 'integer',
                                                            title: 'End Page Number',
                                                          },
                                                          start_page_number: {
                                                            type: 'integer',
                                                            title: 'Start Page Number',
                                                          },
                                                          type: {
                                                            type: 'string',
                                                            title: 'Type',
                                                            enum: ['page_location'],
                                                          },
                                                        },
                                                        required: [
                                                          'cited_text',
                                                          'document_index',
                                                          'document_title',
                                                          'end_page_number',
                                                          'start_page_number',
                                                          'type',
                                                        ],
                                                      },
                                                      {
                                                        type: 'object',
                                                        title: 'RequestContentBlockLocationCitation',
                                                        properties: {
                                                          cited_text: {
                                                            type: 'string',
                                                            title: 'Cited Text',
                                                          },
                                                          document_index: {
                                                            type: 'integer',
                                                            title: 'Document Index',
                                                          },
                                                          document_title: {
                                                            type: 'string',
                                                            title: 'Document Title',
                                                          },
                                                          end_block_index: {
                                                            type: 'integer',
                                                            title: 'End Block Index',
                                                          },
                                                          start_block_index: {
                                                            type: 'integer',
                                                            title: 'Start Block Index',
                                                          },
                                                          type: {
                                                            type: 'string',
                                                            title: 'Type',
                                                            enum: ['content_block_location'],
                                                          },
                                                        },
                                                        required: [
                                                          'cited_text',
                                                          'document_index',
                                                          'document_title',
                                                          'end_block_index',
                                                          'start_block_index',
                                                          'type',
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                },
                                              },
                                              required: ['text', 'type'],
                                            },
                                            {
                                              type: 'object',
                                              title: 'RequestImageBlock',
                                              properties: {
                                                source: {
                                                  anyOf: [
                                                    {
                                                      type: 'object',
                                                      title: 'Base64ImageSource',
                                                      properties: {
                                                        data: {
                                                          type: 'string',
                                                          title: 'Data',
                                                        },
                                                        media_type: {
                                                          type: 'string',
                                                          title: 'Media Type',
                                                          enum: [
                                                            'image/jpeg',
                                                            'image/png',
                                                            'image/gif',
                                                            'image/webp',
                                                          ],
                                                        },
                                                        type: {
                                                          type: 'string',
                                                          title: 'Type',
                                                          enum: ['base64'],
                                                        },
                                                      },
                                                      required: ['data', 'media_type', 'type'],
                                                    },
                                                    {
                                                      type: 'object',
                                                      title: 'URLImageSource',
                                                      properties: {
                                                        type: {
                                                          type: 'string',
                                                          title: 'Type',
                                                          enum: ['url'],
                                                        },
                                                        url: {
                                                          type: 'string',
                                                          title: 'Url',
                                                        },
                                                      },
                                                      required: ['type', 'url'],
                                                    },
                                                  ],
                                                  title: 'Source',
                                                },
                                                type: {
                                                  type: 'string',
                                                  title: 'Type',
                                                  enum: ['image'],
                                                },
                                                cache_control: {
                                                  type: 'object',
                                                  title: 'CacheControlEphemeral',
                                                  properties: {
                                                    type: {
                                                      type: 'string',
                                                      title: 'Type',
                                                      enum: ['ephemeral'],
                                                    },
                                                  },
                                                  required: ['type'],
                                                },
                                              },
                                              required: ['source', 'type'],
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    title: 'Content',
                                  },
                                  type: {
                                    type: 'string',
                                    title: 'Type',
                                    enum: ['content'],
                                  },
                                },
                                required: ['content', 'type'],
                              },
                              {
                                type: 'object',
                                title: 'URLPDFSource',
                                properties: {
                                  type: {
                                    type: 'string',
                                    title: 'Type',
                                    enum: ['url'],
                                  },
                                  url: {
                                    type: 'string',
                                    title: 'Url',
                                  },
                                },
                                required: ['type', 'url'],
                              },
                            ],
                            title: 'Source',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['document'],
                          },
                          cache_control: {
                            type: 'object',
                            title: 'CacheControlEphemeral',
                            properties: {
                              type: {
                                type: 'string',
                                title: 'Type',
                                enum: ['ephemeral'],
                              },
                            },
                            required: ['type'],
                          },
                          citations: {
                            type: 'object',
                            title: 'RequestCitationsConfig',
                            properties: {
                              enabled: {
                                type: 'boolean',
                                title: 'Enabled',
                              },
                            },
                          },
                          context: {
                            type: 'string',
                            title: 'Context',
                          },
                          title: {
                            type: 'string',
                            title: 'Title',
                          },
                        },
                        required: ['source', 'type'],
                      },
                      {
                        type: 'object',
                        title: 'RequestThinkingBlock',
                        properties: {
                          signature: {
                            type: 'string',
                            title: 'Signature',
                          },
                          thinking: {
                            type: 'string',
                            title: 'Thinking',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['thinking'],
                          },
                        },
                        required: ['signature', 'thinking', 'type'],
                      },
                      {
                        type: 'object',
                        title: 'RequestRedactedThinkingBlock',
                        properties: {
                          data: {
                            type: 'string',
                            title: 'Data',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['redacted_thinking'],
                          },
                        },
                        required: ['data', 'type'],
                      },
                    ],
                  },
                },
              ],
              title: 'Content',
            },
            role: {
              type: 'string',
              title: 'Role',
              enum: ['user', 'assistant'],
            },
          },
          required: ['content', 'role'],
        },
      },
      model: {
        type: 'string',
        title: 'Model',
        description:
          'The model that will complete your prompt.\n\nSee [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.',
      },
      system: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'object',
              title: 'RequestTextBlock',
              properties: {
                text: {
                  type: 'string',
                  title: 'Text',
                },
                type: {
                  type: 'string',
                  title: 'Type',
                  enum: ['text'],
                },
                cache_control: {
                  type: 'object',
                  title: 'CacheControlEphemeral',
                  properties: {
                    type: {
                      type: 'string',
                      title: 'Type',
                      enum: ['ephemeral'],
                    },
                  },
                  required: ['type'],
                },
                citations: {
                  type: 'array',
                  title: 'Citations',
                  items: {
                    anyOf: [
                      {
                        type: 'object',
                        title: 'RequestCharLocationCitation',
                        properties: {
                          cited_text: {
                            type: 'string',
                            title: 'Cited Text',
                          },
                          document_index: {
                            type: 'integer',
                            title: 'Document Index',
                          },
                          document_title: {
                            type: 'string',
                            title: 'Document Title',
                          },
                          end_char_index: {
                            type: 'integer',
                            title: 'End Char Index',
                          },
                          start_char_index: {
                            type: 'integer',
                            title: 'Start Char Index',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['char_location'],
                          },
                        },
                        required: [
                          'cited_text',
                          'document_index',
                          'document_title',
                          'end_char_index',
                          'start_char_index',
                          'type',
                        ],
                      },
                      {
                        type: 'object',
                        title: 'RequestPageLocationCitation',
                        properties: {
                          cited_text: {
                            type: 'string',
                            title: 'Cited Text',
                          },
                          document_index: {
                            type: 'integer',
                            title: 'Document Index',
                          },
                          document_title: {
                            type: 'string',
                            title: 'Document Title',
                          },
                          end_page_number: {
                            type: 'integer',
                            title: 'End Page Number',
                          },
                          start_page_number: {
                            type: 'integer',
                            title: 'Start Page Number',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['page_location'],
                          },
                        },
                        required: [
                          'cited_text',
                          'document_index',
                          'document_title',
                          'end_page_number',
                          'start_page_number',
                          'type',
                        ],
                      },
                      {
                        type: 'object',
                        title: 'RequestContentBlockLocationCitation',
                        properties: {
                          cited_text: {
                            type: 'string',
                            title: 'Cited Text',
                          },
                          document_index: {
                            type: 'integer',
                            title: 'Document Index',
                          },
                          document_title: {
                            type: 'string',
                            title: 'Document Title',
                          },
                          end_block_index: {
                            type: 'integer',
                            title: 'End Block Index',
                          },
                          start_block_index: {
                            type: 'integer',
                            title: 'Start Block Index',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['content_block_location'],
                          },
                        },
                        required: [
                          'cited_text',
                          'document_index',
                          'document_title',
                          'end_block_index',
                          'start_block_index',
                          'type',
                        ],
                      },
                    ],
                  },
                },
              },
              required: ['text', 'type'],
            },
          },
        ],
        title: 'System',
        description:
          'System prompt.\n\nA system prompt is a way of providing context and instructions to Claude, such as specifying a particular goal or role. See our [guide to system prompts](https://docs.anthropic.com/en/docs/system-prompts).',
      },
      thinking: {
        anyOf: [
          {
            type: 'object',
            title: 'ThinkingConfigEnabled',
            properties: {
              budget_tokens: {
                type: 'integer',
                title: 'Budget Tokens',
                description:
                  'Determines how many tokens Claude can use for its internal reasoning process. Larger budgets can enable more thorough analysis for complex problems, improving response quality. \n\nMust be ≥1024 and less than `max_tokens`.\n\nSee [extended thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking) for details.',
              },
              type: {
                type: 'string',
                title: 'Type',
                enum: ['enabled'],
              },
            },
            required: ['budget_tokens', 'type'],
          },
          {
            type: 'object',
            title: 'ThinkingConfigDisabled',
            properties: {
              type: {
                type: 'string',
                title: 'Type',
                enum: ['disabled'],
              },
            },
            required: ['type'],
          },
        ],
        title: 'Thinking',
        description:
          "Configuration for enabling Claude's extended thinking. \n\nWhen enabled, responses include `thinking` content blocks showing Claude's thinking process before the final answer. Requires a minimum budget of 1,024 tokens and counts towards your `max_tokens` limit.\n\nSee [extended thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking) for details.",
      },
      tool_choice: {
        anyOf: [
          {
            type: 'object',
            title: 'ToolChoiceAuto',
            description: 'The model will automatically decide whether to use tools.',
            properties: {
              type: {
                type: 'string',
                title: 'Type',
                enum: ['auto'],
              },
              disable_parallel_tool_use: {
                type: 'boolean',
                title: 'Disable Parallel Tool Use',
                description:
                  'Whether to disable parallel tool use.\n\nDefaults to `false`. If set to `true`, the model will output at most one tool use.',
              },
            },
            required: ['type'],
          },
          {
            type: 'object',
            title: 'ToolChoiceAny',
            description: 'The model will use any available tools.',
            properties: {
              type: {
                type: 'string',
                title: 'Type',
                enum: ['any'],
              },
              disable_parallel_tool_use: {
                type: 'boolean',
                title: 'Disable Parallel Tool Use',
                description:
                  'Whether to disable parallel tool use.\n\nDefaults to `false`. If set to `true`, the model will output exactly one tool use.',
              },
            },
            required: ['type'],
          },
          {
            type: 'object',
            title: 'ToolChoiceTool',
            description: 'The model will use the specified tool with `tool_choice.name`.',
            properties: {
              name: {
                type: 'string',
                title: 'Name',
                description: 'The name of the tool to use.',
              },
              type: {
                type: 'string',
                title: 'Type',
                enum: ['tool'],
              },
              disable_parallel_tool_use: {
                type: 'boolean',
                title: 'Disable Parallel Tool Use',
                description:
                  'Whether to disable parallel tool use.\n\nDefaults to `false`. If set to `true`, the model will output exactly one tool use.',
              },
            },
            required: ['name', 'type'],
          },
          {
            type: 'object',
            title: 'ToolChoiceNone',
            description: 'The model will not be allowed to use tools.',
            properties: {
              type: {
                type: 'string',
                title: 'Type',
                enum: ['none'],
              },
            },
            required: ['type'],
          },
        ],
        title: 'Tool Choice',
        description:
          'How the model should use the provided tools. The model can use a specific tool, any available tool, decide by itself, or not use tools at all.',
      },
      tools: {
        type: 'array',
        title: 'Tools',
        description:
          'Definitions of tools that the model may use.\n\nIf you include `tools` in your API request, the model may return `tool_use` content blocks that represent the model\'s use of those tools. You can then run those tools using the tool input generated by the model and then optionally return results back to the model using `tool_result` content blocks.\n\nEach tool definition includes:\n\n* `name`: Name of the tool.\n* `description`: Optional, but strongly-recommended description of the tool.\n* `input_schema`: [JSON schema](https://json-schema.org/draft/2020-12) for the tool `input` shape that the model will produce in `tool_use` output content blocks.\n\nFor example, if you defined `tools` as:\n\n```json\n[\n  {\n    "name": "get_stock_price",\n    "description": "Get the current stock price for a given ticker symbol.",\n    "input_schema": {\n      "type": "object",\n      "properties": {\n        "ticker": {\n          "type": "string",\n          "description": "The stock ticker symbol, e.g. AAPL for Apple Inc."\n        }\n      },\n      "required": ["ticker"]\n    }\n  }\n]\n```\n\nAnd then asked the model "What\'s the S&P 500 at today?", the model might produce `tool_use` content blocks in the response like this:\n\n```json\n[\n  {\n    "type": "tool_use",\n    "id": "toolu_01D7FLrfh4GYq7yT1ULFeyMV",\n    "name": "get_stock_price",\n    "input": { "ticker": "^GSPC" }\n  }\n]\n```\n\nYou might then run your `get_stock_price` tool with `{"ticker": "^GSPC"}` as an input, and return the following back to the model in a subsequent `user` message:\n\n```json\n[\n  {\n    "type": "tool_result",\n    "tool_use_id": "toolu_01D7FLrfh4GYq7yT1ULFeyMV",\n    "content": "259.75 USD"\n  }\n]\n```\n\nTools can be used for workflows that include running client-side tools and functions, or more generally whenever you want the model to produce a particular JSON structure of output.\n\nSee our [guide](https://docs.anthropic.com/en/docs/tool-use) for more details.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'Tool',
              properties: {
                input_schema: {
                  type: 'object',
                  title: 'InputSchema',
                  description:
                    "[JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.\n\nThis defines the shape of the `input` that your tool accepts and that the model will produce.",
                  properties: {
                    type: {
                      type: 'string',
                      title: 'Type',
                      enum: ['object'],
                    },
                    properties: {
                      type: 'object',
                      title: 'Properties',
                    },
                  },
                  required: ['type'],
                },
                name: {
                  type: 'string',
                  title: 'Name',
                  description:
                    'Name of the tool.\n\nThis is how the tool will be called by the model and in tool_use blocks.',
                },
                cache_control: {
                  type: 'object',
                  title: 'CacheControlEphemeral',
                  properties: {
                    type: {
                      type: 'string',
                      title: 'Type',
                      enum: ['ephemeral'],
                    },
                  },
                  required: ['type'],
                },
                description: {
                  type: 'string',
                  title: 'Description',
                  description:
                    'Description of what this tool does.\n\nTool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema.',
                },
              },
              required: ['input_schema', 'name'],
            },
            {
              type: 'object',
              title: 'BashTool_20250124',
              properties: {
                name: {
                  type: 'string',
                  title: 'Name',
                  description:
                    'Name of the tool.\n\nThis is how the tool will be called by the model and in tool_use blocks.',
                  enum: ['bash'],
                },
                type: {
                  type: 'string',
                  title: 'Type',
                  enum: ['bash_20250124'],
                },
                cache_control: {
                  type: 'object',
                  title: 'CacheControlEphemeral',
                  properties: {
                    type: {
                      type: 'string',
                      title: 'Type',
                      enum: ['ephemeral'],
                    },
                  },
                  required: ['type'],
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              title: 'TextEditor_20250124',
              properties: {
                name: {
                  type: 'string',
                  title: 'Name',
                  description:
                    'Name of the tool.\n\nThis is how the tool will be called by the model and in tool_use blocks.',
                  enum: ['str_replace_editor'],
                },
                type: {
                  type: 'string',
                  title: 'Type',
                  enum: ['text_editor_20250124'],
                },
                cache_control: {
                  type: 'object',
                  title: 'CacheControlEphemeral',
                  properties: {
                    type: {
                      type: 'string',
                      title: 'Type',
                      enum: ['ephemeral'],
                    },
                  },
                  required: ['type'],
                },
              },
              required: ['name', 'type'],
            },
          ],
        },
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
    required: ['messages', 'model'],
  },
};

export const handler = async (client: Sam, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.messages.countTokens(body));
};

export default { metadata, tool, handler };
