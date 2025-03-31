// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam';

const client = new Sam({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource betaTrue', () => {
  test('retrieve', async () => {
    const responsePromise = client.messages.batches.betaTrue.retrieve('message_batch_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messages.batches.betaTrue.retrieve(
        'message_batch_id',
        { 'anthropic-beta': ['string'], 'anthropic-version': 'anthropic-version', 'x-api-key': 'x-api-key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sam.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.messages.batches.betaTrue.delete('message_batch_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messages.batches.betaTrue.delete(
        'message_batch_id',
        { 'anthropic-beta': ['string'], 'anthropic-version': 'anthropic-version', 'x-api-key': 'x-api-key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sam.NotFoundError);
  });
});
