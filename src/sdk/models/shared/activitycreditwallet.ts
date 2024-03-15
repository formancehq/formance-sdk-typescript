/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CreditWalletRequest, CreditWalletRequest$ } from "./creditwalletrequest";
import * as z from "zod";

export type ActivityCreditWallet = {
    data?: CreditWalletRequest | undefined;
    id?: string | undefined;
};

/** @internal */
export namespace ActivityCreditWallet$ {
    export type Inbound = {
        data?: CreditWalletRequest$.Inbound | undefined;
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ActivityCreditWallet, z.ZodTypeDef, Inbound> = z
        .object({
            data: CreditWalletRequest$.inboundSchema.optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        data?: CreditWalletRequest$.Outbound | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActivityCreditWallet> = z
        .object({
            data: CreditWalletRequest$.outboundSchema.optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}
