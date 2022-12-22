export * from '../models/Account';
export * from '../models/AccountWithVolumesAndBalances';
export * from '../models/AddMetadataToAccount409Response';
export * from '../models/Attempt';
export * from '../models/AttemptResponse';
export * from '../models/BankingCircleConfig';
export * from '../models/ChangeOneConfigSecretRequest';
export * from '../models/Client';
export * from '../models/ClientAllOf';
export * from '../models/ClientOptions';
export * from '../models/ClientSecret';
export * from '../models/Config';
export * from '../models/ConfigInfo';
export * from '../models/ConfigInfoResponse';
export * from '../models/ConfigResponse';
export * from '../models/ConfigUser';
export * from '../models/ConnectorBaseInfo';
export * from '../models/ConnectorConfig';
export * from '../models/ConnectorTaskBase';
export * from '../models/Connectors';
export * from '../models/Contract';
export * from '../models/CreateClientResponse';
export * from '../models/CreateScopeResponse';
export * from '../models/CreateSecretResponse';
export * from '../models/CreateTransaction400Response';
export * from '../models/CreateTransaction409Response';
export * from '../models/CreateTransactions400Response';
export * from '../models/CurrencyCloudConfig';
export * from '../models/Cursor';
export * from '../models/DummyPayConfig';
export * from '../models/ErrorCode';
export * from '../models/ErrorResponse';
export * from '../models/GetAccount200Response';
export * from '../models/GetAccount400Response';
export * from '../models/GetBalances200Response';
export * from '../models/GetBalances200ResponseCursor';
export * from '../models/GetBalances200ResponseCursorAllOf';
export * from '../models/GetBalancesAggregated200Response';
export * from '../models/GetBalancesAggregated400Response';
export * from '../models/GetManyConfigs200Response';
export * from '../models/GetManyConfigs200ResponseCursor';
export * from '../models/GetManyConfigs200ResponseCursorAllOf';
export * from '../models/GetPaymentResponse';
export * from '../models/GetTransaction400Response';
export * from '../models/GetTransaction404Response';
export * from '../models/LedgerStorage';
export * from '../models/ListAccounts200Response';
export * from '../models/ListAccounts200ResponseCursor';
export * from '../models/ListAccounts200ResponseCursorAllOf';
export * from '../models/ListAccounts400Response';
export * from '../models/ListClientsResponse';
export * from '../models/ListConnectorTasks200ResponseInner';
export * from '../models/ListConnectorsConfigsResponse';
export * from '../models/ListConnectorsConfigsResponseConnector';
export * from '../models/ListConnectorsConfigsResponseConnectorKey';
export * from '../models/ListConnectorsResponse';
export * from '../models/ListPaymentsResponse';
export * from '../models/ListScopesResponse';
export * from '../models/ListTransactions200Response';
export * from '../models/ListTransactions200ResponseCursor';
export * from '../models/ListTransactions200ResponseCursorAllOf';
export * from '../models/ListUsersResponse';
export * from '../models/Mapping';
export * from '../models/MappingResponse';
export * from '../models/ModulrConfig';
export * from '../models/Payment';
export * from '../models/Posting';
export * from '../models/Query';
export * from '../models/ReadClientResponse';
export * from '../models/ReadUserResponse';
export * from '../models/Response';
export * from '../models/ResponseCursor';
export * from '../models/ResponseCursorTotal';
export * from '../models/RunScript400Response';
export * from '../models/Scope';
export * from '../models/ScopeAllOf';
export * from '../models/ScopeOptions';
export * from '../models/Script';
export * from '../models/ScriptResult';
export * from '../models/Secret';
export * from '../models/SecretAllOf';
export * from '../models/SecretOptions';
export * from '../models/ServerInfo';
export * from '../models/Stats';
export * from '../models/StatsResponse';
export * from '../models/StripeConfig';
export * from '../models/StripeTask';
export * from '../models/StripeTransferRequest';
export * from '../models/TaskDescriptorBankingCircle';
export * from '../models/TaskDescriptorBankingCircleAllOf';
export * from '../models/TaskDescriptorBankingCircleAllOfDescriptor';
export * from '../models/TaskDescriptorCurrencyCloud';
export * from '../models/TaskDescriptorCurrencyCloudAllOf';
export * from '../models/TaskDescriptorCurrencyCloudAllOfDescriptor';
export * from '../models/TaskDescriptorDummyPay';
export * from '../models/TaskDescriptorDummyPayAllOf';
export * from '../models/TaskDescriptorDummyPayAllOfDescriptor';
export * from '../models/TaskDescriptorModulr';
export * from '../models/TaskDescriptorModulrAllOf';
export * from '../models/TaskDescriptorModulrAllOfDescriptor';
export * from '../models/TaskDescriptorStripe';
export * from '../models/TaskDescriptorStripeAllOf';
export * from '../models/TaskDescriptorStripeAllOfDescriptor';
export * from '../models/TaskDescriptorWise';
export * from '../models/TaskDescriptorWiseAllOf';
export * from '../models/TaskDescriptorWiseAllOfDescriptor';
export * from '../models/Transaction';
export * from '../models/TransactionData';
export * from '../models/TransactionResponse';
export * from '../models/Transactions';
export * from '../models/TransactionsResponse';
export * from '../models/User';
export * from '../models/Volume';
export * from '../models/WebhooksConfig';
export * from '../models/WebhooksCursor';
export * from '../models/WiseConfig';

