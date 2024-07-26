/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2ListTriggersOccurrencesRequest = {
    /**
     * Parameter used in pagination requests.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     *
     */
    cursor?: string | undefined;
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    /**
     * The trigger id
     */
    triggerID: string;
};

export type V2ListTriggersOccurrencesResponse = {
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
     * List of triggers occurrences
     */
    v2ListTriggersOccurrencesResponse?: shared.V2ListTriggersOccurrencesResponse | undefined;
};

/** @internal */
export const V2ListTriggersOccurrencesRequest$inboundSchema: z.ZodType<
    V2ListTriggersOccurrencesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
    triggerID: z.string(),
});

/** @internal */
export type V2ListTriggersOccurrencesRequest$Outbound = {
    cursor?: string | undefined;
    pageSize?: number | undefined;
    triggerID: string;
};

/** @internal */
export const V2ListTriggersOccurrencesRequest$outboundSchema: z.ZodType<
    V2ListTriggersOccurrencesRequest$Outbound,
    z.ZodTypeDef,
    V2ListTriggersOccurrencesRequest
> = z.object({
    cursor: z.string().optional(),
    pageSize: z.number().int().optional(),
    triggerID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListTriggersOccurrencesRequest$ {
    /** @deprecated use `V2ListTriggersOccurrencesRequest$inboundSchema` instead. */
    export const inboundSchema = V2ListTriggersOccurrencesRequest$inboundSchema;
    /** @deprecated use `V2ListTriggersOccurrencesRequest$outboundSchema` instead. */
    export const outboundSchema = V2ListTriggersOccurrencesRequest$outboundSchema;
    /** @deprecated use `V2ListTriggersOccurrencesRequest$Outbound` instead. */
    export type Outbound = V2ListTriggersOccurrencesRequest$Outbound;
}

/** @internal */
export const V2ListTriggersOccurrencesResponse$inboundSchema: z.ZodType<
    V2ListTriggersOccurrencesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2ListTriggersOccurrencesResponse:
            shared.V2ListTriggersOccurrencesResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2ListTriggersOccurrencesResponse: "v2ListTriggersOccurrencesResponse",
        });
    });

/** @internal */
export type V2ListTriggersOccurrencesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2ListTriggersOccurrencesResponse?:
        | shared.V2ListTriggersOccurrencesResponse$Outbound
        | undefined;
};

/** @internal */
export const V2ListTriggersOccurrencesResponse$outboundSchema: z.ZodType<
    V2ListTriggersOccurrencesResponse$Outbound,
    z.ZodTypeDef,
    V2ListTriggersOccurrencesResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2ListTriggersOccurrencesResponse:
            shared.V2ListTriggersOccurrencesResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2ListTriggersOccurrencesResponse: "V2ListTriggersOccurrencesResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListTriggersOccurrencesResponse$ {
    /** @deprecated use `V2ListTriggersOccurrencesResponse$inboundSchema` instead. */
    export const inboundSchema = V2ListTriggersOccurrencesResponse$inboundSchema;
    /** @deprecated use `V2ListTriggersOccurrencesResponse$outboundSchema` instead. */
    export const outboundSchema = V2ListTriggersOccurrencesResponse$outboundSchema;
    /** @deprecated use `V2ListTriggersOccurrencesResponse$Outbound` instead. */
    export type Outbound = V2ListTriggersOccurrencesResponse$Outbound;
}
