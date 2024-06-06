/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type CreateTransactionsRequest = {
    transactions: shared.Transactions;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type CreateTransactionsResponse = {
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
    transactionsResponse?: shared.TransactionsResponse | undefined;
};

/** @internal */
export namespace CreateTransactionsRequest$ {
    export const inboundSchema: z.ZodType<CreateTransactionsRequest, z.ZodTypeDef, unknown> = z
        .object({
            Transactions: shared.Transactions$.inboundSchema,
            ledger: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                Transactions: "transactions",
            });
        });

    export type Outbound = {
        Transactions: shared.Transactions$.Outbound;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTransactionsRequest> = z
        .object({
            transactions: shared.Transactions$.outboundSchema,
            ledger: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                transactions: "Transactions",
            });
        });
}

/** @internal */
export namespace CreateTransactionsResponse$ {
    export const inboundSchema: z.ZodType<CreateTransactionsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TransactionsResponse: shared.TransactionsResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                TransactionsResponse: "transactionsResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TransactionsResponse?: shared.TransactionsResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTransactionsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            transactionsResponse: shared.TransactionsResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                transactionsResponse: "TransactionsResponse",
            });
        });
}
