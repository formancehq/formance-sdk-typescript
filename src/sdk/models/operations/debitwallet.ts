/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type DebitWalletRequest = {
    debitWalletRequest?: shared.DebitWalletRequest | undefined;
    id: string;
};

export type DebitWalletResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Wallet successfully debited as a pending hold
     */
    debitWalletResponse?: shared.DebitWalletResponse | undefined;
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
export namespace DebitWalletRequest$ {
    export const inboundSchema: z.ZodType<DebitWalletRequest, z.ZodTypeDef, unknown> = z
        .object({
            DebitWalletRequest: shared.DebitWalletRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                DebitWalletRequest: "debitWalletRequest",
            });
        });

    export type Outbound = {
        DebitWalletRequest?: shared.DebitWalletRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DebitWalletRequest> = z
        .object({
            debitWalletRequest: shared.DebitWalletRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                debitWalletRequest: "DebitWalletRequest",
            });
        });
}

/** @internal */
export namespace DebitWalletResponse$ {
    export const inboundSchema: z.ZodType<DebitWalletResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            DebitWalletResponse: shared.DebitWalletResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                DebitWalletResponse: "debitWalletResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        DebitWalletResponse?: shared.DebitWalletResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DebitWalletResponse> = z
        .object({
            contentType: z.string(),
            debitWalletResponse: shared.DebitWalletResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                debitWalletResponse: "DebitWalletResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
