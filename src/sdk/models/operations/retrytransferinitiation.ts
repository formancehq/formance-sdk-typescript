/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RetryTransferInitiationRequest = {
    /**
     * The transfer ID.
     */
    transferId: string;
};

export type RetryTransferInitiationResponse = {
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
export namespace RetryTransferInitiationRequest$ {
    export type Inbound = {
        transferId: string;
    };

    export const inboundSchema: z.ZodType<RetryTransferInitiationRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RetryTransferInitiationRequest> =
        z
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
export namespace RetryTransferInitiationResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<RetryTransferInitiationResponse, z.ZodTypeDef, Inbound> =
        z
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
        RetryTransferInitiationResponse
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
