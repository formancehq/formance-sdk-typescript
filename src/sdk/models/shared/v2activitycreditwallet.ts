/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2CreditWalletRequest, V2CreditWalletRequest$ } from "./v2creditwalletrequest";
import * as z from "zod";

export type V2ActivityCreditWallet = {
    data?: V2CreditWalletRequest | undefined;
    id?: string | undefined;
};

/** @internal */
export namespace V2ActivityCreditWallet$ {
    export const inboundSchema: z.ZodType<V2ActivityCreditWallet, z.ZodTypeDef, unknown> = z
        .object({
            data: V2CreditWalletRequest$.inboundSchema.optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        data?: V2CreditWalletRequest$.Outbound | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityCreditWallet> = z
        .object({
            data: V2CreditWalletRequest$.outboundSchema.optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}
