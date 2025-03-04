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
* [getMetrics](docs/sdks/v2/README.md#getmetrics) - Read in memory metrics
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

#### [payments.v3](docs/sdks/v3/README.md)

* [addAccountToPool](docs/sdks/v3/README.md#addaccounttopool) - Add an account to a pool
* [approvePaymentInitiation](docs/sdks/v3/README.md#approvepaymentinitiation) - Approve a payment initiation
* [createAccount](docs/sdks/v3/README.md#createaccount) - Create a formance account object. This object will not be forwarded to the connector. It is only used for internal purposes.

* [createBankAccount](docs/sdks/v3/README.md#createbankaccount) - Create a formance bank account object. This object will not be forwarded to the connector until you called the forwardBankAccount method.

* [createPayment](docs/sdks/v3/README.md#createpayment) - Create a formance payment object. This object will not be forwarded to the connector. It is only used for internal purposes.

* [createPool](docs/sdks/v3/README.md#createpool) - Create a formance pool object
* [deletePaymentInitiation](docs/sdks/v3/README.md#deletepaymentinitiation) - Delete a payment initiation by ID
* [deletePool](docs/sdks/v3/README.md#deletepool) - Delete a pool by ID
* [forwardBankAccount](docs/sdks/v3/README.md#forwardbankaccount) - Forward a Bank Account to a PSP for creation
* [getAccount](docs/sdks/v3/README.md#getaccount) - Get an account by ID
* [getAccountBalances](docs/sdks/v3/README.md#getaccountbalances) - Get account balances
* [getBankAccount](docs/sdks/v3/README.md#getbankaccount) - Get a Bank Account by ID
* [getConnectorConfig](docs/sdks/v3/README.md#getconnectorconfig) - Get a connector configuration by ID
* [getConnectorSchedule](docs/sdks/v3/README.md#getconnectorschedule) - Get a connector schedule by ID
* [getPayment](docs/sdks/v3/README.md#getpayment) - Get a payment by ID
* [getPaymentInitiation](docs/sdks/v3/README.md#getpaymentinitiation) - Get a payment initiation by ID
* [getPool](docs/sdks/v3/README.md#getpool) - Get a pool by ID
* [getPoolBalances](docs/sdks/v3/README.md#getpoolbalances) - Get pool balances
* [getTask](docs/sdks/v3/README.md#gettask) - Get a task and its result by ID
* [initiatePayment](docs/sdks/v3/README.md#initiatepayment) - Initiate a payment
* [installConnector](docs/sdks/v3/README.md#installconnector) - Install a connector
* [listAccounts](docs/sdks/v3/README.md#listaccounts) - List all accounts
* [listBankAccounts](docs/sdks/v3/README.md#listbankaccounts) - List all bank accounts
* [listConnectorConfigs](docs/sdks/v3/README.md#listconnectorconfigs) - List all connector configurations
* [listConnectorScheduleInstances](docs/sdks/v3/README.md#listconnectorscheduleinstances) - List all connector schedule instances
* [listConnectorSchedules](docs/sdks/v3/README.md#listconnectorschedules) - List all connector schedules
* [listConnectors](docs/sdks/v3/README.md#listconnectors) - List all connectors
* [listPaymentInitiationAdjustments](docs/sdks/v3/README.md#listpaymentinitiationadjustments) - List all payment initiation adjustments
* [listPaymentInitiationRelatedPayments](docs/sdks/v3/README.md#listpaymentinitiationrelatedpayments) - List all payments related to a payment initiation
* [listPaymentInitiations](docs/sdks/v3/README.md#listpaymentinitiations) - List all payment initiations
* [listPayments](docs/sdks/v3/README.md#listpayments) - List all payments
* [listPools](docs/sdks/v3/README.md#listpools) - List all pools
* [rejectPaymentInitiation](docs/sdks/v3/README.md#rejectpaymentinitiation) - Reject a payment initiation
* [removeAccountFromPool](docs/sdks/v3/README.md#removeaccountfrompool) - Remove an account from a pool
* [resetConnector](docs/sdks/v3/README.md#resetconnector) - Reset a connector. Be aware that this will delete all data and stop all existing tasks like payment initiations and bank account creations.
* [retryPaymentInitiation](docs/sdks/v3/README.md#retrypaymentinitiation) - Retry a payment initiation
* [reversePaymentInitiation](docs/sdks/v3/README.md#reversepaymentinitiation) - Reverse a payment initiation
* [uninstallConnector](docs/sdks/v3/README.md#uninstallconnector) - Uninstall a connector
* [updateBankAccountMetadata](docs/sdks/v3/README.md#updatebankaccountmetadata) - Update a bank account's metadata
* [updatePaymentMetadata](docs/sdks/v3/README.md#updatepaymentmetadata) - Update a payment's metadata

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

### [~~search~~](docs/sdks/search/README.md)


#### [~~search.v1~~](docs/sdks/sdksearchv1/README.md)

* [~~search~~](docs/sdks/sdksearchv1/README.md#search) - search.v1 :warning: **Deprecated**
* [~~searchgetServerInfo~~](docs/sdks/sdksearchv1/README.md#searchgetserverinfo) - Get server info :warning: **Deprecated**

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
* [updateConfig](docs/sdks/sdkwebhooksv1/README.md#updateconfig) - Update one config

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `sdk/models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `addMetadataOnTransaction` method may throw the following errors:

| Error Type             | Status Code | Content Type     |
| ---------------------- | ----------- | ---------------- |
| errors.V2ErrorResponse | default     | application/json |
| errors.SDKError        | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { SDK } from "@formance/formance-sdk";
import {
  SDKValidationError,
  V2ErrorResponse,
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
    result = await sdk.ledger.v2.addMetadataOnTransaction({
      requestBody: {
        "admin": "true",
      },
      dryRun: true,
      id: BigInt("1234"),
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
      case (err instanceof V2ErrorResponse): {
        // Handle err.data$: V2ErrorResponseData
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

| #   | Server                                                | Variables                        | Description                                |
| --- | ----------------------------------------------------- | -------------------------------- | ------------------------------------------ |
| 0   | `http://localhost`                                    |                                  | local server                               |
| 1   | `https://{organization}.{environment}.formance.cloud` | `environment`<br/>`organization` | A per-organization and per-environment API |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable       | Parameter                               | Supported Values                                                           | Default           | Description                                                   |
| -------------- | --------------------------------------- | -------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------- |
| `environment`  | `environment: models.ServerEnvironment` | - `"eu.sandbox"`<br/>- `"sandbox"`<br/>- `"eu-west-1"`<br/>- `"us-east-1"` | `"eu.sandbox"`    | The environment name. Defaults to the production environment. |
| `organization` | `organization: string`                  | string                                                                     | `"orgID-stackID"` | The organization name. Defaults to a generic organization.    |

#### Example

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  serverIdx: 1,
  environment: "us-east-1",
  organization: "<value>",
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getVersions();

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
  const result = await sdk.getVersions();

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

- [`authV1CreateClient`](docs/sdks/v1/README.md#createclient) - Create client
- [`authV1CreateSecret`](docs/sdks/v1/README.md#createsecret) - Add a secret to a client
- [`authV1DeleteClient`](docs/sdks/v1/README.md#deleteclient) - Delete client
- [`authV1DeleteSecret`](docs/sdks/v1/README.md#deletesecret) - Delete a secret from a client
- [`authV1GetOIDCWellKnowns`](docs/sdks/v1/README.md#getoidcwellknowns) - Retrieve OpenID connect well-knowns.
- [`authV1GetServerInfo`](docs/sdks/v1/README.md#getserverinfo) - Get server info
- [`authV1ListClients`](docs/sdks/v1/README.md#listclients) - List clients
- [`authV1ListUsers`](docs/sdks/v1/README.md#listusers) - List users
- [`authV1ReadClient`](docs/sdks/v1/README.md#readclient) - Read client
- [`authV1ReadUser`](docs/sdks/v1/README.md#readuser) - Read user
- [`authV1UpdateClient`](docs/sdks/v1/README.md#updateclient) - Update client
- [`getVersions`](docs/sdks/sdk/README.md#getversions) - Show stack version information
- [`ledgerV1AddMetadataOnTransaction`](docs/sdks/sdkv1/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
- [`ledgerV1AddMetadataToAccount`](docs/sdks/sdkv1/README.md#addmetadatatoaccount) - Add metadata to an account
- [`ledgerV1CountAccounts`](docs/sdks/sdkv1/README.md#countaccounts) - Count the accounts from a ledger
- [`ledgerV1CountTransactions`](docs/sdks/sdkv1/README.md#counttransactions) - Count the transactions from a ledger
- [`ledgerV1CreateTransaction`](docs/sdks/sdkv1/README.md#createtransaction) - Create a new transaction to a ledger
- [`ledgerV1CreateTransactions`](docs/sdks/sdkv1/README.md#createtransactions) - Create a new batch of transactions to a ledger
- [`ledgerV1GetAccount`](docs/sdks/sdkv1/README.md#getaccount) - Get account by its address
- [`ledgerV1GetBalances`](docs/sdks/sdkv1/README.md#getbalances) - Get the balances from a ledger's account
- [`ledgerV1GetBalancesAggregated`](docs/sdks/sdkv1/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
- [`ledgerV1GetInfo`](docs/sdks/sdkv1/README.md#getinfo) - Show server information
- [`ledgerV1GetLedgerInfo`](docs/sdks/sdkv1/README.md#getledgerinfo) - Get information about a ledger
- [`ledgerV1GetMapping`](docs/sdks/sdkv1/README.md#getmapping) - Get the mapping of a ledger
- [`ledgerV1GetTransaction`](docs/sdks/sdkv1/README.md#gettransaction) - Get transaction from a ledger by its ID
- [`ledgerV1ListAccounts`](docs/sdks/sdkv1/README.md#listaccounts) - List accounts from a ledger
- [`ledgerV1ListLogs`](docs/sdks/sdkv1/README.md#listlogs) - List the logs from a ledger
- [`ledgerV1ListTransactions`](docs/sdks/sdkv1/README.md#listtransactions) - List transactions from a ledger
- [`ledgerV1ReadStats`](docs/sdks/sdkv1/README.md#readstats) - Get statistics from a ledger
- [`ledgerV1RevertTransaction`](docs/sdks/sdkv1/README.md#reverttransaction) - Revert a ledger transaction by its ID
- [`ledgerV1UpdateMapping`](docs/sdks/sdkv1/README.md#updatemapping) - Update the mapping of a ledger
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
- [`ledgerV2GetMetrics`](docs/sdks/v2/README.md#getmetrics) - Read in memory metrics
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
- [`orchestrationV1CancelEvent`](docs/sdks/sdkorchestrationv1/README.md#cancelevent) - Cancel a running workflow
- [`orchestrationV1CreateTrigger`](docs/sdks/sdkorchestrationv1/README.md#createtrigger) - Create trigger
- [`orchestrationV1CreateWorkflow`](docs/sdks/sdkorchestrationv1/README.md#createworkflow) - Create workflow
- [`orchestrationV1DeleteTrigger`](docs/sdks/sdkorchestrationv1/README.md#deletetrigger) - Delete trigger
- [`orchestrationV1DeleteWorkflow`](docs/sdks/sdkorchestrationv1/README.md#deleteworkflow) - Delete a flow by id
- [`orchestrationV1GetInstance`](docs/sdks/sdkorchestrationv1/README.md#getinstance) - Get a workflow instance by id
- [`orchestrationV1GetInstanceHistory`](docs/sdks/sdkorchestrationv1/README.md#getinstancehistory) - Get a workflow instance history by id
- [`orchestrationV1GetInstanceStageHistory`](docs/sdks/sdkorchestrationv1/README.md#getinstancestagehistory) - Get a workflow instance stage history
- [`orchestrationV1GetWorkflow`](docs/sdks/sdkorchestrationv1/README.md#getworkflow) - Get a flow by id
- [`orchestrationV1ListInstances`](docs/sdks/sdkorchestrationv1/README.md#listinstances) - List instances of a workflow
- [`orchestrationV1ListTriggers`](docs/sdks/sdkorchestrationv1/README.md#listtriggers) - List triggers
- [`orchestrationV1ListTriggersOccurrences`](docs/sdks/sdkorchestrationv1/README.md#listtriggersoccurrences) - List triggers occurrences
- [`orchestrationV1ListWorkflows`](docs/sdks/sdkorchestrationv1/README.md#listworkflows) - List registered workflows
- [`orchestrationV1OrchestrationgetServerInfo`](docs/sdks/sdkorchestrationv1/README.md#orchestrationgetserverinfo) - Get server info
- [`orchestrationV1ReadTrigger`](docs/sdks/sdkorchestrationv1/README.md#readtrigger) - Read trigger
- [`orchestrationV1RunWorkflow`](docs/sdks/sdkorchestrationv1/README.md#runworkflow) - Run workflow
- [`orchestrationV1SendEvent`](docs/sdks/sdkorchestrationv1/README.md#sendevent) - Send an event to a running workflow
- [`orchestrationV2CancelEvent`](docs/sdks/sdkv2/README.md#cancelevent) - Cancel a running workflow
- [`orchestrationV2CreateTrigger`](docs/sdks/sdkv2/README.md#createtrigger) - Create trigger
- [`orchestrationV2CreateWorkflow`](docs/sdks/sdkv2/README.md#createworkflow) - Create workflow
- [`orchestrationV2DeleteTrigger`](docs/sdks/sdkv2/README.md#deletetrigger) - Delete trigger
- [`orchestrationV2DeleteWorkflow`](docs/sdks/sdkv2/README.md#deleteworkflow) - Delete a flow by id
- [`orchestrationV2GetInstance`](docs/sdks/sdkv2/README.md#getinstance) - Get a workflow instance by id
- [`orchestrationV2GetInstanceHistory`](docs/sdks/sdkv2/README.md#getinstancehistory) - Get a workflow instance history by id
- [`orchestrationV2GetInstanceStageHistory`](docs/sdks/sdkv2/README.md#getinstancestagehistory) - Get a workflow instance stage history
- [`orchestrationV2GetServerInfo`](docs/sdks/sdkv2/README.md#getserverinfo) - Get server info
- [`orchestrationV2GetWorkflow`](docs/sdks/sdkv2/README.md#getworkflow) - Get a flow by id
- [`orchestrationV2ListInstances`](docs/sdks/sdkv2/README.md#listinstances) - List instances of a workflow
- [`orchestrationV2ListTriggers`](docs/sdks/sdkv2/README.md#listtriggers) - List triggers
- [`orchestrationV2ListTriggersOccurrences`](docs/sdks/sdkv2/README.md#listtriggersoccurrences) - List triggers occurrences
- [`orchestrationV2ListWorkflows`](docs/sdks/sdkv2/README.md#listworkflows) - List registered workflows
- [`orchestrationV2ReadTrigger`](docs/sdks/sdkv2/README.md#readtrigger) - Read trigger
- [`orchestrationV2RunWorkflow`](docs/sdks/sdkv2/README.md#runworkflow) - Run workflow
- [`orchestrationV2SendEvent`](docs/sdks/sdkv2/README.md#sendevent) - Send an event to a running workflow
- [`orchestrationV2TestTrigger`](docs/sdks/sdkv2/README.md#testtrigger) - Test trigger
- [`paymentsV1AddAccountToPool`](docs/sdks/sdkpaymentsv1/README.md#addaccounttopool) - Add an account to a pool
- [`paymentsV1ConnectorsTransfer`](docs/sdks/sdkpaymentsv1/README.md#connectorstransfer) - Transfer funds between Connector accounts
- [`paymentsV1CreateAccount`](docs/sdks/sdkpaymentsv1/README.md#createaccount) - Create an account
- [`paymentsV1CreateBankAccount`](docs/sdks/sdkpaymentsv1/README.md#createbankaccount) - Create a BankAccount in Payments and on the PSP
- [`paymentsV1CreatePayment`](docs/sdks/sdkpaymentsv1/README.md#createpayment) - Create a payment
- [`paymentsV1CreatePool`](docs/sdks/sdkpaymentsv1/README.md#createpool) - Create a Pool
- [`paymentsV1CreateTransferInitiation`](docs/sdks/sdkpaymentsv1/README.md#createtransferinitiation) - Create a TransferInitiation
- [`paymentsV1DeletePool`](docs/sdks/sdkpaymentsv1/README.md#deletepool) - Delete a Pool
- [`paymentsV1DeleteTransferInitiation`](docs/sdks/sdkpaymentsv1/README.md#deletetransferinitiation) - Delete a transfer initiation
- [`paymentsV1ForwardBankAccount`](docs/sdks/sdkpaymentsv1/README.md#forwardbankaccount) - Forward a bank account to a connector
- [`paymentsV1GetAccountBalances`](docs/sdks/sdkpaymentsv1/README.md#getaccountbalances) - Get account balances
- [`paymentsV1GetBankAccount`](docs/sdks/sdkpaymentsv1/README.md#getbankaccount) - Get a bank account created by user on Formance
- [`paymentsV1GetConnectorTaskV1`](docs/sdks/sdkpaymentsv1/README.md#getconnectortaskv1) - Read a specific task of the connector
- [`paymentsV1GetPayment`](docs/sdks/sdkpaymentsv1/README.md#getpayment) - Get a payment
- [`paymentsV1GetPool`](docs/sdks/sdkpaymentsv1/README.md#getpool) - Get a Pool
- [`paymentsV1GetPoolBalances`](docs/sdks/sdkpaymentsv1/README.md#getpoolbalances) - Get pool balances
- [`paymentsV1GetTransferInitiation`](docs/sdks/sdkpaymentsv1/README.md#gettransferinitiation) - Get a transfer initiation
- [`paymentsV1InstallConnector`](docs/sdks/sdkpaymentsv1/README.md#installconnector) - Install a connector
- [`paymentsV1ListAllConnectors`](docs/sdks/sdkpaymentsv1/README.md#listallconnectors) - List all installed connectors
- [`paymentsV1ListBankAccounts`](docs/sdks/sdkpaymentsv1/README.md#listbankaccounts) - List bank accounts created by user on Formance
- [`paymentsV1ListConfigsAvailableConnectors`](docs/sdks/sdkpaymentsv1/README.md#listconfigsavailableconnectors) - List the configs of each available connector
- [`paymentsV1ListConnectorTasksV1`](docs/sdks/sdkpaymentsv1/README.md#listconnectortasksv1) - List tasks from a connector
- [`paymentsV1ListPayments`](docs/sdks/sdkpaymentsv1/README.md#listpayments) - List payments
- [`paymentsV1ListPools`](docs/sdks/sdkpaymentsv1/README.md#listpools) - List Pools
- [`paymentsV1ListTransferInitiations`](docs/sdks/sdkpaymentsv1/README.md#listtransferinitiations) - List Transfer Initiations
- [`paymentsV1PaymentsgetAccount`](docs/sdks/sdkpaymentsv1/README.md#paymentsgetaccount) - Get an account
- [`paymentsV1PaymentsgetServerInfo`](docs/sdks/sdkpaymentsv1/README.md#paymentsgetserverinfo) - Get server info
- [`paymentsV1PaymentslistAccounts`](docs/sdks/sdkpaymentsv1/README.md#paymentslistaccounts) - List accounts
- [`paymentsV1ReadConnectorConfigV1`](docs/sdks/sdkpaymentsv1/README.md#readconnectorconfigv1) - Read the config of a connector
- [`paymentsV1RemoveAccountFromPool`](docs/sdks/sdkpaymentsv1/README.md#removeaccountfrompool) - Remove an account from a pool
- [`paymentsV1ResetConnectorV1`](docs/sdks/sdkpaymentsv1/README.md#resetconnectorv1) - Reset a connector
- [`paymentsV1RetryTransferInitiation`](docs/sdks/sdkpaymentsv1/README.md#retrytransferinitiation) - Retry a failed transfer initiation
- [`paymentsV1ReverseTransferInitiation`](docs/sdks/sdkpaymentsv1/README.md#reversetransferinitiation) - Reverse a transfer initiation
- [`paymentsV1UdpateTransferInitiationStatus`](docs/sdks/sdkpaymentsv1/README.md#udpatetransferinitiationstatus) - Update the status of a transfer initiation
- [`paymentsV1UninstallConnectorV1`](docs/sdks/sdkpaymentsv1/README.md#uninstallconnectorv1) - Uninstall a connector
- [`paymentsV1UpdateBankAccountMetadata`](docs/sdks/sdkpaymentsv1/README.md#updatebankaccountmetadata) - Update metadata of a bank account
- [`paymentsV1UpdateConnectorConfigV1`](docs/sdks/sdkpaymentsv1/README.md#updateconnectorconfigv1) - Update the config of a connector
- [`paymentsV1UpdateMetadata`](docs/sdks/sdkpaymentsv1/README.md#updatemetadata) - Update metadata
- [`paymentsV3AddAccountToPool`](docs/sdks/v3/README.md#addaccounttopool) - Add an account to a pool
- [`paymentsV3ApprovePaymentInitiation`](docs/sdks/v3/README.md#approvepaymentinitiation) - Approve a payment initiation
- [`paymentsV3CreateAccount`](docs/sdks/v3/README.md#createaccount) - Create a formance account object. This object will not be forwarded to the connector. It is only used for internal purposes.

- [`paymentsV3CreateBankAccount`](docs/sdks/v3/README.md#createbankaccount) - Create a formance bank account object. This object will not be forwarded to the connector until you called the forwardBankAccount method.

- [`paymentsV3CreatePayment`](docs/sdks/v3/README.md#createpayment) - Create a formance payment object. This object will not be forwarded to the connector. It is only used for internal purposes.

- [`paymentsV3CreatePool`](docs/sdks/v3/README.md#createpool) - Create a formance pool object
- [`paymentsV3DeletePaymentInitiation`](docs/sdks/v3/README.md#deletepaymentinitiation) - Delete a payment initiation by ID
- [`paymentsV3DeletePool`](docs/sdks/v3/README.md#deletepool) - Delete a pool by ID
- [`paymentsV3ForwardBankAccount`](docs/sdks/v3/README.md#forwardbankaccount) - Forward a Bank Account to a PSP for creation
- [`paymentsV3GetAccount`](docs/sdks/v3/README.md#getaccount) - Get an account by ID
- [`paymentsV3GetAccountBalances`](docs/sdks/v3/README.md#getaccountbalances) - Get account balances
- [`paymentsV3GetBankAccount`](docs/sdks/v3/README.md#getbankaccount) - Get a Bank Account by ID
- [`paymentsV3GetConnectorConfig`](docs/sdks/v3/README.md#getconnectorconfig) - Get a connector configuration by ID
- [`paymentsV3GetConnectorSchedule`](docs/sdks/v3/README.md#getconnectorschedule) - Get a connector schedule by ID
- [`paymentsV3GetPayment`](docs/sdks/v3/README.md#getpayment) - Get a payment by ID
- [`paymentsV3GetPaymentInitiation`](docs/sdks/v3/README.md#getpaymentinitiation) - Get a payment initiation by ID
- [`paymentsV3GetPool`](docs/sdks/v3/README.md#getpool) - Get a pool by ID
- [`paymentsV3GetPoolBalances`](docs/sdks/v3/README.md#getpoolbalances) - Get pool balances
- [`paymentsV3GetTask`](docs/sdks/v3/README.md#gettask) - Get a task and its result by ID
- [`paymentsV3InitiatePayment`](docs/sdks/v3/README.md#initiatepayment) - Initiate a payment
- [`paymentsV3InstallConnector`](docs/sdks/v3/README.md#installconnector) - Install a connector
- [`paymentsV3ListAccounts`](docs/sdks/v3/README.md#listaccounts) - List all accounts
- [`paymentsV3ListBankAccounts`](docs/sdks/v3/README.md#listbankaccounts) - List all bank accounts
- [`paymentsV3ListConnectorConfigs`](docs/sdks/v3/README.md#listconnectorconfigs) - List all connector configurations
- [`paymentsV3ListConnectors`](docs/sdks/v3/README.md#listconnectors) - List all connectors
- [`paymentsV3ListConnectorScheduleInstances`](docs/sdks/v3/README.md#listconnectorscheduleinstances) - List all connector schedule instances
- [`paymentsV3ListConnectorSchedules`](docs/sdks/v3/README.md#listconnectorschedules) - List all connector schedules
- [`paymentsV3ListPaymentInitiationAdjustments`](docs/sdks/v3/README.md#listpaymentinitiationadjustments) - List all payment initiation adjustments
- [`paymentsV3ListPaymentInitiationRelatedPayments`](docs/sdks/v3/README.md#listpaymentinitiationrelatedpayments) - List all payments related to a payment initiation
- [`paymentsV3ListPaymentInitiations`](docs/sdks/v3/README.md#listpaymentinitiations) - List all payment initiations
- [`paymentsV3ListPayments`](docs/sdks/v3/README.md#listpayments) - List all payments
- [`paymentsV3ListPools`](docs/sdks/v3/README.md#listpools) - List all pools
- [`paymentsV3RejectPaymentInitiation`](docs/sdks/v3/README.md#rejectpaymentinitiation) - Reject a payment initiation
- [`paymentsV3RemoveAccountFromPool`](docs/sdks/v3/README.md#removeaccountfrompool) - Remove an account from a pool
- [`paymentsV3ResetConnector`](docs/sdks/v3/README.md#resetconnector) - Reset a connector. Be aware that this will delete all data and stop all existing tasks like payment initiations and bank account creations.
- [`paymentsV3RetryPaymentInitiation`](docs/sdks/v3/README.md#retrypaymentinitiation) - Retry a payment initiation
- [`paymentsV3ReversePaymentInitiation`](docs/sdks/v3/README.md#reversepaymentinitiation) - Reverse a payment initiation
- [`paymentsV3UninstallConnector`](docs/sdks/v3/README.md#uninstallconnector) - Uninstall a connector
- [`paymentsV3UpdateBankAccountMetadata`](docs/sdks/v3/README.md#updatebankaccountmetadata) - Update a bank account's metadata
- [`paymentsV3UpdatePaymentMetadata`](docs/sdks/v3/README.md#updatepaymentmetadata) - Update a payment's metadata
- [`reconciliationV1CreatePolicy`](docs/sdks/sdkreconciliationv1/README.md#createpolicy) - Create a policy
- [`reconciliationV1DeletePolicy`](docs/sdks/sdkreconciliationv1/README.md#deletepolicy) - Delete a policy
- [`reconciliationV1GetPolicy`](docs/sdks/sdkreconciliationv1/README.md#getpolicy) - Get a policy
- [`reconciliationV1GetReconciliation`](docs/sdks/sdkreconciliationv1/README.md#getreconciliation) - Get a reconciliation
- [`reconciliationV1ListPolicies`](docs/sdks/sdkreconciliationv1/README.md#listpolicies) - List policies
- [`reconciliationV1ListReconciliations`](docs/sdks/sdkreconciliationv1/README.md#listreconciliations) - List reconciliations
- [`reconciliationV1Reconcile`](docs/sdks/sdkreconciliationv1/README.md#reconcile) - Reconcile using a policy
- [`reconciliationV1ReconciliationgetServerInfo`](docs/sdks/sdkreconciliationv1/README.md#reconciliationgetserverinfo) - Get server info
- [`walletsV1ConfirmHold`](docs/sdks/sdkwalletsv1/README.md#confirmhold) - Confirm a hold
- [`walletsV1CreateBalance`](docs/sdks/sdkwalletsv1/README.md#createbalance) - Create a balance
- [`walletsV1CreateWallet`](docs/sdks/sdkwalletsv1/README.md#createwallet) - Create a new wallet
- [`walletsV1CreditWallet`](docs/sdks/sdkwalletsv1/README.md#creditwallet) - Credit a wallet
- [`walletsV1DebitWallet`](docs/sdks/sdkwalletsv1/README.md#debitwallet) - Debit a wallet
- [`walletsV1GetBalance`](docs/sdks/sdkwalletsv1/README.md#getbalance) - Get detailed balance
- [`walletsV1GetHold`](docs/sdks/sdkwalletsv1/README.md#gethold) - Get a hold
- [`walletsV1GetHolds`](docs/sdks/sdkwalletsv1/README.md#getholds) - Get all holds for a wallet
- [`walletsV1GetTransactions`](docs/sdks/sdkwalletsv1/README.md#gettransactions)
- [`walletsV1GetWallet`](docs/sdks/sdkwalletsv1/README.md#getwallet) - Get a wallet
- [`walletsV1GetWalletSummary`](docs/sdks/sdkwalletsv1/README.md#getwalletsummary) - Get wallet summary
- [`walletsV1ListBalances`](docs/sdks/sdkwalletsv1/README.md#listbalances) - List balances of a wallet
- [`walletsV1ListWallets`](docs/sdks/sdkwalletsv1/README.md#listwallets) - List all wallets
- [`walletsV1UpdateWallet`](docs/sdks/sdkwalletsv1/README.md#updatewallet) - Update a wallet
- [`walletsV1VoidHold`](docs/sdks/sdkwalletsv1/README.md#voidhold) - Cancel a hold
- [`walletsV1WalletsgetServerInfo`](docs/sdks/sdkwalletsv1/README.md#walletsgetserverinfo) - Get server info
- [`webhooksV1ActivateConfig`](docs/sdks/sdkwebhooksv1/README.md#activateconfig) - Activate one config
- [`webhooksV1ChangeConfigSecret`](docs/sdks/sdkwebhooksv1/README.md#changeconfigsecret) - Change the signing secret of a config
- [`webhooksV1DeactivateConfig`](docs/sdks/sdkwebhooksv1/README.md#deactivateconfig) - Deactivate one config
- [`webhooksV1DeleteConfig`](docs/sdks/sdkwebhooksv1/README.md#deleteconfig) - Delete one config
- [`webhooksV1GetManyConfigs`](docs/sdks/sdkwebhooksv1/README.md#getmanyconfigs) - Get many configs
- [`webhooksV1InsertConfig`](docs/sdks/sdkwebhooksv1/README.md#insertconfig) - Insert a new config
- [`webhooksV1TestConfig`](docs/sdks/sdkwebhooksv1/README.md#testconfig) - Test one config
- [`webhooksV1UpdateConfig`](docs/sdks/sdkwebhooksv1/README.md#updateconfig) - Update one config
- ~~[`ledgerV1RunScript`](docs/sdks/sdkv1/README.md#runscript)~~ - Execute a Numscript :warning: **Deprecated**
- ~~[`paymentsV1GetConnectorTask`](docs/sdks/sdkpaymentsv1/README.md#getconnectortask)~~ - Read a specific task of the connector :warning: **Deprecated**
- ~~[`paymentsV1ListConnectorTasks`](docs/sdks/sdkpaymentsv1/README.md#listconnectortasks)~~ - List tasks from a connector :warning: **Deprecated**
- ~~[`paymentsV1ReadConnectorConfig`](docs/sdks/sdkpaymentsv1/README.md#readconnectorconfig)~~ - Read the config of a connector :warning: **Deprecated**
- ~~[`paymentsV1ResetConnector`](docs/sdks/sdkpaymentsv1/README.md#resetconnector)~~ - Reset a connector :warning: **Deprecated**
- ~~[`paymentsV1UninstallConnector`](docs/sdks/sdkpaymentsv1/README.md#uninstallconnector)~~ - Uninstall a connector :warning: **Deprecated**
- ~~[`searchV1Search`](docs/sdks/sdksearchv1/README.md#search)~~ - search.v1 :warning: **Deprecated**
- ~~[`searchV1SearchgetServerInfo`](docs/sdks/sdksearchv1/README.md#searchgetserverinfo)~~ - Get server info :warning: **Deprecated**

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
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
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
