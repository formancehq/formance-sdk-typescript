import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { BankingCircleConfig } from '../models/BankingCircleConfig';
import { ChangeOneConfigSecretRequest } from '../models/ChangeOneConfigSecretRequest';
import { Client } from '../models/Client';
import { ClientAllOf } from '../models/ClientAllOf';
import { ClientOptions } from '../models/ClientOptions';
import { ClientSecret } from '../models/ClientSecret';
import { Config } from '../models/Config';
import { ConfigInfo } from '../models/ConfigInfo';
import { ConfigInfoResponse } from '../models/ConfigInfoResponse';
import { ConfigUser } from '../models/ConfigUser';
import { ConnectorBaseInfo } from '../models/ConnectorBaseInfo';
import { ConnectorConfig } from '../models/ConnectorConfig';
import { ConnectorTask } from '../models/ConnectorTask';
import { Contract } from '../models/Contract';
import { CreateClientResponse } from '../models/CreateClientResponse';
import { CreateScopeResponse } from '../models/CreateScopeResponse';
import { CreateSecretResponse } from '../models/CreateSecretResponse';
import { CreateTransaction400Response } from '../models/CreateTransaction400Response';
import { CreateTransaction409Response } from '../models/CreateTransaction409Response';
import { CreateTransactions400Response } from '../models/CreateTransactions400Response';
import { CurrencyCloudConfig } from '../models/CurrencyCloudConfig';
import { Cursor } from '../models/Cursor';
import { DummyPayConfig } from '../models/DummyPayConfig';
import { ErrorCode } from '../models/ErrorCode';
import { ErrorResponse } from '../models/ErrorResponse';
import { GetAccount200Response } from '../models/GetAccount200Response';
import { GetAccount400Response } from '../models/GetAccount400Response';
import { GetBalances200Response } from '../models/GetBalances200Response';
import { GetBalances200ResponseCursor } from '../models/GetBalances200ResponseCursor';
import { GetBalances200ResponseCursorAllOf } from '../models/GetBalances200ResponseCursorAllOf';
import { GetBalancesAggregated200Response } from '../models/GetBalancesAggregated200Response';
import { GetBalancesAggregated400Response } from '../models/GetBalancesAggregated400Response';
import { GetManyConfigs200Response } from '../models/GetManyConfigs200Response';
import { GetManyConfigs200ResponseCursor } from '../models/GetManyConfigs200ResponseCursor';
import { GetManyConfigs200ResponseCursorAllOf } from '../models/GetManyConfigs200ResponseCursorAllOf';
import { GetPaymentResponse } from '../models/GetPaymentResponse';
import { GetTransaction400Response } from '../models/GetTransaction400Response';
import { GetTransaction404Response } from '../models/GetTransaction404Response';
import { LedgerStorage } from '../models/LedgerStorage';
import { ListAccounts200Response } from '../models/ListAccounts200Response';
import { ListAccounts200ResponseCursor } from '../models/ListAccounts200ResponseCursor';
import { ListAccounts200ResponseCursorAllOf } from '../models/ListAccounts200ResponseCursorAllOf';
import { ListAccounts400Response } from '../models/ListAccounts400Response';
import { ListClientsResponse } from '../models/ListClientsResponse';
import { ListConnectorsConfigsResponse } from '../models/ListConnectorsConfigsResponse';
import { ListConnectorsConfigsResponseConnector } from '../models/ListConnectorsConfigsResponseConnector';
import { ListConnectorsConfigsResponseConnectorKey } from '../models/ListConnectorsConfigsResponseConnectorKey';
import { ListConnectorsResponse } from '../models/ListConnectorsResponse';
import { ListPaymentsResponse } from '../models/ListPaymentsResponse';
import { ListScopesResponse } from '../models/ListScopesResponse';
import { ListTransactions200Response } from '../models/ListTransactions200Response';
import { ListTransactions200ResponseCursor } from '../models/ListTransactions200ResponseCursor';
import { ListTransactions200ResponseCursorAllOf } from '../models/ListTransactions200ResponseCursorAllOf';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { Mapping } from '../models/Mapping';
import { MappingResponse } from '../models/MappingResponse';
import { ModulrConfig } from '../models/ModulrConfig';
import { Payment } from '../models/Payment';
import { PostTransaction } from '../models/PostTransaction';
import { PostTransactionScript } from '../models/PostTransactionScript';
import { Posting } from '../models/Posting';
import { Query } from '../models/Query';
import { ReadClientResponse } from '../models/ReadClientResponse';
import { ReadUserResponse } from '../models/ReadUserResponse';
import { Response } from '../models/Response';
import { ResponseCursor } from '../models/ResponseCursor';
import { ResponseCursorTotal } from '../models/ResponseCursorTotal';
import { Scope } from '../models/Scope';
import { ScopeAllOf } from '../models/ScopeAllOf';
import { ScopeOptions } from '../models/ScopeOptions';
import { Script } from '../models/Script';
import { ScriptResult } from '../models/ScriptResult';
import { Secret } from '../models/Secret';
import { SecretAllOf } from '../models/SecretAllOf';
import { SecretOptions } from '../models/SecretOptions';
import { Stats } from '../models/Stats';
import { StatsResponse } from '../models/StatsResponse';
import { StripeConfig } from '../models/StripeConfig';
import { StripeTask } from '../models/StripeTask';
import { Transaction } from '../models/Transaction';
import { TransactionData } from '../models/TransactionData';
import { TransactionResponse } from '../models/TransactionResponse';
import { Transactions } from '../models/Transactions';
import { TransactionsResponse } from '../models/TransactionsResponse';
import { User } from '../models/User';
import { Volume } from '../models/Volume';
import { WebhooksConfig } from '../models/WebhooksConfig';
import { WebhooksCursor } from '../models/WebhooksCursor';
import { WiseConfig } from '../models/WiseConfig';
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add metadata to an account.
     * @param ledger Name of the ledger.
     * @param address Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     * @param requestBody metadata
     */
    public addMetadataToAccount(ledger: string, address: string, requestBody: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.addMetadataToAccount(ledger, address, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Count the accounts from a ledger.
     * @param ledger Name of the ledger.
     * @param address Filter accounts by address pattern (regular expression placed between ^ and $).
     * @param metadata Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public countAccounts(ledger: string, address?: string, metadata?: any, _options?: Configuration): Promise<void> {
        const result = this.api.countAccounts(ledger, address, metadata, _options);
        return result.toPromise();
    }

    /**
     * Get account by its address.
     * @param ledger Name of the ledger.
     * @param address Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     */
    public getAccount(ledger: string, address: string, _options?: Configuration): Promise<GetAccount200Response> {
        const result = this.api.getAccount(ledger, address, _options);
        return result.toPromise();
    }

    /**
     * List accounts from a ledger, sorted by address in descending order.
     * List accounts from a ledger.
     * @param ledger Name of the ledger.
     * @param pageSize The maximum number of results to return per page
     * @param after Pagination cursor, will return accounts after given address, in descending order.
     * @param address Filter accounts by address pattern (regular expression placed between ^ and $).
     * @param metadata Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @param balance Filter accounts by their balance (default operator is gte)
     * @param balanceOperator Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, or equal
     * @param paginationToken Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set. 
     */
    public listAccounts(ledger: string, pageSize?: number, after?: string, address?: string, metadata?: any, balance?: number, balanceOperator?: 'gte' | 'lte' | 'gt' | 'lt' | 'e', paginationToken?: string, _options?: Configuration): Promise<ListAccounts200Response> {
        const result = this.api.listAccounts(ledger, pageSize, after, address, metadata, balance, balanceOperator, paginationToken, _options);
        return result.toPromise();
    }


}



import { ObservableBalancesApi } from './ObservableAPI';

import { BalancesApiRequestFactory, BalancesApiResponseProcessor} from "../apis/BalancesApi";
export class PromiseBalancesApi {
    private api: ObservableBalancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BalancesApiRequestFactory,
        responseProcessor?: BalancesApiResponseProcessor
    ) {
        this.api = new ObservableBalancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the balances from a ledger's account
     * @param ledger Name of the ledger.
     * @param address Filter balances involving given account, either as source or destination.
     * @param after Pagination cursor, will return accounts after given address, in descending order.
     * @param paginationToken Parameter used in pagination requests.  Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results.
     */
    public getBalances(ledger: string, address?: string, after?: string, paginationToken?: string, _options?: Configuration): Promise<GetBalances200Response> {
        const result = this.api.getBalances(ledger, address, after, paginationToken, _options);
        return result.toPromise();
    }

    /**
     * Get the aggregated balances from selected accounts
     * @param ledger Name of the ledger.
     * @param address Filter balances involving given account, either as source or destination.
     */
    public getBalancesAggregated(ledger: string, address?: string, _options?: Configuration): Promise<GetBalancesAggregated200Response> {
        const result = this.api.getBalancesAggregated(ledger, address, _options);
        return result.toPromise();
    }


}



import { ObservableClientsApi } from './ObservableAPI';

import { ClientsApiRequestFactory, ClientsApiResponseProcessor} from "../apis/ClientsApi";
export class PromiseClientsApi {
    private api: ObservableClientsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientsApiRequestFactory,
        responseProcessor?: ClientsApiResponseProcessor
    ) {
        this.api = new ObservableClientsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add scope to client
     * @param clientId Client ID
     * @param scopeId Scope ID
     */
    public addScopeToClient(clientId: string, scopeId: string, _options?: Configuration): Promise<void> {
        const result = this.api.addScopeToClient(clientId, scopeId, _options);
        return result.toPromise();
    }

    /**
     * Create client
     * @param body 
     */
    public createClient(body?: ClientOptions, _options?: Configuration): Promise<CreateClientResponse> {
        const result = this.api.createClient(body, _options);
        return result.toPromise();
    }

    /**
     * Add a secret to a client
     * @param clientId Client ID
     * @param body 
     */
    public createSecret(clientId: string, body?: SecretOptions, _options?: Configuration): Promise<CreateSecretResponse> {
        const result = this.api.createSecret(clientId, body, _options);
        return result.toPromise();
    }

    /**
     * Delete client
     * @param clientId Client ID
     */
    public deleteClient(clientId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteClient(clientId, _options);
        return result.toPromise();
    }

    /**
     * Delete scope from client
     * @param clientId Client ID
     * @param scopeId Scope ID
     */
    public deleteScopeFromClient(clientId: string, scopeId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteScopeFromClient(clientId, scopeId, _options);
        return result.toPromise();
    }

    /**
     * Delete a secret from a client
     * @param clientId Client ID
     * @param secretId Secret ID
     */
    public deleteSecret(clientId: string, secretId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteSecret(clientId, secretId, _options);
        return result.toPromise();
    }

    /**
     * List clients
     */
    public listClients(_options?: Configuration): Promise<ListClientsResponse> {
        const result = this.api.listClients(_options);
        return result.toPromise();
    }

    /**
     * Read client
     * @param clientId Client ID
     */
    public readClient(clientId: string, _options?: Configuration): Promise<ReadClientResponse> {
        const result = this.api.readClient(clientId, _options);
        return result.toPromise();
    }

    /**
     * Update client
     * @param clientId Client ID
     * @param body 
     */
    public updateClient(clientId: string, body?: ClientOptions, _options?: Configuration): Promise<CreateClientResponse> {
        const result = this.api.updateClient(clientId, body, _options);
        return result.toPromise();
    }


}



import { ObservableMappingApi } from './ObservableAPI';

import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";
export class PromiseMappingApi {
    private api: ObservableMappingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MappingApiRequestFactory,
        responseProcessor?: MappingApiResponseProcessor
    ) {
        this.api = new ObservableMappingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the mapping of a ledger.
     * @param ledger Name of the ledger.
     */
    public getMapping(ledger: string, _options?: Configuration): Promise<MappingResponse> {
        const result = this.api.getMapping(ledger, _options);
        return result.toPromise();
    }

    /**
     * Update the mapping of a ledger.
     * @param ledger Name of the ledger.
     * @param mapping 
     */
    public updateMapping(ledger: string, mapping: Mapping, _options?: Configuration): Promise<MappingResponse> {
        const result = this.api.updateMapping(ledger, mapping, _options);
        return result.toPromise();
    }


}



import { ObservablePaymentsApi } from './ObservableAPI';

import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";
export class PromisePaymentsApi {
    private api: ObservablePaymentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentsApiRequestFactory,
        responseProcessor?: PaymentsApiResponseProcessor
    ) {
        this.api = new ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all installed connectors
     * Get all installed connectors
     */
    public getAllConnectors(_options?: Configuration): Promise<ListConnectorsResponse> {
        const result = this.api.getAllConnectors(_options);
        return result.toPromise();
    }

    /**
     * Get all available connectors configs
     * Get all available connectors configs
     */
    public getAllConnectorsConfigs(_options?: Configuration): Promise<ListConnectorsConfigsResponse> {
        const result = this.api.getAllConnectorsConfigs(_options);
        return result.toPromise();
    }

    /**
     * Get a specific task associated to the connector
     * Read a specific task of the connector
     * @param connector The connector code
     * @param taskId The task id
     */
    public getConnectorTask(connector: 'stripe', taskId: string, _options?: Configuration): Promise<ConnectorTask> {
        const result = this.api.getConnectorTask(connector, taskId, _options);
        return result.toPromise();
    }

    /**
     * Returns a payment.
     * @param paymentId The payment id
     */
    public getPayment(paymentId: string, _options?: Configuration): Promise<Payment> {
        const result = this.api.getPayment(paymentId, _options);
        return result.toPromise();
    }

    /**
     * Install connector
     * Install connector
     * @param connector The connector code
     * @param connectorConfig 
     */
    public installConnector(connector: 'stripe' | 'dummypay' | 'wise' | 'modulr' | 'currencycloud', connectorConfig: ConnectorConfig, _options?: Configuration): Promise<void> {
        const result = this.api.installConnector(connector, connectorConfig, _options);
        return result.toPromise();
    }

    /**
     * List all tasks associated with this connector.
     * List connector tasks
     * @param connector The connector code
     */
    public listConnectorTasks(connector: 'stripe', _options?: Configuration): Promise<Array<ConnectorTask>> {
        const result = this.api.listConnectorTasks(connector, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of payments.
     * @param limit Limit the number of payments to return, pagination can be achieved in conjunction with &#39;skip&#39; parameter.
     * @param skip How many payments to skip, pagination can be achieved in conjunction with &#39;limit&#39; parameter.
     * @param sort Field used to sort payments (Default is by date).
     */
    public listPayments(limit?: number, skip?: number, sort?: Array<string>, _options?: Configuration): Promise<ListPaymentsResponse> {
        const result = this.api.listPayments(limit, skip, sort, _options);
        return result.toPromise();
    }

    /**
     * Read connector config
     * Read connector config
     * @param connector The connector code
     */
    public readConnectorConfig(connector: 'stripe', _options?: Configuration): Promise<ConnectorConfig> {
        const result = this.api.readConnectorConfig(connector, _options);
        return result.toPromise();
    }

    /**
     * Reset connector. Will remove the connector and ALL PAYMENTS generated with it.
     * Reset connector
     * @param connector The connector code
     */
    public resetConnector(connector: 'stripe', _options?: Configuration): Promise<void> {
        const result = this.api.resetConnector(connector, _options);
        return result.toPromise();
    }

    /**
     * Uninstall  connector
     * Uninstall connector
     * @param connector The connector code
     */
    public uninstallConnector(connector: 'stripe', _options?: Configuration): Promise<void> {
        const result = this.api.uninstallConnector(connector, _options);
        return result.toPromise();
    }


}



import { ObservableScopesApi } from './ObservableAPI';

import { ScopesApiRequestFactory, ScopesApiResponseProcessor} from "../apis/ScopesApi";
export class PromiseScopesApi {
    private api: ObservableScopesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ScopesApiRequestFactory,
        responseProcessor?: ScopesApiResponseProcessor
    ) {
        this.api = new ObservableScopesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a transient scope to a scope
     * Add a transient scope to a scope
     * @param scopeId Scope ID
     * @param transientScopeId Transient scope ID
     */
    public addTransientScope(scopeId: string, transientScopeId: string, _options?: Configuration): Promise<void> {
        const result = this.api.addTransientScope(scopeId, transientScopeId, _options);
        return result.toPromise();
    }

    /**
     * Create scope
     * Create scope
     * @param body 
     */
    public createScope(body?: ScopeOptions, _options?: Configuration): Promise<CreateScopeResponse> {
        const result = this.api.createScope(body, _options);
        return result.toPromise();
    }

    /**
     * Delete scope
     * Delete scope
     * @param scopeId Scope ID
     */
    public deleteScope(scopeId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteScope(scopeId, _options);
        return result.toPromise();
    }

    /**
     * Delete a transient scope from a scope
     * Delete a transient scope from a scope
     * @param scopeId Scope ID
     * @param transientScopeId Transient scope ID
     */
    public deleteTransientScope(scopeId: string, transientScopeId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTransientScope(scopeId, transientScopeId, _options);
        return result.toPromise();
    }

    /**
     * List Scopes
     * List scopes
     */
    public listScopes(_options?: Configuration): Promise<ListScopesResponse> {
        const result = this.api.listScopes(_options);
        return result.toPromise();
    }

    /**
     * Read scope
     * Read scope
     * @param scopeId Scope ID
     */
    public readScope(scopeId: string, _options?: Configuration): Promise<CreateScopeResponse> {
        const result = this.api.readScope(scopeId, _options);
        return result.toPromise();
    }

    /**
     * Update scope
     * Update scope
     * @param scopeId Scope ID
     * @param body 
     */
    public updateScope(scopeId: string, body?: ScopeOptions, _options?: Configuration): Promise<CreateScopeResponse> {
        const result = this.api.updateScope(scopeId, body, _options);
        return result.toPromise();
    }


}



import { ObservableScriptApi } from './ObservableAPI';

import { ScriptApiRequestFactory, ScriptApiResponseProcessor} from "../apis/ScriptApi";
export class PromiseScriptApi {
    private api: ObservableScriptApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ScriptApiRequestFactory,
        responseProcessor?: ScriptApiResponseProcessor
    ) {
        this.api = new ObservableScriptApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Execute a Numscript.
     * @param ledger Name of the ledger.
     * @param script 
     * @param preview Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     */
    public runScript(ledger: string, script: Script, preview?: boolean, _options?: Configuration): Promise<ScriptResult> {
        const result = this.api.runScript(ledger, script, preview, _options);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search with Query
     * Search
     * @param query 
     */
    public search(query: Query, _options?: Configuration): Promise<Response> {
        const result = this.api.search(query, _options);
        return result.toPromise();
    }


}



import { ObservableServerApi } from './ObservableAPI';

import { ServerApiRequestFactory, ServerApiResponseProcessor} from "../apis/ServerApi";
export class PromiseServerApi {
    private api: ObservableServerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServerApiRequestFactory,
        responseProcessor?: ServerApiResponseProcessor
    ) {
        this.api = new ObservableServerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Show server information.
     */
    public getInfo(_options?: Configuration): Promise<ConfigInfoResponse> {
        const result = this.api.getInfo(_options);
        return result.toPromise();
    }


}



import { ObservableStatsApi } from './ObservableAPI';

import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi";
export class PromiseStatsApi {
    private api: ObservableStatsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatsApiRequestFactory,
        responseProcessor?: StatsApiResponseProcessor
    ) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get ledger stats (aggregate metrics on accounts and transactions) The stats for account 
     * Get Stats
     * @param ledger name of the ledger
     */
    public readStats(ledger: string, _options?: Configuration): Promise<StatsResponse> {
        const result = this.api.readStats(ledger, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionsApi } from './ObservableAPI';

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class PromiseTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set the metadata of a transaction by its ID.
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     * @param requestBody metadata
     */
    public addMetadataOnTransaction(ledger: string, txid: number, requestBody?: { [key: string]: any; }, _options?: Configuration): Promise<void> {
        const result = this.api.addMetadataOnTransaction(ledger, txid, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Count the transactions from a ledger.
     * @param ledger Name of the ledger.
     * @param reference Filter transactions by reference field.
     * @param account Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $).
     * @param source Filter transactions with postings involving given account at source (regular expression placed between ^ and $).
     * @param destination Filter transactions with postings involving given account at destination (regular expression placed between ^ and $).
     * @param metadata Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public countTransactions(ledger: string, reference?: string, account?: string, source?: string, destination?: string, metadata?: any, _options?: Configuration): Promise<void> {
        const result = this.api.countTransactions(ledger, reference, account, source, destination, metadata, _options);
        return result.toPromise();
    }

    /**
     * Create a new transaction to a ledger.
     * @param ledger Name of the ledger.
     * @param postTransaction The request body must contain one of the following objects:   - &#x60;postings&#x60;: suitable for simple transactions   - &#x60;script&#x60;: enabling more complex transactions with Numscript 
     * @param preview Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     */
    public createTransaction(ledger: string, postTransaction: PostTransaction, preview?: boolean, _options?: Configuration): Promise<TransactionsResponse> {
        const result = this.api.createTransaction(ledger, postTransaction, preview, _options);
        return result.toPromise();
    }

    /**
     * Create a new batch of transactions to a ledger.
     * @param ledger Name of the ledger.
     * @param transactions 
     */
    public createTransactions(ledger: string, transactions: Transactions, _options?: Configuration): Promise<TransactionsResponse> {
        const result = this.api.createTransactions(ledger, transactions, _options);
        return result.toPromise();
    }

    /**
     * Get transaction from a ledger by its ID.
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     */
    public getTransaction(ledger: string, txid: number, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.getTransaction(ledger, txid, _options);
        return result.toPromise();
    }

    /**
     * List transactions from a ledger, sorted by txid in descending order.
     * List transactions from a ledger.
     * @param ledger Name of the ledger.
     * @param pageSize The maximum number of results to return per page
     * @param after Pagination cursor, will return transactions after given txid (in descending order).
     * @param reference Find transactions by reference field.
     * @param account Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $).
     * @param source Filter transactions with postings involving given account at source (regular expression placed between ^ and $).
     * @param destination Filter transactions with postings involving given account at destination (regular expression placed between ^ and $).
     * @param startTime Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, 12:00:01 includes the first second of the minute). 
     * @param endTime Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, 12:00:01 excludes the first second of the minute). 
     * @param paginationToken Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set. 
     * @param metadata Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    public listTransactions(ledger: string, pageSize?: number, after?: string, reference?: string, account?: string, source?: string, destination?: string, startTime?: string, endTime?: string, paginationToken?: string, metadata?: any, _options?: Configuration): Promise<ListTransactions200Response> {
        const result = this.api.listTransactions(ledger, pageSize, after, reference, account, source, destination, startTime, endTime, paginationToken, metadata, _options);
        return result.toPromise();
    }

    /**
     * Revert a ledger transaction by its ID.
     * @param ledger Name of the ledger.
     * @param txid Transaction ID.
     */
    public revertTransaction(ledger: string, txid: number, _options?: Configuration): Promise<TransactionResponse> {
        const result = this.api.revertTransaction(ledger, txid, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List users
     * List users
     */
    public listUsers(_options?: Configuration): Promise<ListUsersResponse> {
        const result = this.api.listUsers(_options);
        return result.toPromise();
    }

    /**
     * Read user
     * Read user
     * @param userId User ID
     */
    public readUser(userId: string, _options?: Configuration): Promise<ReadUserResponse> {
        const result = this.api.readUser(userId, _options);
        return result.toPromise();
    }


}



import { ObservableWebhooksApi } from './ObservableAPI';

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";
export class PromiseWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Activate one config
     * @param id Config ID
     */
    public activateOneConfig(id: string, _options?: Configuration): Promise<GetManyConfigs200Response> {
        const result = this.api.activateOneConfig(id, _options);
        return result.toPromise();
    }

    /**
     * Change the signing secret of the endpoint of a config.  If not passed or empty, a secret is automatically generated.  The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding) 
     * Change the signing secret of a config
     * @param id Config ID
     * @param changeOneConfigSecretRequest 
     */
    public changeOneConfigSecret(id: string, changeOneConfigSecretRequest?: ChangeOneConfigSecretRequest, _options?: Configuration): Promise<GetManyConfigs200Response> {
        const result = this.api.changeOneConfigSecret(id, changeOneConfigSecretRequest, _options);
        return result.toPromise();
    }

    /**
     * Deactivate one config
     * @param id Config ID
     */
    public deactivateOneConfig(id: string, _options?: Configuration): Promise<GetManyConfigs200Response> {
        const result = this.api.deactivateOneConfig(id, _options);
        return result.toPromise();
    }

    /**
     * Delete one config
     * @param id Config ID
     */
    public deleteOneConfig(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOneConfig(id, _options);
        return result.toPromise();
    }

    /**
     * Sorted by updated date descending
     * Get many configs
     * @param id Optional filter by Config ID
     * @param endpoint Optional filter by endpoint URL
     */
    public getManyConfigs(id?: string, endpoint?: string, _options?: Configuration): Promise<GetManyConfigs200Response> {
        const result = this.api.getManyConfigs(id, endpoint, _options);
        return result.toPromise();
    }

    /**
     * Insert a new config.  The endpoint should be a valid https URL and be unique.  The secret is the endpoint's verification secret.  If not passed or empty, a secret is automatically generated.  The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)  All eventTypes are converted to lower-case when inserted. 
     * Insert a new config 
     * @param configUser 
     */
    public insertOneConfig(configUser: ConfigUser, _options?: Configuration): Promise<string> {
        const result = this.api.insertOneConfig(configUser, _options);
        return result.toPromise();
    }


}



