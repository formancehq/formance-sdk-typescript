/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type VoidHoldRequest = {
    holdId: string;
};

export type VoidHoldResponse = {
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
export const VoidHoldRequest$inboundSchema: z.ZodType<VoidHoldRequest, z.ZodTypeDef, unknown> = z
    .object({
        hold_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            hold_id: "holdId",
        });
    });

/** @internal */
export type VoidHoldRequest$Outbound = {
    hold_id: string;
};

/** @internal */
export const VoidHoldRequest$outboundSchema: z.ZodType<
    VoidHoldRequest$Outbound,
    z.ZodTypeDef,
    VoidHoldRequest
> = z
    .object({
        holdId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            holdId: "hold_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VoidHoldRequest$ {
    /** @deprecated use `VoidHoldRequest$inboundSchema` instead. */
    export const inboundSchema = VoidHoldRequest$inboundSchema;
    /** @deprecated use `VoidHoldRequest$outboundSchema` instead. */
    export const outboundSchema = VoidHoldRequest$outboundSchema;
    /** @deprecated use `VoidHoldRequest$Outbound` instead. */
    export type Outbound = VoidHoldRequest$Outbound;
}

/** @internal */
export const VoidHoldResponse$inboundSchema: z.ZodType<VoidHoldResponse, z.ZodTypeDef, unknown> = z
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
export type VoidHoldResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const VoidHoldResponse$outboundSchema: z.ZodType<
    VoidHoldResponse$Outbound,
    z.ZodTypeDef,
    VoidHoldResponse
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
export namespace VoidHoldResponse$ {
    /** @deprecated use `VoidHoldResponse$inboundSchema` instead. */
    export const inboundSchema = VoidHoldResponse$inboundSchema;
    /** @deprecated use `VoidHoldResponse$outboundSchema` instead. */
    export const outboundSchema = VoidHoldResponse$outboundSchema;
    /** @deprecated use `VoidHoldResponse$Outbound` instead. */
    export type Outbound = VoidHoldResponse$Outbound;
}
