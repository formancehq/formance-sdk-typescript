/**
 * Formance Stack API
 * Open, modular foundation for unique payments flows  # Introduction This API is documented in **OpenAPI format**.  # Authentication Formance Stack offers one forms of authentication:   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. <SecurityDefinitions /> 
 *
 * OpenAPI spec version: v1.0.20230228
 * Contact: support@formance.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Connector } from '../models/Connector';
import { PaymentAdjustment } from '../models/PaymentAdjustment';
import { PaymentMetadata } from '../models/PaymentMetadata';
import { PaymentStatus } from '../models/PaymentStatus';
import { HttpFile } from '../http/http';

export class Payment {
    'id': string;
    'reference': string;
    'accountID': string;
    'type': PaymentTypeEnum;
    'provider': Connector;
    'status': PaymentStatus;
    'initialAmount': number;
    'scheme': PaymentSchemeEnum;
    'asset': string;
    'createdAt': Date;
    'raw': any;
    'adjustments': Array<PaymentAdjustment>;
    'metadata': PaymentMetadata;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountID",
            "baseName": "accountID",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentTypeEnum",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "Connector",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentStatus",
            "format": ""
        },
        {
            "name": "initialAmount",
            "baseName": "initialAmount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "PaymentSchemeEnum",
            "format": ""
        },
        {
            "name": "asset",
            "baseName": "asset",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "raw",
            "baseName": "raw",
            "type": "any",
            "format": ""
        },
        {
            "name": "adjustments",
            "baseName": "adjustments",
            "type": "Array<PaymentAdjustment>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "PaymentMetadata",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Payment.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PaymentTypeEnum = "PAY-IN" | "PAYOUT" | "TRANSFER" | "OTHER" ;
export type PaymentSchemeEnum = "visa" | "mastercard" | "amex" | "diners" | "discover" | "jcb" | "unionpay" | "sepa debit" | "sepa credit" | "sepa" | "apple pay" | "google pay" | "a2a" | "ach debit" | "ach" | "rtp" | "unknown" | "other" ;

