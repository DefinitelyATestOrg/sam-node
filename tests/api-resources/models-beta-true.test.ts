// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam';
import { Response } from 'node-fetch';

const client = new Sam({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modelsBetaTrue', () => {
  test('list', async () => {
    const responsePromise = client.modelsBetaTrue.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.modelsBetaTrue.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.modelsBetaTrue.list(
        {
          after_id: 'after_id',
          before_id: 'before_id',
          limit: 1,
          'anthropic-version': 'anthropic-version',
          'x-api-key': 'x-api-key',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sam.NotFoundError);
  });
});
