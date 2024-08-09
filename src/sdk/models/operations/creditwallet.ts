/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreditWalletRequest = {
    creditWalletRequest?: shared.CreditWalletRequest | undefined;
    /**
     * Use an idempotency key
     */
    idempotencyKey?: string | undefined;
    id: string;
};

export type CreditWalletResponse = {
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
};

/** @internal */
export const CreditWalletRequest$inboundSchema: z.ZodType<
    CreditWalletRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CreditWalletRequest: shared.CreditWalletRequest$inboundSchema.optional(),
        "Idempotency-Key": z.string().optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            CreditWalletRequest: "creditWalletRequest",
            "Idempotency-Key": "idempotencyKey",
        });
    });

/** @internal */
export type CreditWalletRequest$Outbound = {
    CreditWalletRequest?: shared.CreditWalletRequest$Outbound | undefined;
    "Idempotency-Key"?: string | undefined;
    id: string;
};

/** @internal */
export const CreditWalletRequest$outboundSchema: z.ZodType<
    CreditWalletRequest$Outbound,
    z.ZodTypeDef,
    CreditWalletRequest
> = z
    .object({
        creditWalletRequest: shared.CreditWalletRequest$outboundSchema.optional(),
        idempotencyKey: z.string().optional(),
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            creditWalletRequest: "CreditWalletRequest",
            idempotencyKey: "Idempotency-Key",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreditWalletRequest$ {
    /** @deprecated use `CreditWalletRequest$inboundSchema` instead. */
    export const inboundSchema = CreditWalletRequest$inboundSchema;
    /** @deprecated use `CreditWalletRequest$outboundSchema` instead. */
    export const outboundSchema = CreditWalletRequest$outboundSchema;
    /** @deprecated use `CreditWalletRequest$Outbound` instead. */
    export type Outbound = CreditWalletRequest$Outbound;
}

/** @internal */
export const CreditWalletResponse$inboundSchema: z.ZodType<
    CreditWalletResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CreditWalletResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const CreditWalletResponse$outboundSchema: z.ZodType<
    CreditWalletResponse$Outbound,
    z.ZodTypeDef,
    CreditWalletResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreditWalletResponse$ {
    /** @deprecated use `CreditWalletResponse$inboundSchema` instead. */
    export const inboundSchema = CreditWalletResponse$inboundSchema;
    /** @deprecated use `CreditWalletResponse$outboundSchema` instead. */
    export const outboundSchema = CreditWalletResponse$outboundSchema;
    /** @deprecated use `CreditWalletResponse$Outbound` instead. */
    export type Outbound = CreditWalletResponse$Outbound;
}
