# @formance/formance-sdk

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start Summary [summary] -->
## Summary

Formance Stack API: Open, modular foundation for unique payments flows

# Introduction
This API is documented in **OpenAPI format**.

# Authentication
Formance Stack offers one forms of authentication:
  - OAuth2
OAuth2 - an open protocol to allow secure authorization in a simple
and standard method from web, mobile and desktop applications.
<SecurityDefinitions />
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@formance/formance-sdk](#formanceformance-sdk)
  * [🏗 **Welcome to your new SDK!** 🏗](#welcome-to-your-new-sdk)
* [Introduction](#introduction)
* [Authentication](#authentication)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication-1)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @formance/formance-sdk
```

### PNPM

```bash
pnpm add @formance/formance-sdk
```

### Bun

```bash
bun add @formance/formance-sdk
```

### Yarn

```bash
yarn add @formance/formance-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getOIDCWellKnowns();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [auth](docs/sdks/auth/README.md)

* [getServerInfo](docs/sdks/auth/README.md#getserverinfo) - Get server info
* [createClient](docs/sdks/auth/README.md#createclient) - Create client
* [createSecret](docs/sdks/auth/README.md#createsecret) - Add a secret to a client
* [deleteClient](docs/sdks/auth/README.md#deleteclient) - Delete client
* [deleteSecret](docs/sdks/auth/README.md#deletesecret) - Delete a secret from a client
* [listClients](docs/sdks/auth/README.md#listclients) - List clients
* [listUsers](docs/sdks/auth/README.md#listusers) - List users
* [readClient](docs/sdks/auth/README.md#readclient) - Read client
* [readUser](docs/sdks/auth/README.md#readuser) - Read user
* [updateClient](docs/sdks/auth/README.md#updateclient) - Update client

### [ledger](docs/sdks/ledger/README.md)


#### [ledger.v1](docs/sdks/v1/README.md)

* [createTransactions](docs/sdks/v1/README.md#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](docs/sdks/v1/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [addMetadataToAccount](docs/sdks/v1/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/sdks/v1/README.md#countaccounts) - Count the accounts from a ledger
* [countTransactions](docs/sdks/v1/README.md#counttransactions) - Count the transactions from a ledger
* [createTransaction](docs/sdks/v1/README.md#createtransaction) - Create a new transaction to a ledger
* [getAccount](docs/sdks/v1/README.md#getaccount) - Get account by its address
* [getBalances](docs/sdks/v1/README.md#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](docs/sdks/v1/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
* [getInfo](docs/sdks/v1/README.md#getinfo) - Show server information
* [getLedgerInfo](docs/sdks/v1/README.md#getledgerinfo) - Get information about a ledger
* [getMapping](docs/sdks/v1/README.md#getmapping) - Get the mapping of a ledger
* [getTransaction](docs/sdks/v1/README.md#gettransaction) - Get transaction from a ledger by its ID
* [listAccounts](docs/sdks/v1/README.md#listaccounts) - List accounts from a ledger
* [listLogs](docs/sdks/v1/README.md#listlogs) - List the logs from a ledger
* [listTransactions](docs/sdks/v1/README.md#listtransactions) - List transactions from a ledger
* [readStats](docs/sdks/v1/README.md#readstats) - Get statistics from a ledger
* [revertTransaction](docs/sdks/v1/README.md#reverttransaction) - Revert a ledger transaction by its ID
* [~~runScript~~](docs/sdks/v1/README.md#runscript) - Execute a Numscript :warning: **Deprecated**
* [updateMapping](docs/sdks/v1/README.md#updatemapping) - Update the mapping of a ledger

#### [ledger.v2](docs/sdks/v2/README.md)

* [addMetadataOnTransaction](docs/sdks/v2/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [addMetadataToAccount](docs/sdks/v2/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/sdks/v2/README.md#countaccounts) - Count the accounts from a ledger
* [countTransactions](docs/sdks/v2/README.md#counttransactions) - Count the transactions from a ledger
* [createBulk](docs/sdks/v2/README.md#createbulk) - Bulk request
* [createLedger](docs/sdks/v2/README.md#createledger) - Create a ledger
* [createTransaction](docs/sdks/v2/README.md#createtransaction) - Create a new transaction to a ledger
* [deleteAccountMetadata](docs/sdks/v2/README.md#deleteaccountmetadata) - Delete metadata by key
* [deleteLedgerMetadata](docs/sdks/v2/README.md#deleteledgermetadata) - Delete ledger metadata by key
* [deleteTransactionMetadata](docs/sdks/v2/README.md#deletetransactionmetadata) - Delete metadata by key
* [exportLogs](docs/sdks/v2/README.md#exportlogs) - Export logs
* [getAccount](docs/sdks/v2/README.md#getaccount) - Get account by its address
* [getBalancesAggregated](docs/sdks/v2/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
* [getInfo](docs/sdks/v2/README.md#getinfo) - Show server information
* [getLedger](docs/sdks/v2/README.md#getledger) - Get a ledger
* [getLedgerInfo](docs/sdks/v2/README.md#getledgerinfo) - Get information about a ledger
* [getTransaction](docs/sdks/v2/README.md#gettransaction) - Get transaction from a ledger by its ID
* [getVolumesWithBalances](docs/sdks/v2/README.md#getvolumeswithbalances) - Get list of volumes with balances for (account/asset)
* [importLogs](docs/sdks/v2/README.md#importlogs)
* [listAccounts](docs/sdks/v2/README.md#listaccounts) - List accounts from a ledger
* [listLedgers](docs/sdks/v2/README.md#listledgers) - List ledgers
* [listLogs](docs/sdks/v2/README.md#listlogs) - List the logs from a ledger
* [listTransactions](docs/sdks/v2/README.md#listtransactions) - List transactions from a ledger
* [readStats](docs/sdks/v2/README.md#readstats) - Get statistics from a ledger
* [revertTransaction](docs/sdks/v2/README.md#reverttransaction) - Revert a ledger transaction by its ID
* [updateLedgerMetadata](docs/sdks/v2/README.md#updateledgermetadata) - Update ledger metadata

### [orchestration](docs/sdks/orchestration/README.md)

* [cancelEvent](docs/sdks/orchestration/README.md#cancelevent) - Cancel a running workflow
* [createTrigger](docs/sdks/orchestration/README.md#createtrigger) - Create trigger
* [createWorkflow](docs/sdks/orchestration/README.md#createworkflow) - Create workflow
* [deleteTrigger](docs/sdks/orchestration/README.md#deletetrigger) - Delete trigger
* [deleteWorkflow](docs/sdks/orchestration/README.md#deleteworkflow) - Delete a flow by id
* [getInstance](docs/sdks/orchestration/README.md#getinstance) - Get a workflow instance by id
* [getInstanceHistory](docs/sdks/orchestration/README.md#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](docs/sdks/orchestration/README.md#getinstancestagehistory) - Get a workflow instance stage history
* [getWorkflow](docs/sdks/orchestration/README.md#getworkflow) - Get a flow by id
* [listInstances](docs/sdks/orchestration/README.md#listinstances) - List instances of a workflow
* [listTriggers](docs/sdks/orchestration/README.md#listtriggers) - List triggers
* [listTriggersOccurrences](docs/sdks/orchestration/README.md#listtriggersoccurrences) - List triggers occurrences
* [listWorkflows](docs/sdks/orchestration/README.md#listworkflows) - List registered workflows
* [orchestrationgetServerInfo](docs/sdks/orchestration/README.md#orchestrationgetserverinfo) - Get server info
* [readTrigger](docs/sdks/orchestration/README.md#readtrigger) - Read trigger
* [runWorkflow](docs/sdks/orchestration/README.md#runworkflow) - Run workflow
* [sendEvent](docs/sdks/orchestration/README.md#sendevent) - Send an event to a running workflow
* [testTrigger](docs/sdks/orchestration/README.md#testtrigger) - Test trigger
* [v2CancelEvent](docs/sdks/orchestration/README.md#v2cancelevent) - Cancel a running workflow
* [v2CreateTrigger](docs/sdks/orchestration/README.md#v2createtrigger) - Create trigger
* [v2CreateWorkflow](docs/sdks/orchestration/README.md#v2createworkflow) - Create workflow
* [v2DeleteTrigger](docs/sdks/orchestration/README.md#v2deletetrigger) - Delete trigger
* [v2DeleteWorkflow](docs/sdks/orchestration/README.md#v2deleteworkflow) - Delete a flow by id
* [v2GetInstance](docs/sdks/orchestration/README.md#v2getinstance) - Get a workflow instance by id
* [v2GetInstanceHistory](docs/sdks/orchestration/README.md#v2getinstancehistory) - Get a workflow instance history by id
* [v2GetInstanceStageHistory](docs/sdks/orchestration/README.md#v2getinstancestagehistory) - Get a workflow instance stage history
* [v2GetServerInfo](docs/sdks/orchestration/README.md#v2getserverinfo) - Get server info
* [v2GetWorkflow](docs/sdks/orchestration/README.md#v2getworkflow) - Get a flow by id
* [v2ListInstances](docs/sdks/orchestration/README.md#v2listinstances) - List instances of a workflow
* [v2ListTriggers](docs/sdks/orchestration/README.md#v2listtriggers) - List triggers
* [v2ListTriggersOccurrences](docs/sdks/orchestration/README.md#v2listtriggersoccurrences) - List triggers occurrences
* [v2ListWorkflows](docs/sdks/orchestration/README.md#v2listworkflows) - List registered workflows
* [v2ReadTrigger](docs/sdks/orchestration/README.md#v2readtrigger) - Read trigger
* [v2RunWorkflow](docs/sdks/orchestration/README.md#v2runworkflow) - Run workflow
* [v2SendEvent](docs/sdks/orchestration/README.md#v2sendevent) - Send an event to a running workflow

### [payments](docs/sdks/payments/README.md)

* [addAccountToPool](docs/sdks/payments/README.md#addaccounttopool) - Add an account to a pool
* [connectorsTransfer](docs/sdks/payments/README.md#connectorstransfer) - Transfer funds between Connector accounts
* [createAccount](docs/sdks/payments/README.md#createaccount) - Create an account
* [createBankAccount](docs/sdks/payments/README.md#createbankaccount) - Create a BankAccount in Payments and on the PSP
* [createPayment](docs/sdks/payments/README.md#createpayment) - Create a payment
* [createPool](docs/sdks/payments/README.md#createpool) - Create a Pool
* [createTransferInitiation](docs/sdks/payments/README.md#createtransferinitiation) - Create a TransferInitiation
* [deletePool](docs/sdks/payments/README.md#deletepool) - Delete a Pool
* [deleteTransferInitiation](docs/sdks/payments/README.md#deletetransferinitiation) - Delete a transfer initiation
* [forwardBankAccount](docs/sdks/payments/README.md#forwardbankaccount) - Forward a bank account to a connector
* [getAccountBalances](docs/sdks/payments/README.md#getaccountbalances) - Get account balances
* [getBankAccount](docs/sdks/payments/README.md#getbankaccount) - Get a bank account created by user on Formance
* [~~getConnectorTask~~](docs/sdks/payments/README.md#getconnectortask) - Read a specific task of the connector :warning: **Deprecated**
* [getConnectorTaskV1](docs/sdks/payments/README.md#getconnectortaskv1) - Read a specific task of the connector
* [getPayment](docs/sdks/payments/README.md#getpayment) - Get a payment
* [getPool](docs/sdks/payments/README.md#getpool) - Get a Pool
* [getPoolBalances](docs/sdks/payments/README.md#getpoolbalances) - Get pool balances
* [getTransferInitiation](docs/sdks/payments/README.md#gettransferinitiation) - Get a transfer initiation
* [installConnector](docs/sdks/payments/README.md#installconnector) - Install a connector
* [listAllConnectors](docs/sdks/payments/README.md#listallconnectors) - List all installed connectors
* [listBankAccounts](docs/sdks/payments/README.md#listbankaccounts) - List bank accounts created by user on Formance
* [listConfigsAvailableConnectors](docs/sdks/payments/README.md#listconfigsavailableconnectors) - List the configs of each available connector
* [~~listConnectorTasks~~](docs/sdks/payments/README.md#listconnectortasks) - List tasks from a connector :warning: **Deprecated**
* [listConnectorTasksV1](docs/sdks/payments/README.md#listconnectortasksv1) - List tasks from a connector
* [listPayments](docs/sdks/payments/README.md#listpayments) - List payments
* [listPools](docs/sdks/payments/README.md#listpools) - List Pools
* [listTransferInitiations](docs/sdks/payments/README.md#listtransferinitiations) - List Transfer Initiations
* [paymentsgetAccount](docs/sdks/payments/README.md#paymentsgetaccount) - Get an account
* [paymentsgetServerInfo](docs/sdks/payments/README.md#paymentsgetserverinfo) - Get server info
* [paymentslistAccounts](docs/sdks/payments/README.md#paymentslistaccounts) - List accounts
* [~~readConnectorConfig~~](docs/sdks/payments/README.md#readconnectorconfig) - Read the config of a connector :warning: **Deprecated**
* [readConnectorConfigV1](docs/sdks/payments/README.md#readconnectorconfigv1) - Read the config of a connector
* [removeAccountFromPool](docs/sdks/payments/README.md#removeaccountfrompool) - Remove an account from a pool
* [~~resetConnector~~](docs/sdks/payments/README.md#resetconnector) - Reset a connector :warning: **Deprecated**
* [resetConnectorV1](docs/sdks/payments/README.md#resetconnectorv1) - Reset a connector
* [retryTransferInitiation](docs/sdks/payments/README.md#retrytransferinitiation) - Retry a failed transfer initiation
* [reverseTransferInitiation](docs/sdks/payments/README.md#reversetransferinitiation) - Reverse a transfer initiation
* [udpateTransferInitiationStatus](docs/sdks/payments/README.md#udpatetransferinitiationstatus) - Update the status of a transfer initiation
* [~~uninstallConnector~~](docs/sdks/payments/README.md#uninstallconnector) - Uninstall a connector :warning: **Deprecated**
* [uninstallConnectorV1](docs/sdks/payments/README.md#uninstallconnectorv1) - Uninstall a connector
* [updateBankAccountMetadata](docs/sdks/payments/README.md#updatebankaccountmetadata) - Update metadata of a bank account
* [updateConnectorConfigV1](docs/sdks/payments/README.md#updateconnectorconfigv1) - Update the config of a connector
* [updateMetadata](docs/sdks/payments/README.md#updatemetadata) - Update metadata

### [reconciliation](docs/sdks/reconciliation/README.md)

* [createPolicy](docs/sdks/reconciliation/README.md#createpolicy) - Create a policy
* [deletePolicy](docs/sdks/reconciliation/README.md#deletepolicy) - Delete a policy
* [getPolicy](docs/sdks/reconciliation/README.md#getpolicy) - Get a policy
* [getReconciliation](docs/sdks/reconciliation/README.md#getreconciliation) - Get a reconciliation
* [listPolicies](docs/sdks/reconciliation/README.md#listpolicies) - List policies
* [listReconciliations](docs/sdks/reconciliation/README.md#listreconciliations) - List reconciliations
* [reconcile](docs/sdks/reconciliation/README.md#reconcile) - Reconcile using a policy
* [reconciliationgetServerInfo](docs/sdks/reconciliation/README.md#reconciliationgetserverinfo) - Get server info

### [SDK](docs/sdks/sdk/README.md)

* [getOIDCWellKnowns](docs/sdks/sdk/README.md#getoidcwellknowns) - Retrieve OpenID connect well-knowns.
* [getVersions](docs/sdks/sdk/README.md#getversions) - Show stack version information

### [search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search
* [searchgetServerInfo](docs/sdks/search/README.md#searchgetserverinfo) - Get server info

### [wallets](docs/sdks/wallets/README.md)


#### [wallets.v1](docs/sdks/sdkv1/README.md)

* [confirmHold](docs/sdks/sdkv1/README.md#confirmhold) - Confirm a hold
* [createBalance](docs/sdks/sdkv1/README.md#createbalance) - Create a balance
* [createWallet](docs/sdks/sdkv1/README.md#createwallet) - Create a new wallet
* [creditWallet](docs/sdks/sdkv1/README.md#creditwallet) - Credit a wallet
* [debitWallet](docs/sdks/sdkv1/README.md#debitwallet) - Debit a wallet
* [getBalance](docs/sdks/sdkv1/README.md#getbalance) - Get detailed balance
* [getHold](docs/sdks/sdkv1/README.md#gethold) - Get a hold
* [getHolds](docs/sdks/sdkv1/README.md#getholds) - Get all holds for a wallet
* [getTransactions](docs/sdks/sdkv1/README.md#gettransactions)
* [getWallet](docs/sdks/sdkv1/README.md#getwallet) - Get a wallet
* [getWalletSummary](docs/sdks/sdkv1/README.md#getwalletsummary) - Get wallet summary
* [listBalances](docs/sdks/sdkv1/README.md#listbalances) - List balances of a wallet
* [listWallets](docs/sdks/sdkv1/README.md#listwallets) - List all wallets
* [updateWallet](docs/sdks/sdkv1/README.md#updatewallet) - Update a wallet
* [voidHold](docs/sdks/sdkv1/README.md#voidhold) - Cancel a hold
* [walletsgetServerInfo](docs/sdks/sdkv1/README.md#walletsgetserverinfo) - Get server info

### [webhooks](docs/sdks/webhooks/README.md)

* [activateConfig](docs/sdks/webhooks/README.md#activateconfig) - Activate one config
* [changeConfigSecret](docs/sdks/webhooks/README.md#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](docs/sdks/webhooks/README.md#deactivateconfig) - Deactivate one config
* [deleteConfig](docs/sdks/webhooks/README.md#deleteconfig) - Delete one config
* [getManyConfigs](docs/sdks/webhooks/README.md#getmanyconfigs) - Get many configs
* [insertConfig](docs/sdks/webhooks/README.md#insertconfig) - Insert a new config
* [testConfig](docs/sdks/webhooks/README.md#testconfig) - Test one config

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `sdk/models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `createTransactions` method may throw the following errors:

| Error Type           | Status Code | Content Type     |
| -------------------- | ----------- | ---------------- |
| errors.ErrorResponse | default     | application/json |
| errors.SDKError      | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { SDK } from "@formance/formance-sdk";
import {
  ErrorResponse,
  SDKValidationError,
} from "@formance/formance-sdk/sdk/models/errors";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  let result;
  try {
    result = await sdk.ledger.v1.createTransactions({
      transactions: {
        transactions: [
          {
            postings: [
              {
                amount: BigInt("100"),
                asset: "COIN",
                destination: "users:002",
                source: "users:001",
              },
              {
                amount: BigInt("100"),
                asset: "COIN",
                destination: "users:002",
                source: "users:001",
              },
              {
                amount: BigInt("100"),
                asset: "COIN",
                destination: "users:002",
                source: "users:001",
              },
            ],
            reference: "ref:001",
          },
        ],
      },
      ledger: "ledger001",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorResponse): {
        // Handle err.data$: ErrorResponseData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                                                | Variables                                                          | Default values                    |
| --- | ----------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------- |
| 0   | `http://localhost`                                    |                                                                    |                                   |
| 1   | `https://{organization}.{environment}.formance.cloud` | `environment: models.ServerEnvironment`<br/>`organization: string` | `"sandbox"`<br/>`"orgID-stackID"` |

If the selected server has variables, you may override their default values through the additional parameters made available in the SDK constructor.

#### Example

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  serverIdx: 1,
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getOIDCWellKnowns();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  serverURL: "http://localhost",
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getOIDCWellKnowns();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "@formance/formance-sdk";
import { HTTPClient } from "@formance/formance-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                          | Type   | Scheme                         |
| ----------------------------- | ------ | ------------------------------ |
| `clientID`<br/>`clientSecret` | oauth2 | OAuth2 Client Credentials Flow |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getOIDCWellKnowns();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authCreateClient`](docs/sdks/auth/README.md#createclient) - Create client
- [`authCreateSecret`](docs/sdks/auth/README.md#createsecret) - Add a secret to a client
- [`authDeleteClient`](docs/sdks/auth/README.md#deleteclient) - Delete client
- [`authDeleteSecret`](docs/sdks/auth/README.md#deletesecret) - Delete a secret from a client
- [`authGetServerInfo`](docs/sdks/auth/README.md#getserverinfo) - Get server info
- [`authListClients`](docs/sdks/auth/README.md#listclients) - List clients
- [`authListUsers`](docs/sdks/auth/README.md#listusers) - List users
- [`authReadClient`](docs/sdks/auth/README.md#readclient) - Read client
- [`authReadUser`](docs/sdks/auth/README.md#readuser) - Read user
- [`authUpdateClient`](docs/sdks/auth/README.md#updateclient) - Update client
- [`getOIDCWellKnowns`](docs/sdks/sdk/README.md#getoidcwellknowns) - Retrieve OpenID connect well-knowns.
- [`getVersions`](docs/sdks/sdk/README.md#getversions) - Show stack version information
- [`ledgerV1AddMetadataOnTransaction`](docs/sdks/v1/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
- [`ledgerV1AddMetadataToAccount`](docs/sdks/v1/README.md#addmetadatatoaccount) - Add metadata to an account
- [`ledgerV1CountAccounts`](docs/sdks/v1/README.md#countaccounts) - Count the accounts from a ledger
- [`ledgerV1CountTransactions`](docs/sdks/v1/README.md#counttransactions) - Count the transactions from a ledger
- [`ledgerV1CreateTransaction`](docs/sdks/v1/README.md#createtransaction) - Create a new transaction to a ledger
- [`ledgerV1CreateTransactions`](docs/sdks/v1/README.md#createtransactions) - Create a new batch of transactions to a ledger
- [`ledgerV1GetAccount`](docs/sdks/v1/README.md#getaccount) - Get account by its address
- [`ledgerV1GetBalances`](docs/sdks/v1/README.md#getbalances) - Get the balances from a ledger's account
- [`ledgerV1GetBalancesAggregated`](docs/sdks/v1/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
- [`ledgerV1GetInfo`](docs/sdks/v1/README.md#getinfo) - Show server information
- [`ledgerV1GetLedgerInfo`](docs/sdks/v1/README.md#getledgerinfo) - Get information about a ledger
- [`ledgerV1GetMapping`](docs/sdks/v1/README.md#getmapping) - Get the mapping of a ledger
- [`ledgerV1GetTransaction`](docs/sdks/v1/README.md#gettransaction) - Get transaction from a ledger by its ID
- [`ledgerV1ListAccounts`](docs/sdks/v1/README.md#listaccounts) - List accounts from a ledger
- [`ledgerV1ListLogs`](docs/sdks/v1/README.md#listlogs) - List the logs from a ledger
- [`ledgerV1ListTransactions`](docs/sdks/v1/README.md#listtransactions) - List transactions from a ledger
- [`ledgerV1ReadStats`](docs/sdks/v1/README.md#readstats) - Get statistics from a ledger
- [`ledgerV1RevertTransaction`](docs/sdks/v1/README.md#reverttransaction) - Revert a ledger transaction by its ID
- [`ledgerV1UpdateMapping`](docs/sdks/v1/README.md#updatemapping) - Update the mapping of a ledger
- [`ledgerV2AddMetadataOnTransaction`](docs/sdks/v2/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
- [`ledgerV2AddMetadataToAccount`](docs/sdks/v2/README.md#addmetadatatoaccount) - Add metadata to an account
- [`ledgerV2CountAccounts`](docs/sdks/v2/README.md#countaccounts) - Count the accounts from a ledger
- [`ledgerV2CountTransactions`](docs/sdks/v2/README.md#counttransactions) - Count the transactions from a ledger
- [`ledgerV2CreateBulk`](docs/sdks/v2/README.md#createbulk) - Bulk request
- [`ledgerV2CreateLedger`](docs/sdks/v2/README.md#createledger) - Create a ledger
- [`ledgerV2CreateTransaction`](docs/sdks/v2/README.md#createtransaction) - Create a new transaction to a ledger
- [`ledgerV2DeleteAccountMetadata`](docs/sdks/v2/README.md#deleteaccountmetadata) - Delete metadata by key
- [`ledgerV2DeleteLedgerMetadata`](docs/sdks/v2/README.md#deleteledgermetadata) - Delete ledger metadata by key
- [`ledgerV2DeleteTransactionMetadata`](docs/sdks/v2/README.md#deletetransactionmetadata) - Delete metadata by key
- [`ledgerV2ExportLogs`](docs/sdks/v2/README.md#exportlogs) - Export logs
- [`ledgerV2GetAccount`](docs/sdks/v2/README.md#getaccount) - Get account by its address
- [`ledgerV2GetBalancesAggregated`](docs/sdks/v2/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
- [`ledgerV2GetInfo`](docs/sdks/v2/README.md#getinfo) - Show server information
- [`ledgerV2GetLedger`](docs/sdks/v2/README.md#getledger) - Get a ledger
- [`ledgerV2GetLedgerInfo`](docs/sdks/v2/README.md#getledgerinfo) - Get information about a ledger
- [`ledgerV2GetTransaction`](docs/sdks/v2/README.md#gettransaction) - Get transaction from a ledger by its ID
- [`ledgerV2GetVolumesWithBalances`](docs/sdks/v2/README.md#getvolumeswithbalances) - Get list of volumes with balances for (account/asset)
- [`ledgerV2ImportLogs`](docs/sdks/v2/README.md#importlogs)
- [`ledgerV2ListAccounts`](docs/sdks/v2/README.md#listaccounts) - List accounts from a ledger
- [`ledgerV2ListLedgers`](docs/sdks/v2/README.md#listledgers) - List ledgers
- [`ledgerV2ListLogs`](docs/sdks/v2/README.md#listlogs) - List the logs from a ledger
- [`ledgerV2ListTransactions`](docs/sdks/v2/README.md#listtransactions) - List transactions from a ledger
- [`ledgerV2ReadStats`](docs/sdks/v2/README.md#readstats) - Get statistics from a ledger
- [`ledgerV2RevertTransaction`](docs/sdks/v2/README.md#reverttransaction) - Revert a ledger transaction by its ID
- [`ledgerV2UpdateLedgerMetadata`](docs/sdks/v2/README.md#updateledgermetadata) - Update ledger metadata
- [`orchestrationCancelEvent`](docs/sdks/orchestration/README.md#cancelevent) - Cancel a running workflow
- [`orchestrationCreateTrigger`](docs/sdks/orchestration/README.md#createtrigger) - Create trigger
- [`orchestrationCreateWorkflow`](docs/sdks/orchestration/README.md#createworkflow) - Create workflow
- [`orchestrationDeleteTrigger`](docs/sdks/orchestration/README.md#deletetrigger) - Delete trigger
- [`orchestrationDeleteWorkflow`](docs/sdks/orchestration/README.md#deleteworkflow) - Delete a flow by id
- [`orchestrationGetInstance`](docs/sdks/orchestration/README.md#getinstance) - Get a workflow instance by id
- [`orchestrationGetInstanceHistory`](docs/sdks/orchestration/README.md#getinstancehistory) - Get a workflow instance history by id
- [`orchestrationGetInstanceStageHistory`](docs/sdks/orchestration/README.md#getinstancestagehistory) - Get a workflow instance stage history
- [`orchestrationGetWorkflow`](docs/sdks/orchestration/README.md#getworkflow) - Get a flow by id
- [`orchestrationListInstances`](docs/sdks/orchestration/README.md#listinstances) - List instances of a workflow
- [`orchestrationListTriggers`](docs/sdks/orchestration/README.md#listtriggers) - List triggers
- [`orchestrationListTriggersOccurrences`](docs/sdks/orchestration/README.md#listtriggersoccurrences) - List triggers occurrences
- [`orchestrationListWorkflows`](docs/sdks/orchestration/README.md#listworkflows) - List registered workflows
- [`orchestrationOrchestrationgetServerInfo`](docs/sdks/orchestration/README.md#orchestrationgetserverinfo) - Get server info
- [`orchestrationReadTrigger`](docs/sdks/orchestration/README.md#readtrigger) - Read trigger
- [`orchestrationRunWorkflow`](docs/sdks/orchestration/README.md#runworkflow) - Run workflow
- [`orchestrationSendEvent`](docs/sdks/orchestration/README.md#sendevent) - Send an event to a running workflow
- [`orchestrationTestTrigger`](docs/sdks/orchestration/README.md#testtrigger) - Test trigger
- [`orchestrationV2CancelEvent`](docs/sdks/orchestration/README.md#v2cancelevent) - Cancel a running workflow
- [`orchestrationV2CreateTrigger`](docs/sdks/orchestration/README.md#v2createtrigger) - Create trigger
- [`orchestrationV2CreateWorkflow`](docs/sdks/orchestration/README.md#v2createworkflow) - Create workflow
- [`orchestrationV2DeleteTrigger`](docs/sdks/orchestration/README.md#v2deletetrigger) - Delete trigger
- [`orchestrationV2DeleteWorkflow`](docs/sdks/orchestration/README.md#v2deleteworkflow) - Delete a flow by id
- [`orchestrationV2GetInstance`](docs/sdks/orchestration/README.md#v2getinstance) - Get a workflow instance by id
- [`orchestrationV2GetInstanceHistory`](docs/sdks/orchestration/README.md#v2getinstancehistory) - Get a workflow instance history by id
- [`orchestrationV2GetInstanceStageHistory`](docs/sdks/orchestration/README.md#v2getinstancestagehistory) - Get a workflow instance stage history
- [`orchestrationV2GetServerInfo`](docs/sdks/orchestration/README.md#v2getserverinfo) - Get server info
- [`orchestrationV2GetWorkflow`](docs/sdks/orchestration/README.md#v2getworkflow) - Get a flow by id
- [`orchestrationV2ListInstances`](docs/sdks/orchestration/README.md#v2listinstances) - List instances of a workflow
- [`orchestrationV2ListTriggers`](docs/sdks/orchestration/README.md#v2listtriggers) - List triggers
- [`orchestrationV2ListTriggersOccurrences`](docs/sdks/orchestration/README.md#v2listtriggersoccurrences) - List triggers occurrences
- [`orchestrationV2ListWorkflows`](docs/sdks/orchestration/README.md#v2listworkflows) - List registered workflows
- [`orchestrationV2ReadTrigger`](docs/sdks/orchestration/README.md#v2readtrigger) - Read trigger
- [`orchestrationV2RunWorkflow`](docs/sdks/orchestration/README.md#v2runworkflow) - Run workflow
- [`orchestrationV2SendEvent`](docs/sdks/orchestration/README.md#v2sendevent) - Send an event to a running workflow
- [`paymentsAddAccountToPool`](docs/sdks/payments/README.md#addaccounttopool) - Add an account to a pool
- [`paymentsConnectorsTransfer`](docs/sdks/payments/README.md#connectorstransfer) - Transfer funds between Connector accounts
- [`paymentsCreateAccount`](docs/sdks/payments/README.md#createaccount) - Create an account
- [`paymentsCreateBankAccount`](docs/sdks/payments/README.md#createbankaccount) - Create a BankAccount in Payments and on the PSP
- [`paymentsCreatePayment`](docs/sdks/payments/README.md#createpayment) - Create a payment
- [`paymentsCreatePool`](docs/sdks/payments/README.md#createpool) - Create a Pool
- [`paymentsCreateTransferInitiation`](docs/sdks/payments/README.md#createtransferinitiation) - Create a TransferInitiation
- [`paymentsDeletePool`](docs/sdks/payments/README.md#deletepool) - Delete a Pool
- [`paymentsDeleteTransferInitiation`](docs/sdks/payments/README.md#deletetransferinitiation) - Delete a transfer initiation
- [`paymentsForwardBankAccount`](docs/sdks/payments/README.md#forwardbankaccount) - Forward a bank account to a connector
- [`paymentsGetAccountBalances`](docs/sdks/payments/README.md#getaccountbalances) - Get account balances
- [`paymentsGetBankAccount`](docs/sdks/payments/README.md#getbankaccount) - Get a bank account created by user on Formance
- [`paymentsGetConnectorTaskV1`](docs/sdks/payments/README.md#getconnectortaskv1) - Read a specific task of the connector
- [`paymentsGetPayment`](docs/sdks/payments/README.md#getpayment) - Get a payment
- [`paymentsGetPool`](docs/sdks/payments/README.md#getpool) - Get a Pool
- [`paymentsGetPoolBalances`](docs/sdks/payments/README.md#getpoolbalances) - Get pool balances
- [`paymentsGetTransferInitiation`](docs/sdks/payments/README.md#gettransferinitiation) - Get a transfer initiation
- [`paymentsInstallConnector`](docs/sdks/payments/README.md#installconnector) - Install a connector
- [`paymentsListAllConnectors`](docs/sdks/payments/README.md#listallconnectors) - List all installed connectors
- [`paymentsListBankAccounts`](docs/sdks/payments/README.md#listbankaccounts) - List bank accounts created by user on Formance
- [`paymentsListConfigsAvailableConnectors`](docs/sdks/payments/README.md#listconfigsavailableconnectors) - List the configs of each available connector
- [`paymentsListConnectorTasksV1`](docs/sdks/payments/README.md#listconnectortasksv1) - List tasks from a connector
- [`paymentsListPayments`](docs/sdks/payments/README.md#listpayments) - List payments
- [`paymentsListPools`](docs/sdks/payments/README.md#listpools) - List Pools
- [`paymentsListTransferInitiations`](docs/sdks/payments/README.md#listtransferinitiations) - List Transfer Initiations
- [`paymentsPaymentsgetAccount`](docs/sdks/payments/README.md#paymentsgetaccount) - Get an account
- [`paymentsPaymentsgetServerInfo`](docs/sdks/payments/README.md#paymentsgetserverinfo) - Get server info
- [`paymentsPaymentslistAccounts`](docs/sdks/payments/README.md#paymentslistaccounts) - List accounts
- [`paymentsReadConnectorConfigV1`](docs/sdks/payments/README.md#readconnectorconfigv1) - Read the config of a connector
- [`paymentsRemoveAccountFromPool`](docs/sdks/payments/README.md#removeaccountfrompool) - Remove an account from a pool
- [`paymentsResetConnectorV1`](docs/sdks/payments/README.md#resetconnectorv1) - Reset a connector
- [`paymentsRetryTransferInitiation`](docs/sdks/payments/README.md#retrytransferinitiation) - Retry a failed transfer initiation
- [`paymentsReverseTransferInitiation`](docs/sdks/payments/README.md#reversetransferinitiation) - Reverse a transfer initiation
- [`paymentsUdpateTransferInitiationStatus`](docs/sdks/payments/README.md#udpatetransferinitiationstatus) - Update the status of a transfer initiation
- [`paymentsUninstallConnectorV1`](docs/sdks/payments/README.md#uninstallconnectorv1) - Uninstall a connector
- [`paymentsUpdateBankAccountMetadata`](docs/sdks/payments/README.md#updatebankaccountmetadata) - Update metadata of a bank account
- [`paymentsUpdateConnectorConfigV1`](docs/sdks/payments/README.md#updateconnectorconfigv1) - Update the config of a connector
- [`paymentsUpdateMetadata`](docs/sdks/payments/README.md#updatemetadata) - Update metadata
- [`reconciliationCreatePolicy`](docs/sdks/reconciliation/README.md#createpolicy) - Create a policy
- [`reconciliationDeletePolicy`](docs/sdks/reconciliation/README.md#deletepolicy) - Delete a policy
- [`reconciliationGetPolicy`](docs/sdks/reconciliation/README.md#getpolicy) - Get a policy
- [`reconciliationGetReconciliation`](docs/sdks/reconciliation/README.md#getreconciliation) - Get a reconciliation
- [`reconciliationListPolicies`](docs/sdks/reconciliation/README.md#listpolicies) - List policies
- [`reconciliationListReconciliations`](docs/sdks/reconciliation/README.md#listreconciliations) - List reconciliations
- [`reconciliationReconcile`](docs/sdks/reconciliation/README.md#reconcile) - Reconcile using a policy
- [`reconciliationReconciliationgetServerInfo`](docs/sdks/reconciliation/README.md#reconciliationgetserverinfo) - Get server info
- [`searchSearch`](docs/sdks/search/README.md#search) - Search
- [`searchSearchgetServerInfo`](docs/sdks/search/README.md#searchgetserverinfo) - Get server info
- [`walletsV1ConfirmHold`](docs/sdks/sdkv1/README.md#confirmhold) - Confirm a hold
- [`walletsV1CreateBalance`](docs/sdks/sdkv1/README.md#createbalance) - Create a balance
- [`walletsV1CreateWallet`](docs/sdks/sdkv1/README.md#createwallet) - Create a new wallet
- [`walletsV1CreditWallet`](docs/sdks/sdkv1/README.md#creditwallet) - Credit a wallet
- [`walletsV1DebitWallet`](docs/sdks/sdkv1/README.md#debitwallet) - Debit a wallet
- [`walletsV1GetBalance`](docs/sdks/sdkv1/README.md#getbalance) - Get detailed balance
- [`walletsV1GetHold`](docs/sdks/sdkv1/README.md#gethold) - Get a hold
- [`walletsV1GetHolds`](docs/sdks/sdkv1/README.md#getholds) - Get all holds for a wallet
- [`walletsV1GetTransactions`](docs/sdks/sdkv1/README.md#gettransactions)
- [`walletsV1GetWallet`](docs/sdks/sdkv1/README.md#getwallet) - Get a wallet
- [`walletsV1GetWalletSummary`](docs/sdks/sdkv1/README.md#getwalletsummary) - Get wallet summary
- [`walletsV1ListBalances`](docs/sdks/sdkv1/README.md#listbalances) - List balances of a wallet
- [`walletsV1ListWallets`](docs/sdks/sdkv1/README.md#listwallets) - List all wallets
- [`walletsV1UpdateWallet`](docs/sdks/sdkv1/README.md#updatewallet) - Update a wallet
- [`walletsV1VoidHold`](docs/sdks/sdkv1/README.md#voidhold) - Cancel a hold
- [`walletsV1WalletsgetServerInfo`](docs/sdks/sdkv1/README.md#walletsgetserverinfo) - Get server info
- [`webhooksActivateConfig`](docs/sdks/webhooks/README.md#activateconfig) - Activate one config
- [`webhooksChangeConfigSecret`](docs/sdks/webhooks/README.md#changeconfigsecret) - Change the signing secret of a config
- [`webhooksDeactivateConfig`](docs/sdks/webhooks/README.md#deactivateconfig) - Deactivate one config
- [`webhooksDeleteConfig`](docs/sdks/webhooks/README.md#deleteconfig) - Delete one config
- [`webhooksGetManyConfigs`](docs/sdks/webhooks/README.md#getmanyconfigs) - Get many configs
- [`webhooksInsertConfig`](docs/sdks/webhooks/README.md#insertconfig) - Insert a new config
- [`webhooksTestConfig`](docs/sdks/webhooks/README.md#testconfig) - Test one config
- ~~[`ledgerV1RunScript`](docs/sdks/v1/README.md#runscript)~~ - Execute a Numscript :warning: **Deprecated**
- ~~[`paymentsGetConnectorTask`](docs/sdks/payments/README.md#getconnectortask)~~ - Read a specific task of the connector :warning: **Deprecated**
- ~~[`paymentsListConnectorTasks`](docs/sdks/payments/README.md#listconnectortasks)~~ - List tasks from a connector :warning: **Deprecated**
- ~~[`paymentsReadConnectorConfig`](docs/sdks/payments/README.md#readconnectorconfig)~~ - Read the config of a connector :warning: **Deprecated**
- ~~[`paymentsResetConnector`](docs/sdks/payments/README.md#resetconnector)~~ - Reset a connector :warning: **Deprecated**
- ~~[`paymentsUninstallConnector`](docs/sdks/payments/README.md#uninstallconnector)~~ - Uninstall a connector :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getOIDCWellKnowns({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getOIDCWellKnowns();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
