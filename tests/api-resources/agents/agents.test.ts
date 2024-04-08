// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam, { toFile } from 'sam';
import { Response } from 'node-fetch';

const sam = new Sam({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sam.agents.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('update: required and optional params', async () => {
    const response = await sam.agents.update('string', {
      agent: {
        id: 'string',
        name: 'string',
        brandColor: 'string',
        persona: 'ANY',
        additionalPromptText: 'string',
        popularQuestions: ['string', 'string', 'string'],
        bailoutType: 'INTEGRATION',
        bailoutText: 'string',
        bailoutIntegration: 'SALESFORCE',
        hiddenTicketTags: ['string'],
        internal__salesStatus: 'LIVE',
        createdBy: { id: 'string', name: 'string' },
        updatedBy: { id: 'string', name: 'string' },
      },
      chatIcon: await toFile(Buffer.from('# my file contents'), 'README.md'),
      chatIconDeleted: true,
      logo: await toFile(Buffer.from('# my file contents'), 'README.md'),
      logoDeleted: true,
    });
  });

  test('delete', async () => {
    const responsePromise = sam.agents.delete('string');
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
    await expect(sam.agents.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });
});
