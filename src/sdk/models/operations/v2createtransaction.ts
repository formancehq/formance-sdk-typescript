/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2CreateTransactionRequest = {
    /**
     * Use an idempotency key
     */
    idempotencyKey?: string | undefined;
    /**
     * The request body must contain at least one of the following objects:
     *
     * @remarks
     *   - `postings`: suitable for simple transactions
     *   - `script`: enabling more complex transactions with Numscript
     *
     */
    v2PostTransaction: shared.V2PostTransaction;
    /**
     * Set the dryRun mode. dry run mode doesn't add the logs to the database or publish a message to the message broker.
     */
    dryRun?: boolean | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2CreateTransactionResponse = {
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
    v2CreateTransactionResponse?: shared.V2CreateTransactionResponse | undefined;
};

/** @internal */
export const V2CreateTransactionRequest$inboundSchema: z.ZodType<
    V2CreateTransactionRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "Idempotency-Key": z.string().optional(),
        V2PostTransaction: shared.V2PostTransaction$inboundSchema,
        dryRun: z.boolean().optional(),
        ledger: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "Idempotency-Key": "idempotencyKey",
            V2PostTransaction: "v2PostTransaction",
        });
    });

/** @internal */
export type V2CreateTransactionRequest$Outbound = {
    "Idempotency-Key"?: string | undefined;
    V2PostTransaction: shared.V2PostTransaction$Outbound;
    dryRun?: boolean | undefined;
    ledger: string;
};

/** @internal */
export const V2CreateTransactionRequest$outboundSchema: z.ZodType<
    V2CreateTransactionRequest$Outbound,
    z.ZodTypeDef,
    V2CreateTransactionRequest
> = z
    .object({
        idempotencyKey: z.string().optional(),
        v2PostTransaction: shared.V2PostTransaction$outboundSchema,
        dryRun: z.boolean().optional(),
        ledger: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            idempotencyKey: "Idempotency-Key",
            v2PostTransaction: "V2PostTransaction",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CreateTransactionRequest$ {
    /** @deprecated use `V2CreateTransactionRequest$inboundSchema` instead. */
    export const inboundSchema = V2CreateTransactionRequest$inboundSchema;
    /** @deprecated use `V2CreateTransactionRequest$outboundSchema` instead. */
    export const outboundSchema = V2CreateTransactionRequest$outboundSchema;
    /** @deprecated use `V2CreateTransactionRequest$Outbound` instead. */
    export type Outbound = V2CreateTransactionRequest$Outbound;
}

/** @internal */
export const V2CreateTransactionResponse$inboundSchema: z.ZodType<
    V2CreateTransactionResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2CreateTransactionResponse: shared.V2CreateTransactionResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2CreateTransactionResponse: "v2CreateTransactionResponse",
        });
    });

/** @internal */
export type V2CreateTransactionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2CreateTransactionResponse?: shared.V2CreateTransactionResponse$Outbound | undefined;
};

/** @internal */
export const V2CreateTransactionResponse$outboundSchema: z.ZodType<
    V2CreateTransactionResponse$Outbound,
    z.ZodTypeDef,
    V2CreateTransactionResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2CreateTransactionResponse: shared.V2CreateTransactionResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2CreateTransactionResponse: "V2CreateTransactionResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CreateTransactionResponse$ {
    /** @deprecated use `V2CreateTransactionResponse$inboundSchema` instead. */
    export const inboundSchema = V2CreateTransactionResponse$inboundSchema;
    /** @deprecated use `V2CreateTransactionResponse$outboundSchema` instead. */
    export const outboundSchema = V2CreateTransactionResponse$outboundSchema;
    /** @deprecated use `V2CreateTransactionResponse$Outbound` instead. */
    export type Outbound = V2CreateTransactionResponse$Outbound;
}
