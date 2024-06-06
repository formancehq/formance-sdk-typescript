/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type GetTransactionRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Transaction ID.
     */
    txid: bigint;
};

export type GetTransactionResponse = {
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
    transactionResponse?: shared.TransactionResponse | undefined;
};

/** @internal */
export namespace GetTransactionRequest$ {
    export const inboundSchema: z.ZodType<GetTransactionRequest, z.ZodTypeDef, unknown> = z.object({
        ledger: z.string(),
        txid: z.number().transform((v) => BigInt(v)),
    });

    export type Outbound = {
        ledger: string;
        txid: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionRequest> =
        z.object({
            ledger: z.string(),
            txid: z.bigint().transform((v) => Number(v)),
        });
}

/** @internal */
export namespace GetTransactionResponse$ {
    export const inboundSchema: z.ZodType<GetTransactionResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TransactionResponse: shared.TransactionResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                TransactionResponse: "transactionResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TransactionResponse?: shared.TransactionResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            transactionResponse: shared.TransactionResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                transactionResponse: "TransactionResponse",
            });
        });
}
