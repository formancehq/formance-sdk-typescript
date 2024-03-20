/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
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
     * Error
     */
    errorResponse?: errors.ErrorResponse | undefined;
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
    export type Inbound = {
        PostTransaction: shared.PostTransaction$.Inbound;
        ledger: string;
        preview?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTransactionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            PostTransaction: shared.PostTransaction$.inboundSchema,
            ledger: z.string(),
            preview: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                postTransaction: v.PostTransaction,
                ledger: v.ledger,
                ...(v.preview === undefined ? null : { preview: v.preview }),
            };
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
            return {
                PostTransaction: v.postTransaction,
                ledger: v.ledger,
                ...(v.preview === undefined ? null : { preview: v.preview }),
            };
        });
}

/** @internal */
export namespace CreateTransactionResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        TransactionsResponse?: shared.TransactionsResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTransactionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ErrorResponse: errors.ErrorResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TransactionsResponse: shared.TransactionsResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorResponse === undefined ? null : { errorResponse: v.ErrorResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TransactionsResponse === undefined
                    ? null
                    : { transactionsResponse: v.TransactionsResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        TransactionsResponse?: shared.TransactionsResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTransactionResponse> = z
        .object({
            contentType: z.string(),
            errorResponse: errors.ErrorResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            transactionsResponse: shared.TransactionsResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorResponse === undefined ? null : { ErrorResponse: v.errorResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.transactionsResponse === undefined
                    ? null
                    : { TransactionsResponse: v.transactionsResponse }),
            };
        });
}
