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
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.getVersions();

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


#### [auth.v1](docs/sdks/v1/README.md)

* [createClient](docs/sdks/v1/README.md#createclient) - Create client
* [createSecret](docs/sdks/v1/README.md#createsecret) - Add a secret to a client
* [deleteClient](docs/sdks/v1/README.md#deleteclient) - Delete client
* [deleteSecret](docs/sdks/v1/README.md#deletesecret) - Delete a secret from a client
* [getOIDCWellKnowns](docs/sdks/v1/README.md#getoidcwellknowns) - Retrieve OpenID connect well-knowns.
* [getServerInfo](docs/sdks/v1/README.md#getserverinfo) - Get server info
* [listClients](docs/sdks/v1/README.md#listclients) - List clients
* [listUsers](docs/sdks/v1/README.md#listusers) - List users
* [readClient](docs/sdks/v1/README.md#readclient) - Read client
* [readUser](docs/sdks/v1/README.md#readuser) - Read user
* [updateClient](docs/sdks/v1/README.md#updateclient) - Update client

### [ledger](docs/sdks/ledger/README.md)


#### [ledger.v1](docs/sdks/sdkv1/README.md)

* [createTransactions](docs/sdks/sdkv1/README.md#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](docs/sdks/sdkv1/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [addMetadataToAccount](docs/sdks/sdkv1/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/sdks/sdkv1/README.md#countaccounts) - Count the accounts from a ledger
* [countTransactions](docs/sdks/sdkv1/README.md#counttransactions) - Count the transactions from a ledger
* [createTransaction](docs/sdks/sdkv1/README.md#createtransaction) - Create a new transaction to a ledger
* [getAccount](docs/sdks/sdkv1/README.md#getaccount) - Get account by its address
* [getBalances](docs/sdks/sdkv1/README.md#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](docs/sdks/sdkv1/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
* [getInfo](docs/sdks/sdkv1/README.md#getinfo) - Show server information
* [getLedgerInfo](docs/sdks/sdkv1/README.md#getledgerinfo) - Get information about a ledger
* [getMapping](docs/sdks/sdkv1/README.md#getmapping) - Get the mapping of a ledger
* [getTransaction](docs/sdks/sdkv1/README.md#gettransaction) - Get transaction from a ledger by its ID
* [listAccounts](docs/sdks/sdkv1/README.md#listaccounts) - List accounts from a ledger
* [listLogs](docs/sdks/sdkv1/README.md#listlogs) - List the logs from a ledger
* [listTransactions](docs/sdks/sdkv1/README.md#listtransactions) - List transactions from a ledger
* [readStats](docs/sdks/sdkv1/README.md#readstats) - Get statistics from a ledger
* [revertTransaction](docs/sdks/sdkv1/README.md#reverttransaction) - Revert a ledger transaction by its ID
* [~~runScript~~](docs/sdks/sdkv1/README.md#runscript) - Execute a Numscript :warning: **Deprecated**
* [updateMapping](docs/sdks/sdkv1/README.md#updatemapping) - Update the mapping of a ledger

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


#### [orchestration.v1](docs/sdks/sdkorchestrationv1/README.md)

* [cancelEvent](docs/sdks/sdkorchestrationv1/README.md#cancelevent) - Cancel a running workflow
* [createTrigger](docs/sdks/sdkorchestrationv1/README.md#createtrigger) - Create trigger
* [createWorkflow](docs/sdks/sdkorchestrationv1/README.md#createworkflow) - Create workflow
* [deleteTrigger](docs/sdks/sdkorchestrationv1/README.md#deletetrigger) - Delete trigger
* [deleteWorkflow](docs/sdks/sdkorchestrationv1/README.md#deleteworkflow) - Delete a flow by id
* [getInstance](docs/sdks/sdkorchestrationv1/README.md#getinstance) - Get a workflow instance by id
* [getInstanceHistory](docs/sdks/sdkorchestrationv1/README.md#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](docs/sdks/sdkorchestrationv1/README.md#getinstancestagehistory) - Get a workflow instance stage history
* [getWorkflow](docs/sdks/sdkorchestrationv1/README.md#getworkflow) - Get a flow by id
* [listInstances](docs/sdks/sdkorchestrationv1/README.md#listinstances) - List instances of a workflow
* [listTriggers](docs/sdks/sdkorchestrationv1/README.md#listtriggers) - List triggers
* [listTriggersOccurrences](docs/sdks/sdkorchestrationv1/README.md#listtriggersoccurrences) - List triggers occurrences
* [listWorkflows](docs/sdks/sdkorchestrationv1/README.md#listworkflows) - List registered workflows
* [orchestrationgetServerInfo](docs/sdks/sdkorchestrationv1/README.md#orchestrationgetserverinfo) - Get server info
* [readTrigger](docs/sdks/sdkorchestrationv1/README.md#readtrigger) - Read trigger
* [runWorkflow](docs/sdks/sdkorchestrationv1/README.md#runworkflow) - Run workflow
* [sendEvent](docs/sdks/sdkorchestrationv1/README.md#sendevent) - Send an event to a running workflow

#### [orchestration.v2](docs/sdks/sdkv2/README.md)

* [cancelEvent](docs/sdks/sdkv2/README.md#cancelevent) - Cancel a running workflow
* [createTrigger](docs/sdks/sdkv2/README.md#createtrigger) - Create trigger
* [createWorkflow](docs/sdks/sdkv2/README.md#createworkflow) - Create workflow
* [deleteTrigger](docs/sdks/sdkv2/README.md#deletetrigger) - Delete trigger
* [deleteWorkflow](docs/sdks/sdkv2/README.md#deleteworkflow) - Delete a flow by id
* [getInstance](docs/sdks/sdkv2/README.md#getinstance) - Get a workflow instance by id
* [getInstanceHistory](docs/sdks/sdkv2/README.md#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](docs/sdks/sdkv2/README.md#getinstancestagehistory) - Get a workflow instance stage history
* [getServerInfo](docs/sdks/sdkv2/README.md#getserverinfo) - Get server info
* [getWorkflow](docs/sdks/sdkv2/README.md#getworkflow) - Get a flow by id
* [listInstances](docs/sdks/sdkv2/README.md#listinstances) - List instances of a workflow
* [listTriggers](docs/sdks/sdkv2/README.md#listtriggers) - List triggers
* [listTriggersOccurrences](docs/sdks/sdkv2/README.md#listtriggersoccurrences) - List triggers occurrences
* [listWorkflows](docs/sdks/sdkv2/README.md#listworkflows) - List registered workflows
* [readTrigger](docs/sdks/sdkv2/README.md#readtrigger) - Read trigger
* [runWorkflow](docs/sdks/sdkv2/README.md#runworkflow) - Run workflow
* [sendEvent](docs/sdks/sdkv2/README.md#sendevent) - Send an event to a running workflow
* [testTrigger](docs/sdks/sdkv2/README.md#testtrigger) - Test trigger

### [payments](docs/sdks/payments/README.md)


#### [payments.v1](docs/sdks/sdkpaymentsv1/README.md)

* [addAccountToPool](docs/sdks/sdkpaymentsv1/README.md#addaccounttopool) - Add an account to a pool
* [connectorsTransfer](docs/sdks/sdkpaymentsv1/README.md#connectorstransfer) - Transfer funds between Connector accounts
* [createAccount](docs/sdks/sdkpaymentsv1/README.md#createaccount) - Create an account
* [createBankAccount](docs/sdks/sdkpaymentsv1/README.md#createbankaccount) - Create a BankAccount in Payments and on the PSP
* [createPayment](docs/sdks/sdkpaymentsv1/README.md#createpayment) - Create a payment
* [createPool](docs/sdks/sdkpaymentsv1/README.md#createpool) - Create a Pool
* [createTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#createtransferinitiation) - Create a TransferInitiation
* [deletePool](docs/sdks/sdkpaymentsv1/README.md#deletepool) - Delete a Pool
* [deleteTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#deletetransferinitiation) - Delete a transfer initiation
* [forwardBankAccount](docs/sdks/sdkpaymentsv1/README.md#forwardbankaccount) - Forward a bank account to a connector
* [getAccountBalances](docs/sdks/sdkpaymentsv1/README.md#getaccountbalances) - Get account balances
* [getBankAccount](docs/sdks/sdkpaymentsv1/README.md#getbankaccount) - Get a bank account created by user on Formance
* [~~getConnectorTask~~](docs/sdks/sdkpaymentsv1/README.md#getconnectortask) - Read a specific task of the connector :warning: **Deprecated**
* [getConnectorTaskV1](docs/sdks/sdkpaymentsv1/README.md#getconnectortaskv1) - Read a specific task of the connector
* [getPayment](docs/sdks/sdkpaymentsv1/README.md#getpayment) - Get a payment
* [getPool](docs/sdks/sdkpaymentsv1/README.md#getpool) - Get a Pool
* [getPoolBalances](docs/sdks/sdkpaymentsv1/README.md#getpoolbalances) - Get pool balances
* [getTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#gettransferinitiation) - Get a transfer initiation
* [installConnector](docs/sdks/sdkpaymentsv1/README.md#installconnector) - Install a connector
* [listAllConnectors](docs/sdks/sdkpaymentsv1/README.md#listallconnectors) - List all installed connectors
* [listBankAccounts](docs/sdks/sdkpaymentsv1/README.md#listbankaccounts) - List bank accounts created by user on Formance
* [listConfigsAvailableConnectors](docs/sdks/sdkpaymentsv1/README.md#listconfigsavailableconnectors) - List the configs of each available connector
* [~~listConnectorTasks~~](docs/sdks/sdkpaymentsv1/README.md#listconnectortasks) - List tasks from a connector :warning: **Deprecated**
* [listConnectorTasksV1](docs/sdks/sdkpaymentsv1/README.md#listconnectortasksv1) - List tasks from a connector
* [listPayments](docs/sdks/sdkpaymentsv1/README.md#listpayments) - List payments
* [listPools](docs/sdks/sdkpaymentsv1/README.md#listpools) - List Pools
* [listTransferInitiations](docs/sdks/sdkpaymentsv1/README.md#listtransferinitiations) - List Transfer Initiations
* [paymentsgetAccount](docs/sdks/sdkpaymentsv1/README.md#paymentsgetaccount) - Get an account
* [paymentsgetServerInfo](docs/sdks/sdkpaymentsv1/README.md#paymentsgetserverinfo) - Get server info
* [paymentslistAccounts](docs/sdks/sdkpaymentsv1/README.md#paymentslistaccounts) - List accounts
* [~~readConnectorConfig~~](docs/sdks/sdkpaymentsv1/README.md#readconnectorconfig) - Read the config of a connector :warning: **Deprecated**
* [readConnectorConfigV1](docs/sdks/sdkpaymentsv1/README.md#readconnectorconfigv1) - Read the config of a connector
* [removeAccountFromPool](docs/sdks/sdkpaymentsv1/README.md#removeaccountfrompool) - Remove an account from a pool
* [~~resetConnector~~](docs/sdks/sdkpaymentsv1/README.md#resetconnector) - Reset a connector :warning: **Deprecated**
* [resetConnectorV1](docs/sdks/sdkpaymentsv1/README.md#resetconnectorv1) - Reset a connector
* [retryTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#retrytransferinitiation) - Retry a failed transfer initiation
* [reverseTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#reversetransferinitiation) - Reverse a transfer initiation
* [udpateTransferInitiationStatus](docs/sdks/sdkpaymentsv1/README.md#udpatetransferinitiationstatus) - Update the status of a transfer initiation
* [~~uninstallConnector~~](docs/sdks/sdkpaymentsv1/README.md#uninstallconnector) - Uninstall a connector :warning: **Deprecated**
* [uninstallConnectorV1](docs/sdks/sdkpaymentsv1/README.md#uninstallconnectorv1) - Uninstall a connector
* [updateBankAccountMetadata](docs/sdks/sdkpaymentsv1/README.md#updatebankaccountmetadata) - Update metadata of a bank account
* [updateConnectorConfigV1](docs/sdks/sdkpaymentsv1/README.md#updateconnectorconfigv1) - Update the config of a connector
* [updateMetadata](docs/sdks/sdkpaymentsv1/README.md#updatemetadata) - Update metadata

### [reconciliation](docs/sdks/reconciliation/README.md)


#### [reconciliation.v1](docs/sdks/sdkreconciliationv1/README.md)

* [createPolicy](docs/sdks/sdkreconciliationv1/README.md#createpolicy) - Create a policy
* [deletePolicy](docs/sdks/sdkreconciliationv1/README.md#deletepolicy) - Delete a policy
* [getPolicy](docs/sdks/sdkreconciliationv1/README.md#getpolicy) - Get a policy
* [getReconciliation](docs/sdks/sdkreconciliationv1/README.md#getreconciliation) - Get a reconciliation
* [listPolicies](docs/sdks/sdkreconciliationv1/README.md#listpolicies) - List policies
* [listReconciliations](docs/sdks/sdkreconciliationv1/README.md#listreconciliations) - List reconciliations
* [reconcile](docs/sdks/sdkreconciliationv1/README.md#reconcile) - Reconcile using a policy
* [reconciliationgetServerInfo](docs/sdks/sdkreconciliationv1/README.md#reconciliationgetserverinfo) - Get server info

### [SDK](docs/sdks/sdk/README.md)

* [getVersions](docs/sdks/sdk/README.md#getversions) - Show stack version information

### [search](docs/sdks/search/README.md)


#### [search.v1](docs/sdks/sdksearchv1/README.md)

* [search](docs/sdks/sdksearchv1/README.md#search) - search.v1
* [searchgetServerInfo](docs/sdks/sdksearchv1/README.md#searchgetserverinfo) - Get server info

### [wallets](docs/sdks/wallets/README.md)


#### [wallets.v1](docs/sdks/sdkwalletsv1/README.md)

* [confirmHold](docs/sdks/sdkwalletsv1/README.md#confirmhold) - Confirm a hold
* [createBalance](docs/sdks/sdkwalletsv1/README.md#createbalance) - Create a balance
* [createWallet](docs/sdks/sdkwalletsv1/README.md#createwallet) - Create a new wallet
* [creditWallet](docs/sdks/sdkwalletsv1/README.md#creditwallet) - Credit a wallet
* [debitWallet](docs/sdks/sdkwalletsv1/README.md#debitwallet) - Debit a wallet
* [getBalance](docs/sdks/sdkwalletsv1/README.md#getbalance) - Get detailed balance
* [getHold](docs/sdks/sdkwalletsv1/README.md#gethold) - Get a hold
* [getHolds](docs/sdks/sdkwalletsv1/README.md#getholds) - Get all holds for a wallet
* [getTransactions](docs/sdks/sdkwalletsv1/README.md#gettransactions)
* [getWallet](docs/sdks/sdkwalletsv1/README.md#getwallet) - Get a wallet
* [getWalletSummary](docs/sdks/sdkwalletsv1/README.md#getwalletsummary) - Get wallet summary
* [listBalances](docs/sdks/sdkwalletsv1/README.md#listbalances) - List balances of a wallet
* [listWallets](docs/sdks/sdkwalletsv1/README.md#listwallets) - List all wallets
* [updateWallet](docs/sdks/sdkwalletsv1/README.md#updatewallet) - Update a wallet
* [voidHold](docs/sdks/sdkwalletsv1/README.md#voidhold) - Cancel a hold
* [walletsgetServerInfo](docs/sdks/sdkwalletsv1/README.md#walletsgetserverinfo) - Get server info

### [webhooks](docs/sdks/webhooks/README.md)


#### [webhooks.v1](docs/sdks/sdkwebhooksv1/README.md)

* [activateConfig](docs/sdks/sdkwebhooksv1/README.md#activateconfig) - Activate one config
* [changeConfigSecret](docs/sdks/sdkwebhooksv1/README.md#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](docs/sdks/sdkwebhooksv1/README.md#deactivateconfig) - Deactivate one config
* [deleteConfig](docs/sdks/sdkwebhooksv1/README.md#deleteconfig) - Delete one config
* [getManyConfigs](docs/sdks/sdkwebhooksv1/README.md#getmanyconfigs) - Get many configs
* [insertConfig](docs/sdks/sdkwebhooksv1/README.md#insertconfig) - Insert a new config
* [testConfig](docs/sdks/sdkwebhooksv1/README.md#testconfig) - Test one config

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | default              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { SDK } from "@formance/formance-sdk";
import {
  ErrorResponse,
  SDKValidationError,
} from "@formance/formance-sdk/sdk/models/errors";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
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
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
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
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost` | None |

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  serverIdx: 0,
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.getVersions();

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  serverURL: "http://localhost",
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.getVersions();

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

| Name            | Type            | Scheme          |
| --------------- | --------------- | --------------- |
| `authorization` | oauth2          | OAuth2 token    |

To authenticate with the API the `authorization` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.getVersions();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.getVersions({
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
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.getVersions();

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

- [authV1CreateClient](docs/sdks/v1/README.md#createclient)
- [authV1CreateSecret](docs/sdks/v1/README.md#createsecret)
- [authV1DeleteClient](docs/sdks/v1/README.md#deleteclient)
- [authV1DeleteSecret](docs/sdks/v1/README.md#deletesecret)
- [authV1GetOIDCWellKnowns](docs/sdks/v1/README.md#getoidcwellknowns)
- [authV1GetServerInfo](docs/sdks/v1/README.md#getserverinfo)
- [authV1ListClients](docs/sdks/v1/README.md#listclients)
- [authV1ListUsers](docs/sdks/v1/README.md#listusers)
- [authV1ReadClient](docs/sdks/v1/README.md#readclient)
- [authV1ReadUser](docs/sdks/v1/README.md#readuser)
- [authV1UpdateClient](docs/sdks/v1/README.md#updateclient)
- [getVersions](docs/sdks/sdk/README.md#getversions)
- [ledgerV1AddMetadataOnTransaction](docs/sdks/sdkv1/README.md#addmetadataontransaction)
- [ledgerV1AddMetadataToAccount](docs/sdks/sdkv1/README.md#addmetadatatoaccount)
- [ledgerV1CountAccounts](docs/sdks/sdkv1/README.md#countaccounts)
- [ledgerV1CountTransactions](docs/sdks/sdkv1/README.md#counttransactions)
- [ledgerV1CreateTransaction](docs/sdks/sdkv1/README.md#createtransaction)
- [ledgerV1CreateTransactions](docs/sdks/sdkv1/README.md#createtransactions)
- [ledgerV1GetAccount](docs/sdks/sdkv1/README.md#getaccount)
- [ledgerV1GetBalancesAggregated](docs/sdks/sdkv1/README.md#getbalancesaggregated)
- [ledgerV1GetBalances](docs/sdks/sdkv1/README.md#getbalances)
- [ledgerV1GetInfo](docs/sdks/sdkv1/README.md#getinfo)
- [ledgerV1GetLedgerInfo](docs/sdks/sdkv1/README.md#getledgerinfo)
- [ledgerV1GetMapping](docs/sdks/sdkv1/README.md#getmapping)
- [ledgerV1GetTransaction](docs/sdks/sdkv1/README.md#gettransaction)
- [ledgerV1ListAccounts](docs/sdks/sdkv1/README.md#listaccounts)
- [ledgerV1ListLogs](docs/sdks/sdkv1/README.md#listlogs)
- [ledgerV1ListTransactions](docs/sdks/sdkv1/README.md#listtransactions)
- [ledgerV1ReadStats](docs/sdks/sdkv1/README.md#readstats)
- [ledgerV1RevertTransaction](docs/sdks/sdkv1/README.md#reverttransaction)
- [ledgerV1RunScript](docs/sdks/sdkv1/README.md#runscript)
- [ledgerV1UpdateMapping](docs/sdks/sdkv1/README.md#updatemapping)
- [ledgerV2AddMetadataOnTransaction](docs/sdks/v2/README.md#addmetadataontransaction)
- [ledgerV2AddMetadataToAccount](docs/sdks/v2/README.md#addmetadatatoaccount)
- [ledgerV2CountAccounts](docs/sdks/v2/README.md#countaccounts)
- [ledgerV2CountTransactions](docs/sdks/v2/README.md#counttransactions)
- [ledgerV2CreateBulk](docs/sdks/v2/README.md#createbulk)
- [ledgerV2CreateLedger](docs/sdks/v2/README.md#createledger)
- [ledgerV2CreateTransaction](docs/sdks/v2/README.md#createtransaction)
- [ledgerV2DeleteAccountMetadata](docs/sdks/v2/README.md#deleteaccountmetadata)
- [ledgerV2DeleteLedgerMetadata](docs/sdks/v2/README.md#deleteledgermetadata)
- [ledgerV2DeleteTransactionMetadata](docs/sdks/v2/README.md#deletetransactionmetadata)
- [ledgerV2ExportLogs](docs/sdks/v2/README.md#exportlogs)
- [ledgerV2GetAccount](docs/sdks/v2/README.md#getaccount)
- [ledgerV2GetBalancesAggregated](docs/sdks/v2/README.md#getbalancesaggregated)
- [ledgerV2GetInfo](docs/sdks/v2/README.md#getinfo)
- [ledgerV2GetLedgerInfo](docs/sdks/v2/README.md#getledgerinfo)
- [ledgerV2GetLedger](docs/sdks/v2/README.md#getledger)
- [ledgerV2GetTransaction](docs/sdks/v2/README.md#gettransaction)
- [ledgerV2GetVolumesWithBalances](docs/sdks/v2/README.md#getvolumeswithbalances)
- [ledgerV2ImportLogs](docs/sdks/v2/README.md#importlogs)
- [ledgerV2ListAccounts](docs/sdks/v2/README.md#listaccounts)
- [ledgerV2ListLedgers](docs/sdks/v2/README.md#listledgers)
- [ledgerV2ListLogs](docs/sdks/v2/README.md#listlogs)
- [ledgerV2ListTransactions](docs/sdks/v2/README.md#listtransactions)
- [ledgerV2ReadStats](docs/sdks/v2/README.md#readstats)
- [ledgerV2RevertTransaction](docs/sdks/v2/README.md#reverttransaction)
- [ledgerV2UpdateLedgerMetadata](docs/sdks/v2/README.md#updateledgermetadata)
- [orchestrationV1CancelEvent](docs/sdks/sdkorchestrationv1/README.md#cancelevent)
- [orchestrationV1CreateTrigger](docs/sdks/sdkorchestrationv1/README.md#createtrigger)
- [orchestrationV1CreateWorkflow](docs/sdks/sdkorchestrationv1/README.md#createworkflow)
- [orchestrationV1DeleteTrigger](docs/sdks/sdkorchestrationv1/README.md#deletetrigger)
- [orchestrationV1DeleteWorkflow](docs/sdks/sdkorchestrationv1/README.md#deleteworkflow)
- [orchestrationV1GetInstanceHistory](docs/sdks/sdkorchestrationv1/README.md#getinstancehistory)
- [orchestrationV1GetInstanceStageHistory](docs/sdks/sdkorchestrationv1/README.md#getinstancestagehistory)
- [orchestrationV1GetInstance](docs/sdks/sdkorchestrationv1/README.md#getinstance)
- [orchestrationV1GetWorkflow](docs/sdks/sdkorchestrationv1/README.md#getworkflow)
- [orchestrationV1ListInstances](docs/sdks/sdkorchestrationv1/README.md#listinstances)
- [orchestrationV1ListTriggersOccurrences](docs/sdks/sdkorchestrationv1/README.md#listtriggersoccurrences)
- [orchestrationV1ListTriggers](docs/sdks/sdkorchestrationv1/README.md#listtriggers)
- [orchestrationV1ListWorkflows](docs/sdks/sdkorchestrationv1/README.md#listworkflows)
- [orchestrationV1OrchestrationgetServerInfo](docs/sdks/sdkorchestrationv1/README.md#orchestrationgetserverinfo)
- [orchestrationV1ReadTrigger](docs/sdks/sdkorchestrationv1/README.md#readtrigger)
- [orchestrationV1RunWorkflow](docs/sdks/sdkorchestrationv1/README.md#runworkflow)
- [orchestrationV1SendEvent](docs/sdks/sdkorchestrationv1/README.md#sendevent)
- [orchestrationV2CancelEvent](docs/sdks/sdkv2/README.md#cancelevent)
- [orchestrationV2CreateTrigger](docs/sdks/sdkv2/README.md#createtrigger)
- [orchestrationV2CreateWorkflow](docs/sdks/sdkv2/README.md#createworkflow)
- [orchestrationV2DeleteTrigger](docs/sdks/sdkv2/README.md#deletetrigger)
- [orchestrationV2DeleteWorkflow](docs/sdks/sdkv2/README.md#deleteworkflow)
- [orchestrationV2GetInstanceHistory](docs/sdks/sdkv2/README.md#getinstancehistory)
- [orchestrationV2GetInstanceStageHistory](docs/sdks/sdkv2/README.md#getinstancestagehistory)
- [orchestrationV2GetInstance](docs/sdks/sdkv2/README.md#getinstance)
- [orchestrationV2GetServerInfo](docs/sdks/sdkv2/README.md#getserverinfo)
- [orchestrationV2GetWorkflow](docs/sdks/sdkv2/README.md#getworkflow)
- [orchestrationV2ListInstances](docs/sdks/sdkv2/README.md#listinstances)
- [orchestrationV2ListTriggersOccurrences](docs/sdks/sdkv2/README.md#listtriggersoccurrences)
- [orchestrationV2ListTriggers](docs/sdks/sdkv2/README.md#listtriggers)
- [orchestrationV2ListWorkflows](docs/sdks/sdkv2/README.md#listworkflows)
- [orchestrationV2ReadTrigger](docs/sdks/sdkv2/README.md#readtrigger)
- [orchestrationV2RunWorkflow](docs/sdks/sdkv2/README.md#runworkflow)
- [orchestrationV2SendEvent](docs/sdks/sdkv2/README.md#sendevent)
- [orchestrationV2TestTrigger](docs/sdks/sdkv2/README.md#testtrigger)
- [paymentsV1AddAccountToPool](docs/sdks/sdkpaymentsv1/README.md#addaccounttopool)
- [paymentsV1ConnectorsTransfer](docs/sdks/sdkpaymentsv1/README.md#connectorstransfer)
- [paymentsV1CreateAccount](docs/sdks/sdkpaymentsv1/README.md#createaccount)
- [paymentsV1CreateBankAccount](docs/sdks/sdkpaymentsv1/README.md#createbankaccount)
- [paymentsV1CreatePayment](docs/sdks/sdkpaymentsv1/README.md#createpayment)
- [paymentsV1CreatePool](docs/sdks/sdkpaymentsv1/README.md#createpool)
- [paymentsV1CreateTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#createtransferinitiation)
- [paymentsV1DeletePool](docs/sdks/sdkpaymentsv1/README.md#deletepool)
- [paymentsV1DeleteTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#deletetransferinitiation)
- [paymentsV1ForwardBankAccount](docs/sdks/sdkpaymentsv1/README.md#forwardbankaccount)
- [paymentsV1GetAccountBalances](docs/sdks/sdkpaymentsv1/README.md#getaccountbalances)
- [paymentsV1GetBankAccount](docs/sdks/sdkpaymentsv1/README.md#getbankaccount)
- [paymentsV1GetConnectorTaskV1](docs/sdks/sdkpaymentsv1/README.md#getconnectortaskv1)
- [paymentsV1GetConnectorTask](docs/sdks/sdkpaymentsv1/README.md#getconnectortask)
- [paymentsV1GetPayment](docs/sdks/sdkpaymentsv1/README.md#getpayment)
- [paymentsV1GetPoolBalances](docs/sdks/sdkpaymentsv1/README.md#getpoolbalances)
- [paymentsV1GetPool](docs/sdks/sdkpaymentsv1/README.md#getpool)
- [paymentsV1GetTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#gettransferinitiation)
- [paymentsV1InstallConnector](docs/sdks/sdkpaymentsv1/README.md#installconnector)
- [paymentsV1ListAllConnectors](docs/sdks/sdkpaymentsv1/README.md#listallconnectors)
- [paymentsV1ListBankAccounts](docs/sdks/sdkpaymentsv1/README.md#listbankaccounts)
- [paymentsV1ListConfigsAvailableConnectors](docs/sdks/sdkpaymentsv1/README.md#listconfigsavailableconnectors)
- [paymentsV1ListConnectorTasksV1](docs/sdks/sdkpaymentsv1/README.md#listconnectortasksv1)
- [paymentsV1ListConnectorTasks](docs/sdks/sdkpaymentsv1/README.md#listconnectortasks)
- [paymentsV1ListPayments](docs/sdks/sdkpaymentsv1/README.md#listpayments)
- [paymentsV1ListPools](docs/sdks/sdkpaymentsv1/README.md#listpools)
- [paymentsV1ListTransferInitiations](docs/sdks/sdkpaymentsv1/README.md#listtransferinitiations)
- [paymentsV1PaymentsgetAccount](docs/sdks/sdkpaymentsv1/README.md#paymentsgetaccount)
- [paymentsV1PaymentsgetServerInfo](docs/sdks/sdkpaymentsv1/README.md#paymentsgetserverinfo)
- [paymentsV1PaymentslistAccounts](docs/sdks/sdkpaymentsv1/README.md#paymentslistaccounts)
- [paymentsV1ReadConnectorConfigV1](docs/sdks/sdkpaymentsv1/README.md#readconnectorconfigv1)
- [paymentsV1ReadConnectorConfig](docs/sdks/sdkpaymentsv1/README.md#readconnectorconfig)
- [paymentsV1RemoveAccountFromPool](docs/sdks/sdkpaymentsv1/README.md#removeaccountfrompool)
- [paymentsV1ResetConnectorV1](docs/sdks/sdkpaymentsv1/README.md#resetconnectorv1)
- [paymentsV1ResetConnector](docs/sdks/sdkpaymentsv1/README.md#resetconnector)
- [paymentsV1RetryTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#retrytransferinitiation)
- [paymentsV1ReverseTransferInitiation](docs/sdks/sdkpaymentsv1/README.md#reversetransferinitiation)
- [paymentsV1UdpateTransferInitiationStatus](docs/sdks/sdkpaymentsv1/README.md#udpatetransferinitiationstatus)
- [paymentsV1UninstallConnectorV1](docs/sdks/sdkpaymentsv1/README.md#uninstallconnectorv1)
- [paymentsV1UninstallConnector](docs/sdks/sdkpaymentsv1/README.md#uninstallconnector)
- [paymentsV1UpdateBankAccountMetadata](docs/sdks/sdkpaymentsv1/README.md#updatebankaccountmetadata)
- [paymentsV1UpdateConnectorConfigV1](docs/sdks/sdkpaymentsv1/README.md#updateconnectorconfigv1)
- [paymentsV1UpdateMetadata](docs/sdks/sdkpaymentsv1/README.md#updatemetadata)
- [reconciliationV1CreatePolicy](docs/sdks/sdkreconciliationv1/README.md#createpolicy)
- [reconciliationV1DeletePolicy](docs/sdks/sdkreconciliationv1/README.md#deletepolicy)
- [reconciliationV1GetPolicy](docs/sdks/sdkreconciliationv1/README.md#getpolicy)
- [reconciliationV1GetReconciliation](docs/sdks/sdkreconciliationv1/README.md#getreconciliation)
- [reconciliationV1ListPolicies](docs/sdks/sdkreconciliationv1/README.md#listpolicies)
- [reconciliationV1ListReconciliations](docs/sdks/sdkreconciliationv1/README.md#listreconciliations)
- [reconciliationV1Reconcile](docs/sdks/sdkreconciliationv1/README.md#reconcile)
- [reconciliationV1ReconciliationgetServerInfo](docs/sdks/sdkreconciliationv1/README.md#reconciliationgetserverinfo)
- [searchV1Search](docs/sdks/sdksearchv1/README.md#search)
- [searchV1SearchgetServerInfo](docs/sdks/sdksearchv1/README.md#searchgetserverinfo)
- [walletsV1ConfirmHold](docs/sdks/sdkwalletsv1/README.md#confirmhold)
- [walletsV1CreateBalance](docs/sdks/sdkwalletsv1/README.md#createbalance)
- [walletsV1CreateWallet](docs/sdks/sdkwalletsv1/README.md#createwallet)
- [walletsV1CreditWallet](docs/sdks/sdkwalletsv1/README.md#creditwallet)
- [walletsV1DebitWallet](docs/sdks/sdkwalletsv1/README.md#debitwallet)
- [walletsV1GetBalance](docs/sdks/sdkwalletsv1/README.md#getbalance)
- [walletsV1GetHold](docs/sdks/sdkwalletsv1/README.md#gethold)
- [walletsV1GetHolds](docs/sdks/sdkwalletsv1/README.md#getholds)
- [walletsV1GetTransactions](docs/sdks/sdkwalletsv1/README.md#gettransactions)
- [walletsV1GetWalletSummary](docs/sdks/sdkwalletsv1/README.md#getwalletsummary)
- [walletsV1GetWallet](docs/sdks/sdkwalletsv1/README.md#getwallet)
- [walletsV1ListBalances](docs/sdks/sdkwalletsv1/README.md#listbalances)
- [walletsV1ListWallets](docs/sdks/sdkwalletsv1/README.md#listwallets)
- [walletsV1UpdateWallet](docs/sdks/sdkwalletsv1/README.md#updatewallet)
- [walletsV1VoidHold](docs/sdks/sdkwalletsv1/README.md#voidhold)
- [walletsV1WalletsgetServerInfo](docs/sdks/sdkwalletsv1/README.md#walletsgetserverinfo)
- [webhooksV1ActivateConfig](docs/sdks/sdkwebhooksv1/README.md#activateconfig)
- [webhooksV1ChangeConfigSecret](docs/sdks/sdkwebhooksv1/README.md#changeconfigsecret)
- [webhooksV1DeactivateConfig](docs/sdks/sdkwebhooksv1/README.md#deactivateconfig)
- [webhooksV1DeleteConfig](docs/sdks/sdkwebhooksv1/README.md#deleteconfig)
- [webhooksV1GetManyConfigs](docs/sdks/sdkwebhooksv1/README.md#getmanyconfigs)
- [webhooksV1InsertConfig](docs/sdks/sdkwebhooksv1/README.md#insertconfig)
- [webhooksV1TestConfig](docs/sdks/sdkwebhooksv1/README.md#testconfig)


</details>
<!-- End Standalone functions [standalone-funcs] -->

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

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

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
