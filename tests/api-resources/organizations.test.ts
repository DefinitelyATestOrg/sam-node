// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam';

const sam = new Sam({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizations', () => {
  test('update: required and optional params', async () => {
    const response = await sam.organizations.update({
      id: 'string',
      friendlyId: 'string',
      name: 'string',
      defaultLanguage: { code: 'string', detected: true },
    });
  });
});
