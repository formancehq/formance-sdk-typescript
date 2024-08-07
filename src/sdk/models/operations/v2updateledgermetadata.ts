/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type V2UpdateLedgerMetadataRequest = {
    requestBody?: { [k: string]: string } | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2UpdateLedgerMetadataResponse = {
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
export const V2UpdateLedgerMetadataRequest$inboundSchema: z.ZodType<
    V2UpdateLedgerMetadataRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RequestBody: z.record(z.string()).optional(),
        ledger: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type V2UpdateLedgerMetadataRequest$Outbound = {
    RequestBody?: { [k: string]: string } | undefined;
    ledger: string;
};

/** @internal */
export const V2UpdateLedgerMetadataRequest$outboundSchema: z.ZodType<
    V2UpdateLedgerMetadataRequest$Outbound,
    z.ZodTypeDef,
    V2UpdateLedgerMetadataRequest
> = z
    .object({
        requestBody: z.record(z.string()).optional(),
        ledger: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2UpdateLedgerMetadataRequest$ {
    /** @deprecated use `V2UpdateLedgerMetadataRequest$inboundSchema` instead. */
    export const inboundSchema = V2UpdateLedgerMetadataRequest$inboundSchema;
    /** @deprecated use `V2UpdateLedgerMetadataRequest$outboundSchema` instead. */
    export const outboundSchema = V2UpdateLedgerMetadataRequest$outboundSchema;
    /** @deprecated use `V2UpdateLedgerMetadataRequest$Outbound` instead. */
    export type Outbound = V2UpdateLedgerMetadataRequest$Outbound;
}

/** @internal */
export const V2UpdateLedgerMetadataResponse$inboundSchema: z.ZodType<
    V2UpdateLedgerMetadataResponse,
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
export type V2UpdateLedgerMetadataResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const V2UpdateLedgerMetadataResponse$outboundSchema: z.ZodType<
    V2UpdateLedgerMetadataResponse$Outbound,
    z.ZodTypeDef,
    V2UpdateLedgerMetadataResponse
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
export namespace V2UpdateLedgerMetadataResponse$ {
    /** @deprecated use `V2UpdateLedgerMetadataResponse$inboundSchema` instead. */
    export const inboundSchema = V2UpdateLedgerMetadataResponse$inboundSchema;
    /** @deprecated use `V2UpdateLedgerMetadataResponse$outboundSchema` instead. */
    export const outboundSchema = V2UpdateLedgerMetadataResponse$outboundSchema;
    /** @deprecated use `V2UpdateLedgerMetadataResponse$Outbound` instead. */
    export type Outbound = V2UpdateLedgerMetadataResponse$Outbound;
}
