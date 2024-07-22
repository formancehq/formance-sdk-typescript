/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type V2CountTransactionsRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    pit?: Date | undefined;
    query?: { [k: string]: any } | undefined;
};

export type V2CountTransactionsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: { [k: string]: Array<string> };
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
export const V2CountTransactionsRequest$inboundSchema: z.ZodType<
    V2CountTransactionsRequest,
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
});

/** @internal */
export type V2CountTransactionsRequest$Outbound = {
    ledger: string;
    pit?: string | undefined;
    query?: { [k: string]: any } | undefined;
};

/** @internal */
export const V2CountTransactionsRequest$outboundSchema: z.ZodType<
    V2CountTransactionsRequest$Outbound,
    z.ZodTypeDef,
    V2CountTransactionsRequest
> = z.object({
    ledger: z.string(),
    pit: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    query: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CountTransactionsRequest$ {
    /** @deprecated use `V2CountTransactionsRequest$inboundSchema` instead. */
    export const inboundSchema = V2CountTransactionsRequest$inboundSchema;
    /** @deprecated use `V2CountTransactionsRequest$outboundSchema` instead. */
    export const outboundSchema = V2CountTransactionsRequest$outboundSchema;
    /** @deprecated use `V2CountTransactionsRequest$Outbound` instead. */
    export type Outbound = V2CountTransactionsRequest$Outbound;
}

/** @internal */
export const V2CountTransactionsResponse$inboundSchema: z.ZodType<
    V2CountTransactionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        Headers: z.record(z.array(z.string())),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            Headers: "headers",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type V2CountTransactionsResponse$Outbound = {
    ContentType: string;
    Headers: { [k: string]: Array<string> };
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const V2CountTransactionsResponse$outboundSchema: z.ZodType<
    V2CountTransactionsResponse$Outbound,
    z.ZodTypeDef,
    V2CountTransactionsResponse
> = z
    .object({
        contentType: z.string(),
        headers: z.record(z.array(z.string())),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            headers: "Headers",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CountTransactionsResponse$ {
    /** @deprecated use `V2CountTransactionsResponse$inboundSchema` instead. */
    export const inboundSchema = V2CountTransactionsResponse$inboundSchema;
    /** @deprecated use `V2CountTransactionsResponse$outboundSchema` instead. */
    export const outboundSchema = V2CountTransactionsResponse$outboundSchema;
    /** @deprecated use `V2CountTransactionsResponse$Outbound` instead. */
    export type Outbound = V2CountTransactionsResponse$Outbound;
}
