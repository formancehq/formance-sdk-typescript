/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2GetInstanceHistoryRequest = {
    /**
     * The instance id
     */
    instanceID: string;
};

export type V2GetInstanceHistoryResponse = {
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
     * The workflow instance history
     */
    v2GetWorkflowInstanceHistoryResponse?: shared.V2GetWorkflowInstanceHistoryResponse | undefined;
};

/** @internal */
export const V2GetInstanceHistoryRequest$inboundSchema: z.ZodType<
    V2GetInstanceHistoryRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    instanceID: z.string(),
});

/** @internal */
export type V2GetInstanceHistoryRequest$Outbound = {
    instanceID: string;
};

/** @internal */
export const V2GetInstanceHistoryRequest$outboundSchema: z.ZodType<
    V2GetInstanceHistoryRequest$Outbound,
    z.ZodTypeDef,
    V2GetInstanceHistoryRequest
> = z.object({
    instanceID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetInstanceHistoryRequest$ {
    /** @deprecated use `V2GetInstanceHistoryRequest$inboundSchema` instead. */
    export const inboundSchema = V2GetInstanceHistoryRequest$inboundSchema;
    /** @deprecated use `V2GetInstanceHistoryRequest$outboundSchema` instead. */
    export const outboundSchema = V2GetInstanceHistoryRequest$outboundSchema;
    /** @deprecated use `V2GetInstanceHistoryRequest$Outbound` instead. */
    export type Outbound = V2GetInstanceHistoryRequest$Outbound;
}

/** @internal */
export const V2GetInstanceHistoryResponse$inboundSchema: z.ZodType<
    V2GetInstanceHistoryResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2GetWorkflowInstanceHistoryResponse:
            shared.V2GetWorkflowInstanceHistoryResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2GetWorkflowInstanceHistoryResponse: "v2GetWorkflowInstanceHistoryResponse",
        });
    });

/** @internal */
export type V2GetInstanceHistoryResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2GetWorkflowInstanceHistoryResponse?:
        | shared.V2GetWorkflowInstanceHistoryResponse$Outbound
        | undefined;
};

/** @internal */
export const V2GetInstanceHistoryResponse$outboundSchema: z.ZodType<
    V2GetInstanceHistoryResponse$Outbound,
    z.ZodTypeDef,
    V2GetInstanceHistoryResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2GetWorkflowInstanceHistoryResponse:
            shared.V2GetWorkflowInstanceHistoryResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2GetWorkflowInstanceHistoryResponse: "V2GetWorkflowInstanceHistoryResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetInstanceHistoryResponse$ {
    /** @deprecated use `V2GetInstanceHistoryResponse$inboundSchema` instead. */
    export const inboundSchema = V2GetInstanceHistoryResponse$inboundSchema;
    /** @deprecated use `V2GetInstanceHistoryResponse$outboundSchema` instead. */
    export const outboundSchema = V2GetInstanceHistoryResponse$outboundSchema;
    /** @deprecated use `V2GetInstanceHistoryResponse$Outbound` instead. */
    export type Outbound = V2GetInstanceHistoryResponse$Outbound;
}
