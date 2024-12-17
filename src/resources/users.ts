// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Users extends APIResource {
  /**
   * This can only be done by the logged in user.
   */
  create(body?: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<User>;
  create(options?: Core.RequestOptions): Core.APIPromise<User>;
  create(
    body: UserCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<User> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/user', { body, ...options });
  }

  /**
   * Get user by user name
   */
  retrieve(username: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/user/${username}`, options);
  }

  /**
   * This can only be done by the logged in user.
   */
  update(params: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_username, body_username, ...body } = params;
    return this._client.put(`/user/${path_username}`, {
      body: { username: body_username, ...body },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * This can only be done by the logged in user.
   */
  delete(username: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/user/${username}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Creates list of users with given input array
   */
  createWithList(body: UserCreateWithListParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post('/user/createWithList', { body, ...options });
  }

  /**
   * Logs user into the system
   */
  login(query?: UserLoginParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  login(options?: Core.RequestOptions): Core.APIPromise<string>;
  login(
    query: UserLoginParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(query)) {
      return this.login({}, query);
    }
    return this._client.get('/user/login', {
      query,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Logs out current logged in user session
   */
  logout(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/user/logout', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface User {
  id?: number;

  email?: string;

  firstName?: string;

  lastName?: string;

  password?: string;

  phone?: string;

  username?: string;

  /**
   * User Status
   */
  userStatus?: number;
}

export type UserLoginResponse = string;

export interface UserCreateParams {
  id?: number;

  email?: string;

  firstName?: string;

  lastName?: string;

  password?: string;

  phone?: string;

  username?: string;

  /**
   * User Status
   */
  userStatus?: number;
}

export interface UserUpdateParams {
  /**
   * Path param: name that needs to be updated
   */
  path_username: string;

  /**
   * Body param:
   */
  id?: number;

  /**
   * Body param:
   */
  email?: string;

  /**
   * Body param:
   */
  firstName?: string;

  /**
   * Body param:
   */
  lastName?: string;

  /**
   * Body param:
   */
  password?: string;

  /**
   * Body param:
   */
  phone?: string;

  /**
   * Body param:
   */
  body_username?: string;

  /**
   * Body param: User Status
   */
  userStatus?: number;
}

export type UserCreateWithListParams = Array<User>;

export interface UserLoginParams {
  /**
   * The password for login in clear text
   */
  password?: string;

  /**
   * The user name for login
   */
  username?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserLoginResponse as UserLoginResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserCreateWithListParams as UserCreateWithListParams,
    type UserLoginParams as UserLoginParams,
  };
}
