// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam';
import { Response } from 'node-fetch';

const sam = new Sam({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource corpora', () => {
  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sam.corpora.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('update: required and optional params', async () => {
    const response = await sam.corpora.update('string', {
      agentId: 'string',
      name: 'string',
      active: true,
      crawlSpec: {
        ingestionWorkflowId: 'string',
        startUrls: ['string', 'string', 'string'],
        exclusionPatterns: ['string', 'string', 'string'],
        htmlTransformer: 'NONE',
        removeElementsCssSelector: 'string',
        maxCrawlDepth: 0,
        maxCrawlPages: 0,
        initialConcurrency: 0,
        maxConcurrency: 0,
        timeoutSeconds: 0,
        saveHtml: true,
        saveMarkdown: true,
        useSitemaps: true,
      },
      createdBy: { id: 'string', name: 'string' },
      excludeLastUpdatedBefore: '2019-12-27T18:11:19.117Z',
      htmlTransformer: 'NONE',
      includedKbArticleIds: ['string', 'string', 'string'],
      integration: 'SALESFORCE',
      integrationCategoryId: 'string',
      sourceUrl: 'string',
      status: 'PROCESSING',
      tags: ['string'],
      type: 'URL',
      updatedBy: { id: 'string', name: 'string' },
      urlExclusionPatterns: ['string', 'string', 'string'],
    });
  });

  test('delete', async () => {
    const responsePromise = sam.corpora.delete('string');
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
    await expect(sam.corpora.delete('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });
});
