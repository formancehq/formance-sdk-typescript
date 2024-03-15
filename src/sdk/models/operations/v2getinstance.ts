/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type V2GetInstanceRequest = {
    /**
     * The instance id
     */
    instanceID: string;
};

export type V2GetInstanceResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * General error
     */
    v2Error?: errors.V2Error | undefined;
    /**
     * The workflow instance
     */
    v2GetWorkflowInstanceResponse?: shared.V2GetWorkflowInstanceResponse | undefined;
};

/** @internal */
export namespace V2GetInstanceRequest$ {
    export type Inbound = {
        instanceID: string;
    };

    export const inboundSchema: z.ZodType<V2GetInstanceRequest, z.ZodTypeDef, Inbound> = z
        .object({
            instanceID: z.string(),
        })
        .transform((v) => {
            return {
                instanceID: v.instanceID,
            };
        });

    export type Outbound = {
        instanceID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetInstanceRequest> = z
        .object({
            instanceID: z.string(),
        })
        .transform((v) => {
            return {
                instanceID: v.instanceID,
            };
        });
}

/** @internal */
export namespace V2GetInstanceResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2Error?: errors.V2Error$.Inbound | undefined;
        V2GetWorkflowInstanceResponse?: shared.V2GetWorkflowInstanceResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2GetInstanceResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2Error: errors.V2Error$.inboundSchema.optional(),
            V2GetWorkflowInstanceResponse:
                shared.V2GetWorkflowInstanceResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2Error === undefined ? null : { v2Error: v.V2Error }),
                ...(v.V2GetWorkflowInstanceResponse === undefined
                    ? null
                    : { v2GetWorkflowInstanceResponse: v.V2GetWorkflowInstanceResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2Error?: errors.V2Error$.Outbound | undefined;
        V2GetWorkflowInstanceResponse?: shared.V2GetWorkflowInstanceResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetInstanceResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2Error: errors.V2Error$.outboundSchema.optional(),
            v2GetWorkflowInstanceResponse:
                shared.V2GetWorkflowInstanceResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2Error === undefined ? null : { V2Error: v.v2Error }),
                ...(v.v2GetWorkflowInstanceResponse === undefined
                    ? null
                    : { V2GetWorkflowInstanceResponse: v.v2GetWorkflowInstanceResponse }),
            };
        });
}
