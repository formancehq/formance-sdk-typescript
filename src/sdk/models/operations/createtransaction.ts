/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type CreateTransactionRequest = {
    /**
     * The request body must contain at least one of the following objects:
     *
     * @remarks
     *   - `postings`: suitable for simple transactions
     *   - `script`: enabling more complex transactions with Numscript
     *
     */
    postTransaction: shared.PostTransaction;
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker.
     */
    preview?: boolean | undefined;
};

export type CreateTransactionResponse = {
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
export namespace CreateTransactionRequest$ {
    export const inboundSchema: z.ZodType<CreateTransactionRequest, z.ZodTypeDef, unknown> = z
        .object({
            PostTransaction: shared.PostTransaction$.inboundSchema,
            ledger: z.string(),
            preview: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                PostTransaction: "postTransaction",
            });
        });

    export type Outbound = {
        PostTransaction: shared.PostTransaction$.Outbound;
        ledger: string;
        preview?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTransactionRequest> = z
        .object({
            postTransaction: shared.PostTransaction$.outboundSchema,
            ledger: z.string(),
            preview: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                postTransaction: "PostTransaction",
            });
        });
}

/** @internal */
export namespace CreateTransactionResponse$ {
    export const inboundSchema: z.ZodType<CreateTransactionResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTransactionResponse> = z
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
