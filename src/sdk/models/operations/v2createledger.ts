/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type V2CreateLedgerRequest = {
    v2CreateLedgerRequest?: shared.V2CreateLedgerRequest | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2CreateLedgerResponse = {
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
};

/** @internal */
export namespace V2CreateLedgerRequest$ {
    export type Inbound = {
        V2CreateLedgerRequest?: shared.V2CreateLedgerRequest$.Inbound | undefined;
        ledger: string;
    };

    export const inboundSchema: z.ZodType<V2CreateLedgerRequest, z.ZodTypeDef, Inbound> = z
        .object({
            V2CreateLedgerRequest: shared.V2CreateLedgerRequest$.inboundSchema.optional(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.V2CreateLedgerRequest === undefined
                    ? null
                    : { v2CreateLedgerRequest: v.V2CreateLedgerRequest }),
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        V2CreateLedgerRequest?: shared.V2CreateLedgerRequest$.Outbound | undefined;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateLedgerRequest> = z
        .object({
            v2CreateLedgerRequest: shared.V2CreateLedgerRequest$.outboundSchema.optional(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.v2CreateLedgerRequest === undefined
                    ? null
                    : { V2CreateLedgerRequest: v.v2CreateLedgerRequest }),
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace V2CreateLedgerResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2ErrorResponse?: errors.V2ErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2CreateLedgerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2ErrorResponse: errors.V2ErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2ErrorResponse === undefined
                    ? null
                    : { v2ErrorResponse: v.V2ErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2ErrorResponse?: errors.V2ErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateLedgerResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2ErrorResponse: errors.V2ErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2ErrorResponse === undefined
                    ? null
                    : { V2ErrorResponse: v.v2ErrorResponse }),
            };
        });
}