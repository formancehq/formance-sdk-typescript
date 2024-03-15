/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetTransferInitiationRequest = {
    /**
     * The transfer ID.
     */
    transferId: string;
};

export type GetTransferInitiationResponse = {
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
    transferInitiationResponse?: shared.TransferInitiationResponse | undefined;
};

/** @internal */
export namespace GetTransferInitiationRequest$ {
    export type Inbound = {
        transferId: string;
    };

    export const inboundSchema: z.ZodType<GetTransferInitiationRequest, z.ZodTypeDef, Inbound> = z
        .object({
            transferId: z.string(),
        })
        .transform((v) => {
            return {
                transferId: v.transferId,
            };
        });

    export type Outbound = {
        transferId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransferInitiationRequest> = z
        .object({
            transferId: z.string(),
        })
        .transform((v) => {
            return {
                transferId: v.transferId,
            };
        });
}

/** @internal */
export namespace GetTransferInitiationResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TransferInitiationResponse?: shared.TransferInitiationResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransferInitiationResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TransferInitiationResponse: shared.TransferInitiationResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TransferInitiationResponse === undefined
                    ? null
                    : { transferInitiationResponse: v.TransferInitiationResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TransferInitiationResponse?: shared.TransferInitiationResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransferInitiationResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                transferInitiationResponse:
                    shared.TransferInitiationResponse$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.transferInitiationResponse === undefined
                        ? null
                        : { TransferInitiationResponse: v.transferInitiationResponse }),
                };
            });
}
