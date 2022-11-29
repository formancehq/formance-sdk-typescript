import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { ChangeOneConfigSecretRequest } from '../models/ChangeOneConfigSecretRequest';
import { Client } from '../models/Client';
import { ClientAllOf } from '../models/ClientAllOf';
import { ClientOptions } from '../models/ClientOptions';
import { ClientSecret } from '../models/ClientSecret';
import { Config } from '../models/Config';
import { ConfigInfo } from '../models/ConfigInfo';
import { ConfigInfoResponse } from '../models/ConfigInfoResponse';
import { ConfigUser } from '../models/ConfigUser';
import { Contract } from '../models/Contract';
import { CreateClientResponse } from '../models/CreateClientResponse';
import { CreateScopeResponse } from '../models/CreateScopeResponse';
import { CreateSecretResponse } from '../models/CreateSecretResponse';
import { CreateTransaction400Response } from '../models/CreateTransaction400Response';
import { CreateTransaction409Response } from '../models/CreateTransaction409Response';
import { CreateTransactions400Response } from '../models/CreateTransactions400Response';
import { Cursor } from '../models/Cursor';
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
import { GetTransaction400Response } from '../models/GetTransaction400Response';
import { GetTransaction404Response } from '../models/GetTransaction404Response';
import { LedgerStorage } from '../models/LedgerStorage';
import { ListAccounts200Response } from '../models/ListAccounts200Response';
import { ListAccounts200ResponseCursor } from '../models/ListAccounts200ResponseCursor';
import { ListAccounts200ResponseCursorAllOf } from '../models/ListAccounts200ResponseCursorAllOf';
import { ListAccounts400Response } from '../models/ListAccounts400Response';
import { ListClientsResponse } from '../models/ListClientsResponse';
import { ListScopesResponse } from '../models/ListScopesResponse';
import { ListTransactions200Response } from '../models/ListTransactions200Response';
import { ListTransactions200ResponseCursor } from '../models/ListTransactions200ResponseCursor';
import { ListTransactions200ResponseCursorAllOf } from '../models/ListTransactions200ResponseCursorAllOf';
import { ListUsersResponse } from '../models/ListUsersResponse';
import { Mapping } from '../models/Mapping';
import { MappingResponse } from '../models/MappingResponse';
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
import { Transaction } from '../models/Transaction';
import { TransactionData } from '../models/TransactionData';
import { TransactionResponse } from '../models/TransactionResponse';
import { Transactions } from '../models/Transactions';
import { TransactionsResponse } from '../models/TransactionsResponse';
import { User } from '../models/User';
import { Volume } from '../models/Volume';
import { WebhooksConfig } from '../models/WebhooksConfig';
import { WebhooksCursor } from '../models/WebhooksCursor';

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiAddMetadataToAccountRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof AccountsApiaddMetadataToAccount
     */
    ledger: string
    /**
     * Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     * @type string
     * @memberof AccountsApiaddMetadataToAccount
     */
    address: string
    /**
     * metadata
     * @type { [key: string]: any; }
     * @memberof AccountsApiaddMetadataToAccount
     */
    requestBody: { [key: string]: any; }
}

export interface AccountsApiCountAccountsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof AccountsApicountAccounts
     */
    ledger: string
    /**
     * Filter accounts by address pattern (regular expression placed between ^ and $).
     * @type string
     * @memberof AccountsApicountAccounts
     */
    address?: string
    /**
     * Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @type any
     * @memberof AccountsApicountAccounts
     */
    metadata?: any
}

export interface AccountsApiGetAccountRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof AccountsApigetAccount
     */
    ledger: string
    /**
     * Exact address of the account. It must match the following regular expressions pattern: &#x60;&#x60;&#x60; ^\\w+(:\\w+)*$ &#x60;&#x60;&#x60; 
     * @type string
     * @memberof AccountsApigetAccount
     */
    address: string
}

