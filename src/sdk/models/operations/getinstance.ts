/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetInstanceRequest = {
    /**
     * The instance id
     */
    instanceID: string;
};

export type GetInstanceResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * General error
     */
    error?: shared.ErrorT | undefined;
    /**
     * The workflow instance
     */
    getWorkflowInstanceResponse?: shared.GetWorkflowInstanceResponse | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetInstanceRequest$ {
    export type Inbound = {
        instanceID: string;
    };

    export const inboundSchema: z.ZodType<GetInstanceRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInstanceRequest> = z
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
export namespace GetInstanceResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        GetWorkflowInstanceResponse?: shared.GetWorkflowInstanceResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetInstanceResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            GetWorkflowInstanceResponse:
                shared.GetWorkflowInstanceResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                ...(v.GetWorkflowInstanceResponse === undefined
                    ? null
                    : { getWorkflowInstanceResponse: v.GetWorkflowInstanceResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        GetWorkflowInstanceResponse?: shared.GetWorkflowInstanceResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInstanceResponse> = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            getWorkflowInstanceResponse:
                shared.GetWorkflowInstanceResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                ...(v.getWorkflowInstanceResponse === undefined
                    ? null
                    : { GetWorkflowInstanceResponse: v.getWorkflowInstanceResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
