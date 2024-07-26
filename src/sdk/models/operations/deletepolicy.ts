/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type DeletePolicyRequest = {
    /**
     * The policy ID.
     */
    policyID: string;
};

export type DeletePolicyResponse = {
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
export const DeletePolicyRequest$inboundSchema: z.ZodType<
    DeletePolicyRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    policyID: z.string(),
});

/** @internal */
export type DeletePolicyRequest$Outbound = {
    policyID: string;
};

/** @internal */
export const DeletePolicyRequest$outboundSchema: z.ZodType<
    DeletePolicyRequest$Outbound,
    z.ZodTypeDef,
    DeletePolicyRequest
> = z.object({
    policyID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePolicyRequest$ {
    /** @deprecated use `DeletePolicyRequest$inboundSchema` instead. */
    export const inboundSchema = DeletePolicyRequest$inboundSchema;
    /** @deprecated use `DeletePolicyRequest$outboundSchema` instead. */
    export const outboundSchema = DeletePolicyRequest$outboundSchema;
    /** @deprecated use `DeletePolicyRequest$Outbound` instead. */
    export type Outbound = DeletePolicyRequest$Outbound;
}

/** @internal */
export const DeletePolicyResponse$inboundSchema: z.ZodType<
    DeletePolicyResponse,
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
export type DeletePolicyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const DeletePolicyResponse$outboundSchema: z.ZodType<
    DeletePolicyResponse$Outbound,
    z.ZodTypeDef,
    DeletePolicyResponse
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
export namespace DeletePolicyResponse$ {
    /** @deprecated use `DeletePolicyResponse$inboundSchema` instead. */
    export const inboundSchema = DeletePolicyResponse$inboundSchema;
    /** @deprecated use `DeletePolicyResponse$outboundSchema` instead. */
    export const outboundSchema = DeletePolicyResponse$outboundSchema;
    /** @deprecated use `DeletePolicyResponse$Outbound` instead. */
    export type Outbound = DeletePolicyResponse$Outbound;
}
