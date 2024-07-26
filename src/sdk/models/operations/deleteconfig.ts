/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type DeleteConfigRequest = {
    /**
     * Config ID
     */
    id: string;
};

export type DeleteConfigResponse = {
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
export const DeleteConfigRequest$inboundSchema: z.ZodType<
    DeleteConfigRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type DeleteConfigRequest$Outbound = {
    id: string;
};

/** @internal */
export const DeleteConfigRequest$outboundSchema: z.ZodType<
    DeleteConfigRequest$Outbound,
    z.ZodTypeDef,
    DeleteConfigRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteConfigRequest$ {
    /** @deprecated use `DeleteConfigRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteConfigRequest$inboundSchema;
    /** @deprecated use `DeleteConfigRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteConfigRequest$outboundSchema;
    /** @deprecated use `DeleteConfigRequest$Outbound` instead. */
    export type Outbound = DeleteConfigRequest$Outbound;
}

/** @internal */
export const DeleteConfigResponse$inboundSchema: z.ZodType<
    DeleteConfigResponse,
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
export type DeleteConfigResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const DeleteConfigResponse$outboundSchema: z.ZodType<
    DeleteConfigResponse$Outbound,
    z.ZodTypeDef,
    DeleteConfigResponse
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
export namespace DeleteConfigResponse$ {
    /** @deprecated use `DeleteConfigResponse$inboundSchema` instead. */
    export const inboundSchema = DeleteConfigResponse$inboundSchema;
    /** @deprecated use `DeleteConfigResponse$outboundSchema` instead. */
    export const outboundSchema = DeleteConfigResponse$outboundSchema;
    /** @deprecated use `DeleteConfigResponse$Outbound` instead. */
    export type Outbound = DeleteConfigResponse$Outbound;
}