export interface AccountsApiListAccountsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof AccountsApilistAccounts
     */
    ledger: string
    /**
     * The maximum number of results to return per page
     * @type number
     * @memberof AccountsApilistAccounts
     */
    pageSize?: number
    /**
     * Pagination cursor, will return accounts after given address, in descending order.
     * @type string
     * @memberof AccountsApilistAccounts
     */
    after?: string
    /**
     * Filter accounts by address pattern (regular expression placed between ^ and $).
     * @type string
     * @memberof AccountsApilistAccounts
     */
    address?: string
    /**
     * Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @type any
     * @memberof AccountsApilistAccounts
     */
    metadata?: any
    /**
     * Filter accounts by their balance (default operator is gte)
     * @type number
     * @memberof AccountsApilistAccounts
     */
    balance?: number
    /**
     * Operator used for the filtering of balances can be greater than/equal, less than/equal, greater than, less than, or equal
     * @type &#39;gte&#39; | &#39;lte&#39; | &#39;gt&#39; | &#39;lt&#39; | &#39;e&#39;
     * @memberof AccountsApilistAccounts
     */
    balanceOperator?: 'gte' | 'lte' | 'gt' | 'lt' | 'e'
    /**
     * Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set. 
     * @type string
     * @memberof AccountsApilistAccounts
     */
    paginationToken?: string
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add metadata to an account.
     * @param param the request object
     */
    public addMetadataToAccount(param: AccountsApiAddMetadataToAccountRequest, options?: Configuration): Promise<void> {
        return this.api.addMetadataToAccount(param.ledger, param.address, param.requestBody,  options).toPromise();
    }

    /**
     * Count the accounts from a ledger.
     * @param param the request object
     */
    public countAccounts(param: AccountsApiCountAccountsRequest, options?: Configuration): Promise<void> {
        return this.api.countAccounts(param.ledger, param.address, param.metadata,  options).toPromise();
    }

    /**
     * Get account by its address.
     * @param param the request object
     */
    public getAccount(param: AccountsApiGetAccountRequest, options?: Configuration): Promise<GetAccount200Response> {
        return this.api.getAccount(param.ledger, param.address,  options).toPromise();
    }

    /**
     * List accounts from a ledger, sorted by address in descending order.
     * List accounts from a ledger.
     * @param param the request object
     */
    public listAccounts(param: AccountsApiListAccountsRequest, options?: Configuration): Promise<ListAccounts200Response> {
        return this.api.listAccounts(param.ledger, param.pageSize, param.after, param.address, param.metadata, param.balance, param.balanceOperator, param.paginationToken,  options).toPromise();
    }

}

import { ObservableBalancesApi } from "./ObservableAPI";
import { BalancesApiRequestFactory, BalancesApiResponseProcessor} from "../apis/BalancesApi";

export interface BalancesApiGetBalancesRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof BalancesApigetBalances
     */
    ledger: string
    /**
     * Filter balances involving given account, either as source or destination.
     * @type string
     * @memberof BalancesApigetBalances
     */
    address?: string
    /**
     * Pagination cursor, will return accounts after given address, in descending order.
     * @type string
     * @memberof BalancesApigetBalances
     */
    after?: string
    /**
     * Parameter used in pagination requests.  Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results.
     * @type string
     * @memberof BalancesApigetBalances
     */
    paginationToken?: string
}

export interface BalancesApiGetBalancesAggregatedRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof BalancesApigetBalancesAggregated
     */
    ledger: string
    /**
     * Filter balances involving given account, either as source or destination.
     * @type string
     * @memberof BalancesApigetBalancesAggregated
     */
    address?: string
}

export class ObjectBalancesApi {
    private api: ObservableBalancesApi

