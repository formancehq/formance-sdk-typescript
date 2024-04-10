/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
    export type Inbound = {
        Transactions: shared.Transactions$.Inbound;
        ledger: string;
    };

    export const inboundSchema: z.ZodType<CreateTransactionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            Transactions: shared.Transactions$.inboundSchema,
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                transactions: v.Transactions,
                ledger: v.ledger,
            };
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
            return {
                Transactions: v.transactions,
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace CreateTransactionsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TransactionsResponse?: shared.TransactionsResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTransactionsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TransactionsResponse: shared.TransactionsResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TransactionsResponse === undefined
                    ? null
                    : { transactionsResponse: v.TransactionsResponse }),
            };
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
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.transactionsResponse === undefined
                    ? null
                    : { TransactionsResponse: v.transactionsResponse }),
            };
        });
}
