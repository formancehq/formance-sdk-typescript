/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Stats = {
    accounts: number;
    transactions: number;
};

/** @internal */
export namespace Stats$ {
    export type Inbound = {
        accounts: number;
        transactions: number;
    };

    export const inboundSchema: z.ZodType<Stats, z.ZodTypeDef, Inbound> = z
        .object({
            accounts: z.number().int(),
            transactions: z.number().int(),
        })
        .transform((v) => {
            return {
                accounts: v.accounts,
                transactions: v.transactions,
            };
        });

    export type Outbound = {
        accounts: number;
        transactions: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Stats> = z
        .object({
            accounts: z.number().int(),
            transactions: z.number().int(),
        })
        .transform((v) => {
            return {
                accounts: v.accounts,
                transactions: v.transactions,
            };
        });
}
