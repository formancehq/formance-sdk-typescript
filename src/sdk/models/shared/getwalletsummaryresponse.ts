/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BalanceWithAssets, BalanceWithAssets$ } from "./balancewithassets";
import { z } from "zod";

export type GetWalletSummaryResponse = {
    availableFunds: Record<string, bigint>;
    balances: Array<BalanceWithAssets>;
    expirableFunds: Record<string, bigint>;
    expiredFunds: Record<string, bigint>;
    holdFunds: Record<string, bigint>;
};

/** @internal */
export namespace GetWalletSummaryResponse$ {
    export type Inbound = {
        availableFunds: Record<string, number>;
        balances: Array<BalanceWithAssets$.Inbound>;
        expirableFunds: Record<string, number>;
        expiredFunds: Record<string, number>;
        holdFunds: Record<string, number>;
    };

    export const inboundSchema: z.ZodType<GetWalletSummaryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            availableFunds: z.record(z.number().transform((v) => BigInt(v))),
            balances: z.array(BalanceWithAssets$.inboundSchema),
            expirableFunds: z.record(z.number().transform((v) => BigInt(v))),
            expiredFunds: z.record(z.number().transform((v) => BigInt(v))),
            holdFunds: z.record(z.number().transform((v) => BigInt(v))),
        })
        .transform((v) => {
            return {
                availableFunds: v.availableFunds,
                balances: v.balances,
                expirableFunds: v.expirableFunds,
                expiredFunds: v.expiredFunds,
                holdFunds: v.holdFunds,
            };
        });

    export type Outbound = {
        availableFunds: Record<string, number>;
        balances: Array<BalanceWithAssets$.Outbound>;
        expirableFunds: Record<string, number>;
        expiredFunds: Record<string, number>;
        holdFunds: Record<string, number>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWalletSummaryResponse> = z
        .object({
            availableFunds: z.record(z.bigint().transform((v) => Number(v))),
            balances: z.array(BalanceWithAssets$.outboundSchema),
            expirableFunds: z.record(z.bigint().transform((v) => Number(v))),
            expiredFunds: z.record(z.bigint().transform((v) => Number(v))),
            holdFunds: z.record(z.bigint().transform((v) => Number(v))),
        })
        .transform((v) => {
            return {
                availableFunds: v.availableFunds,
                balances: v.balances,
                expirableFunds: v.expirableFunds,
                expiredFunds: v.expiredFunds,
                holdFunds: v.holdFunds,
            };
        });
}
