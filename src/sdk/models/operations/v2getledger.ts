/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

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
     * OK
     */
    v2GetLedgerResponse?: shared.V2GetLedgerResponse | undefined;
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
        V2GetLedgerResponse?: shared.V2GetLedgerResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2GetLedgerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2GetLedgerResponse: shared.V2GetLedgerResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2GetLedgerResponse === undefined
                    ? null
                    : { v2GetLedgerResponse: v.V2GetLedgerResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2GetLedgerResponse?: shared.V2GetLedgerResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetLedgerResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2GetLedgerResponse: shared.V2GetLedgerResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2GetLedgerResponse === undefined
                    ? null
                    : { V2GetLedgerResponse: v.v2GetLedgerResponse }),
            };
        });
}
