/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BalanceWithAssets, BalanceWithAssets$ } from "./balancewithassets";
import * as z from "zod";

export type GetWalletSummaryResponse = {
    availableFunds: { [k: string]: bigint };
    balances: Array<BalanceWithAssets>;
    expirableFunds: { [k: string]: bigint };
    expiredFunds: { [k: string]: bigint };
    holdFunds: { [k: string]: bigint };
};

/** @internal */
export namespace GetWalletSummaryResponse$ {
    export const inboundSchema: z.ZodType<GetWalletSummaryResponse, z.ZodTypeDef, unknown> =
        z.object({
            availableFunds: z.record(z.number().transform((v) => BigInt(v))),
            balances: z.array(BalanceWithAssets$.inboundSchema),
            expirableFunds: z.record(z.number().transform((v) => BigInt(v))),
            expiredFunds: z.record(z.number().transform((v) => BigInt(v))),
            holdFunds: z.record(z.number().transform((v) => BigInt(v))),
        });

    export type Outbound = {
        availableFunds: { [k: string]: number };
        balances: Array<BalanceWithAssets$.Outbound>;
        expirableFunds: { [k: string]: number };
        expiredFunds: { [k: string]: number };
        holdFunds: { [k: string]: number };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWalletSummaryResponse> =
        z.object({
            availableFunds: z.record(z.bigint().transform((v) => Number(v))),
            balances: z.array(BalanceWithAssets$.outboundSchema),
            expirableFunds: z.record(z.bigint().transform((v) => Number(v))),
            expiredFunds: z.record(z.bigint().transform((v) => Number(v))),
            holdFunds: z.record(z.bigint().transform((v) => Number(v))),
        });
}