    public constructor(configuration: Configuration, requestFactory?: BalancesApiRequestFactory, responseProcessor?: BalancesApiResponseProcessor) {
        this.api = new ObservableBalancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the balances from a ledger's account
     * @param param the request object
     */
    public getBalances(param: BalancesApiGetBalancesRequest, options?: Configuration): Promise<GetBalances200Response> {
        return this.api.getBalances(param.ledger, param.address, param.after, param.paginationToken,  options).toPromise();
    }

    /**
     * Get the aggregated balances from selected accounts
     * @param param the request object
     */
    public getBalancesAggregated(param: BalancesApiGetBalancesAggregatedRequest, options?: Configuration): Promise<GetBalancesAggregated200Response> {
        return this.api.getBalancesAggregated(param.ledger, param.address,  options).toPromise();
    }

}

import { ObservableClientsApi } from "./ObservableAPI";
import { ClientsApiRequestFactory, ClientsApiResponseProcessor} from "../apis/ClientsApi";

export interface ClientsApiAddScopeToClientRequest {
    /**
     * Client ID
     * @type string
     * @memberof ClientsApiaddScopeToClient
     */
    clientId: string
    /**
     * Scope ID
     * @type string
     * @memberof ClientsApiaddScopeToClient
     */
    scopeId: string
}

export interface ClientsApiCreateClientRequest {
    /**
     * 
     * @type ClientOptions
     * @memberof ClientsApicreateClient
     */
    body?: ClientOptions
}

export interface ClientsApiCreateSecretRequest {
    /**
     * Client ID
     * @type string
     * @memberof ClientsApicreateSecret
     */
    clientId: string
    /**
     * 
     * @type SecretOptions
     * @memberof ClientsApicreateSecret
     */
    body?: SecretOptions
}

export interface ClientsApiDeleteClientRequest {
    /**
     * Client ID
     * @type string
     * @memberof ClientsApideleteClient
     */
    clientId: string
}

export interface ClientsApiDeleteScopeFromClientRequest {
    /**
     * Client ID
     * @type string
     * @memberof ClientsApideleteScopeFromClient
     */
    clientId: string
    /**
     * Scope ID
     * @type string
     * @memberof ClientsApideleteScopeFromClient
     */
    scopeId: string
}

export interface ClientsApiDeleteSecretRequest {
    /**
     * Client ID
     * @type string
     * @memberof ClientsApideleteSecret
     */
    clientId: string
    /**
     * Secret ID
     * @type string
     * @memberof ClientsApideleteSecret
     */
    secretId: string
}

export interface ClientsApiListClientsRequest {
}

export interface ClientsApiReadClientRequest {
    /**
     * Client ID
     * @type string
     * @memberof ClientsApireadClient
     */
    clientId: string
}

export interface ClientsApiUpdateClientRequest {
    /**
     * Client ID
     * @type string
     * @memberof ClientsApiupdateClient
     */
    clientId: string
    /**
     * 
     * @type ClientOptions
     * @memberof ClientsApiupdateClient
     */
    body?: ClientOptions
}

export class ObjectClientsApi {
    private api: ObservableClientsApi

