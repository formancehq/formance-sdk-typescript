/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ListConfigsAvailableConnectorsResponse = {
    /**
     * OK
     */
    connectorsConfigsResponse?: shared.ConnectorsConfigsResponse | undefined;
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
export const ListConfigsAvailableConnectorsResponse$inboundSchema: z.ZodType<
    ListConfigsAvailableConnectorsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ConnectorsConfigsResponse: shared.ConnectorsConfigsResponse$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ConnectorsConfigsResponse: "connectorsConfigsResponse",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ListConfigsAvailableConnectorsResponse$Outbound = {
    ConnectorsConfigsResponse?: shared.ConnectorsConfigsResponse$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const ListConfigsAvailableConnectorsResponse$outboundSchema: z.ZodType<
    ListConfigsAvailableConnectorsResponse$Outbound,
    z.ZodTypeDef,
    ListConfigsAvailableConnectorsResponse
> = z
    .object({
        connectorsConfigsResponse: shared.ConnectorsConfigsResponse$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            connectorsConfigsResponse: "ConnectorsConfigsResponse",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConfigsAvailableConnectorsResponse$ {
    /** @deprecated use `ListConfigsAvailableConnectorsResponse$inboundSchema` instead. */
    export const inboundSchema = ListConfigsAvailableConnectorsResponse$inboundSchema;
    /** @deprecated use `ListConfigsAvailableConnectorsResponse$outboundSchema` instead. */
    export const outboundSchema = ListConfigsAvailableConnectorsResponse$outboundSchema;
    /** @deprecated use `ListConfigsAvailableConnectorsResponse$Outbound` instead. */
    export type Outbound = ListConfigsAvailableConnectorsResponse$Outbound;
}
