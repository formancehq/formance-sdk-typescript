/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ConnectorsTransferRequest = {
    transferRequest: shared.TransferRequest;
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
};

export type ConnectorsTransferResponse = {
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
    transferResponse?: shared.TransferResponse | undefined;
};

/** @internal */
export const ConnectorsTransferRequest$inboundSchema: z.ZodType<
    ConnectorsTransferRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        TransferRequest: shared.TransferRequest$inboundSchema,
        connector: shared.Connector$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            TransferRequest: "transferRequest",
        });
    });

/** @internal */
export type ConnectorsTransferRequest$Outbound = {
    TransferRequest: shared.TransferRequest$Outbound;
    connector: string;
};

/** @internal */
export const ConnectorsTransferRequest$outboundSchema: z.ZodType<
    ConnectorsTransferRequest$Outbound,
    z.ZodTypeDef,
    ConnectorsTransferRequest
> = z
    .object({
        transferRequest: shared.TransferRequest$outboundSchema,
        connector: shared.Connector$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            transferRequest: "TransferRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsTransferRequest$ {
    /** @deprecated use `ConnectorsTransferRequest$inboundSchema` instead. */
    export const inboundSchema = ConnectorsTransferRequest$inboundSchema;
    /** @deprecated use `ConnectorsTransferRequest$outboundSchema` instead. */
    export const outboundSchema = ConnectorsTransferRequest$outboundSchema;
    /** @deprecated use `ConnectorsTransferRequest$Outbound` instead. */
    export type Outbound = ConnectorsTransferRequest$Outbound;
}

/** @internal */
export const ConnectorsTransferResponse$inboundSchema: z.ZodType<
    ConnectorsTransferResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        TransferResponse: shared.TransferResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            TransferResponse: "transferResponse",
        });
    });

/** @internal */
export type ConnectorsTransferResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TransferResponse?: shared.TransferResponse$Outbound | undefined;
};

/** @internal */
export const ConnectorsTransferResponse$outboundSchema: z.ZodType<
    ConnectorsTransferResponse$Outbound,
    z.ZodTypeDef,
    ConnectorsTransferResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        transferResponse: shared.TransferResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            transferResponse: "TransferResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsTransferResponse$ {
    /** @deprecated use `ConnectorsTransferResponse$inboundSchema` instead. */
    export const inboundSchema = ConnectorsTransferResponse$inboundSchema;
    /** @deprecated use `ConnectorsTransferResponse$outboundSchema` instead. */
    export const outboundSchema = ConnectorsTransferResponse$outboundSchema;
    /** @deprecated use `ConnectorsTransferResponse$Outbound` instead. */
    export type Outbound = ConnectorsTransferResponse$Outbound;
}
