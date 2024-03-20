/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
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
    metadata?: Record<string, any> | undefined;
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
    transactionsCursorResponse?: shared.TransactionsCursorResponse | undefined;
};

/** @internal */
export namespace ListTransactionsRequest$ {
    export type Inbound = {
        account?: string | undefined;
        after?: string | undefined;
        cursor?: string | undefined;
        destination?: string | undefined;
        endTime?: string | undefined;
        ledger: string;
        metadata?: Record<string, any> | undefined;
        pageSize?: number | undefined;
        reference?: string | undefined;
        source?: string | undefined;
        startTime?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListTransactionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
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
        })
        .transform((v) => {
            return {
                ...(v.account === undefined ? null : { account: v.account }),
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.destination === undefined ? null : { destination: v.destination }),
                ...(v.endTime === undefined ? null : { endTime: v.endTime }),
                ledger: v.ledger,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                pageSize: v.pageSize,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.source === undefined ? null : { source: v.source }),
                ...(v.startTime === undefined ? null : { startTime: v.startTime }),
            };
        });

    export type Outbound = {
        account?: string | undefined;
        after?: string | undefined;
        cursor?: string | undefined;
        destination?: string | undefined;
        endTime?: string | undefined;
        ledger: string;
        metadata?: Record<string, any> | undefined;
        pageSize: number;
        reference?: string | undefined;
        source?: string | undefined;
        startTime?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransactionsRequest> = z
        .object({
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
        })
        .transform((v) => {
            return {
                ...(v.account === undefined ? null : { account: v.account }),
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.destination === undefined ? null : { destination: v.destination }),
                ...(v.endTime === undefined ? null : { endTime: v.endTime }),
                ledger: v.ledger,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                pageSize: v.pageSize,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.source === undefined ? null : { source: v.source }),
                ...(v.startTime === undefined ? null : { startTime: v.startTime }),
            };
        });
}

/** @internal */
export namespace ListTransactionsResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        TransactionsCursorResponse?: shared.TransactionsCursorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListTransactionsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ErrorResponse: errors.ErrorResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TransactionsCursorResponse: shared.TransactionsCursorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorResponse === undefined ? null : { errorResponse: v.ErrorResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TransactionsCursorResponse === undefined
                    ? null
                    : { transactionsCursorResponse: v.TransactionsCursorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        TransactionsCursorResponse?: shared.TransactionsCursorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransactionsResponse> = z
        .object({
            contentType: z.string(),
            errorResponse: errors.ErrorResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            transactionsCursorResponse:
                shared.TransactionsCursorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorResponse === undefined ? null : { ErrorResponse: v.errorResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.transactionsCursorResponse === undefined
                    ? null
                    : { TransactionsCursorResponse: v.transactionsCursorResponse }),
            };
        });
}
