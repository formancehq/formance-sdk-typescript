/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetBalancesRequest = {
    /**
     * Filter balances involving given account, either as source or destination.
     */
    address?: string | undefined;
    /**
     * Pagination cursor, will return accounts after given address, in descending order.
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
};

export type GetBalancesResponse = {
    /**
     * OK
     */
    balancesCursorResponse?: shared.BalancesCursorResponse | undefined;
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
export namespace GetBalancesRequest$ {
    export const inboundSchema: z.ZodType<GetBalancesRequest, z.ZodTypeDef, unknown> = z
        .object({
            address: z.string().optional(),
            after: z.string().optional(),
            cursor: z.string().optional(),
            ledger: z.string(),
            pageSize: z.number().int().default(15),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ledger: v.ledger,
                pageSize: v.pageSize,
            };
        });

    export type Outbound = {
        address?: string | undefined;
        after?: string | undefined;
        cursor?: string | undefined;
        ledger: string;
        pageSize: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalancesRequest> = z
        .object({
            address: z.string().optional(),
            after: z.string().optional(),
            cursor: z.string().optional(),
            ledger: z.string(),
            pageSize: z.number().int().default(15),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ledger: v.ledger,
                pageSize: v.pageSize,
            };
        });
}

/** @internal */
export namespace GetBalancesResponse$ {
    export const inboundSchema: z.ZodType<GetBalancesResponse, z.ZodTypeDef, unknown> = z
        .object({
            BalancesCursorResponse: shared.BalancesCursorResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BalancesCursorResponse === undefined
                    ? null
                    : { balancesCursorResponse: v.BalancesCursorResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BalancesCursorResponse?: shared.BalancesCursorResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalancesResponse> = z
        .object({
            balancesCursorResponse: shared.BalancesCursorResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.balancesCursorResponse === undefined
                    ? null
                    : { BalancesCursorResponse: v.balancesCursorResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
