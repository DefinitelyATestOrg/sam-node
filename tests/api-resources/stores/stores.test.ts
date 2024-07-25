// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam-node';
import { Response } from 'node-fetch';

const sam = new Sam({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource stores', () => {
  test('retrieve', async () => {
    const responsePromise = sam.stores.retrieve(0);
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
    await expect(sam.stores.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = sam.stores.delete(0);
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
    await expect(sam.stores.delete(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('createOrder', async () => {
    const responsePromise = sam.stores.createOrder();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createOrder: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sam.stores.createOrder({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('createOrder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      sam.stores.createOrder(
        {
          id: 10,
          complete: true,
          petId: 198772,
          quantity: 7,
          shipDate: '2019-12-27T18:11:19.117Z',
          status: 'approved',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sam.NotFoundError);
  });

  test('inventory', async () => {
    const responsePromise = sam.stores.inventory();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('inventory: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(sam.stores.inventory({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });
});
