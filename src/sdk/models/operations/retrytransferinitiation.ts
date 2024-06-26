/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
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
    export const inboundSchema: z.ZodType<RetryTransferInitiationRequest, z.ZodTypeDef, unknown> =
        z.object({
            transferId: z.string(),
        });

    export type Outbound = {
        transferId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RetryTransferInitiationRequest> =
        z.object({
            transferId: z.string(),
        });
}

/** @internal */
export namespace RetryTransferInitiationResponse$ {
    export const inboundSchema: z.ZodType<RetryTransferInitiationResponse, z.ZodTypeDef, unknown> =
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
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