import { Account } from '../models/Account';
import { AccountWithVolumesAndBalances } from '../models/AccountWithVolumesAndBalances';
import { AddMetadataToAccount409Response } from '../models/AddMetadataToAccount409Response';
import { Attempt } from '../models/Attempt';
import { AttemptResponse } from '../models/AttemptResponse';
import { BankingCircleConfig } from '../models/BankingCircleConfig';
import { ChangeOneConfigSecretRequest } from '../models/ChangeOneConfigSecretRequest';
import { Client } from '../models/Client';
import { ClientAllOf } from '../models/ClientAllOf';
import { ClientOptions } from '../models/ClientOptions';
import { ClientSecret } from '../models/ClientSecret';
import { Config } from '../models/Config';
import { ConfigInfo } from '../models/ConfigInfo';
import { ConfigInfoResponse } from '../models/ConfigInfoResponse';
import { ConfigResponse } from '../models/ConfigResponse';
import { ConfigUser } from '../models/ConfigUser';
import { ConnectorBaseInfo } from '../models/ConnectorBaseInfo';
import { ConnectorConfig } from '../models/ConnectorConfig';
import { ConnectorTaskBase  , ConnectorTaskBaseStatusEnum     } from '../models/ConnectorTaskBase';
import { Connectors } from '../models/Connectors';
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
import { ErrorResponse   } from '../models/ErrorResponse';
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
import { ListConnectorTasks200ResponseInner  , ListConnectorTasks200ResponseInnerStatusEnum      } from '../models/ListConnectorTasks200ResponseInner';
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
import { Payment  , PaymentSchemeEnum   , PaymentTypeEnum        } from '../models/Payment';
import { Posting } from '../models/Posting';
import { Query } from '../models/Query';
import { ReadClientResponse } from '../models/ReadClientResponse';
import { ReadUserResponse } from '../models/ReadUserResponse';
import { Response } from '../models/Response';
import { ResponseCursor } from '../models/ResponseCursor';
import { ResponseCursorTotal } from '../models/ResponseCursorTotal';
import { RunScript400Response } from '../models/RunScript400Response';
import { Scope } from '../models/Scope';
import { ScopeAllOf } from '../models/ScopeAllOf';
import { ScopeOptions } from '../models/ScopeOptions';
import { Script } from '../models/Script';
import { ScriptResult , ScriptResultErrorCodeEnum     } from '../models/ScriptResult';
import { Secret } from '../models/Secret';
import { SecretAllOf } from '../models/SecretAllOf';
import { SecretOptions } from '../models/SecretOptions';
import { ServerInfo } from '../models/ServerInfo';
import { Stats } from '../models/Stats';
import { StatsResponse } from '../models/StatsResponse';
import { StripeConfig } from '../models/StripeConfig';
import { StripeTask } from '../models/StripeTask';
import { StripeTransferRequest } from '../models/StripeTransferRequest';
import { TaskDescriptorBankingCircle  , TaskDescriptorBankingCircleStatusEnum      } from '../models/TaskDescriptorBankingCircle';
import { TaskDescriptorBankingCircleAllOf } from '../models/TaskDescriptorBankingCircleAllOf';
import { TaskDescriptorBankingCircleAllOfDescriptor } from '../models/TaskDescriptorBankingCircleAllOfDescriptor';
import { TaskDescriptorCurrencyCloud  , TaskDescriptorCurrencyCloudStatusEnum      } from '../models/TaskDescriptorCurrencyCloud';
import { TaskDescriptorCurrencyCloudAllOf } from '../models/TaskDescriptorCurrencyCloudAllOf';
import { TaskDescriptorCurrencyCloudAllOfDescriptor } from '../models/TaskDescriptorCurrencyCloudAllOfDescriptor';
import { TaskDescriptorDummyPay  , TaskDescriptorDummyPayStatusEnum      } from '../models/TaskDescriptorDummyPay';
import { TaskDescriptorDummyPayAllOf } from '../models/TaskDescriptorDummyPayAllOf';
import { TaskDescriptorDummyPayAllOfDescriptor } from '../models/TaskDescriptorDummyPayAllOfDescriptor';
import { TaskDescriptorModulr  , TaskDescriptorModulrStatusEnum      } from '../models/TaskDescriptorModulr';
import { TaskDescriptorModulrAllOf } from '../models/TaskDescriptorModulrAllOf';
import { TaskDescriptorModulrAllOfDescriptor } from '../models/TaskDescriptorModulrAllOfDescriptor';
import { TaskDescriptorStripe  , TaskDescriptorStripeStatusEnum      } from '../models/TaskDescriptorStripe';
import { TaskDescriptorStripeAllOf } from '../models/TaskDescriptorStripeAllOf';
import { TaskDescriptorStripeAllOfDescriptor } from '../models/TaskDescriptorStripeAllOfDescriptor';
import { TaskDescriptorWise  , TaskDescriptorWiseStatusEnum      } from '../models/TaskDescriptorWise';
import { TaskDescriptorWiseAllOf } from '../models/TaskDescriptorWiseAllOf';
import { TaskDescriptorWiseAllOfDescriptor } from '../models/TaskDescriptorWiseAllOfDescriptor';
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

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "ConnectorTaskBaseStatusEnum",
    "Connectors",
    "ErrorCode",
    "ListConnectorTasks200ResponseInnerStatusEnum",
    "PaymentSchemeEnum",
    "PaymentTypeEnum",
    "ScriptResultErrorCodeEnum",
    "TaskDescriptorBankingCircleStatusEnum",
    "TaskDescriptorCurrencyCloudStatusEnum",
    "TaskDescriptorDummyPayStatusEnum",
    "TaskDescriptorModulrStatusEnum",
    "TaskDescriptorStripeStatusEnum",
    "TaskDescriptorWiseStatusEnum",
]);

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountWithVolumesAndBalances": AccountWithVolumesAndBalances,
    "AddMetadataToAccount409Response": AddMetadataToAccount409Response,
    "Attempt": Attempt,
    "AttemptResponse": AttemptResponse,
    "BankingCircleConfig": BankingCircleConfig,
    "ChangeOneConfigSecretRequest": ChangeOneConfigSecretRequest,
    "Client": Client,
    "ClientAllOf": ClientAllOf,
    "ClientOptions": ClientOptions,
    "ClientSecret": ClientSecret,
    "Config": Config,
    "ConfigInfo": ConfigInfo,
    "ConfigInfoResponse": ConfigInfoResponse,
    "ConfigResponse": ConfigResponse,
    "ConfigUser": ConfigUser,
    "ConnectorBaseInfo": ConnectorBaseInfo,
    "ConnectorConfig": ConnectorConfig,
    "ConnectorTaskBase": ConnectorTaskBase,
    "Contract": Contract,
    "CreateClientResponse": CreateClientResponse,
    "CreateScopeResponse": CreateScopeResponse,
    "CreateSecretResponse": CreateSecretResponse,
    "CreateTransaction400Response": CreateTransaction400Response,
    "CreateTransaction409Response": CreateTransaction409Response,
    "CreateTransactions400Response": CreateTransactions400Response,
    "CurrencyCloudConfig": CurrencyCloudConfig,
    "Cursor": Cursor,
    "DummyPayConfig": DummyPayConfig,
    "ErrorResponse": ErrorResponse,
    "GetAccount200Response": GetAccount200Response,
    "GetAccount400Response": GetAccount400Response,
    "GetBalances200Response": GetBalances200Response,
    "GetBalances200ResponseCursor": GetBalances200ResponseCursor,
    "GetBalances200ResponseCursorAllOf": GetBalances200ResponseCursorAllOf,
    "GetBalancesAggregated200Response": GetBalancesAggregated200Response,
    "GetBalancesAggregated400Response": GetBalancesAggregated400Response,
    "GetManyConfigs200Response": GetManyConfigs200Response,
    "GetManyConfigs200ResponseCursor": GetManyConfigs200ResponseCursor,
    "GetManyConfigs200ResponseCursorAllOf": GetManyConfigs200ResponseCursorAllOf,
    "GetPaymentResponse": GetPaymentResponse,
    "GetTransaction400Response": GetTransaction400Response,
    "GetTransaction404Response": GetTransaction404Response,
    "LedgerStorage": LedgerStorage,
    "ListAccounts200Response": ListAccounts200Response,
    "ListAccounts200ResponseCursor": ListAccounts200ResponseCursor,
    "ListAccounts200ResponseCursorAllOf": ListAccounts200ResponseCursorAllOf,
    "ListAccounts400Response": ListAccounts400Response,
    "ListClientsResponse": ListClientsResponse,
    "ListConnectorTasks200ResponseInner": ListConnectorTasks200ResponseInner,
    "ListConnectorsConfigsResponse": ListConnectorsConfigsResponse,
    "ListConnectorsConfigsResponseConnector": ListConnectorsConfigsResponseConnector,
    "ListConnectorsConfigsResponseConnectorKey": ListConnectorsConfigsResponseConnectorKey,
    "ListConnectorsResponse": ListConnectorsResponse,
    "ListPaymentsResponse": ListPaymentsResponse,
    "ListScopesResponse": ListScopesResponse,
    "ListTransactions200Response": ListTransactions200Response,
    "ListTransactions200ResponseCursor": ListTransactions200ResponseCursor,
    "ListTransactions200ResponseCursorAllOf": ListTransactions200ResponseCursorAllOf,
    "ListUsersResponse": ListUsersResponse,
    "Mapping": Mapping,
    "MappingResponse": MappingResponse,
    "ModulrConfig": ModulrConfig,
    "Payment": Payment,
    "Posting": Posting,
    "Query": Query,
    "ReadClientResponse": ReadClientResponse,
    "ReadUserResponse": ReadUserResponse,
    "Response": Response,
    "ResponseCursor": ResponseCursor,
    "ResponseCursorTotal": ResponseCursorTotal,
    "RunScript400Response": RunScript400Response,
    "Scope": Scope,
    "ScopeAllOf": ScopeAllOf,
    "ScopeOptions": ScopeOptions,
    "Script": Script,
    "ScriptResult": ScriptResult,
    "Secret": Secret,
    "SecretAllOf": SecretAllOf,
    "SecretOptions": SecretOptions,
    "ServerInfo": ServerInfo,
    "Stats": Stats,
    "StatsResponse": StatsResponse,
    "StripeConfig": StripeConfig,
    "StripeTask": StripeTask,
    "StripeTransferRequest": StripeTransferRequest,
    "TaskDescriptorBankingCircle": TaskDescriptorBankingCircle,
    "TaskDescriptorBankingCircleAllOf": TaskDescriptorBankingCircleAllOf,
    "TaskDescriptorBankingCircleAllOfDescriptor": TaskDescriptorBankingCircleAllOfDescriptor,
    "TaskDescriptorCurrencyCloud": TaskDescriptorCurrencyCloud,
    "TaskDescriptorCurrencyCloudAllOf": TaskDescriptorCurrencyCloudAllOf,
    "TaskDescriptorCurrencyCloudAllOfDescriptor": TaskDescriptorCurrencyCloudAllOfDescriptor,
    "TaskDescriptorDummyPay": TaskDescriptorDummyPay,
    "TaskDescriptorDummyPayAllOf": TaskDescriptorDummyPayAllOf,
    "TaskDescriptorDummyPayAllOfDescriptor": TaskDescriptorDummyPayAllOfDescriptor,
    "TaskDescriptorModulr": TaskDescriptorModulr,
    "TaskDescriptorModulrAllOf": TaskDescriptorModulrAllOf,
    "TaskDescriptorModulrAllOfDescriptor": TaskDescriptorModulrAllOfDescriptor,
    "TaskDescriptorStripe": TaskDescriptorStripe,
    "TaskDescriptorStripeAllOf": TaskDescriptorStripeAllOf,
    "TaskDescriptorStripeAllOfDescriptor": TaskDescriptorStripeAllOfDescriptor,
    "TaskDescriptorWise": TaskDescriptorWise,
    "TaskDescriptorWiseAllOf": TaskDescriptorWiseAllOf,
    "TaskDescriptorWiseAllOfDescriptor": TaskDescriptorWiseAllOfDescriptor,
    "Transaction": Transaction,
    "TransactionData": TransactionData,
    "TransactionResponse": TransactionResponse,
    "Transactions": Transactions,
    "TransactionsResponse": TransactionsResponse,
    "User": User,
    "Volume": Volume,
    "WebhooksConfig": WebhooksConfig,
    "WebhooksCursor": WebhooksCursor,
    "WiseConfig": WiseConfig,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
