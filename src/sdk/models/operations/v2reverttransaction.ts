/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2RevertTransactionRequest = {
    /**
     * Revert transaction at effective date of the original tx
     */
    atEffectiveDate?: boolean | undefined;
    /**
     * Force revert
     */
    force?: boolean | undefined;
    /**
     * Transaction ID.
     */
    id: bigint;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2RevertTransactionResponse = {
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
    v2RevertTransactionResponse?: shared.V2RevertTransactionResponse | undefined;
};

/** @internal */
export const V2RevertTransactionRequest$inboundSchema: z.ZodType<
    V2RevertTransactionRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    atEffectiveDate: z.boolean().optional(),
    force: z.boolean().optional(),
    id: z.number().transform((v) => BigInt(v)),
    ledger: z.string(),
});

/** @internal */
export type V2RevertTransactionRequest$Outbound = {
    atEffectiveDate?: boolean | undefined;
    force?: boolean | undefined;
    id: number;
    ledger: string;
};

/** @internal */
export const V2RevertTransactionRequest$outboundSchema: z.ZodType<
    V2RevertTransactionRequest$Outbound,
    z.ZodTypeDef,
    V2RevertTransactionRequest
> = z.object({
    atEffectiveDate: z.boolean().optional(),
    force: z.boolean().optional(),
    id: z.bigint().transform((v) => Number(v)),
    ledger: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RevertTransactionRequest$ {
    /** @deprecated use `V2RevertTransactionRequest$inboundSchema` instead. */
    export const inboundSchema = V2RevertTransactionRequest$inboundSchema;
    /** @deprecated use `V2RevertTransactionRequest$outboundSchema` instead. */
    export const outboundSchema = V2RevertTransactionRequest$outboundSchema;
    /** @deprecated use `V2RevertTransactionRequest$Outbound` instead. */
    export type Outbound = V2RevertTransactionRequest$Outbound;
}

/** @internal */
export const V2RevertTransactionResponse$inboundSchema: z.ZodType<
    V2RevertTransactionResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2RevertTransactionResponse: shared.V2RevertTransactionResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2RevertTransactionResponse: "v2RevertTransactionResponse",
        });
    });

/** @internal */
export type V2RevertTransactionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2RevertTransactionResponse?: shared.V2RevertTransactionResponse$Outbound | undefined;
};

/** @internal */
export const V2RevertTransactionResponse$outboundSchema: z.ZodType<
    V2RevertTransactionResponse$Outbound,
    z.ZodTypeDef,
    V2RevertTransactionResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2RevertTransactionResponse: shared.V2RevertTransactionResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2RevertTransactionResponse: "V2RevertTransactionResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2RevertTransactionResponse$ {
    /** @deprecated use `V2RevertTransactionResponse$inboundSchema` instead. */
    export const inboundSchema = V2RevertTransactionResponse$inboundSchema;
    /** @deprecated use `V2RevertTransactionResponse$outboundSchema` instead. */
    export const outboundSchema = V2RevertTransactionResponse$outboundSchema;
    /** @deprecated use `V2RevertTransactionResponse$Outbound` instead. */
    export type Outbound = V2RevertTransactionResponse$Outbound;
}
