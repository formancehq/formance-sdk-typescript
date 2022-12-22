/**
 * Formance Stack API
 * Open, modular foundation for unique payments flows  # Introduction This API is documented in **OpenAPI format**.  # Authentication Formance Stack offers one forms of authentication:   - OAuth2 OAuth2 - an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. <SecurityDefinitions /> 
 *
 * OpenAPI spec version: v1.0.0-rc.1
 * Contact: support@formance.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TaskDescriptorStripeAllOfDescriptor } from '../models/TaskDescriptorStripeAllOfDescriptor';
import { HttpFile } from '../http/http';

export class TaskDescriptorStripe {
    /**
    * The connector code
    */
    'provider'?: string;
    /**
    * The date when the task was created
    */
    'createdAt'?: Date;
    /**
    * The task status
    */
    'status'?: TaskDescriptorStripeStatusEnum;
    /**
    * The error message if the task failed
    */
    'error'?: string;
    /**
    * The task state
    */
    'state'?: any;
    'descriptor'?: TaskDescriptorStripeAllOfDescriptor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
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
            "name": "status",
            "baseName": "status",
            "type": "TaskDescriptorStripeStatusEnum",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "any",
            "format": ""
        },
        {
            "name": "descriptor",
            "baseName": "descriptor",
            "type": "TaskDescriptorStripeAllOfDescriptor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TaskDescriptorStripe.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TaskDescriptorStripeStatusEnum = "stopped" | "pending" | "terminated" | "active" | "failed" ;

