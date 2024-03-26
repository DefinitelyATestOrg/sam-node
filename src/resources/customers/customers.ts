// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'sam/resource';
import * as AccountsAPI from 'sam/resources/customers/accounts';

export class Customers extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
}

export namespace Customers {
  export import Accounts = AccountsAPI.Accounts;
  export import AccountRetrieveResponse = AccountsAPI.AccountRetrieveResponse;
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import AccountRetrieveParams = AccountsAPI.AccountRetrieveParams;
  export import AccountListParams = AccountsAPI.AccountListParams;
  export import AccountCloseParams = AccountsAPI.AccountCloseParams;
}
