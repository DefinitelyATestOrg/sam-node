// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sam from 'sam-node';
import { Response } from 'node-fetch';

const client = new Sam({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource users', () => {
  test('create', async () => {
    const responsePromise = client.users.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.create(
        {
          id: 10,
          email: 'john@email.com',
          firstName: 'John',
          lastName: 'James',
          password: '12345',
          phone: '12345',
          username: 'theUser',
          userStatus: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sam.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = client.users.retrieve('username');
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
    await expect(client.users.retrieve('username', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.users.update({ path_username: 'username' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.users.update({
      path_username: 'username',
      id: 10,
      email: 'john@email.com',
      firstName: 'John',
      lastName: 'James',
      password: '12345',
      phone: '12345',
      body_username: 'theUser',
      userStatus: 1,
    });
  });

  test('delete', async () => {
    const responsePromise = client.users.delete('username');
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
    await expect(client.users.delete('username', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });

  test('createWithList: only required params', async () => {
    const responsePromise = client.users.createWithList([{}, {}, {}]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createWithList: required and optional params', async () => {
    const response = await client.users.createWithList([
      {
        id: 10,
        username: 'theUser',
        firstName: 'John',
        lastName: 'James',
        email: 'john@email.com',
        password: '12345',
        phone: '12345',
        userStatus: 1,
      },
      {
        id: 10,
        username: 'theUser',
        firstName: 'John',
        lastName: 'James',
        email: 'john@email.com',
        password: '12345',
        phone: '12345',
        userStatus: 1,
      },
      {
        id: 10,
        username: 'theUser',
        firstName: 'John',
        lastName: 'James',
        email: 'john@email.com',
        password: '12345',
        phone: '12345',
        userStatus: 1,
      },
    ]);
  });

  test('login', async () => {
    const responsePromise = client.users.login();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('login: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.login({ path: '/_stainless_unknown_path' })).rejects.toThrow(Sam.NotFoundError);
  });

  test('login: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.login(
        { password: 'password', username: 'username' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Sam.NotFoundError);
  });

  test('logout', async () => {
    const responsePromise = client.users.logout();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('logout: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.logout({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Sam.NotFoundError,
    );
  });
});
