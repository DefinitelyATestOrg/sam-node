// File generated from our OpenAPI spec by Stainless.

import Sam from 'auie';
import { Response } from 'node-fetch';

const sam = new Sam({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource accounts', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = sam.customers.accounts.retrieve(
      '6878951b-256b-4baa-9e81-ad4c577adc4e',
      '3dc3d5b3-7023-4848-9853-f5400a64e80f',
      { userId: '36a22460-ebc8-4ffe-a213-1683c5a420c5' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await sam.customers.accounts.retrieve(
      '6878951b-256b-4baa-9e81-ad4c577adc4e',
      '3dc3d5b3-7023-4848-9853-f5400a64e80f',
      { userId: '36a22460-ebc8-4ffe-a213-1683c5a420c5' },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = sam.customers.accounts.list('6878951b-256b-4baa-9e81-ad4c577adc4e', {
      userId: '36a22460-ebc8-4ffe-a213-1683c5a420c5',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await sam.customers.accounts.list('6878951b-256b-4baa-9e81-ad4c577adc4e', {
      userId: '36a22460-ebc8-4ffe-a213-1683c5a420c5',
      cashAccountType: ['CACC', 'CARD', 'CASH'],
      status: ['enabled', 'deleted', 'blocked'],
    });
  });

  test('close', async () => {
    const responsePromise = sam.customers.accounts.close(
      '6878951b-256b-4baa-9e81-ad4c577adc4e',
      '3dc3d5b3-7023-4848-9853-f5400a64e80f',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('close: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sam.customers.accounts.close(
        '6878951b-256b-4baa-9e81-ad4c577adc4e',
        '3dc3d5b3-7023-4848-9853-f5400a64e80f',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sam.NotFoundError);
  });

  test('close: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sam.customers.accounts.close(
        '6878951b-256b-4baa-9e81-ad4c577adc4e',
        '3dc3d5b3-7023-4848-9853-f5400a64e80f',
        { idempotencyKey: '2318951c-356e-3bcd-9e94-ad4c593adc4f' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sam.NotFoundError);
  });
});
