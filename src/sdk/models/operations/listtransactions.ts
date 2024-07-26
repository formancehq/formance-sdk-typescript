/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ListTransactionsRequest = {
    /**
     * Filter transactions with postings involving given account, either as source or destination (regular expression placed between ^ and $).
     */
    account?: string | undefined;
    /**
     * Pagination cursor, will return transactions after given txid (in descending order).
     */
    after?: string | undefined;
    /**
     * Parameter used in pagination requests. Maximum page size is set to 1000.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     *
     */
    cursor?: string | undefined;
    /**
     * Filter transactions with postings involving given account at destination (regular expression placed between ^ and $).
     */
    destination?: string | undefined;
    /**
     * Filter transactions that occurred before this timestamp.
     *
     * @remarks
     * The format is RFC3339 and is exclusive (for example, "2023-01-02T15:04:01Z" excludes the first second of 4th minute).
     *
     */
    endTime?: Date | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Filter transactions by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    metadata?: { [k: string]: any } | undefined;
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    /**
     * Find transactions by reference field.
     */
    reference?: string | undefined;
    /**
     * Filter transactions with postings involving given account at source (regular expression placed between ^ and $).
     */
    source?: string | undefined;
    /**
     * Filter transactions that occurred after this timestamp.
     *
     * @remarks
     * The format is RFC3339 and is inclusive (for example, "2023-01-02T15:04:01Z" includes the first second of 4th minute).
     *
     */
    startTime?: Date | undefined;
};

export type ListTransactionsResponse = {
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
    transactionsCursorResponse?: shared.TransactionsCursorResponse | undefined;
};

/** @internal */
export const ListTransactionsRequest$inboundSchema: z.ZodType<
    ListTransactionsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    account: z.string().optional(),
    after: z.string().optional(),
    cursor: z.string().optional(),
    destination: z.string().optional(),
    endTime: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    ledger: z.string(),
    metadata: z.record(z.any()).optional(),
    pageSize: z.number().int().default(15),
    reference: z.string().optional(),
    source: z.string().optional(),
    startTime: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
});

/** @internal */
export type ListTransactionsRequest$Outbound = {
    account?: string | undefined;
    after?: string | undefined;
    cursor?: string | undefined;
    destination?: string | undefined;
    endTime?: string | undefined;
    ledger: string;
    metadata?: { [k: string]: any } | undefined;
    pageSize: number;
    reference?: string | undefined;
    source?: string | undefined;
    startTime?: string | undefined;
};

/** @internal */
export const ListTransactionsRequest$outboundSchema: z.ZodType<
    ListTransactionsRequest$Outbound,
    z.ZodTypeDef,
    ListTransactionsRequest
> = z.object({
    account: z.string().optional(),
    after: z.string().optional(),
    cursor: z.string().optional(),
    destination: z.string().optional(),
    endTime: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    ledger: z.string(),
    metadata: z.record(z.any()).optional(),
    pageSize: z.number().int().default(15),
    reference: z.string().optional(),
    source: z.string().optional(),
    startTime: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsRequest$ {
    /** @deprecated use `ListTransactionsRequest$inboundSchema` instead. */
    export const inboundSchema = ListTransactionsRequest$inboundSchema;
    /** @deprecated use `ListTransactionsRequest$outboundSchema` instead. */
    export const outboundSchema = ListTransactionsRequest$outboundSchema;
    /** @deprecated use `ListTransactionsRequest$Outbound` instead. */
    export type Outbound = ListTransactionsRequest$Outbound;
}

/** @internal */
export const ListTransactionsResponse$inboundSchema: z.ZodType<
    ListTransactionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        TransactionsCursorResponse: shared.TransactionsCursorResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            TransactionsCursorResponse: "transactionsCursorResponse",
        });
    });

/** @internal */
export type ListTransactionsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TransactionsCursorResponse?: shared.TransactionsCursorResponse$Outbound | undefined;
};

/** @internal */
export const ListTransactionsResponse$outboundSchema: z.ZodType<
    ListTransactionsResponse$Outbound,
    z.ZodTypeDef,
    ListTransactionsResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        transactionsCursorResponse: shared.TransactionsCursorResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            transactionsCursorResponse: "TransactionsCursorResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsResponse$ {
    /** @deprecated use `ListTransactionsResponse$inboundSchema` instead. */
    export const inboundSchema = ListTransactionsResponse$inboundSchema;
    /** @deprecated use `ListTransactionsResponse$outboundSchema` instead. */
    export const outboundSchema = ListTransactionsResponse$outboundSchema;
    /** @deprecated use `ListTransactionsResponse$Outbound` instead. */
    export type Outbound = ListTransactionsResponse$Outbound;
}
