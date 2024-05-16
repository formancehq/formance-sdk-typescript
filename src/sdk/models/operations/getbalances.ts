/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetBalancesRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Filter balances involving given account, either as source or destination.
     */
    address?: string | undefined;
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
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
};

/** @internal */
export namespace GetBalancesRequest$ {
    export const inboundSchema: z.ZodType<GetBalancesRequest, z.ZodTypeDef, unknown> = z
        .object({
            ledger: z.string(),
            address: z.string().optional(),
            pageSize: z.number().int().default(15),
            after: z.string().optional(),
            cursor: z.string().optional(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                ...(v.address === undefined ? null : { address: v.address }),
                pageSize: v.pageSize,
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
            };
        });

    export type Outbound = {
        ledger: string;
        address?: string | undefined;
        pageSize: number;
        after?: string | undefined;
        cursor?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalancesRequest> = z
        .object({
            ledger: z.string(),
            address: z.string().optional(),
            pageSize: z.number().int().default(15),
            after: z.string().optional(),
            cursor: z.string().optional(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                ...(v.address === undefined ? null : { address: v.address }),
                pageSize: v.pageSize,
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
            };
        });
}