    public constructor(configuration: Configuration, requestFactory?: ClientsApiRequestFactory, responseProcessor?: ClientsApiResponseProcessor) {
        this.api = new ObservableClientsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add scope to client
     * @param param the request object
     */
    public addScopeToClient(param: ClientsApiAddScopeToClientRequest, options?: Configuration): Promise<void> {
        return this.api.addScopeToClient(param.clientId, param.scopeId,  options).toPromise();
    }

    /**
     * Create client
     * @param param the request object
     */
    public createClient(param: ClientsApiCreateClientRequest = {}, options?: Configuration): Promise<CreateClientResponse> {
        return this.api.createClient(param.body,  options).toPromise();
    }

    /**
     * Add a secret to a client
     * @param param the request object
     */
    public createSecret(param: ClientsApiCreateSecretRequest, options?: Configuration): Promise<CreateSecretResponse> {
        return this.api.createSecret(param.clientId, param.body,  options).toPromise();
    }

    /**
     * Delete client
     * @param param the request object
     */
    public deleteClient(param: ClientsApiDeleteClientRequest, options?: Configuration): Promise<void> {
        return this.api.deleteClient(param.clientId,  options).toPromise();
    }

    /**
     * Delete scope from client
     * @param param the request object
     */
    public deleteScopeFromClient(param: ClientsApiDeleteScopeFromClientRequest, options?: Configuration): Promise<void> {
        return this.api.deleteScopeFromClient(param.clientId, param.scopeId,  options).toPromise();
    }

    /**
     * Delete a secret from a client
     * @param param the request object
     */
    public deleteSecret(param: ClientsApiDeleteSecretRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSecret(param.clientId, param.secretId,  options).toPromise();
    }

    /**
     * List clients
     * @param param the request object
     */
    public listClients(param: ClientsApiListClientsRequest = {}, options?: Configuration): Promise<ListClientsResponse> {
        return this.api.listClients( options).toPromise();
    }

    /**
     * Read client
     * @param param the request object
     */
    public readClient(param: ClientsApiReadClientRequest, options?: Configuration): Promise<ReadClientResponse> {
        return this.api.readClient(param.clientId,  options).toPromise();
    }

    /**
     * Update client
     * @param param the request object
     */
    public updateClient(param: ClientsApiUpdateClientRequest, options?: Configuration): Promise<CreateClientResponse> {
        return this.api.updateClient(param.clientId, param.body,  options).toPromise();
    }

}

import { ObservableMappingApi } from "./ObservableAPI";
import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";

export interface MappingApiGetMappingRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof MappingApigetMapping
     */
    ledger: string
}

export interface MappingApiUpdateMappingRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof MappingApiupdateMapping
     */
    ledger: string
    /**
     * 
     * @type Mapping
     * @memberof MappingApiupdateMapping
     */
    mapping: Mapping
}

export class ObjectMappingApi {
    private api: ObservableMappingApi

    public constructor(configuration: Configuration, requestFactory?: MappingApiRequestFactory, responseProcessor?: MappingApiResponseProcessor) {
        this.api = new ObservableMappingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the mapping of a ledger.
     * @param param the request object
     */
    public getMapping(param: MappingApiGetMappingRequest, options?: Configuration): Promise<MappingResponse> {
        return this.api.getMapping(param.ledger,  options).toPromise();
    }

    /**
     * Update the mapping of a ledger.
     * @param param the request object
     */
    public updateMapping(param: MappingApiUpdateMappingRequest, options?: Configuration): Promise<MappingResponse> {
        return this.api.updateMapping(param.ledger, param.mapping,  options).toPromise();
    }

}

import { ObservableScopesApi } from "./ObservableAPI";
import { ScopesApiRequestFactory, ScopesApiResponseProcessor} from "../apis/ScopesApi";

export interface ScopesApiAddTransientScopeRequest {
    /**
     * Scope ID
     * @type string
     * @memberof ScopesApiaddTransientScope
     */
    scopeId: string
    /**
     * Transient scope ID
     * @type string
     * @memberof ScopesApiaddTransientScope
     */
    transientScopeId: string
}

export interface ScopesApiCreateScopeRequest {
    /**
     * 
     * @type ScopeOptions
     * @memberof ScopesApicreateScope
     */
    body?: ScopeOptions
}

export interface ScopesApiDeleteScopeRequest {
    /**
     * Scope ID
     * @type string
     * @memberof ScopesApideleteScope
     */
    scopeId: string
}

export interface ScopesApiDeleteTransientScopeRequest {
    /**
     * Scope ID
     * @type string
     * @memberof ScopesApideleteTransientScope
     */
    scopeId: string
    /**
     * Transient scope ID
     * @type string
     * @memberof ScopesApideleteTransientScope
     */
    transientScopeId: string
}

export interface ScopesApiListScopesRequest {
}

export interface ScopesApiReadScopeRequest {
    /**
     * Scope ID
     * @type string
     * @memberof ScopesApireadScope
     */
    scopeId: string
}

export interface ScopesApiUpdateScopeRequest {
    /**
     * Scope ID
     * @type string
     * @memberof ScopesApiupdateScope
     */
    scopeId: string
    /**
     * 
     * @type ScopeOptions
     * @memberof ScopesApiupdateScope
     */
    body?: ScopeOptions
}

export class ObjectScopesApi {
    private api: ObservableScopesApi

