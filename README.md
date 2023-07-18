# @formance/formance-sdk

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @formance/formance-sdk
```

### Yarn

```bash
yarn add @formance/formance-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Formance } from "@formance/formance-sdk";
import { GetVersionsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.getVersions().then((res: GetVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Formance SDK](docs/formance/README.md)

* [getVersions](docs/formance/README.md#getversions) - Show stack version information

### [auth](docs/auth/README.md)

* [addScopeToClient](docs/auth/README.md#addscopetoclient) - Add scope to client
* [addTransientScope](docs/auth/README.md#addtransientscope) - Add a transient scope to a scope
* [createClient](docs/auth/README.md#createclient) - Create client
* [createScope](docs/auth/README.md#createscope) - Create scope
* [createSecret](docs/auth/README.md#createsecret) - Add a secret to a client
* [deleteClient](docs/auth/README.md#deleteclient) - Delete client
* [deleteScope](docs/auth/README.md#deletescope) - Delete scope
* [deleteScopeFromClient](docs/auth/README.md#deletescopefromclient) - Delete scope from client
* [deleteSecret](docs/auth/README.md#deletesecret) - Delete a secret from a client
* [deleteTransientScope](docs/auth/README.md#deletetransientscope) - Delete a transient scope from a scope
* [getServerInfo](docs/auth/README.md#getserverinfo) - Get server info
* [listClients](docs/auth/README.md#listclients) - List clients
* [listScopes](docs/auth/README.md#listscopes) - List scopes
* [listUsers](docs/auth/README.md#listusers) - List users
* [readClient](docs/auth/README.md#readclient) - Read client
* [readScope](docs/auth/README.md#readscope) - Read scope
* [readUser](docs/auth/README.md#readuser) - Read user
* [updateClient](docs/auth/README.md#updateclient) - Update client
* [updateScope](docs/auth/README.md#updatescope) - Update scope

### [flows](docs/flows/README.md)

* [flowsgetServerInfo](docs/flows/README.md#flowsgetserverinfo) - Get server info
* [cancelEvent](docs/flows/README.md#cancelevent) - Cancel a running workflow
* [createWorkflow](docs/flows/README.md#createworkflow) - Create workflow
* [getInstance](docs/flows/README.md#getinstance) - Get a workflow instance by id
* [getInstanceHistory](docs/flows/README.md#getinstancehistory) - Get a workflow instance history by id
* [getInstanceStageHistory](docs/flows/README.md#getinstancestagehistory) - Get a workflow instance stage history
* [getWorkflow](docs/flows/README.md#getworkflow) - Get a flow by id
* [listInstances](docs/flows/README.md#listinstances) - List instances of a workflow
* [listWorkflows](docs/flows/README.md#listworkflows) - List registered workflows
* [runWorkflow](docs/flows/README.md#runworkflow) - Run workflow
* [sendEvent](docs/flows/README.md#sendevent) - Send an event to a running workflow

### [ledger](docs/ledger/README.md)

* [createTransactions](docs/ledger/README.md#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](docs/ledger/README.md#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [addMetadataToAccount](docs/ledger/README.md#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](docs/ledger/README.md#countaccounts) - Count the accounts from a ledger
* [countTransactions](docs/ledger/README.md#counttransactions) - Count the transactions from a ledger
* [createTransaction](docs/ledger/README.md#createtransaction) - Create a new transaction to a ledger
* [getAccount](docs/ledger/README.md#getaccount) - Get account by its address
* [getBalances](docs/ledger/README.md#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](docs/ledger/README.md#getbalancesaggregated) - Get the aggregated balances from selected accounts
* [getInfo](docs/ledger/README.md#getinfo) - Show server information
* [getLedgerInfo](docs/ledger/README.md#getledgerinfo) - Get information about a ledger
* [getMapping](docs/ledger/README.md#getmapping) - Get the mapping of a ledger
* [getTransaction](docs/ledger/README.md#gettransaction) - Get transaction from a ledger by its ID
* [listAccounts](docs/ledger/README.md#listaccounts) - List accounts from a ledger
* [listLogs](docs/ledger/README.md#listlogs) - List the logs from a ledger
* [listTransactions](docs/ledger/README.md#listtransactions) - List transactions from a ledger
* [readStats](docs/ledger/README.md#readstats) - Get statistics from a ledger
* [revertTransaction](docs/ledger/README.md#reverttransaction) - Revert a ledger transaction by its ID
* [~~runScript~~](docs/ledger/README.md#runscript) - Execute a Numscript :warning: **Deprecated**
* [updateMapping](docs/ledger/README.md#updatemapping) - Update the mapping of a ledger

### [payments](docs/payments/README.md)

* [connectorsStripeTransfer](docs/payments/README.md#connectorsstripetransfer) - Transfer funds between Stripe accounts
* [connectorsTransfer](docs/payments/README.md#connectorstransfer) - Transfer funds between Connector accounts
* [getConnectorTask](docs/payments/README.md#getconnectortask) - Read a specific task of the connector
* [getPayment](docs/payments/README.md#getpayment) - Get a payment
* [installConnector](docs/payments/README.md#installconnector) - Install a connector
* [listAllConnectors](docs/payments/README.md#listallconnectors) - List all installed connectors
* [listConfigsAvailableConnectors](docs/payments/README.md#listconfigsavailableconnectors) - List the configs of each available connector
* [listConnectorTasks](docs/payments/README.md#listconnectortasks) - List tasks from a connector
* [listConnectorsTransfers](docs/payments/README.md#listconnectorstransfers) - List transfers and their statuses
* [listPayments](docs/payments/README.md#listpayments) - List payments
* [paymentsgetServerInfo](docs/payments/README.md#paymentsgetserverinfo) - Get server info
* [paymentslistAccounts](docs/payments/README.md#paymentslistaccounts) - List accounts
* [readConnectorConfig](docs/payments/README.md#readconnectorconfig) - Read the config of a connector
* [resetConnector](docs/payments/README.md#resetconnector) - Reset a connector
* [uninstallConnector](docs/payments/README.md#uninstallconnector) - Uninstall a connector
* [updateMetadata](docs/payments/README.md#updatemetadata) - Update metadata

### [search](docs/search/README.md)

* [search](docs/search/README.md#search) - Search
* [searchgetServerInfo](docs/search/README.md#searchgetserverinfo) - Get server info

### [wallets](docs/wallets/README.md)

* [confirmHold](docs/wallets/README.md#confirmhold) - Confirm a hold
* [createBalance](docs/wallets/README.md#createbalance) - Create a balance
* [createWallet](docs/wallets/README.md#createwallet) - Create a new wallet
* [creditWallet](docs/wallets/README.md#creditwallet) - Credit a wallet
* [debitWallet](docs/wallets/README.md#debitwallet) - Debit a wallet
* [getBalance](docs/wallets/README.md#getbalance) - Get detailed balance
* [getHold](docs/wallets/README.md#gethold) - Get a hold
* [getHolds](docs/wallets/README.md#getholds) - Get all holds for a wallet
* [getTransactions](docs/wallets/README.md#gettransactions)
* [getWallet](docs/wallets/README.md#getwallet) - Get a wallet
* [getWalletSummary](docs/wallets/README.md#getwalletsummary) - Get wallet summary
* [listBalances](docs/wallets/README.md#listbalances) - List balances of a wallet
* [listWallets](docs/wallets/README.md#listwallets) - List all wallets
* [updateWallet](docs/wallets/README.md#updatewallet) - Update a wallet
* [voidHold](docs/wallets/README.md#voidhold) - Cancel a hold
* [walletsgetServerInfo](docs/wallets/README.md#walletsgetserverinfo) - Get server info

### [webhooks](docs/webhooks/README.md)

* [activateConfig](docs/webhooks/README.md#activateconfig) - Activate one config
* [changeConfigSecret](docs/webhooks/README.md#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](docs/webhooks/README.md#deactivateconfig) - Deactivate one config
* [deleteConfig](docs/webhooks/README.md#deleteconfig) - Delete one config
* [getManyConfigs](docs/webhooks/README.md#getmanyconfigs) - Get many configs
* [insertConfig](docs/webhooks/README.md#insertconfig) - Insert a new config
* [testConfig](docs/webhooks/README.md#testconfig) - Test one config
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
