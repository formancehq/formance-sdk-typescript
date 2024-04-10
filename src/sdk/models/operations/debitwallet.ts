/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
    export type Inbound = {
        DebitWalletRequest?: shared.DebitWalletRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<DebitWalletRequest, z.ZodTypeDef, Inbound> = z
        .object({
            DebitWalletRequest: shared.DebitWalletRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.DebitWalletRequest === undefined
                    ? null
                    : { debitWalletRequest: v.DebitWalletRequest }),
                id: v.id,
            };
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
            return {
                ...(v.debitWalletRequest === undefined
                    ? null
                    : { DebitWalletRequest: v.debitWalletRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace DebitWalletResponse$ {
    export type Inbound = {
        ContentType: string;
        DebitWalletResponse?: shared.DebitWalletResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DebitWalletResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            DebitWalletResponse: shared.DebitWalletResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.DebitWalletResponse === undefined
                    ? null
                    : { debitWalletResponse: v.DebitWalletResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
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
            return {
                ContentType: v.contentType,
                ...(v.debitWalletResponse === undefined
                    ? null
                    : { DebitWalletResponse: v.debitWalletResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