    public constructor(configuration: Configuration, requestFactory?: ScopesApiRequestFactory, responseProcessor?: ScopesApiResponseProcessor) {
        this.api = new ObservableScopesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a transient scope to a scope
     * Add a transient scope to a scope
     * @param param the request object
     */
    public addTransientScope(param: ScopesApiAddTransientScopeRequest, options?: Configuration): Promise<void> {
        return this.api.addTransientScope(param.scopeId, param.transientScopeId,  options).toPromise();
    }

    /**
     * Create scope
     * Create scope
     * @param param the request object
     */
    public createScope(param: ScopesApiCreateScopeRequest = {}, options?: Configuration): Promise<CreateScopeResponse> {
        return this.api.createScope(param.body,  options).toPromise();
    }

    /**
     * Delete scope
     * Delete scope
     * @param param the request object
     */
    public deleteScope(param: ScopesApiDeleteScopeRequest, options?: Configuration): Promise<void> {
        return this.api.deleteScope(param.scopeId,  options).toPromise();
    }

    /**
     * Delete a transient scope from a scope
     * Delete a transient scope from a scope
     * @param param the request object
     */
    public deleteTransientScope(param: ScopesApiDeleteTransientScopeRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTransientScope(param.scopeId, param.transientScopeId,  options).toPromise();
    }

    /**
     * List Scopes
     * List scopes
     * @param param the request object
     */
    public listScopes(param: ScopesApiListScopesRequest = {}, options?: Configuration): Promise<ListScopesResponse> {
        return this.api.listScopes( options).toPromise();
    }

    /**
     * Read scope
     * Read scope
     * @param param the request object
     */
    public readScope(param: ScopesApiReadScopeRequest, options?: Configuration): Promise<CreateScopeResponse> {
        return this.api.readScope(param.scopeId,  options).toPromise();
    }

    /**
     * Update scope
     * Update scope
     * @param param the request object
     */
    public updateScope(param: ScopesApiUpdateScopeRequest, options?: Configuration): Promise<CreateScopeResponse> {
        return this.api.updateScope(param.scopeId, param.body,  options).toPromise();
    }

}

import { ObservableScriptApi } from "./ObservableAPI";
import { ScriptApiRequestFactory, ScriptApiResponseProcessor} from "../apis/ScriptApi";

export interface ScriptApiRunScriptRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof ScriptApirunScript
     */
    ledger: string
    /**
     * 
     * @type Script
     * @memberof ScriptApirunScript
     */
    script: Script
    /**
     * Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     * @type boolean
     * @memberof ScriptApirunScript
     */
    preview?: boolean
}

export class ObjectScriptApi {
    private api: ObservableScriptApi

