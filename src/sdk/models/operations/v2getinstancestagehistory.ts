/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2GetInstanceStageHistoryRequest = {
    /**
     * The instance id
     */
    instanceID: string;
    /**
     * The stage number
     */
    number: number;
};

export type V2GetInstanceStageHistoryResponse = {
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
     * The workflow instance stage history
     */
    v2GetWorkflowInstanceHistoryStageResponse?:
        | shared.V2GetWorkflowInstanceHistoryStageResponse
        | undefined;
};

/** @internal */
export const V2GetInstanceStageHistoryRequest$inboundSchema: z.ZodType<
    V2GetInstanceStageHistoryRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    instanceID: z.string(),
    number: z.number().int(),
});

/** @internal */
export type V2GetInstanceStageHistoryRequest$Outbound = {
    instanceID: string;
    number: number;
};

/** @internal */
export const V2GetInstanceStageHistoryRequest$outboundSchema: z.ZodType<
    V2GetInstanceStageHistoryRequest$Outbound,
    z.ZodTypeDef,
    V2GetInstanceStageHistoryRequest
> = z.object({
    instanceID: z.string(),
    number: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetInstanceStageHistoryRequest$ {
    /** @deprecated use `V2GetInstanceStageHistoryRequest$inboundSchema` instead. */
    export const inboundSchema = V2GetInstanceStageHistoryRequest$inboundSchema;
    /** @deprecated use `V2GetInstanceStageHistoryRequest$outboundSchema` instead. */
    export const outboundSchema = V2GetInstanceStageHistoryRequest$outboundSchema;
    /** @deprecated use `V2GetInstanceStageHistoryRequest$Outbound` instead. */
    export type Outbound = V2GetInstanceStageHistoryRequest$Outbound;
}

/** @internal */
export const V2GetInstanceStageHistoryResponse$inboundSchema: z.ZodType<
    V2GetInstanceStageHistoryResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2GetWorkflowInstanceHistoryStageResponse:
            shared.V2GetWorkflowInstanceHistoryStageResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2GetWorkflowInstanceHistoryStageResponse: "v2GetWorkflowInstanceHistoryStageResponse",
        });
    });

/** @internal */
export type V2GetInstanceStageHistoryResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2GetWorkflowInstanceHistoryStageResponse?:
        | shared.V2GetWorkflowInstanceHistoryStageResponse$Outbound
        | undefined;
};

/** @internal */
export const V2GetInstanceStageHistoryResponse$outboundSchema: z.ZodType<
    V2GetInstanceStageHistoryResponse$Outbound,
    z.ZodTypeDef,
    V2GetInstanceStageHistoryResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2GetWorkflowInstanceHistoryStageResponse:
            shared.V2GetWorkflowInstanceHistoryStageResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2GetWorkflowInstanceHistoryStageResponse: "V2GetWorkflowInstanceHistoryStageResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetInstanceStageHistoryResponse$ {
    /** @deprecated use `V2GetInstanceStageHistoryResponse$inboundSchema` instead. */
    export const inboundSchema = V2GetInstanceStageHistoryResponse$inboundSchema;
    /** @deprecated use `V2GetInstanceStageHistoryResponse$outboundSchema` instead. */
    export const outboundSchema = V2GetInstanceStageHistoryResponse$outboundSchema;
    /** @deprecated use `V2GetInstanceStageHistoryResponse$Outbound` instead. */
    export type Outbound = V2GetInstanceStageHistoryResponse$Outbound;
}
