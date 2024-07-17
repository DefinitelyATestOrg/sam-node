// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'sam-node';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundFundsHolds', () => {
  test('release', async () => {
    const responsePromise = increase.simulations.inboundFundsHolds.release(
      'inbound_funds_hold_9vuasmywdo7xb3zt4071',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('release: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.inboundFundsHolds.release('inbound_funds_hold_9vuasmywdo7xb3zt4071', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});