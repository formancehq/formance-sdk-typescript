/**
 * Formance Stack API
 * Open, modular foundation for unique payments flows  # Introduction This API is documented in **OpenAPI format**.  # Authentication Formance Stack offers one forms of authentication:   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. <SecurityDefinitions /> 
 *
 * OpenAPI spec version: v1.0.0-rc.3
 * Contact: support@formance.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResponseCursor } from '../models/ResponseCursor';
import { HttpFile } from '../http/http';

export class Response {
    /**
    * The payload
    */
    'data'?: any;
    'cursor'?: ResponseCursor;
    /**
    * The kind of the object, either \"TRANSACTION\" or \"META\"
    */
    'kind'?: string;
    /**
    * The ledger
    */
    'ledger'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "ResponseCursor",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "ledger",
            "baseName": "ledger",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Response.attributeTypeMap;
    }

    public constructor() {
    }
}

