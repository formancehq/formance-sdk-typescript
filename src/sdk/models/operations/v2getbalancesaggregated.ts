/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2GetBalancesAggregatedRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    pit?: Date | undefined;
    query?: { [k: string]: any } | undefined;
    /**
     * Use insertion date instead of effective date
     */
    useInsertionDate?: boolean | undefined;
};

export type V2GetBalancesAggregatedResponse = {
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
     * OK
     */
    v2AggregateBalancesResponse?: shared.V2AggregateBalancesResponse | undefined;
};

/** @internal */
export const V2GetBalancesAggregatedRequest$inboundSchema: z.ZodType<
    V2GetBalancesAggregatedRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    ledger: z.string(),
    pit: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    query: z.record(z.any()).optional(),
    useInsertionDate: z.boolean().optional(),
});

/** @internal */
export type V2GetBalancesAggregatedRequest$Outbound = {
    ledger: string;
    pit?: string | undefined;
    query?: { [k: string]: any } | undefined;
    useInsertionDate?: boolean | undefined;
};

/** @internal */
export const V2GetBalancesAggregatedRequest$outboundSchema: z.ZodType<
    V2GetBalancesAggregatedRequest$Outbound,
    z.ZodTypeDef,
    V2GetBalancesAggregatedRequest
> = z.object({
    ledger: z.string(),
    pit: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    query: z.record(z.any()).optional(),
    useInsertionDate: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetBalancesAggregatedRequest$ {
    /** @deprecated use `V2GetBalancesAggregatedRequest$inboundSchema` instead. */
    export const inboundSchema = V2GetBalancesAggregatedRequest$inboundSchema;
    /** @deprecated use `V2GetBalancesAggregatedRequest$outboundSchema` instead. */
    export const outboundSchema = V2GetBalancesAggregatedRequest$outboundSchema;
    /** @deprecated use `V2GetBalancesAggregatedRequest$Outbound` instead. */
    export type Outbound = V2GetBalancesAggregatedRequest$Outbound;
}

/** @internal */
export const V2GetBalancesAggregatedResponse$inboundSchema: z.ZodType<
    V2GetBalancesAggregatedResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2AggregateBalancesResponse: shared.V2AggregateBalancesResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2AggregateBalancesResponse: "v2AggregateBalancesResponse",
        });
    });

/** @internal */
export type V2GetBalancesAggregatedResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2AggregateBalancesResponse?: shared.V2AggregateBalancesResponse$Outbound | undefined;
};

/** @internal */
export const V2GetBalancesAggregatedResponse$outboundSchema: z.ZodType<
    V2GetBalancesAggregatedResponse$Outbound,
    z.ZodTypeDef,
    V2GetBalancesAggregatedResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2AggregateBalancesResponse: shared.V2AggregateBalancesResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2AggregateBalancesResponse: "V2AggregateBalancesResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetBalancesAggregatedResponse$ {
    /** @deprecated use `V2GetBalancesAggregatedResponse$inboundSchema` instead. */
    export const inboundSchema = V2GetBalancesAggregatedResponse$inboundSchema;
    /** @deprecated use `V2GetBalancesAggregatedResponse$outboundSchema` instead. */
    export const outboundSchema = V2GetBalancesAggregatedResponse$outboundSchema;
    /** @deprecated use `V2GetBalancesAggregatedResponse$Outbound` instead. */
    export type Outbound = V2GetBalancesAggregatedResponse$Outbound;
}
