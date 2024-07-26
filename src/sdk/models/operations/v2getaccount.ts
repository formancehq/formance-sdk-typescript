/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2GetAccountRequest = {
    /**
     * Exact address of the account. It must match the following regular expressions pattern:
     *
     * @remarks
     * ```
     * ^\w+(:\w+)*$
     * ```
     *
     */
    address: string;
    expand?: string | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
    pit?: Date | undefined;
};

export type V2GetAccountResponse = {
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
    v2AccountResponse?: shared.V2AccountResponse | undefined;
};

/** @internal */
export const V2GetAccountRequest$inboundSchema: z.ZodType<
    V2GetAccountRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    address: z.string(),
    expand: z.string().optional(),
    ledger: z.string(),
    pit: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
});

/** @internal */
export type V2GetAccountRequest$Outbound = {
    address: string;
    expand?: string | undefined;
    ledger: string;
    pit?: string | undefined;
};

/** @internal */
export const V2GetAccountRequest$outboundSchema: z.ZodType<
    V2GetAccountRequest$Outbound,
    z.ZodTypeDef,
    V2GetAccountRequest
> = z.object({
    address: z.string(),
    expand: z.string().optional(),
    ledger: z.string(),
    pit: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetAccountRequest$ {
    /** @deprecated use `V2GetAccountRequest$inboundSchema` instead. */
    export const inboundSchema = V2GetAccountRequest$inboundSchema;
    /** @deprecated use `V2GetAccountRequest$outboundSchema` instead. */
    export const outboundSchema = V2GetAccountRequest$outboundSchema;
    /** @deprecated use `V2GetAccountRequest$Outbound` instead. */
    export type Outbound = V2GetAccountRequest$Outbound;
}

/** @internal */
export const V2GetAccountResponse$inboundSchema: z.ZodType<
    V2GetAccountResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2AccountResponse: shared.V2AccountResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2AccountResponse: "v2AccountResponse",
        });
    });

/** @internal */
export type V2GetAccountResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2AccountResponse?: shared.V2AccountResponse$Outbound | undefined;
};

/** @internal */
export const V2GetAccountResponse$outboundSchema: z.ZodType<
    V2GetAccountResponse$Outbound,
    z.ZodTypeDef,
    V2GetAccountResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2AccountResponse: shared.V2AccountResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2AccountResponse: "V2AccountResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetAccountResponse$ {
    /** @deprecated use `V2GetAccountResponse$inboundSchema` instead. */
    export const inboundSchema = V2GetAccountResponse$inboundSchema;
    /** @deprecated use `V2GetAccountResponse$outboundSchema` instead. */
    export const outboundSchema = V2GetAccountResponse$outboundSchema;
    /** @deprecated use `V2GetAccountResponse$Outbound` instead. */
    export type Outbound = V2GetAccountResponse$Outbound;
}
