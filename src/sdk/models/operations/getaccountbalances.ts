/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetAccountBalancesRequest = {
    /**
     * The account ID.
     */
    accountId: string;
    /**
     * Filter balances by currency.
     *
     * @remarks
     * If not specified, all account's balances will be returned.
     *
     */
    asset?: string | undefined;
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
    /**
     * Filter balances by date.
     *
     * @remarks
     * If not specified, all account's balances will be returned.
     *
     */
    from?: Date | undefined;
    /**
     * The maximum number of results to return per page.
     */
    limit?: number | undefined;
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    /**
     * Fields used to sort payments (default is date:desc).
     */
    sort?: Array<string> | undefined;
    /**
     * Filter balances by date.
     *
     * @remarks
     * If not specified, default will be set to now.
     *
     */
    to?: Date | undefined;
};

export type GetAccountBalancesResponse = {
    /**
     * OK
     */
    balancesCursor?: shared.BalancesCursor | undefined;
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
};

/** @internal */
export namespace GetAccountBalancesRequest$ {
    export type Inbound = {
        accountId: string;
        asset?: string | undefined;
        cursor?: string | undefined;
        from?: string | undefined;
        limit?: number | undefined;
        pageSize?: number | undefined;
        sort?: Array<string> | undefined;
        to?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetAccountBalancesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            accountId: z.string(),
            asset: z.string().optional(),
            cursor: z.string().optional(),
            from: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            limit: z.number().int().optional(),
            pageSize: z.number().int().optional(),
            sort: z.array(z.string()).optional(),
            to: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                accountId: v.accountId,
                ...(v.asset === undefined ? null : { asset: v.asset }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.to === undefined ? null : { to: v.to }),
            };
        });

    export type Outbound = {
        accountId: string;
        asset?: string | undefined;
        cursor?: string | undefined;
        from?: string | undefined;
        limit?: number | undefined;
        pageSize?: number | undefined;
        sort?: Array<string> | undefined;
        to?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountBalancesRequest> = z
        .object({
            accountId: z.string(),
            asset: z.string().optional(),
            cursor: z.string().optional(),
            from: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            limit: z.number().int().optional(),
            pageSize: z.number().int().optional(),
            sort: z.array(z.string()).optional(),
            to: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                accountId: v.accountId,
                ...(v.asset === undefined ? null : { asset: v.asset }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.to === undefined ? null : { to: v.to }),
            };
        });
}

/** @internal */
export namespace GetAccountBalancesResponse$ {
    export type Inbound = {
        BalancesCursor?: shared.BalancesCursor$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetAccountBalancesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            BalancesCursor: shared.BalancesCursor$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BalancesCursor === undefined ? null : { balancesCursor: v.BalancesCursor }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BalancesCursor?: shared.BalancesCursor$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountBalancesResponse> = z
        .object({
            balancesCursor: shared.BalancesCursor$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.balancesCursor === undefined ? null : { BalancesCursor: v.balancesCursor }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
