/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
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
export namespace UdpateTransferInitiationStatusRequest$ {
    export type Inbound = {
        UpdateTransferInitiationStatusRequest: shared.UpdateTransferInitiationStatusRequest$.Inbound;
        transferId: string;
    };

    export const inboundSchema: z.ZodType<
        UdpateTransferInitiationStatusRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            UpdateTransferInitiationStatusRequest:
                shared.UpdateTransferInitiationStatusRequest$.inboundSchema,
            transferId: z.string(),
        })
        .transform((v) => {
            return {
                updateTransferInitiationStatusRequest: v.UpdateTransferInitiationStatusRequest,
                transferId: v.transferId,
            };
        });

    export type Outbound = {
        UpdateTransferInitiationStatusRequest: shared.UpdateTransferInitiationStatusRequest$.Outbound;
        transferId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UdpateTransferInitiationStatusRequest
    > = z
        .object({
            updateTransferInitiationStatusRequest:
                shared.UpdateTransferInitiationStatusRequest$.outboundSchema,
            transferId: z.string(),
        })
        .transform((v) => {
            return {
                UpdateTransferInitiationStatusRequest: v.updateTransferInitiationStatusRequest,
                transferId: v.transferId,
            };
        });
}

/** @internal */
export namespace UdpateTransferInitiationStatusResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        UdpateTransferInitiationStatusResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
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
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
