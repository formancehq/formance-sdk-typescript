/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UdpateTransferInitiationStatusRequest = {
    updateTransferInitiationStatusRequest: shared.UpdateTransferInitiationStatusRequest;
    /**
     * The transfer ID.
     */
    transferId: string;
};

export type UdpateTransferInitiationStatusResponse = {
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
export const UdpateTransferInitiationStatusRequest$inboundSchema: z.ZodType<
    UdpateTransferInitiationStatusRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        UpdateTransferInitiationStatusRequest:
            shared.UpdateTransferInitiationStatusRequest$inboundSchema,
        transferId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            UpdateTransferInitiationStatusRequest: "updateTransferInitiationStatusRequest",
        });
    });

/** @internal */
export type UdpateTransferInitiationStatusRequest$Outbound = {
    UpdateTransferInitiationStatusRequest: shared.UpdateTransferInitiationStatusRequest$Outbound;
    transferId: string;
};

/** @internal */
export const UdpateTransferInitiationStatusRequest$outboundSchema: z.ZodType<
    UdpateTransferInitiationStatusRequest$Outbound,
    z.ZodTypeDef,
    UdpateTransferInitiationStatusRequest
> = z
    .object({
        updateTransferInitiationStatusRequest:
            shared.UpdateTransferInitiationStatusRequest$outboundSchema,
        transferId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            updateTransferInitiationStatusRequest: "UpdateTransferInitiationStatusRequest",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UdpateTransferInitiationStatusRequest$ {
    /** @deprecated use `UdpateTransferInitiationStatusRequest$inboundSchema` instead. */
    export const inboundSchema = UdpateTransferInitiationStatusRequest$inboundSchema;
    /** @deprecated use `UdpateTransferInitiationStatusRequest$outboundSchema` instead. */
    export const outboundSchema = UdpateTransferInitiationStatusRequest$outboundSchema;
    /** @deprecated use `UdpateTransferInitiationStatusRequest$Outbound` instead. */
    export type Outbound = UdpateTransferInitiationStatusRequest$Outbound;
}

/** @internal */
export const UdpateTransferInitiationStatusResponse$inboundSchema: z.ZodType<
    UdpateTransferInitiationStatusResponse,
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
export type UdpateTransferInitiationStatusResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const UdpateTransferInitiationStatusResponse$outboundSchema: z.ZodType<
    UdpateTransferInitiationStatusResponse$Outbound,
    z.ZodTypeDef,
    UdpateTransferInitiationStatusResponse
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
export namespace UdpateTransferInitiationStatusResponse$ {
    /** @deprecated use `UdpateTransferInitiationStatusResponse$inboundSchema` instead. */
    export const inboundSchema = UdpateTransferInitiationStatusResponse$inboundSchema;
    /** @deprecated use `UdpateTransferInitiationStatusResponse$outboundSchema` instead. */
    export const outboundSchema = UdpateTransferInitiationStatusResponse$outboundSchema;
    /** @deprecated use `UdpateTransferInitiationStatusResponse$Outbound` instead. */
    export type Outbound = UdpateTransferInitiationStatusResponse$Outbound;
}
