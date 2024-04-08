// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam';
import { Response } from 'node-fetch';

const sam = new Sam({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sam.documents.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sam.documents.retrieve('string', { text: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Sam.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = sam.documents.delete('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sam.documents.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });
});
