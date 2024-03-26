// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'sam/core';
import { APIResource } from 'sam/resource';
import { isRequestOptions } from 'sam/core';
import * as AccountsAPI from 'sam/resources/customers/accounts';

export class Accounts extends APIResource {
  /**
   * Allows retrieval of a single account, fetched by its id.
   */
  retrieve(
    customerId: string,
    accountId: string,
    params: AccountRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountRetrieveResponse> {
    const { userId } = params;
    return this._client.get(`/v1/customers/${customerId}/accounts/${accountId}`, {
      ...options,
      headers: { userId: userId, ...options?.headers },
    });
  }

  /**
   * Allows retrieval of accounts associated with the current authorised user. It's
   * possible to filter the accounts list by status or by cashAccountType.
   */
  list(
    customerId: string,
    params: AccountListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountListResponse> {
    const { userId, ...query } = params;
    return this._client.get(`/v1/customers/${customerId}/accounts`, {
      query,
      ...options,
      headers: { userId: userId, ...options?.headers },
    });
  }

  /**
   * Allows closure of a single account.
   */
  close(
    customerId: string,
    accountId: string,
    params?: AccountCloseParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  close(customerId: string, accountId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  close(
    customerId: string,
    accountId: string,
    params: AccountCloseParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.close(customerId, accountId, {}, params);
    }
    const { idempotencyKey } = params;
    return this._client.post(`/v1/customers/${customerId}/accounts/${accountId}/close`, {
      ...options,
      headers: { Accept: '*/*', idempotencyKey: idempotencyKey || '', ...options?.headers },
    });
  }
}

export interface AccountRetrieveResponse {
  account?: AccountRetrieveResponse.Account;
}

export namespace AccountRetrieveResponse {
  export interface Account {
    /**
     * ISO 4217 Alpha 3 currency code.
     */
    currency: string;

    resourceId: string;

    /**
     * Account status. The value is one of the following:
     *
     * - "enabled": account is available
     * - "deleted": account is terminated
     * - "blocked": account is blocked e.g. for legal reasons
     */
    status: 'enabled' | 'deleted' | 'blocked';

    /**
     * A list of balances regarding this account, e.g. the current balance, the last
     * booked balance. The list might be restricted to the current balance.
     */
    balances?: Array<Account.Balance>;

    /**
     * Basic Bank Account Number (BBAN) Identifier.
     */
    bban?: string;

    /**
     * BICFI
     */
    bic?: string;

    /**
     * ExternalCashAccountType1Code from ISO 20022.
     */
    cashAccountType?:
      | 'CACC'
      | 'CARD'
      | 'CASH'
      | 'CHAR'
      | 'CISH'
      | 'COMM'
      | 'CPAC'
      | 'LLSV'
      | 'LOAN'
      | 'MGLD'
      | 'MOMA'
      | 'NREX'
      | 'ODFT'
      | 'ONDP'
      | 'OTHR'
      | 'SACC'
      | 'SLRY'
      | 'SVGS'
      | 'TAXE'
      | 'TRAN'
      | 'TRAS'
      | 'VACC'
      | 'NFCA';

    /**
     * Additional information on the account.
     */
    details?: string;

    /**
     * Name of the account as defined by the user within online channels.
     */
    displayName?: string;

    /**
     * IBAN of an account.
     */
    iban?: string;

    /**
     * Mobile phone number.
     */
    msisdn?: string;

    /**
     * Name of the account.
     */
    name?: string;

    /**
     * Name of the legal account owner. If there is more than one owner, then e.g. two
     * names might be noted here. For a corporate account, the corporate name is used
     * for this attribute.
     */
    ownerName?: string;

    /**
     * List of owner names.
     */
    ownerNames?: Array<Account.OwnerName>;

    /**
     * Product name of the bank for this account, proprietary definition.
     */
    product?: string;

    /**
     * Name of the user. In case of a corporate account, this might be the person
     * acting on behalf of the corporate.
     */
    psuName?: string;

    /**
     * Specifies the usage of the account:
     *
     * - PRIV: private personal account
     * - ORGA: professional account
     */
    usage?: 'PRIV' | 'ORGA';
  }

  export namespace Account {
    /**
     * A single balance element.
     */
    export interface Balance {
      balanceAmount: Balance.BalanceAmount;

      /**
       * The following balance types are defined:
       *
       * - "closingBooked": Balance of the account at the end of the pre-agreed account
       *   reporting period. It is the sum of the opening booked balance at the beginning
       *   of the period and all entries booked to the account during the pre-agreed
       *   account reporting period.
       * - "openingBooked": Book balance of the account at the beginning of the account
       *   reporting period. It always equals the closing book balance from the previous
       *   report.
       * - "interimAvailable": Available balance calculated in the course of the account
       *   ?servicer?s business day, at the time specified, and subject to further
       *   changes during the business day. The interim balance is calculated on the
       *   basis of booked credit and debit items during the calculation time/period
       *   specified.
       * - "interimBooked": Balance calculated in the course of the account servicer's
       *   business day, at the time specified, and subject to further changes during the
       *   business day. The interim balance is calculated on the basis of booked credit
       *   and debit items during the calculation time/period specified.
       */
      balanceType: 'closingBooked' | 'openingBooked' | 'interimAvailable' | 'interimBooked';

      /**
       * A flag indicating if the credit limit of the corresponding account is included
       * in the calculation of the balance, where applicable.
       */
      creditLimitIncluded?: boolean;

      /**
       * Indicates the date and time of the balance.
       */
      lastRetrievedDateTime?: string;
    }

    export namespace Balance {
      export interface BalanceAmount {
        /**
         * The amount given with fractional digits, where fractions must be compliant to
         * the currency definition. Up to 14 significant figures. Negative amounts are
         * signed by minus. The decimal separator is a dot.
         *
         * **Example:** Valid representations for EUR with up to two decimals are:
         *
         * - 1056
         * - 5768.2
         * - -1.50
         * - 5877.78
         */
        amount: string;

        /**
         * ISO 4217 Alpha 3 currency code.
         */
        currency: string;
      }
    }

    /**
     * Identifies a Person that acts as an account owner
     */
    export interface OwnerName {
      /**
       * Account owner name
       */
      name: string;

      /**
       * The following proprietary codes are used:
       *
       * - "owner",
       * - "legalRepresentative",
       * - "authorisedUser"
       */
      role?: string;
    }
  }
}

export interface AccountListResponse {
  accounts?: Array<AccountListResponse.Account>;
}

export namespace AccountListResponse {
  export interface Account {
    /**
     * ISO 4217 Alpha 3 currency code.
     */
    currency: string;

    resourceId: string;

    /**
     * Account status. The value is one of the following:
     *
     * - "enabled": account is available
     * - "deleted": account is terminated
     * - "blocked": account is blocked e.g. for legal reasons
     */
    status: 'enabled' | 'deleted' | 'blocked';

    /**
     * A list of balances regarding this account, e.g. the current balance, the last
     * booked balance. The list might be restricted to the current balance.
     */
    balances?: Array<Account.Balance>;

    /**
     * Basic Bank Account Number (BBAN) Identifier.
     */
    bban?: string;

    /**
     * BICFI
     */
    bic?: string;

    /**
     * ExternalCashAccountType1Code from ISO 20022.
     */
    cashAccountType?:
      | 'CACC'
      | 'CARD'
      | 'CASH'
      | 'CHAR'
      | 'CISH'
      | 'COMM'
      | 'CPAC'
      | 'LLSV'
      | 'LOAN'
      | 'MGLD'
      | 'MOMA'
      | 'NREX'
      | 'ODFT'
      | 'ONDP'
      | 'OTHR'
      | 'SACC'
      | 'SLRY'
      | 'SVGS'
      | 'TAXE'
      | 'TRAN'
      | 'TRAS'
      | 'VACC'
      | 'NFCA';

    /**
     * Additional information on the account.
     */
    details?: string;

    /**
     * Name of the account as defined by the user within online channels.
     */
    displayName?: string;

    /**
     * IBAN of an account.
     */
    iban?: string;

    /**
     * Mobile phone number.
     */
    msisdn?: string;

    /**
     * Name of the account.
     */
    name?: string;

    /**
     * Name of the legal account owner. If there is more than one owner, then e.g. two
     * names might be noted here. For a corporate account, the corporate name is used
     * for this attribute.
     */
    ownerName?: string;

    /**
     * List of owner names.
     */
    ownerNames?: Array<Account.OwnerName>;

    /**
     * Product name of the bank for this account, proprietary definition.
     */
    product?: string;

    /**
     * Name of the user. In case of a corporate account, this might be the person
     * acting on behalf of the corporate.
     */
    psuName?: string;

    /**
     * Specifies the usage of the account:
     *
     * - PRIV: private personal account
     * - ORGA: professional account
     */
    usage?: 'PRIV' | 'ORGA';
  }

  export namespace Account {
    /**
     * A single balance element.
     */
    export interface Balance {
      balanceAmount: Balance.BalanceAmount;

      /**
       * The following balance types are defined:
       *
       * - "closingBooked": Balance of the account at the end of the pre-agreed account
       *   reporting period. It is the sum of the opening booked balance at the beginning
       *   of the period and all entries booked to the account during the pre-agreed
       *   account reporting period.
       * - "openingBooked": Book balance of the account at the beginning of the account
       *   reporting period. It always equals the closing book balance from the previous
       *   report.
       * - "interimAvailable": Available balance calculated in the course of the account
       *   ?servicer?s business day, at the time specified, and subject to further
       *   changes during the business day. The interim balance is calculated on the
       *   basis of booked credit and debit items during the calculation time/period
       *   specified.
       * - "interimBooked": Balance calculated in the course of the account servicer's
       *   business day, at the time specified, and subject to further changes during the
       *   business day. The interim balance is calculated on the basis of booked credit
       *   and debit items during the calculation time/period specified.
       */
      balanceType: 'closingBooked' | 'openingBooked' | 'interimAvailable' | 'interimBooked';

      /**
       * A flag indicating if the credit limit of the corresponding account is included
       * in the calculation of the balance, where applicable.
       */
      creditLimitIncluded?: boolean;

      /**
       * Indicates the date and time of the balance.
       */
      lastRetrievedDateTime?: string;
    }

    export namespace Balance {
      export interface BalanceAmount {
        /**
         * The amount given with fractional digits, where fractions must be compliant to
         * the currency definition. Up to 14 significant figures. Negative amounts are
         * signed by minus. The decimal separator is a dot.
         *
         * **Example:** Valid representations for EUR with up to two decimals are:
         *
         * - 1056
         * - 5768.2
         * - -1.50
         * - 5877.78
         */
        amount: string;

        /**
         * ISO 4217 Alpha 3 currency code.
         */
        currency: string;
      }
    }

    /**
     * Identifies a Person that acts as an account owner
     */
    export interface OwnerName {
      /**
       * Account owner name
       */
      name: string;

      /**
       * The following proprietary codes are used:
       *
       * - "owner",
       * - "legalRepresentative",
       * - "authorisedUser"
       */
      role?: string;
    }
  }
}

export interface AccountRetrieveParams {
  /**
   * TODO will be removed/adjusted after security is implemented
   */
  userId: string;
}

export interface AccountListParams {
  /**
   * Header param: TODO will be removed/adjusted after security is implemented
   */
  userId: string;

  /**
   * Query param: A filter on the list based on the cashAccountType field. The value
   * must be a 4 characters string as defined in ISO 20022
   */
  cashAccountType?: Array<
    | 'CACC'
    | 'CARD'
    | 'CASH'
    | 'CHAR'
    | 'CISH'
    | 'COMM'
    | 'CPAC'
    | 'LLSV'
    | 'LOAN'
    | 'MGLD'
    | 'MOMA'
    | 'NREX'
    | 'ODFT'
    | 'ONDP'
    | 'OTHR'
    | 'SACC'
    | 'SLRY'
    | 'SVGS'
    | 'TAXE'
    | 'TRAN'
    | 'TRAS'
    | 'VACC'
    | 'NFCA'
  >;

  /**
   * Query param: A filter on the list based on the account status field. Available
   * values:
   *
   * - enabled - account is available
   * - deleted - account is terminated
   * - blocked - account is blocked e.g. for legal reasons
   */
  status?: Array<'enabled' | 'deleted' | 'blocked'>;
}

export interface AccountCloseParams {
  /**
   * The idempotency key for the request.
   */
  idempotencyKey?: string | null;
}

export namespace Accounts {
  export import AccountRetrieveResponse = AccountsAPI.AccountRetrieveResponse;
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import AccountRetrieveParams = AccountsAPI.AccountRetrieveParams;
  export import AccountListParams = AccountsAPI.AccountListParams;
  export import AccountCloseParams = AccountsAPI.AccountCloseParams;
}
