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

### NPM

```bash
npm add @formance/formance-sdk
```

### Yarn

```bash
yarn add @formance/formance-sdk
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
import { Formance } from "@formance/formance-sdk";

const formance = new Formance({
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
        clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
});

async function run() {
    const result = await formance.getOIDCWellKnowns();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Formance SDK](docs/sdks/formance/README.md)

* [getOIDCWellKnowns](docs/sdks/formance/README.md#getoidcwellknowns) - Retrieve OpenID connect well-knowns.
* [getVersions](docs/sdks/formance/README.md#getversions) - Show stack version information

### [auth](docs/sdks/auth/README.md)

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

* [createTransactions](docs/sdks/ledger/README.md#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](docs/sdks/ledger/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [addMetadataToAccount](docs/sdks/ledger/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/sdks/ledger/README.md#countaccounts) - Count the accounts from a ledger
* [countTransactions](docs/sdks/ledger/README.md#counttransactions) - Count the transactions from a ledger
* [createTransaction](docs/sdks/ledger/README.md#createtransaction) - Create a new transaction to a ledger
* [getAccount](docs/sdks/ledger/README.md#getaccount) - Get account by its address
* [getBalances](docs/sdks/ledger/README.md#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](docs/sdks/ledger/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
* [getInfo](docs/sdks/ledger/README.md#getinfo) - Show server information
* [getLedgerInfo](docs/sdks/ledger/README.md#getledgerinfo) - Get information about a ledger
* [getMapping](docs/sdks/ledger/README.md#getmapping) - Get the mapping of a ledger
* [getTransaction](docs/sdks/ledger/README.md#gettransaction) - Get transaction from a ledger by its ID
* [listAccounts](docs/sdks/ledger/README.md#listaccounts) - List accounts from a ledger
* [listLogs](docs/sdks/ledger/README.md#listlogs) - List the logs from a ledger
* [listTransactions](docs/sdks/ledger/README.md#listtransactions) - List transactions from a ledger
* [readStats](docs/sdks/ledger/README.md#readstats) - Get statistics from a ledger
* [revertTransaction](docs/sdks/ledger/README.md#reverttransaction) - Revert a ledger transaction by its ID
* [~~runScript~~](docs/sdks/ledger/README.md#runscript) - Execute a Numscript :warning: **Deprecated**
* [updateMapping](docs/sdks/ledger/README.md#updatemapping) - Update the mapping of a ledger
* [v2AddMetadataOnTransaction](docs/sdks/ledger/README.md#v2addmetadataontransaction) - Set the metadata of a transaction by its ID
* [v2AddMetadataToAccount](docs/sdks/ledger/README.md#v2addmetadatatoaccount) - Add metadata to an account
* [v2CountAccounts](docs/sdks/ledger/README.md#v2countaccounts) - Count the accounts from a ledger
* [v2CountTransactions](docs/sdks/ledger/README.md#v2counttransactions) - Count the transactions from a ledger
* [v2CreateBulk](docs/sdks/ledger/README.md#v2createbulk) - Bulk request
* [v2CreateLedger](docs/sdks/ledger/README.md#v2createledger) - Create a ledger
* [v2CreateTransaction](docs/sdks/ledger/README.md#v2createtransaction) - Create a new transaction to a ledger
* [v2DeleteAccountMetadata](docs/sdks/ledger/README.md#v2deleteaccountmetadata) - Delete metadata by key
* [v2DeleteLedgerMetadata](docs/sdks/ledger/README.md#v2deleteledgermetadata) - Delete ledger metadata by key
* [v2DeleteTransactionMetadata](docs/sdks/ledger/README.md#v2deletetransactionmetadata) - Delete metadata by key
* [v2GetAccount](docs/sdks/ledger/README.md#v2getaccount) - Get account by its address
* [v2GetBalancesAggregated](docs/sdks/ledger/README.md#v2getbalancesaggregated) - Get the aggregated balances from selected accounts
* [v2GetInfo](docs/sdks/ledger/README.md#v2getinfo) - Show server information
* [v2GetLedger](docs/sdks/ledger/README.md#v2getledger) - Get a ledger
* [v2GetLedgerInfo](docs/sdks/ledger/README.md#v2getledgerinfo) - Get information about a ledger
* [v2GetTransaction](docs/sdks/ledger/README.md#v2gettransaction) - Get transaction from a ledger by its ID
* [v2GetVolumesWithBalances](docs/sdks/ledger/README.md#v2getvolumeswithbalances) - Get list of volumes with balances for (account/asset)
* [v2ListAccounts](docs/sdks/ledger/README.md#v2listaccounts) - List accounts from a ledger
* [v2ListLedgers](docs/sdks/ledger/README.md#v2listledgers) - List ledgers
* [v2ListLogs](docs/sdks/ledger/README.md#v2listlogs) - List the logs from a ledger
* [v2ListTransactions](docs/sdks/ledger/README.md#v2listtransactions) - List transactions from a ledger
* [v2ReadStats](docs/sdks/ledger/README.md#v2readstats) - Get statistics from a ledger
* [v2RevertTransaction](docs/sdks/ledger/README.md#v2reverttransaction) - Revert a ledger transaction by its ID
* [v2UpdateLedgerMetadata](docs/sdks/ledger/README.md#v2updateledgermetadata) - Update ledger metadata

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

### [search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search
* [searchgetServerInfo](docs/sdks/search/README.md#searchgetserverinfo) - Get server info

### [wallets](docs/sdks/wallets/README.md)

* [confirmHold](docs/sdks/wallets/README.md#confirmhold) - Confirm a hold
* [createBalance](docs/sdks/wallets/README.md#createbalance) - Create a balance
* [createWallet](docs/sdks/wallets/README.md#createwallet) - Create a new wallet
* [creditWallet](docs/sdks/wallets/README.md#creditwallet) - Credit a wallet
* [debitWallet](docs/sdks/wallets/README.md#debitwallet) - Debit a wallet
* [getBalance](docs/sdks/wallets/README.md#getbalance) - Get detailed balance
* [getHold](docs/sdks/wallets/README.md#gethold) - Get a hold
* [getHolds](docs/sdks/wallets/README.md#getholds) - Get all holds for a wallet
* [getTransactions](docs/sdks/wallets/README.md#gettransactions)
* [getWallet](docs/sdks/wallets/README.md#getwallet) - Get a wallet
* [getWalletSummary](docs/sdks/wallets/README.md#getwalletsummary) - Get wallet summary
* [listBalances](docs/sdks/wallets/README.md#listbalances) - List balances of a wallet
* [listWallets](docs/sdks/wallets/README.md#listwallets) - List all wallets
* [updateWallet](docs/sdks/wallets/README.md#updatewallet) - Update a wallet
* [voidHold](docs/sdks/wallets/README.md#voidhold) - Cancel a hold
* [walletsgetServerInfo](docs/sdks/wallets/README.md#walletsgetserverinfo) - Get server info

### [webhooks](docs/sdks/webhooks/README.md)

* [activateConfig](docs/sdks/webhooks/README.md#activateconfig) - Activate one config
* [changeConfigSecret](docs/sdks/webhooks/README.md#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](docs/sdks/webhooks/README.md#deactivateconfig) - Deactivate one config
* [deleteConfig](docs/sdks/webhooks/README.md#deleteconfig) - Delete one config
* [getManyConfigs](docs/sdks/webhooks/README.md#getmanyconfigs) - Get many configs
* [insertConfig](docs/sdks/webhooks/README.md#insertconfig) - Insert a new config
* [testConfig](docs/sdks/webhooks/README.md#testconfig) - Test one config
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
import { Formance } from "@formance/formance-sdk";
import * as errors from "@formance/formance-sdk/sdk/models/errors";

const formance = new Formance({
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
        clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
});

async function run() {
    let result;
    try {
        result = await formance.ledger.createTransactions({
            ledger: "ledger001",
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
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrorResponse: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
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
import { Formance } from "@formance/formance-sdk";

const formance = new Formance({
    serverIdx: 0,
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
        clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
});

async function run() {
    const result = await formance.getOIDCWellKnowns();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Formance } from "@formance/formance-sdk";

const formance = new Formance({
    serverURL: "http://localhost",
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
        clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
});

async function run() {
    const result = await formance.getOIDCWellKnowns();

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
import { Formance } from "@formance/formance-sdk";
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

const sdk = new Formance({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `clientID`     | oauth2         | OAuth2 token   |
| `clientSecret` | oauth2         | OAuth2 token   |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Formance } from "@formance/formance-sdk";

const formance = new Formance({
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
        clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
});

async function run() {
    const result = await formance.getOIDCWellKnowns();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

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
