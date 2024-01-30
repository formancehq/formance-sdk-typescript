/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type StageSendSourceWallet = {
    balance?: string | undefined;
    id: string;
};

/** @internal */
export namespace StageSendSourceWallet$ {
    export type Inbound = {
        balance?: string | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<StageSendSourceWallet, z.ZodTypeDef, Inbound> = z
        .object({
            balance: z.string().optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.balance === undefined ? null : { balance: v.balance }),
                id: v.id,
            };
        });

    export type Outbound = {
        balance?: string | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageSendSourceWallet> = z
        .object({
            balance: z.string().optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.balance === undefined ? null : { balance: v.balance }),
                id: v.id,
            };
        });
}