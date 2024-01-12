/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type V2GetLedgerRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2GetLedgerResponse = {
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
    v2Ledger?: shared.V2Ledger | undefined;
};

/** @internal */
export namespace V2GetLedgerRequest$ {
    export type Inbound = {
        ledger: string;
    };

    export const inboundSchema: z.ZodType<V2GetLedgerRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetLedgerRequest> = z
        .object({
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace V2GetLedgerResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2ErrorResponse?: errors.V2ErrorResponse$.Inbound | undefined;
        V2Ledger?: shared.V2Ledger$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2GetLedgerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2ErrorResponse: errors.V2ErrorResponse$.inboundSchema.optional(),
            V2Ledger: shared.V2Ledger$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2ErrorResponse === undefined
                    ? null
                    : { v2ErrorResponse: v.V2ErrorResponse }),
                ...(v.V2Ledger === undefined ? null : { v2Ledger: v.V2Ledger }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2ErrorResponse?: errors.V2ErrorResponse$.Outbound | undefined;
        V2Ledger?: shared.V2Ledger$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetLedgerResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2ErrorResponse: errors.V2ErrorResponse$.outboundSchema.optional(),
            v2Ledger: shared.V2Ledger$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2ErrorResponse === undefined
                    ? null
                    : { V2ErrorResponse: v.v2ErrorResponse }),
                ...(v.v2Ledger === undefined ? null : { V2Ledger: v.v2Ledger }),
            };
        });
}