    public constructor(configuration: Configuration, requestFactory?: ScriptApiRequestFactory, responseProcessor?: ScriptApiResponseProcessor) {
        this.api = new ObservableScriptApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Execute a Numscript.
     * @param param the request object
     */
    public runScript(param: ScriptApiRunScriptRequest, options?: Configuration): Promise<ScriptResult> {
        return this.api.runScript(param.ledger, param.script, param.preview,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiSearchRequest {
    /**
     * 
     * @type Query
     * @memberof SearchApisearch
     */
    query: Query
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search with Query
     * Search
     * @param param the request object
     */
    public search(param: SearchApiSearchRequest, options?: Configuration): Promise<void> {
        return this.api.search(param.query,  options).toPromise();
    }

}

import { ObservableServerApi } from "./ObservableAPI";
import { ServerApiRequestFactory, ServerApiResponseProcessor} from "../apis/ServerApi";

export interface ServerApiGetInfoRequest {
}

export class ObjectServerApi {
    private api: ObservableServerApi

    public constructor(configuration: Configuration, requestFactory?: ServerApiRequestFactory, responseProcessor?: ServerApiResponseProcessor) {
        this.api = new ObservableServerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Show server information.
     * @param param the request object
     */
    public getInfo(param: ServerApiGetInfoRequest = {}, options?: Configuration): Promise<ConfigInfoResponse> {
        return this.api.getInfo( options).toPromise();
    }

}

import { ObservableStatsApi } from "./ObservableAPI";
import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi";

export interface StatsApiReadStatsRequest {
    /**
     * name of the ledger
     * @type string
     * @memberof StatsApireadStats
     */
    ledger: string
}

export class ObjectStatsApi {
    private api: ObservableStatsApi

    public constructor(configuration: Configuration, requestFactory?: StatsApiRequestFactory, responseProcessor?: StatsApiResponseProcessor) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get ledger stats (aggregate metrics on accounts and transactions) The stats for account 
     * Get Stats
     * @param param the request object
     */
    public readStats(param: StatsApiReadStatsRequest, options?: Configuration): Promise<StatsResponse> {
        return this.api.readStats(param.ledger,  options).toPromise();
    }

}

import { ObservableTransactionsApi } from "./ObservableAPI";
import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";

export interface TransactionsApiAddMetadataOnTransactionRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApiaddMetadataOnTransaction
     */
    ledger: string
    /**
     * Transaction ID.
     * @type number
     * @memberof TransactionsApiaddMetadataOnTransaction
     */
    txid: number
    /**
     * metadata
     * @type { [key: string]: any; }
     * @memberof TransactionsApiaddMetadataOnTransaction
     */
    requestBody?: { [key: string]: any; }
}

export interface TransactionsApiCountTransactionsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    ledger: string
    /**
     * Filter transactions by reference field.
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    reference?: string
    /**
     * Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $).
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    account?: string
    /**
     * Filter transactions with postings involving given account at source (regular expression placed between ^ and $).
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    source?: string
    /**
     * Filter transactions with postings involving given account at destination (regular expression placed between ^ and $).
     * @type string
     * @memberof TransactionsApicountTransactions
     */
    destination?: string
    /**
     * Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @type any
     * @memberof TransactionsApicountTransactions
     */
    metadata?: any
}

export interface TransactionsApiCreateTransactionRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApicreateTransaction
     */
    ledger: string
    /**
     * The request body must contain one of the following objects:   - &#x60;postings&#x60;: suitable for simple transactions   - &#x60;script&#x60;: enabling more complex transactions with Numscript 
     * @type PostTransaction
     * @memberof TransactionsApicreateTransaction
     */
    postTransaction: PostTransaction
    /**
     * Set the preview mode. Preview mode doesn&#39;t add the logs to the database or publish a message to the message broker.
     * @type boolean
     * @memberof TransactionsApicreateTransaction
     */
    preview?: boolean
}

export interface TransactionsApiCreateTransactionsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApicreateTransactions
     */
    ledger: string
    /**
     * 
     * @type Transactions
     * @memberof TransactionsApicreateTransactions
     */
    transactions: Transactions
}

export interface TransactionsApiGetTransactionRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApigetTransaction
     */
    ledger: string
    /**
     * Transaction ID.
     * @type number
     * @memberof TransactionsApigetTransaction
     */
    txid: number
}

export interface TransactionsApiListTransactionsRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    ledger: string
    /**
     * The maximum number of results to return per page
     * @type number
     * @memberof TransactionsApilistTransactions
     */
    pageSize?: number
    /**
     * Pagination cursor, will return transactions after given txid (in descending order).
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    after?: string
    /**
     * Find transactions by reference field.
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    reference?: string
    /**
     * Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $).
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    account?: string
    /**
     * Filter transactions with postings involving given account at source (regular expression placed between ^ and $).
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    source?: string
    /**
     * Filter transactions with postings involving given account at destination (regular expression placed between ^ and $).
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    destination?: string
    /**
     * Filter transactions that occurred after this timestamp. The format is RFC3339 and is inclusive (for example, 12:00:01 includes the first second of the minute). 
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    startTime?: string
    /**
     * Filter transactions that occurred before this timestamp. The format is RFC3339 and is exclusive (for example, 12:00:01 excludes the first second of the minute). 
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    endTime?: string
    /**
     * Parameter used in pagination requests. Maximum page size is set to 15. Set to the value of next for the next page of results.  Set to the value of previous for the previous page of results. No other parameters can be set when the pagination token is set. 
     * @type string
     * @memberof TransactionsApilistTransactions
     */
    paginationToken?: string
    /**
     * Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     * @type any
     * @memberof TransactionsApilistTransactions
     */
    metadata?: any
}

