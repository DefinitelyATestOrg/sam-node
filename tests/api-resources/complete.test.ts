// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam';
import { Response } from 'node-fetch';

const client = new Sam({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource complete', () => {
  test('create: only required params', async () => {
    const responsePromise = client.complete.create({
      max_tokens_to_sample: 256,
      model: 'claude-2.1',
      prompt: '\n\nHuman: Hello, world!\n\nAssistant:',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.complete.create({
      max_tokens_to_sample: 256,
      model: 'claude-2.1',
      prompt: '\n\nHuman: Hello, world!\n\nAssistant:',
      metadata: { user_id: '13803d75-b4b5-4c3e-b2a2-6f21399b021b' },
      stop_sequences: ['string'],
      stream: true,
      temperature: 1,
      top_k: 5,
      top_p: 0.7,
      'anthropic-version': 'anthropic-version',
      'x-api-key': 'x-api-key',
    });
  });
});
