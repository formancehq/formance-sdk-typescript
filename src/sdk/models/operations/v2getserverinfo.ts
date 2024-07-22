/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2GetServerInfoResponse = {
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
     * Server information
     */
    v2ServerInfo?: shared.V2ServerInfo | undefined;
};

/** @internal */
export const V2GetServerInfoResponse$inboundSchema: z.ZodType<
    V2GetServerInfoResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2ServerInfo: shared.V2ServerInfo$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2ServerInfo: "v2ServerInfo",
        });
    });

/** @internal */
export type V2GetServerInfoResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2ServerInfo?: shared.V2ServerInfo$Outbound | undefined;
};

/** @internal */
export const V2GetServerInfoResponse$outboundSchema: z.ZodType<
    V2GetServerInfoResponse$Outbound,
    z.ZodTypeDef,
    V2GetServerInfoResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2ServerInfo: shared.V2ServerInfo$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2ServerInfo: "V2ServerInfo",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetServerInfoResponse$ {
    /** @deprecated use `V2GetServerInfoResponse$inboundSchema` instead. */
    export const inboundSchema = V2GetServerInfoResponse$inboundSchema;
    /** @deprecated use `V2GetServerInfoResponse$outboundSchema` instead. */
    export const outboundSchema = V2GetServerInfoResponse$outboundSchema;
    /** @deprecated use `V2GetServerInfoResponse$Outbound` instead. */
    export type Outbound = V2GetServerInfoResponse$Outbound;
}