export interface TransactionsApiRevertTransactionRequest {
    /**
     * Name of the ledger.
     * @type string
     * @memberof TransactionsApirevertTransaction
     */
    ledger: string
    /**
     * Transaction ID.
     * @type number
     * @memberof TransactionsApirevertTransaction
     */
    txid: number
}

export class ObjectTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionsApiRequestFactory, responseProcessor?: TransactionsApiResponseProcessor) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Set the metadata of a transaction by its ID.
     * @param param the request object
     */
    public addMetadataOnTransaction(param: TransactionsApiAddMetadataOnTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.addMetadataOnTransaction(param.ledger, param.txid, param.requestBody,  options).toPromise();
    }

    /**
     * Count the transactions from a ledger.
     * @param param the request object
     */
    public countTransactions(param: TransactionsApiCountTransactionsRequest, options?: Configuration): Promise<void> {
        return this.api.countTransactions(param.ledger, param.reference, param.account, param.source, param.destination, param.metadata,  options).toPromise();
    }

    /**
     * Create a new transaction to a ledger.
     * @param param the request object
     */
    public createTransaction(param: TransactionsApiCreateTransactionRequest, options?: Configuration): Promise<TransactionsResponse> {
        return this.api.createTransaction(param.ledger, param.postTransaction, param.preview,  options).toPromise();
    }

    /**
     * Create a new batch of transactions to a ledger.
     * @param param the request object
     */
    public createTransactions(param: TransactionsApiCreateTransactionsRequest, options?: Configuration): Promise<TransactionsResponse> {
        return this.api.createTransactions(param.ledger, param.transactions,  options).toPromise();
    }

    /**
     * Get transaction from a ledger by its ID.
     * @param param the request object
     */
    public getTransaction(param: TransactionsApiGetTransactionRequest, options?: Configuration): Promise<TransactionResponse> {
        return this.api.getTransaction(param.ledger, param.txid,  options).toPromise();
    }

    /**
     * List transactions from a ledger, sorted by txid in descending order.
     * List transactions from a ledger.
     * @param param the request object
     */
    public listTransactions(param: TransactionsApiListTransactionsRequest, options?: Configuration): Promise<ListTransactions200Response> {
        return this.api.listTransactions(param.ledger, param.pageSize, param.after, param.reference, param.account, param.source, param.destination, param.startTime, param.endTime, param.paginationToken, param.metadata,  options).toPromise();
    }

    /**
     * Revert a ledger transaction by its ID.
     * @param param the request object
     */
    public revertTransaction(param: TransactionsApiRevertTransactionRequest, options?: Configuration): Promise<TransactionResponse> {
        return this.api.revertTransaction(param.ledger, param.txid,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiListUsersRequest {
}

export interface UsersApiReadUserRequest {
    /**
     * User ID
     * @type string
     * @memberof UsersApireadUser
     */
    userId: string
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List users
     * List users
     * @param param the request object
     */
    public listUsers(param: UsersApiListUsersRequest = {}, options?: Configuration): Promise<ListUsersResponse> {
        return this.api.listUsers( options).toPromise();
    }

    /**
     * Read user
     * Read user
     * @param param the request object
     */
    public readUser(param: UsersApiReadUserRequest, options?: Configuration): Promise<ReadUserResponse> {
        return this.api.readUser(param.userId,  options).toPromise();
    }

}

import { ObservableWebhooksApi } from "./ObservableAPI";
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";

export interface WebhooksApiActivateOneConfigRequest {
    /**
     * Config ID
     * @type string
     * @memberof WebhooksApiactivateOneConfig
     */
    id: string
}

export interface WebhooksApiChangeOneConfigSecretRequest {
    /**
     * Config ID
     * @type string
     * @memberof WebhooksApichangeOneConfigSecret
     */
    id: string
    /**
     * 
     * @type ChangeOneConfigSecretRequest
     * @memberof WebhooksApichangeOneConfigSecret
     */
    changeOneConfigSecretRequest?: ChangeOneConfigSecretRequest
}

export interface WebhooksApiDeactivateOneConfigRequest {
    /**
     * Config ID
     * @type string
     * @memberof WebhooksApideactivateOneConfig
     */
    id: string
}

export interface WebhooksApiDeleteOneConfigRequest {
    /**
     * Config ID
     * @type string
     * @memberof WebhooksApideleteOneConfig
     */
    id: string
}

export interface WebhooksApiGetManyConfigsRequest {
    /**
     * Optional filter by Config ID
     * @type string
     * @memberof WebhooksApigetManyConfigs
     */
    id?: string
    /**
     * Optional filter by endpoint URL
     * @type string
     * @memberof WebhooksApigetManyConfigs
     */
    endpoint?: string
}

export interface WebhooksApiInsertOneConfigRequest {
    /**
     * 
     * @type ConfigUser
     * @memberof WebhooksApiinsertOneConfig
     */
    configUser: ConfigUser
}

export class ObjectWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Activate one config
     * @param param the request object
     */
    public activateOneConfig(param: WebhooksApiActivateOneConfigRequest, options?: Configuration): Promise<GetManyConfigs200Response> {
        return this.api.activateOneConfig(param.id,  options).toPromise();
    }

    /**
     * Change the signing secret of the endpoint of a config.  If not passed or empty, a secret is automatically generated.  The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding) 
     * Change the signing secret of a config
     * @param param the request object
     */
    public changeOneConfigSecret(param: WebhooksApiChangeOneConfigSecretRequest, options?: Configuration): Promise<GetManyConfigs200Response> {
        return this.api.changeOneConfigSecret(param.id, param.changeOneConfigSecretRequest,  options).toPromise();
    }

    /**
     * Deactivate one config
     * @param param the request object
     */
    public deactivateOneConfig(param: WebhooksApiDeactivateOneConfigRequest, options?: Configuration): Promise<GetManyConfigs200Response> {
        return this.api.deactivateOneConfig(param.id,  options).toPromise();
    }

    /**
     * Delete one config
     * @param param the request object
     */
    public deleteOneConfig(param: WebhooksApiDeleteOneConfigRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOneConfig(param.id,  options).toPromise();
    }

    /**
     * Sorted by updated date descending
     * Get many configs
     * @param param the request object
     */
    public getManyConfigs(param: WebhooksApiGetManyConfigsRequest = {}, options?: Configuration): Promise<GetManyConfigs200Response> {
        return this.api.getManyConfigs(param.id, param.endpoint,  options).toPromise();
    }

    /**
     * Insert a new config.  The endpoint should be a valid https URL and be unique.  The secret is the endpoint's verification secret.  If not passed or empty, a secret is automatically generated.  The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)  All eventTypes are converted to lower-case when inserted. 
     * Insert a new config 
     * @param param the request object
     */
    public insertOneConfig(param: WebhooksApiInsertOneConfigRequest, options?: Configuration): Promise<string> {
        return this.api.insertOneConfig(param.configUser,  options).toPromise();
    }

}
