/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type V2ListTransactionsRequest = {
    /**
     * Parameter used in pagination requests. Maximum page size is set to 15.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     *
     */
    cursor?: string | undefined;
    expand?: string | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    pit?: Date | undefined;
    query?: Record<string, any> | undefined;
};

export type V2ListTransactionsResponse = {
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
    v2TransactionsCursorResponse?: shared.V2TransactionsCursorResponse | undefined;
};

/** @internal */
export namespace V2ListTransactionsRequest$ {
    export const inboundSchema: z.ZodType<V2ListTransactionsRequest, z.ZodTypeDef, unknown> = z
        .object({
            cursor: z.string().optional(),
            expand: z.string().optional(),
            ledger: z.string(),
            pageSize: z.number().int().optional(),
            pit: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            query: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ledger: v.ledger,
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.pit === undefined ? null : { pit: v.pit }),
                ...(v.query === undefined ? null : { query: v.query }),
            };
        });

    export type Outbound = {
        cursor?: string | undefined;
        expand?: string | undefined;
        ledger: string;
        pageSize?: number | undefined;
        pit?: string | undefined;
        query?: Record<string, any> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ListTransactionsRequest> = z
        .object({
            cursor: z.string().optional(),
            expand: z.string().optional(),
            ledger: z.string(),
            pageSize: z.number().int().optional(),
            pit: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            query: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ledger: v.ledger,
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.pit === undefined ? null : { pit: v.pit }),
                ...(v.query === undefined ? null : { query: v.query }),
            };
        });
}

/** @internal */
export namespace V2ListTransactionsResponse$ {
    export const inboundSchema: z.ZodType<V2ListTransactionsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2TransactionsCursorResponse:
                shared.V2TransactionsCursorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2TransactionsCursorResponse === undefined
                    ? null
                    : { v2TransactionsCursorResponse: v.V2TransactionsCursorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2TransactionsCursorResponse?: shared.V2TransactionsCursorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ListTransactionsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2TransactionsCursorResponse:
                shared.V2TransactionsCursorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2TransactionsCursorResponse === undefined
                    ? null
                    : { V2TransactionsCursorResponse: v.v2TransactionsCursorResponse }),
            };
        });
}
