/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SendEventRequestBody = {
    name: string;
};

export type SendEventRequest = {
    requestBody?: SendEventRequestBody | undefined;
    /**
     * The instance id
     */
    instanceID: string;
};

export type SendEventResponse = {
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
export const SendEventRequestBody$inboundSchema: z.ZodType<
    SendEventRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
});

/** @internal */
export type SendEventRequestBody$Outbound = {
    name: string;
};

/** @internal */
export const SendEventRequestBody$outboundSchema: z.ZodType<
    SendEventRequestBody$Outbound,
    z.ZodTypeDef,
    SendEventRequestBody
> = z.object({
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendEventRequestBody$ {
    /** @deprecated use `SendEventRequestBody$inboundSchema` instead. */
    export const inboundSchema = SendEventRequestBody$inboundSchema;
    /** @deprecated use `SendEventRequestBody$outboundSchema` instead. */
    export const outboundSchema = SendEventRequestBody$outboundSchema;
    /** @deprecated use `SendEventRequestBody$Outbound` instead. */
    export type Outbound = SendEventRequestBody$Outbound;
}

/** @internal */
export const SendEventRequest$inboundSchema: z.ZodType<SendEventRequest, z.ZodTypeDef, unknown> = z
    .object({
        RequestBody: z.lazy(() => SendEventRequestBody$inboundSchema).optional(),
        instanceID: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type SendEventRequest$Outbound = {
    RequestBody?: SendEventRequestBody$Outbound | undefined;
    instanceID: string;
};

/** @internal */
export const SendEventRequest$outboundSchema: z.ZodType<
    SendEventRequest$Outbound,
    z.ZodTypeDef,
    SendEventRequest
> = z
    .object({
        requestBody: z.lazy(() => SendEventRequestBody$outboundSchema).optional(),
        instanceID: z.string(),
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
export namespace SendEventRequest$ {
    /** @deprecated use `SendEventRequest$inboundSchema` instead. */
    export const inboundSchema = SendEventRequest$inboundSchema;
    /** @deprecated use `SendEventRequest$outboundSchema` instead. */
    export const outboundSchema = SendEventRequest$outboundSchema;
    /** @deprecated use `SendEventRequest$Outbound` instead. */
    export type Outbound = SendEventRequest$Outbound;
}

/** @internal */
export const SendEventResponse$inboundSchema: z.ZodType<SendEventResponse, z.ZodTypeDef, unknown> =
    z
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
export type SendEventResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const SendEventResponse$outboundSchema: z.ZodType<
    SendEventResponse$Outbound,
    z.ZodTypeDef,
    SendEventResponse
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
export namespace SendEventResponse$ {
    /** @deprecated use `SendEventResponse$inboundSchema` instead. */
    export const inboundSchema = SendEventResponse$inboundSchema;
    /** @deprecated use `SendEventResponse$outboundSchema` instead. */
    export const outboundSchema = SendEventResponse$outboundSchema;
    /** @deprecated use `SendEventResponse$Outbound` instead. */
    export type Outbound = SendEventResponse$Outbound;
}
