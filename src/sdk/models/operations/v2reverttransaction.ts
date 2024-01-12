/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type V2RevertTransactionRequest = {
    /**
     * Force revert
     */
    force?: boolean | undefined;
    /**
     * Transaction ID.
     */
    id: number;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2RevertTransactionResponse = {
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
     * Error
     */
    v2ErrorResponse?: errors.V2ErrorResponse | undefined;
    /**
     * OK
     */
    v2RevertTransactionResponse?: shared.V2RevertTransactionResponse | undefined;
};

/** @internal */
export namespace V2RevertTransactionRequest$ {
    export type Inbound = {
        force?: boolean | undefined;
        id: number;
        ledger: string;
    };

    export const inboundSchema: z.ZodType<V2RevertTransactionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            force: z.boolean().optional(),
            id: z.number().int(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.force === undefined ? null : { force: v.force }),
                id: v.id,
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        force?: boolean | undefined;
        id: number;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2RevertTransactionRequest> = z
        .object({
            force: z.boolean().optional(),
            id: z.number().int(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.force === undefined ? null : { force: v.force }),
                id: v.id,
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace V2RevertTransactionResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2ErrorResponse?: errors.V2ErrorResponse$.Inbound | undefined;
        V2RevertTransactionResponse?: shared.V2RevertTransactionResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2RevertTransactionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2ErrorResponse: errors.V2ErrorResponse$.inboundSchema.optional(),
            V2RevertTransactionResponse:
                shared.V2RevertTransactionResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2ErrorResponse === undefined
                    ? null
                    : { v2ErrorResponse: v.V2ErrorResponse }),
                ...(v.V2RevertTransactionResponse === undefined
                    ? null
                    : { v2RevertTransactionResponse: v.V2RevertTransactionResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2ErrorResponse?: errors.V2ErrorResponse$.Outbound | undefined;
        V2RevertTransactionResponse?: shared.V2RevertTransactionResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2RevertTransactionResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2ErrorResponse: errors.V2ErrorResponse$.outboundSchema.optional(),
            v2RevertTransactionResponse:
                shared.V2RevertTransactionResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2ErrorResponse === undefined
                    ? null
                    : { V2ErrorResponse: v.v2ErrorResponse }),
                ...(v.v2RevertTransactionResponse === undefined
                    ? null
                    : { V2RevertTransactionResponse: v.v2RevertTransactionResponse }),
            };
        });
}
