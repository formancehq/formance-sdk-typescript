/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2StageSendDestinationWallet = {
    balance?: string | undefined;
    id: string;
};

/** @internal */
export namespace V2StageSendDestinationWallet$ {
    export type Inbound = {
        balance?: string | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<V2StageSendDestinationWallet, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2StageSendDestinationWallet> = z
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
