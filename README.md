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
  * [File uploads](#file-uploads)
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


#### [auth.v1](docs/sdks/authv1/README.md)

* [createClient](docs/sdks/authv1/README.md#createclient) - Create client
* [createSecret](docs/sdks/authv1/README.md#createsecret) - Add a secret to a client
* [deleteClient](docs/sdks/authv1/README.md#deleteclient) - Delete client
* [deleteSecret](docs/sdks/authv1/README.md#deletesecret) - Delete a secret from a client
* [getOIDCWellKnowns](docs/sdks/authv1/README.md#getoidcwellknowns) - Retrieve OpenID connect well-knowns.
* [getServerInfo](docs/sdks/authv1/README.md#getserverinfo) - Get server info
* [listClients](docs/sdks/authv1/README.md#listclients) - List clients
* [listUsers](docs/sdks/authv1/README.md#listusers) - List users
* [readClient](docs/sdks/authv1/README.md#readclient) - Read client
* [readUser](docs/sdks/authv1/README.md#readuser) - Read user
* [updateClient](docs/sdks/authv1/README.md#updateclient) - Update client

### [ledger](docs/sdks/ledger/README.md)


#### [ledger.v1](docs/sdks/ledgerv1/README.md)

* [createTransactions](docs/sdks/ledgerv1/README.md#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](docs/sdks/ledgerv1/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [addMetadataToAccount](docs/sdks/ledgerv1/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/sdks/ledgerv1/README.md#countaccounts) - Count the accounts from a ledger
* [countTransactions](docs/sdks/ledgerv1/README.md#counttransactions) - Count the transactions from a ledger
* [createTransaction](docs/sdks/ledgerv1/README.md#createtransaction) - Create a new transaction to a ledger
* [getAccount](docs/sdks/ledgerv1/README.md#getaccount) - Get account by its address
* [getBalances](docs/sdks/ledgerv1/README.md#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](docs/sdks/ledgerv1/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
* [getInfo](docs/sdks/ledgerv1/README.md#getinfo) - Show server information
* [getLedgerInfo](docs/sdks/ledgerv1/README.md#getledgerinfo) - Get information about a ledger
* [getMapping](docs/sdks/ledgerv1/README.md#getmapping) - Get the mapping of a ledger
* [getTransaction](docs/sdks/ledgerv1/README.md#gettransaction) - Get transaction from a ledger by its ID
* [listAccounts](docs/sdks/ledgerv1/README.md#listaccounts) - List accounts from a ledger
* [listLogs](docs/sdks/ledgerv1/README.md#listlogs) - List the logs from a ledger
* [listTransactions](docs/sdks/ledgerv1/README.md#listtransactions) - List transactions from a ledger
* [readStats](docs/sdks/ledgerv1/README.md#readstats) - Get statistics from a ledger
* [revertTransaction](docs/sdks/ledgerv1/README.md#reverttransaction) - Revert a ledger transaction by its ID
* [~~runScript~~](docs/sdks/ledgerv1/README.md#runscript) - Execute a Numscript :warning: **Deprecated**
* [updateMapping](docs/sdks/ledgerv1/README.md#updatemapping) - Update the mapping of a ledger

#### [ledger.v2](docs/sdks/ledgerv2/README.md)

* [addMetadataOnTransaction](docs/sdks/ledgerv2/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [addMetadataToAccount](docs/sdks/ledgerv2/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/sdks/ledgerv2/README.md#countaccounts) - Count the accounts from a ledger
* [countTransactions](docs/sdks/ledgerv2/README.md#counttransactions) - Count the transactions from a ledger
* [createBulk](docs/sdks/ledgerv2/README.md#createbulk) - Bulk request
* [createLedger](docs/sdks/ledgerv2/README.md#createledger) - Create a ledger
* [createTransaction](docs/sdks/ledgerv2/README.md#createtransaction) - Create a new transaction to a ledger
* [deleteAccountMetadata](docs/sdks/ledgerv2/README.md#deleteaccountmetadata) - Delete metadata by key
* [deleteLedgerMetadata](docs/sdks/ledgerv2/README.md#deleteledgermetadata) - Delete ledger metadata by key
* [deleteTransactionMetadata](docs/sdks/ledgerv2/README.md#deletetransactionmetadata) - Delete metadata by key
* [exportLogs](docs/sdks/ledgerv2/README.md#exportlogs) - Export logs
* [getAccount](docs/sdks/ledgerv2/README.md#getaccount) - Get account by its address
* [getBalancesAggregated](docs/sdks/ledgerv2/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
* [getInfo](docs/sdks/ledgerv2/README.md#getinfo) - Show server information
* [getLedger](docs/sdks/ledgerv2/README.md#getledger) - Get a ledger
* [getLedgerInfo](docs/sdks/ledgerv2/README.md#getledgerinfo) - Get information about a ledger
* [getMetrics](docs/sdks/ledgerv2/README.md#getmetrics) - Read in memory metrics
* [getTransaction](docs/sdks/ledgerv2/README.md#gettransaction) - Get transaction from a ledger by its ID
* [getVolumesWithBalances](docs/sdks/ledgerv2/README.md#getvolumeswithbalances) - Get list of volumes with balances for (account/asset)
* [importLogs](docs/sdks/ledgerv2/README.md#importlogs)
* [listAccounts](docs/sdks/ledgerv2/README.md#listaccounts) - List accounts from a ledger
* [listLedgers](docs/sdks/ledgerv2/README.md#listledgers) - List ledgers
* [listLogs](docs/sdks/ledgerv2/README.md#listlogs) - List the logs from a ledger
* [listTransactions](docs/sdks/ledgerv2/README.md#listtransactions) - List transactions from a ledger
* [readStats](docs/sdks/ledgerv2/README.md#readstats) - Get statistics from a ledger
* [revertTransaction](docs/sdks/ledgerv2/README.md#reverttransaction) - Revert a ledger transaction by its ID
* [updateLedgerMetadata](docs/sdks/ledgerv2/README.md#updateledgermetadata) - Update ledger metadata

### [orchestration](docs/sdks/orchestration/README.md)


#### [orchestration.v1](docs/sdks/orchestrationv1/README.md)

* [cancelEvent](docs/sdks/orchestrationv1/README.md#cancelevent) - Cancel a running workflow
* [createTrigger](docs/sdks/orchestrationv1/README.md#createtrigger) - Create trigger
* [createWorkflow](docs/sdks/orchestrationv1/README.md#createworkflow) - Create workflow
* [deleteTrigger](docs/sdks/orchestrationv1/README.md#deletetrigger) - Delete trigger
* [deleteWorkflow](docs/sdks/orchestrationv1/README.md#deleteworkflow) - Delete a flow by id
* [getInstance](docs/sdks/orchestrationv1/README.md#getinstance) - Get a workflow instance by id
* [getInstanceHistory](docs/sdks/orchestrationv1/README.md#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](docs/sdks/orchestrationv1/README.md#getinstancestagehistory) - Get a workflow instance stage history
* [getWorkflow](docs/sdks/orchestrationv1/README.md#getworkflow) - Get a flow by id
* [listInstances](docs/sdks/orchestrationv1/README.md#listinstances) - List instances of a workflow
* [listTriggers](docs/sdks/orchestrationv1/README.md#listtriggers) - List triggers
* [listTriggersOccurrences](docs/sdks/orchestrationv1/README.md#listtriggersoccurrences) - List triggers occurrences
* [listWorkflows](docs/sdks/orchestrationv1/README.md#listworkflows) - List registered workflows
* [orchestrationgetServerInfo](docs/sdks/orchestrationv1/README.md#orchestrationgetserverinfo) - Get server info
* [readTrigger](docs/sdks/orchestrationv1/README.md#readtrigger) - Read trigger
* [runWorkflow](docs/sdks/orchestrationv1/README.md#runworkflow) - Run workflow
* [sendEvent](docs/sdks/orchestrationv1/README.md#sendevent) - Send an event to a running workflow

#### [orchestration.v2](docs/sdks/orchestrationv2/README.md)

* [cancelEvent](docs/sdks/orchestrationv2/README.md#cancelevent) - Cancel a running workflow
* [createTrigger](docs/sdks/orchestrationv2/README.md#createtrigger) - Create trigger
* [createWorkflow](docs/sdks/orchestrationv2/README.md#createworkflow) - Create workflow
* [deleteTrigger](docs/sdks/orchestrationv2/README.md#deletetrigger) - Delete trigger
* [deleteWorkflow](docs/sdks/orchestrationv2/README.md#deleteworkflow) - Delete a flow by id
* [getInstance](docs/sdks/orchestrationv2/README.md#getinstance) - Get a workflow instance by id
* [getInstanceHistory](docs/sdks/orchestrationv2/README.md#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](docs/sdks/orchestrationv2/README.md#getinstancestagehistory) - Get a workflow instance stage history
* [getServerInfo](docs/sdks/orchestrationv2/README.md#getserverinfo) - Get server info
* [getWorkflow](docs/sdks/orchestrationv2/README.md#getworkflow) - Get a flow by id
* [listInstances](docs/sdks/orchestrationv2/README.md#listinstances) - List instances of a workflow
* [listTriggers](docs/sdks/orchestrationv2/README.md#listtriggers) - List triggers
* [listTriggersOccurrences](docs/sdks/orchestrationv2/README.md#listtriggersoccurrences) - List triggers occurrences
* [listWorkflows](docs/sdks/orchestrationv2/README.md#listworkflows) - List registered workflows
* [readTrigger](docs/sdks/orchestrationv2/README.md#readtrigger) - Read trigger
* [runWorkflow](docs/sdks/orchestrationv2/README.md#runworkflow) - Run workflow
* [sendEvent](docs/sdks/orchestrationv2/README.md#sendevent) - Send an event to a running workflow
* [testTrigger](docs/sdks/orchestrationv2/README.md#testtrigger) - Test trigger

### [payments](docs/sdks/payments/README.md)


#### [payments.v1](docs/sdks/paymentsv1/README.md)

* [addAccountToPool](docs/sdks/paymentsv1/README.md#addaccounttopool) - Add an account to a pool
* [connectorsTransfer](docs/sdks/paymentsv1/README.md#connectorstransfer) - Transfer funds between Connector accounts
* [createAccount](docs/sdks/paymentsv1/README.md#createaccount) - Create an account
* [createBankAccount](docs/sdks/paymentsv1/README.md#createbankaccount) - Create a BankAccount in Payments and on the PSP
* [createPayment](docs/sdks/paymentsv1/README.md#createpayment) - Create a payment
* [createPool](docs/sdks/paymentsv1/README.md#createpool) - Create a Pool
* [createTransferInitiation](docs/sdks/paymentsv1/README.md#createtransferinitiation) - Create a TransferInitiation
* [deletePool](docs/sdks/paymentsv1/README.md#deletepool) - Delete a Pool
* [deleteTransferInitiation](docs/sdks/paymentsv1/README.md#deletetransferinitiation) - Delete a transfer initiation
* [forwardBankAccount](docs/sdks/paymentsv1/README.md#forwardbankaccount) - Forward a bank account to a connector
* [getAccountBalances](docs/sdks/paymentsv1/README.md#getaccountbalances) - Get account balances
* [getBankAccount](docs/sdks/paymentsv1/README.md#getbankaccount) - Get a bank account created by user on Formance
* [~~getConnectorTask~~](docs/sdks/paymentsv1/README.md#getconnectortask) - Read a specific task of the connector :warning: **Deprecated**
* [getConnectorTaskV1](docs/sdks/paymentsv1/README.md#getconnectortaskv1) - Read a specific task of the connector
* [getPayment](docs/sdks/paymentsv1/README.md#getpayment) - Get a payment
* [getPool](docs/sdks/paymentsv1/README.md#getpool) - Get a Pool
* [getPoolBalances](docs/sdks/paymentsv1/README.md#getpoolbalances) - Get historical pool balances at a particular point in time
* [getPoolBalancesLatest](docs/sdks/paymentsv1/README.md#getpoolbalanceslatest) - Get latest pool balances
* [getTransferInitiation](docs/sdks/paymentsv1/README.md#gettransferinitiation) - Get a transfer initiation
* [installConnector](docs/sdks/paymentsv1/README.md#installconnector) - Install a connector
* [listAllConnectors](docs/sdks/paymentsv1/README.md#listallconnectors) - List all installed connectors
* [listBankAccounts](docs/sdks/paymentsv1/README.md#listbankaccounts) - List bank accounts created by user on Formance
* [listConfigsAvailableConnectors](docs/sdks/paymentsv1/README.md#listconfigsavailableconnectors) - List the configs of each available connector
* [~~listConnectorTasks~~](docs/sdks/paymentsv1/README.md#listconnectortasks) - List tasks from a connector :warning: **Deprecated**
* [listConnectorTasksV1](docs/sdks/paymentsv1/README.md#listconnectortasksv1) - List tasks from a connector
* [listPayments](docs/sdks/paymentsv1/README.md#listpayments) - List payments
* [listPools](docs/sdks/paymentsv1/README.md#listpools) - List Pools
* [listTransferInitiations](docs/sdks/paymentsv1/README.md#listtransferinitiations) - List Transfer Initiations
* [paymentsgetAccount](docs/sdks/paymentsv1/README.md#paymentsgetaccount) - Get an account
* [paymentsgetServerInfo](docs/sdks/paymentsv1/README.md#paymentsgetserverinfo) - Get server info
* [paymentslistAccounts](docs/sdks/paymentsv1/README.md#paymentslistaccounts) - List accounts
* [~~readConnectorConfig~~](docs/sdks/paymentsv1/README.md#readconnectorconfig) - Read the config of a connector :warning: **Deprecated**
* [readConnectorConfigV1](docs/sdks/paymentsv1/README.md#readconnectorconfigv1) - Read the config of a connector
* [removeAccountFromPool](docs/sdks/paymentsv1/README.md#removeaccountfrompool) - Remove an account from a pool
* [~~resetConnector~~](docs/sdks/paymentsv1/README.md#resetconnector) - Reset a connector :warning: **Deprecated**
* [resetConnectorV1](docs/sdks/paymentsv1/README.md#resetconnectorv1) - Reset a connector
* [retryTransferInitiation](docs/sdks/paymentsv1/README.md#retrytransferinitiation) - Retry a failed transfer initiation
* [reverseTransferInitiation](docs/sdks/paymentsv1/README.md#reversetransferinitiation) - Reverse a transfer initiation
* [~~uninstallConnector~~](docs/sdks/paymentsv1/README.md#uninstallconnector) - Uninstall a connector :warning: **Deprecated**
* [uninstallConnectorV1](docs/sdks/paymentsv1/README.md#uninstallconnectorv1) - Uninstall a connector
* [updateBankAccountMetadata](docs/sdks/paymentsv1/README.md#updatebankaccountmetadata) - Update metadata of a bank account
* [updateConnectorConfigV1](docs/sdks/paymentsv1/README.md#updateconnectorconfigv1) - Update the config of a connector
* [updateMetadata](docs/sdks/paymentsv1/README.md#updatemetadata) - Update metadata
* [updateTransferInitiationStatus](docs/sdks/paymentsv1/README.md#updatetransferinitiationstatus) - Update the status of a transfer initiation

#### [payments.v3](docs/sdks/v3/README.md)

* [addAccountToPool](docs/sdks/v3/README.md#addaccounttopool) - Add an account to a pool
* [addBankAccountToPaymentServiceUser](docs/sdks/v3/README.md#addbankaccounttopaymentserviceuser) - Add a bank account to a payment service user
* [approvePaymentInitiation](docs/sdks/v3/README.md#approvepaymentinitiation) - Approve a payment initiation
* [createAccount](docs/sdks/v3/README.md#createaccount) - Create a formance account object. This object will not be forwarded to the connector. It is only used for internal purposes.

* [createBankAccount](docs/sdks/v3/README.md#createbankaccount) - Create a formance bank account object. This object will not be forwarded to the connector until you called the forwardBankAccount method.

* [createPayment](docs/sdks/v3/README.md#createpayment) - Create a formance payment object. This object will not be forwarded to the connector. It is only used for internal purposes.

* [createPaymentServiceUser](docs/sdks/v3/README.md#createpaymentserviceuser) - Create a formance payment service user object
* [createPool](docs/sdks/v3/README.md#createpool) - Create a formance pool object
* [deletePaymentInitiation](docs/sdks/v3/README.md#deletepaymentinitiation) - Delete a payment initiation by ID
* [deletePool](docs/sdks/v3/README.md#deletepool) - Delete a pool by ID
* [forwardBankAccount](docs/sdks/v3/README.md#forwardbankaccount) - Forward a Bank Account to a PSP for creation
* [forwardPaymentServiceUserBankAccount](docs/sdks/v3/README.md#forwardpaymentserviceuserbankaccount) - Forward a payment service user's bank account to a connector
* [getAccount](docs/sdks/v3/README.md#getaccount) - Get an account by ID
* [getAccountBalances](docs/sdks/v3/README.md#getaccountbalances) - Get account balances
* [getBankAccount](docs/sdks/v3/README.md#getbankaccount) - Get a Bank Account by ID
* [getConnectorConfig](docs/sdks/v3/README.md#getconnectorconfig) - Get a connector configuration by ID
* [getConnectorSchedule](docs/sdks/v3/README.md#getconnectorschedule) - Get a connector schedule by ID
* [getPayment](docs/sdks/v3/README.md#getpayment) - Get a payment by ID
* [getPaymentInitiation](docs/sdks/v3/README.md#getpaymentinitiation) - Get a payment initiation by ID
* [getPaymentServiceUser](docs/sdks/v3/README.md#getpaymentserviceuser) - Get a payment service user by ID
* [getPool](docs/sdks/v3/README.md#getpool) - Get a pool by ID
* [getPoolBalances](docs/sdks/v3/README.md#getpoolbalances) - Get historical pool balances from a particular point in time
* [getPoolBalancesLatest](docs/sdks/v3/README.md#getpoolbalanceslatest) - Get latest pool balances
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
* [listPaymentServiceUsers](docs/sdks/v3/README.md#listpaymentserviceusers) - List all payment service users
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
* [v3UpdateConnectorConfig](docs/sdks/v3/README.md#v3updateconnectorconfig) - Update the config of a connector

### [reconciliation](docs/sdks/reconciliation/README.md)


#### [reconciliation.v1](docs/sdks/reconciliationv1/README.md)

* [createPolicy](docs/sdks/reconciliationv1/README.md#createpolicy) - Create a policy
* [deletePolicy](docs/sdks/reconciliationv1/README.md#deletepolicy) - Delete a policy
* [getPolicy](docs/sdks/reconciliationv1/README.md#getpolicy) - Get a policy
* [getReconciliation](docs/sdks/reconciliationv1/README.md#getreconciliation) - Get a reconciliation
* [listPolicies](docs/sdks/reconciliationv1/README.md#listpolicies) - List policies
* [listReconciliations](docs/sdks/reconciliationv1/README.md#listreconciliations) - List reconciliations
* [reconcile](docs/sdks/reconciliationv1/README.md#reconcile) - Reconcile using a policy
* [reconciliationgetServerInfo](docs/sdks/reconciliationv1/README.md#reconciliationgetserverinfo) - Get server info

### [SDK](docs/sdks/sdk/README.md)

* [getVersions](docs/sdks/sdk/README.md#getversions) - Show stack version information

### [~~search~~](docs/sdks/search/README.md)


#### [~~search.v1~~](docs/sdks/searchv1/README.md)

* [~~search~~](docs/sdks/searchv1/README.md#search) - search.v1 :warning: **Deprecated**
* [~~searchgetServerInfo~~](docs/sdks/searchv1/README.md#searchgetserverinfo) - Get server info :warning: **Deprecated**

### [wallets](docs/sdks/wallets/README.md)


#### [wallets.v1](docs/sdks/walletsv1/README.md)

* [confirmHold](docs/sdks/walletsv1/README.md#confirmhold) - Confirm a hold
* [createBalance](docs/sdks/walletsv1/README.md#createbalance) - Create a balance
* [createWallet](docs/sdks/walletsv1/README.md#createwallet) - Create a new wallet
* [creditWallet](docs/sdks/walletsv1/README.md#creditwallet) - Credit a wallet
* [debitWallet](docs/sdks/walletsv1/README.md#debitwallet) - Debit a wallet
* [getBalance](docs/sdks/walletsv1/README.md#getbalance) - Get detailed balance
* [getHold](docs/sdks/walletsv1/README.md#gethold) - Get a hold
* [getHolds](docs/sdks/walletsv1/README.md#getholds) - Get all holds for a wallet
* [getTransactions](docs/sdks/walletsv1/README.md#gettransactions)
* [getWallet](docs/sdks/walletsv1/README.md#getwallet) - Get a wallet
* [getWalletSummary](docs/sdks/walletsv1/README.md#getwalletsummary) - Get wallet summary
* [listBalances](docs/sdks/walletsv1/README.md#listbalances) - List balances of a wallet
* [listWallets](docs/sdks/walletsv1/README.md#listwallets) - List all wallets
* [updateWallet](docs/sdks/walletsv1/README.md#updatewallet) - Update a wallet
* [voidHold](docs/sdks/walletsv1/README.md#voidhold) - Cancel a hold
* [walletsgetServerInfo](docs/sdks/walletsv1/README.md#walletsgetserverinfo) - Get server info

### [webhooks](docs/sdks/webhooks/README.md)


#### [webhooks.v1](docs/sdks/webhooksv1/README.md)

* [activateConfig](docs/sdks/webhooksv1/README.md#activateconfig) - Activate one config
* [changeConfigSecret](docs/sdks/webhooksv1/README.md#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](docs/sdks/webhooksv1/README.md#deactivateconfig) - Deactivate one config
* [deleteConfig](docs/sdks/webhooksv1/README.md#deleteconfig) - Delete one config
* [getManyConfigs](docs/sdks/webhooksv1/README.md#getmanyconfigs) - Get many configs
* [insertConfig](docs/sdks/webhooksv1/README.md#insertconfig) - Insert a new config
* [testConfig](docs/sdks/webhooksv1/README.md#testconfig) - Test one config
* [updateConfig](docs/sdks/webhooksv1/README.md#updateconfig) - Update one config

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SDKBaseError`](./src/sdk/models/errors/sdkbaseerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { SDK } from "@formance/formance-sdk";
import * as errors from "@formance/formance-sdk/sdk/models/errors";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  try {
    const result = await sdk.ledger.v2.addMetadataOnTransaction({
      requestBody: {
        "admin": "true",
      },
      dryRun: true,
      id: 1234n,
      ledger: "ledger001",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SDKBaseError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.V2ErrorResponse) {
        console.log(error.data$.details); // string
        console.log(error.data$.errorCode); // shared.V2ErrorsEnum
        console.log(error.data$.errorMessage); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`SDKBaseError`](./src/sdk/models/errors/sdkbaseerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (15)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SDKBaseError`](./src/sdk/models/errors/sdkbaseerror.ts)**:
* [`V3ErrorResponse`](docs/sdk/models/errors/v3errorresponse.md): Error. Applicable to 46 of 219 methods.*
* [`PaymentsErrorResponse`](docs/sdk/models/errors/paymentserrorresponse.md): Error. Applicable to 45 of 219 methods.*
* [`V2ErrorResponse`](docs/sdk/models/errors/v2errorresponse.md): Error. Applicable to 26 of 219 methods.*
* [`ErrorResponse`](docs/sdk/models/errors/errorresponse.md): Applicable to 19 of 219 methods.*
* [`V2Error`](docs/sdk/models/errors/v2error.md): General error. Applicable to 18 of 219 methods.*
* [`ErrorT`](docs/sdk/models/errors/errort.md): General error. Applicable to 17 of 219 methods.*
* [`WalletsErrorResponse`](docs/sdk/models/errors/walletserrorresponse.md): Applicable to 15 of 219 methods.*
* [`ReconciliationErrorResponse`](docs/sdk/models/errors/reconciliationerrorresponse.md): Error response. Applicable to 8 of 219 methods.*
* [`WebhooksErrorResponse`](docs/sdk/models/errors/webhookserrorresponse.md): Error. Applicable to 8 of 219 methods.*
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
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

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  serverURL: "https://orgID-stackID.eu.sandbox.formance.cloud",
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getVersions();

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

- [`authV1CreateClient`](docs/sdks/authv1/README.md#createclient) - Create client
- [`authV1CreateSecret`](docs/sdks/authv1/README.md#createsecret) - Add a secret to a client
- [`authV1DeleteClient`](docs/sdks/authv1/README.md#deleteclient) - Delete client
- [`authV1DeleteSecret`](docs/sdks/authv1/README.md#deletesecret) - Delete a secret from a client
- [`authV1GetOIDCWellKnowns`](docs/sdks/authv1/README.md#getoidcwellknowns) - Retrieve OpenID connect well-knowns.
- [`authV1GetServerInfo`](docs/sdks/authv1/README.md#getserverinfo) - Get server info
- [`authV1ListClients`](docs/sdks/authv1/README.md#listclients) - List clients
- [`authV1ListUsers`](docs/sdks/authv1/README.md#listusers) - List users
- [`authV1ReadClient`](docs/sdks/authv1/README.md#readclient) - Read client
- [`authV1ReadUser`](docs/sdks/authv1/README.md#readuser) - Read user
- [`authV1UpdateClient`](docs/sdks/authv1/README.md#updateclient) - Update client
- [`getVersions`](docs/sdks/sdk/README.md#getversions) - Show stack version information
- [`ledgerV1AddMetadataOnTransaction`](docs/sdks/ledgerv1/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
- [`ledgerV1AddMetadataToAccount`](docs/sdks/ledgerv1/README.md#addmetadatatoaccount) - Add metadata to an account
- [`ledgerV1CountAccounts`](docs/sdks/ledgerv1/README.md#countaccounts) - Count the accounts from a ledger
- [`ledgerV1CountTransactions`](docs/sdks/ledgerv1/README.md#counttransactions) - Count the transactions from a ledger
- [`ledgerV1CreateTransaction`](docs/sdks/ledgerv1/README.md#createtransaction) - Create a new transaction to a ledger
- [`ledgerV1CreateTransactions`](docs/sdks/ledgerv1/README.md#createtransactions) - Create a new batch of transactions to a ledger
- [`ledgerV1GetAccount`](docs/sdks/ledgerv1/README.md#getaccount) - Get account by its address
- [`ledgerV1GetBalances`](docs/sdks/ledgerv1/README.md#getbalances) - Get the balances from a ledger's account
- [`ledgerV1GetBalancesAggregated`](docs/sdks/ledgerv1/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
- [`ledgerV1GetInfo`](docs/sdks/ledgerv1/README.md#getinfo) - Show server information
- [`ledgerV1GetLedgerInfo`](docs/sdks/ledgerv1/README.md#getledgerinfo) - Get information about a ledger
- [`ledgerV1GetMapping`](docs/sdks/ledgerv1/README.md#getmapping) - Get the mapping of a ledger
- [`ledgerV1GetTransaction`](docs/sdks/ledgerv1/README.md#gettransaction) - Get transaction from a ledger by its ID
- [`ledgerV1ListAccounts`](docs/sdks/ledgerv1/README.md#listaccounts) - List accounts from a ledger
- [`ledgerV1ListLogs`](docs/sdks/ledgerv1/README.md#listlogs) - List the logs from a ledger
- [`ledgerV1ListTransactions`](docs/sdks/ledgerv1/README.md#listtransactions) - List transactions from a ledger
- [`ledgerV1ReadStats`](docs/sdks/ledgerv1/README.md#readstats) - Get statistics from a ledger
- [`ledgerV1RevertTransaction`](docs/sdks/ledgerv1/README.md#reverttransaction) - Revert a ledger transaction by its ID
- [`ledgerV1UpdateMapping`](docs/sdks/ledgerv1/README.md#updatemapping) - Update the mapping of a ledger
- [`ledgerV2AddMetadataOnTransaction`](docs/sdks/ledgerv2/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
- [`ledgerV2AddMetadataToAccount`](docs/sdks/ledgerv2/README.md#addmetadatatoaccount) - Add metadata to an account
- [`ledgerV2CountAccounts`](docs/sdks/ledgerv2/README.md#countaccounts) - Count the accounts from a ledger
- [`ledgerV2CountTransactions`](docs/sdks/ledgerv2/README.md#counttransactions) - Count the transactions from a ledger
- [`ledgerV2CreateBulk`](docs/sdks/ledgerv2/README.md#createbulk) - Bulk request
- [`ledgerV2CreateLedger`](docs/sdks/ledgerv2/README.md#createledger) - Create a ledger
- [`ledgerV2CreateTransaction`](docs/sdks/ledgerv2/README.md#createtransaction) - Create a new transaction to a ledger
- [`ledgerV2DeleteAccountMetadata`](docs/sdks/ledgerv2/README.md#deleteaccountmetadata) - Delete metadata by key
- [`ledgerV2DeleteLedgerMetadata`](docs/sdks/ledgerv2/README.md#deleteledgermetadata) - Delete ledger metadata by key
- [`ledgerV2DeleteTransactionMetadata`](docs/sdks/ledgerv2/README.md#deletetransactionmetadata) - Delete metadata by key
- [`ledgerV2ExportLogs`](docs/sdks/ledgerv2/README.md#exportlogs) - Export logs
- [`ledgerV2GetAccount`](docs/sdks/ledgerv2/README.md#getaccount) - Get account by its address
- [`ledgerV2GetBalancesAggregated`](docs/sdks/ledgerv2/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
- [`ledgerV2GetInfo`](docs/sdks/ledgerv2/README.md#getinfo) - Show server information
- [`ledgerV2GetLedger`](docs/sdks/ledgerv2/README.md#getledger) - Get a ledger
- [`ledgerV2GetLedgerInfo`](docs/sdks/ledgerv2/README.md#getledgerinfo) - Get information about a ledger
- [`ledgerV2GetMetrics`](docs/sdks/ledgerv2/README.md#getmetrics) - Read in memory metrics
- [`ledgerV2GetTransaction`](docs/sdks/ledgerv2/README.md#gettransaction) - Get transaction from a ledger by its ID
- [`ledgerV2GetVolumesWithBalances`](docs/sdks/ledgerv2/README.md#getvolumeswithbalances) - Get list of volumes with balances for (account/asset)
- [`ledgerV2ImportLogs`](docs/sdks/ledgerv2/README.md#importlogs)
- [`ledgerV2ListAccounts`](docs/sdks/ledgerv2/README.md#listaccounts) - List accounts from a ledger
- [`ledgerV2ListLedgers`](docs/sdks/ledgerv2/README.md#listledgers) - List ledgers
- [`ledgerV2ListLogs`](docs/sdks/ledgerv2/README.md#listlogs) - List the logs from a ledger
- [`ledgerV2ListTransactions`](docs/sdks/ledgerv2/README.md#listtransactions) - List transactions from a ledger
- [`ledgerV2ReadStats`](docs/sdks/ledgerv2/README.md#readstats) - Get statistics from a ledger
- [`ledgerV2RevertTransaction`](docs/sdks/ledgerv2/README.md#reverttransaction) - Revert a ledger transaction by its ID
- [`ledgerV2UpdateLedgerMetadata`](docs/sdks/ledgerv2/README.md#updateledgermetadata) - Update ledger metadata
- [`orchestrationV1CancelEvent`](docs/sdks/orchestrationv1/README.md#cancelevent) - Cancel a running workflow
- [`orchestrationV1CreateTrigger`](docs/sdks/orchestrationv1/README.md#createtrigger) - Create trigger
- [`orchestrationV1CreateWorkflow`](docs/sdks/orchestrationv1/README.md#createworkflow) - Create workflow
- [`orchestrationV1DeleteTrigger`](docs/sdks/orchestrationv1/README.md#deletetrigger) - Delete trigger
- [`orchestrationV1DeleteWorkflow`](docs/sdks/orchestrationv1/README.md#deleteworkflow) - Delete a flow by id
- [`orchestrationV1GetInstance`](docs/sdks/orchestrationv1/README.md#getinstance) - Get a workflow instance by id
- [`orchestrationV1GetInstanceHistory`](docs/sdks/orchestrationv1/README.md#getinstancehistory) - Get a workflow instance history by id
- [`orchestrationV1GetInstanceStageHistory`](docs/sdks/orchestrationv1/README.md#getinstancestagehistory) - Get a workflow instance stage history
- [`orchestrationV1GetWorkflow`](docs/sdks/orchestrationv1/README.md#getworkflow) - Get a flow by id
- [`orchestrationV1ListInstances`](docs/sdks/orchestrationv1/README.md#listinstances) - List instances of a workflow
- [`orchestrationV1ListTriggers`](docs/sdks/orchestrationv1/README.md#listtriggers) - List triggers
- [`orchestrationV1ListTriggersOccurrences`](docs/sdks/orchestrationv1/README.md#listtriggersoccurrences) - List triggers occurrences
- [`orchestrationV1ListWorkflows`](docs/sdks/orchestrationv1/README.md#listworkflows) - List registered workflows
- [`orchestrationV1OrchestrationgetServerInfo`](docs/sdks/orchestrationv1/README.md#orchestrationgetserverinfo) - Get server info
- [`orchestrationV1ReadTrigger`](docs/sdks/orchestrationv1/README.md#readtrigger) - Read trigger
- [`orchestrationV1RunWorkflow`](docs/sdks/orchestrationv1/README.md#runworkflow) - Run workflow
- [`orchestrationV1SendEvent`](docs/sdks/orchestrationv1/README.md#sendevent) - Send an event to a running workflow
- [`orchestrationV2CancelEvent`](docs/sdks/orchestrationv2/README.md#cancelevent) - Cancel a running workflow
- [`orchestrationV2CreateTrigger`](docs/sdks/orchestrationv2/README.md#createtrigger) - Create trigger
- [`orchestrationV2CreateWorkflow`](docs/sdks/orchestrationv2/README.md#createworkflow) - Create workflow
- [`orchestrationV2DeleteTrigger`](docs/sdks/orchestrationv2/README.md#deletetrigger) - Delete trigger
- [`orchestrationV2DeleteWorkflow`](docs/sdks/orchestrationv2/README.md#deleteworkflow) - Delete a flow by id
- [`orchestrationV2GetInstance`](docs/sdks/orchestrationv2/README.md#getinstance) - Get a workflow instance by id
- [`orchestrationV2GetInstanceHistory`](docs/sdks/orchestrationv2/README.md#getinstancehistory) - Get a workflow instance history by id
- [`orchestrationV2GetInstanceStageHistory`](docs/sdks/orchestrationv2/README.md#getinstancestagehistory) - Get a workflow instance stage history
- [`orchestrationV2GetServerInfo`](docs/sdks/orchestrationv2/README.md#getserverinfo) - Get server info
- [`orchestrationV2GetWorkflow`](docs/sdks/orchestrationv2/README.md#getworkflow) - Get a flow by id
- [`orchestrationV2ListInstances`](docs/sdks/orchestrationv2/README.md#listinstances) - List instances of a workflow
- [`orchestrationV2ListTriggers`](docs/sdks/orchestrationv2/README.md#listtriggers) - List triggers
- [`orchestrationV2ListTriggersOccurrences`](docs/sdks/orchestrationv2/README.md#listtriggersoccurrences) - List triggers occurrences
- [`orchestrationV2ListWorkflows`](docs/sdks/orchestrationv2/README.md#listworkflows) - List registered workflows
- [`orchestrationV2ReadTrigger`](docs/sdks/orchestrationv2/README.md#readtrigger) - Read trigger
- [`orchestrationV2RunWorkflow`](docs/sdks/orchestrationv2/README.md#runworkflow) - Run workflow
- [`orchestrationV2SendEvent`](docs/sdks/orchestrationv2/README.md#sendevent) - Send an event to a running workflow
- [`orchestrationV2TestTrigger`](docs/sdks/orchestrationv2/README.md#testtrigger) - Test trigger
- [`paymentsV1AddAccountToPool`](docs/sdks/paymentsv1/README.md#addaccounttopool) - Add an account to a pool
- [`paymentsV1ConnectorsTransfer`](docs/sdks/paymentsv1/README.md#connectorstransfer) - Transfer funds between Connector accounts
- [`paymentsV1CreateAccount`](docs/sdks/paymentsv1/README.md#createaccount) - Create an account
- [`paymentsV1CreateBankAccount`](docs/sdks/paymentsv1/README.md#createbankaccount) - Create a BankAccount in Payments and on the PSP
- [`paymentsV1CreatePayment`](docs/sdks/paymentsv1/README.md#createpayment) - Create a payment
- [`paymentsV1CreatePool`](docs/sdks/paymentsv1/README.md#createpool) - Create a Pool
- [`paymentsV1CreateTransferInitiation`](docs/sdks/paymentsv1/README.md#createtransferinitiation) - Create a TransferInitiation
- [`paymentsV1DeletePool`](docs/sdks/paymentsv1/README.md#deletepool) - Delete a Pool
- [`paymentsV1DeleteTransferInitiation`](docs/sdks/paymentsv1/README.md#deletetransferinitiation) - Delete a transfer initiation
- [`paymentsV1ForwardBankAccount`](docs/sdks/paymentsv1/README.md#forwardbankaccount) - Forward a bank account to a connector
- [`paymentsV1GetAccountBalances`](docs/sdks/paymentsv1/README.md#getaccountbalances) - Get account balances
- [`paymentsV1GetBankAccount`](docs/sdks/paymentsv1/README.md#getbankaccount) - Get a bank account created by user on Formance
- [`paymentsV1GetConnectorTaskV1`](docs/sdks/paymentsv1/README.md#getconnectortaskv1) - Read a specific task of the connector
- [`paymentsV1GetPayment`](docs/sdks/paymentsv1/README.md#getpayment) - Get a payment
- [`paymentsV1GetPool`](docs/sdks/paymentsv1/README.md#getpool) - Get a Pool
- [`paymentsV1GetPoolBalances`](docs/sdks/paymentsv1/README.md#getpoolbalances) - Get historical pool balances at a particular point in time
- [`paymentsV1GetPoolBalancesLatest`](docs/sdks/paymentsv1/README.md#getpoolbalanceslatest) - Get latest pool balances
- [`paymentsV1GetTransferInitiation`](docs/sdks/paymentsv1/README.md#gettransferinitiation) - Get a transfer initiation
- [`paymentsV1InstallConnector`](docs/sdks/paymentsv1/README.md#installconnector) - Install a connector
- [`paymentsV1ListAllConnectors`](docs/sdks/paymentsv1/README.md#listallconnectors) - List all installed connectors
- [`paymentsV1ListBankAccounts`](docs/sdks/paymentsv1/README.md#listbankaccounts) - List bank accounts created by user on Formance
- [`paymentsV1ListConfigsAvailableConnectors`](docs/sdks/paymentsv1/README.md#listconfigsavailableconnectors) - List the configs of each available connector
- [`paymentsV1ListConnectorTasksV1`](docs/sdks/paymentsv1/README.md#listconnectortasksv1) - List tasks from a connector
- [`paymentsV1ListPayments`](docs/sdks/paymentsv1/README.md#listpayments) - List payments
- [`paymentsV1ListPools`](docs/sdks/paymentsv1/README.md#listpools) - List Pools
- [`paymentsV1ListTransferInitiations`](docs/sdks/paymentsv1/README.md#listtransferinitiations) - List Transfer Initiations
- [`paymentsV1PaymentsgetAccount`](docs/sdks/paymentsv1/README.md#paymentsgetaccount) - Get an account
- [`paymentsV1PaymentsgetServerInfo`](docs/sdks/paymentsv1/README.md#paymentsgetserverinfo) - Get server info
- [`paymentsV1PaymentslistAccounts`](docs/sdks/paymentsv1/README.md#paymentslistaccounts) - List accounts
- [`paymentsV1ReadConnectorConfigV1`](docs/sdks/paymentsv1/README.md#readconnectorconfigv1) - Read the config of a connector
- [`paymentsV1RemoveAccountFromPool`](docs/sdks/paymentsv1/README.md#removeaccountfrompool) - Remove an account from a pool
- [`paymentsV1ResetConnectorV1`](docs/sdks/paymentsv1/README.md#resetconnectorv1) - Reset a connector
- [`paymentsV1RetryTransferInitiation`](docs/sdks/paymentsv1/README.md#retrytransferinitiation) - Retry a failed transfer initiation
- [`paymentsV1ReverseTransferInitiation`](docs/sdks/paymentsv1/README.md#reversetransferinitiation) - Reverse a transfer initiation
- [`paymentsV1UninstallConnectorV1`](docs/sdks/paymentsv1/README.md#uninstallconnectorv1) - Uninstall a connector
- [`paymentsV1UpdateBankAccountMetadata`](docs/sdks/paymentsv1/README.md#updatebankaccountmetadata) - Update metadata of a bank account
- [`paymentsV1UpdateConnectorConfigV1`](docs/sdks/paymentsv1/README.md#updateconnectorconfigv1) - Update the config of a connector
- [`paymentsV1UpdateMetadata`](docs/sdks/paymentsv1/README.md#updatemetadata) - Update metadata
- [`paymentsV1UpdateTransferInitiationStatus`](docs/sdks/paymentsv1/README.md#updatetransferinitiationstatus) - Update the status of a transfer initiation
- [`paymentsV3AddAccountToPool`](docs/sdks/v3/README.md#addaccounttopool) - Add an account to a pool
- [`paymentsV3AddBankAccountToPaymentServiceUser`](docs/sdks/v3/README.md#addbankaccounttopaymentserviceuser) - Add a bank account to a payment service user
- [`paymentsV3ApprovePaymentInitiation`](docs/sdks/v3/README.md#approvepaymentinitiation) - Approve a payment initiation
- [`paymentsV3CreateAccount`](docs/sdks/v3/README.md#createaccount) - Create a formance account object. This object will not be forwarded to the connector. It is only used for internal purposes.

- [`paymentsV3CreateBankAccount`](docs/sdks/v3/README.md#createbankaccount) - Create a formance bank account object. This object will not be forwarded to the connector until you called the forwardBankAccount method.

- [`paymentsV3CreatePayment`](docs/sdks/v3/README.md#createpayment) - Create a formance payment object. This object will not be forwarded to the connector. It is only used for internal purposes.

- [`paymentsV3CreatePaymentServiceUser`](docs/sdks/v3/README.md#createpaymentserviceuser) - Create a formance payment service user object
- [`paymentsV3CreatePool`](docs/sdks/v3/README.md#createpool) - Create a formance pool object
- [`paymentsV3DeletePaymentInitiation`](docs/sdks/v3/README.md#deletepaymentinitiation) - Delete a payment initiation by ID
- [`paymentsV3DeletePool`](docs/sdks/v3/README.md#deletepool) - Delete a pool by ID
- [`paymentsV3ForwardBankAccount`](docs/sdks/v3/README.md#forwardbankaccount) - Forward a Bank Account to a PSP for creation
- [`paymentsV3ForwardPaymentServiceUserBankAccount`](docs/sdks/v3/README.md#forwardpaymentserviceuserbankaccount) - Forward a payment service user's bank account to a connector
- [`paymentsV3GetAccount`](docs/sdks/v3/README.md#getaccount) - Get an account by ID
- [`paymentsV3GetAccountBalances`](docs/sdks/v3/README.md#getaccountbalances) - Get account balances
- [`paymentsV3GetBankAccount`](docs/sdks/v3/README.md#getbankaccount) - Get a Bank Account by ID
- [`paymentsV3GetConnectorConfig`](docs/sdks/v3/README.md#getconnectorconfig) - Get a connector configuration by ID
- [`paymentsV3GetConnectorSchedule`](docs/sdks/v3/README.md#getconnectorschedule) - Get a connector schedule by ID
- [`paymentsV3GetPayment`](docs/sdks/v3/README.md#getpayment) - Get a payment by ID
- [`paymentsV3GetPaymentInitiation`](docs/sdks/v3/README.md#getpaymentinitiation) - Get a payment initiation by ID
- [`paymentsV3GetPaymentServiceUser`](docs/sdks/v3/README.md#getpaymentserviceuser) - Get a payment service user by ID
- [`paymentsV3GetPool`](docs/sdks/v3/README.md#getpool) - Get a pool by ID
- [`paymentsV3GetPoolBalances`](docs/sdks/v3/README.md#getpoolbalances) - Get historical pool balances from a particular point in time
- [`paymentsV3GetPoolBalancesLatest`](docs/sdks/v3/README.md#getpoolbalanceslatest) - Get latest pool balances
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
- [`paymentsV3ListPaymentServiceUsers`](docs/sdks/v3/README.md#listpaymentserviceusers) - List all payment service users
- [`paymentsV3ListPools`](docs/sdks/v3/README.md#listpools) - List all pools
- [`paymentsV3RejectPaymentInitiation`](docs/sdks/v3/README.md#rejectpaymentinitiation) - Reject a payment initiation
- [`paymentsV3RemoveAccountFromPool`](docs/sdks/v3/README.md#removeaccountfrompool) - Remove an account from a pool
- [`paymentsV3ResetConnector`](docs/sdks/v3/README.md#resetconnector) - Reset a connector. Be aware that this will delete all data and stop all existing tasks like payment initiations and bank account creations.
- [`paymentsV3RetryPaymentInitiation`](docs/sdks/v3/README.md#retrypaymentinitiation) - Retry a payment initiation
- [`paymentsV3ReversePaymentInitiation`](docs/sdks/v3/README.md#reversepaymentinitiation) - Reverse a payment initiation
- [`paymentsV3UninstallConnector`](docs/sdks/v3/README.md#uninstallconnector) - Uninstall a connector
- [`paymentsV3UpdateBankAccountMetadata`](docs/sdks/v3/README.md#updatebankaccountmetadata) - Update a bank account's metadata
- [`paymentsV3UpdatePaymentMetadata`](docs/sdks/v3/README.md#updatepaymentmetadata) - Update a payment's metadata
- [`paymentsV3V3UpdateConnectorConfig`](docs/sdks/v3/README.md#v3updateconnectorconfig) - Update the config of a connector
- [`reconciliationV1CreatePolicy`](docs/sdks/reconciliationv1/README.md#createpolicy) - Create a policy
- [`reconciliationV1DeletePolicy`](docs/sdks/reconciliationv1/README.md#deletepolicy) - Delete a policy
- [`reconciliationV1GetPolicy`](docs/sdks/reconciliationv1/README.md#getpolicy) - Get a policy
- [`reconciliationV1GetReconciliation`](docs/sdks/reconciliationv1/README.md#getreconciliation) - Get a reconciliation
- [`reconciliationV1ListPolicies`](docs/sdks/reconciliationv1/README.md#listpolicies) - List policies
- [`reconciliationV1ListReconciliations`](docs/sdks/reconciliationv1/README.md#listreconciliations) - List reconciliations
- [`reconciliationV1Reconcile`](docs/sdks/reconciliationv1/README.md#reconcile) - Reconcile using a policy
- [`reconciliationV1ReconciliationgetServerInfo`](docs/sdks/reconciliationv1/README.md#reconciliationgetserverinfo) - Get server info
- [`walletsV1ConfirmHold`](docs/sdks/walletsv1/README.md#confirmhold) - Confirm a hold
- [`walletsV1CreateBalance`](docs/sdks/walletsv1/README.md#createbalance) - Create a balance
- [`walletsV1CreateWallet`](docs/sdks/walletsv1/README.md#createwallet) - Create a new wallet
- [`walletsV1CreditWallet`](docs/sdks/walletsv1/README.md#creditwallet) - Credit a wallet
- [`walletsV1DebitWallet`](docs/sdks/walletsv1/README.md#debitwallet) - Debit a wallet
- [`walletsV1GetBalance`](docs/sdks/walletsv1/README.md#getbalance) - Get detailed balance
- [`walletsV1GetHold`](docs/sdks/walletsv1/README.md#gethold) - Get a hold
- [`walletsV1GetHolds`](docs/sdks/walletsv1/README.md#getholds) - Get all holds for a wallet
- [`walletsV1GetTransactions`](docs/sdks/walletsv1/README.md#gettransactions)
- [`walletsV1GetWallet`](docs/sdks/walletsv1/README.md#getwallet) - Get a wallet
- [`walletsV1GetWalletSummary`](docs/sdks/walletsv1/README.md#getwalletsummary) - Get wallet summary
- [`walletsV1ListBalances`](docs/sdks/walletsv1/README.md#listbalances) - List balances of a wallet
- [`walletsV1ListWallets`](docs/sdks/walletsv1/README.md#listwallets) - List all wallets
- [`walletsV1UpdateWallet`](docs/sdks/walletsv1/README.md#updatewallet) - Update a wallet
- [`walletsV1VoidHold`](docs/sdks/walletsv1/README.md#voidhold) - Cancel a hold
- [`walletsV1WalletsgetServerInfo`](docs/sdks/walletsv1/README.md#walletsgetserverinfo) - Get server info
- [`webhooksV1ActivateConfig`](docs/sdks/webhooksv1/README.md#activateconfig) - Activate one config
- [`webhooksV1ChangeConfigSecret`](docs/sdks/webhooksv1/README.md#changeconfigsecret) - Change the signing secret of a config
- [`webhooksV1DeactivateConfig`](docs/sdks/webhooksv1/README.md#deactivateconfig) - Deactivate one config
- [`webhooksV1DeleteConfig`](docs/sdks/webhooksv1/README.md#deleteconfig) - Delete one config
- [`webhooksV1GetManyConfigs`](docs/sdks/webhooksv1/README.md#getmanyconfigs) - Get many configs
- [`webhooksV1InsertConfig`](docs/sdks/webhooksv1/README.md#insertconfig) - Insert a new config
- [`webhooksV1TestConfig`](docs/sdks/webhooksv1/README.md#testconfig) - Test one config
- [`webhooksV1UpdateConfig`](docs/sdks/webhooksv1/README.md#updateconfig) - Update one config
- ~~[`ledgerV1RunScript`](docs/sdks/ledgerv1/README.md#runscript)~~ - Execute a Numscript :warning: **Deprecated**
- ~~[`paymentsV1GetConnectorTask`](docs/sdks/paymentsv1/README.md#getconnectortask)~~ - Read a specific task of the connector :warning: **Deprecated**
- ~~[`paymentsV1ListConnectorTasks`](docs/sdks/paymentsv1/README.md#listconnectortasks)~~ - List tasks from a connector :warning: **Deprecated**
- ~~[`paymentsV1ReadConnectorConfig`](docs/sdks/paymentsv1/README.md#readconnectorconfig)~~ - Read the config of a connector :warning: **Deprecated**
- ~~[`paymentsV1ResetConnector`](docs/sdks/paymentsv1/README.md#resetconnector)~~ - Reset a connector :warning: **Deprecated**
- ~~[`paymentsV1UninstallConnector`](docs/sdks/paymentsv1/README.md#uninstallconnector)~~ - Uninstall a connector :warning: **Deprecated**
- ~~[`searchV1Search`](docs/sdks/searchv1/README.md#search)~~ - search.v1 :warning: **Deprecated**
- ~~[`searchV1SearchgetServerInfo`](docs/sdks/searchv1/README.md#searchgetserverinfo)~~ - Get server info :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { SDK } from "@formance/formance-sdk";
import { openAsBlob } from "node:fs";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.ledger.v2.importLogs({
    v2ImportLogsRequest: await openAsBlob("example.file"),
    ledger: "ledger001",
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

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
