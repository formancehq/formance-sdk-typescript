/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type V2CreateTransactionRequest = {
    /**
     * Use an idempotency key
     */
    idempotencyKey?: string | undefined;
    /**
     * The request body must contain at least one of the following objects:
     *
     * @remarks
     *   - `postings`: suitable for simple transactions
     *   - `script`: enabling more complex transactions with Numscript
     *
     */
    v2PostTransaction: shared.V2PostTransaction;
    /**
     * Set the dryRun mode. dry run mode doesn't add the logs to the database or publish a message to the message broker.
     */
    dryRun?: boolean | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2CreateTransactionResponse = {
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
    v2CreateTransactionResponse?: shared.V2CreateTransactionResponse | undefined;
};

/** @internal */
export namespace V2CreateTransactionRequest$ {
    export type Inbound = {
        "Idempotency-Key"?: string | undefined;
        V2PostTransaction: shared.V2PostTransaction$.Inbound;
        dryRun?: boolean | undefined;
        ledger: string;
    };

    export const inboundSchema: z.ZodType<V2CreateTransactionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "Idempotency-Key": z.string().optional(),
            V2PostTransaction: shared.V2PostTransaction$.inboundSchema,
            dryRun: z.boolean().optional(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ...(v["Idempotency-Key"] === undefined
                    ? null
                    : { idempotencyKey: v["Idempotency-Key"] }),
                v2PostTransaction: v.V2PostTransaction,
                ...(v.dryRun === undefined ? null : { dryRun: v.dryRun }),
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        "Idempotency-Key"?: string | undefined;
        V2PostTransaction: shared.V2PostTransaction$.Outbound;
        dryRun?: boolean | undefined;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateTransactionRequest> = z
        .object({
            idempotencyKey: z.string().optional(),
            v2PostTransaction: shared.V2PostTransaction$.outboundSchema,
            dryRun: z.boolean().optional(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.idempotencyKey === undefined
                    ? null
                    : { "Idempotency-Key": v.idempotencyKey }),
                V2PostTransaction: v.v2PostTransaction,
                ...(v.dryRun === undefined ? null : { dryRun: v.dryRun }),
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace V2CreateTransactionResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2CreateTransactionResponse?: shared.V2CreateTransactionResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2CreateTransactionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2CreateTransactionResponse:
                shared.V2CreateTransactionResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2CreateTransactionResponse === undefined
                    ? null
                    : { v2CreateTransactionResponse: v.V2CreateTransactionResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2CreateTransactionResponse?: shared.V2CreateTransactionResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateTransactionResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2CreateTransactionResponse:
                shared.V2CreateTransactionResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2CreateTransactionResponse === undefined
                    ? null
                    : { V2CreateTransactionResponse: v.v2CreateTransactionResponse }),
            };
        });
}
