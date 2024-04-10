/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetInstanceHistoryRequest = {
    /**
     * The instance id
     */
    instanceID: string;
};

export type GetInstanceHistoryResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The workflow instance history
     */
    getWorkflowInstanceHistoryResponse?: shared.GetWorkflowInstanceHistoryResponse | undefined;
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
export namespace GetInstanceHistoryRequest$ {
    export type Inbound = {
        instanceID: string;
    };

    export const inboundSchema: z.ZodType<GetInstanceHistoryRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInstanceHistoryRequest> = z
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
export namespace GetInstanceHistoryResponse$ {
    export type Inbound = {
        ContentType: string;
        GetWorkflowInstanceHistoryResponse?:
            | shared.GetWorkflowInstanceHistoryResponse$.Inbound
            | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetInstanceHistoryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            GetWorkflowInstanceHistoryResponse:
                shared.GetWorkflowInstanceHistoryResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.GetWorkflowInstanceHistoryResponse === undefined
                    ? null
                    : { getWorkflowInstanceHistoryResponse: v.GetWorkflowInstanceHistoryResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        GetWorkflowInstanceHistoryResponse?:
            | shared.GetWorkflowInstanceHistoryResponse$.Outbound
            | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInstanceHistoryResponse> = z
        .object({
            contentType: z.string(),
            getWorkflowInstanceHistoryResponse:
                shared.GetWorkflowInstanceHistoryResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.getWorkflowInstanceHistoryResponse === undefined
                    ? null
                    : { GetWorkflowInstanceHistoryResponse: v.getWorkflowInstanceHistoryResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
