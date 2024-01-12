/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2WalletWithBalances, V2WalletWithBalances$ } from "./v2walletwithbalances";
import { z } from "zod";

export type V2ActivityGetWalletOutput = {
    data: V2WalletWithBalances;
};

/** @internal */
export namespace V2ActivityGetWalletOutput$ {
    export type Inbound = {
        data: V2WalletWithBalances$.Inbound;
    };

    export const inboundSchema: z.ZodType<V2ActivityGetWalletOutput, z.ZodTypeDef, Inbound> = z
        .object({
            data: V2WalletWithBalances$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: V2WalletWithBalances$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityGetWalletOutput> = z
        .object({
            data: V2WalletWithBalances$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
