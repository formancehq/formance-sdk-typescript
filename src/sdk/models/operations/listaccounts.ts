/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type ListAccountsRequest = {
    /**
     * Filter accounts by address pattern (regular expression placed between ^ and $).
     */
    address?: string | undefined;
    /**
     * Pagination cursor, will return accounts after given address, in descending order.
     */
    after?: string | undefined;
    /**
     * Filter accounts by their balance (default operator is gte)
     */
    balance?: number | undefined;
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
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Filter accounts by metadata key value pairs. Nested objects can be used as seen in the example below.
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
     * Parameter used in pagination requests. Maximum page size is set to 1000.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     * Deprecated, please use `cursor` instead.
     *
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    paginationToken?: string | undefined;
};

export type ListAccountsResponse = {
    /**
     * OK
     */
    accountsCursorResponse?: shared.AccountsCursorResponse | undefined;
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
};

/** @internal */
export namespace ListAccountsRequest$ {
    export type Inbound = {
        address?: string | undefined;
        after?: string | undefined;
        balance?: number | undefined;
        cursor?: string | undefined;
        ledger: string;
        metadata?: Record<string, any> | undefined;
        pageSize?: number | undefined;
        pagination_token?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListAccountsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string().optional(),
            after: z.string().optional(),
            balance: z.number().int().optional(),
            cursor: z.string().optional(),
            ledger: z.string(),
            metadata: z.record(z.any()).optional(),
            pageSize: z.number().int().default(15),
            pagination_token: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ledger: v.ledger,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                pageSize: v.pageSize,
                ...(v.pagination_token === undefined
                    ? null
                    : { paginationToken: v.pagination_token }),
            };
        });

    export type Outbound = {
        address?: string | undefined;
        after?: string | undefined;
        balance?: number | undefined;
        cursor?: string | undefined;
        ledger: string;
        metadata?: Record<string, any> | undefined;
        pageSize: number;
        pagination_token?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAccountsRequest> = z
        .object({
            address: z.string().optional(),
            after: z.string().optional(),
            balance: z.number().int().optional(),
            cursor: z.string().optional(),
            ledger: z.string(),
            metadata: z.record(z.any()).optional(),
            pageSize: z.number().int().default(15),
            paginationToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ledger: v.ledger,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                pageSize: v.pageSize,
                ...(v.paginationToken === undefined
                    ? null
                    : { pagination_token: v.paginationToken }),
            };
        });
}

/** @internal */
export namespace ListAccountsResponse$ {
    export type Inbound = {
        AccountsCursorResponse?: shared.AccountsCursorResponse$.Inbound | undefined;
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListAccountsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            AccountsCursorResponse: shared.AccountsCursorResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            ErrorResponse: errors.ErrorResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AccountsCursorResponse === undefined
                    ? null
                    : { accountsCursorResponse: v.AccountsCursorResponse }),
                contentType: v.ContentType,
                ...(v.ErrorResponse === undefined ? null : { errorResponse: v.ErrorResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AccountsCursorResponse?: shared.AccountsCursorResponse$.Outbound | undefined;
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAccountsResponse> = z
        .object({
            accountsCursorResponse: shared.AccountsCursorResponse$.outboundSchema.optional(),
            contentType: z.string(),
            errorResponse: errors.ErrorResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.accountsCursorResponse === undefined
                    ? null
                    : { AccountsCursorResponse: v.accountsCursorResponse }),
                ContentType: v.contentType,
                ...(v.errorResponse === undefined ? null : { ErrorResponse: v.errorResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
