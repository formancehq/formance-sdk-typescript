/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PoolBalance = {
    amount: bigint;
    asset: string;
};

/** @internal */
export namespace PoolBalance$ {
    export const inboundSchema: z.ZodType<PoolBalance, z.ZodTypeDef, unknown> = z
        .object({
            amount: z.number().transform((v) => BigInt(v)),
            asset: z.string(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                asset: v.asset,
            };
        });

    export type Outbound = {
        amount: number;
        asset: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PoolBalance> = z
        .object({
            amount: z.bigint().transform((v) => Number(v)),
            asset: z.string(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                asset: v.asset,
            };
        });
}
