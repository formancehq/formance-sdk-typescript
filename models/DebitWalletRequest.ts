/**
 * Formance Stack API
 * Open, modular foundation for unique payments flows  # Introduction This API is documented in **OpenAPI format**.  # Authentication Formance Stack offers one forms of authentication:   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. <SecurityDefinitions /> 
 *
 * OpenAPI spec version: develop
 * Contact: support@formance.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Monetary } from '../models/Monetary';
import { Subject } from '../models/Subject';
import { HttpFile } from '../http/http';

export class DebitWalletRequest {
    'amount': Monetary;
    /**
    * Set to true to create a pending hold. If false, the wallet will be debited immediately.
    */
    'pending'?: boolean;
    /**
    * Metadata associated with the wallet.
    */
    'metadata'?: { [key: string]: any; };
    'description'?: string;
    'destination'?: Subject;
    'balances'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Monetary",
            "format": ""
        },
        {
            "name": "pending",
            "baseName": "pending",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "Subject",
            "format": ""
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DebitWalletRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

