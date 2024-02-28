// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'sam-node/resource';
import * as AccountsAPI from 'sam-node/resources/customers/accounts';

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
