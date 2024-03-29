/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2DebitWalletRequest, V2DebitWalletRequest$ } from "./v2debitwalletrequest";
import * as z from "zod";

export type V2ActivityDebitWallet = {
    data?: V2DebitWalletRequest | undefined;
    id?: string | undefined;
};

/** @internal */
export namespace V2ActivityDebitWallet$ {
    export type Inbound = {
        data?: V2DebitWalletRequest$.Inbound | undefined;
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<V2ActivityDebitWallet, z.ZodTypeDef, Inbound> = z
        .object({
            data: V2DebitWalletRequest$.inboundSchema.optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        data?: V2DebitWalletRequest$.Outbound | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityDebitWallet> = z
        .object({
            data: V2DebitWalletRequest$.outboundSchema.optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}
