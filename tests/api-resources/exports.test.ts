// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'sam-node';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exports', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.exports.create({ category: 'transaction_csv' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await increase.exports.create({
      category: 'transaction_csv',
      account_statement_ofx: {
        account_id: 'string',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
      },
      balance_csv: {
        account_id: 'string',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
      },
      bookkeeping_account_balance_csv: {
        bookkeeping_account_id: 'string',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
      },
      entity_csv: { status: { in: ['active', 'archived', 'disabled'] } },
      transaction_csv: {
        account_id: 'account_in71c4amph0vgo2qllky',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
      },
      vendor_csv: {},
    });
  });

  test('retrieve', async () => {
    const responsePromise = increase.exports.retrieve('export_8s4m48qz3bclzje0zwh9');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.exports.retrieve('export_8s4m48qz3bclzje0zwh9', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = increase.exports.list();
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
    await expect(increase.exports.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.exports.list(
        {
          category: { in: ['account_statement_ofx', 'transaction_csv', 'balance_csv'] },
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'string',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['pending', 'complete', 'failed'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});