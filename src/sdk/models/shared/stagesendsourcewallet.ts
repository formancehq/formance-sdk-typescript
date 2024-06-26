/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type StageSendSourceWallet = {
    balance?: string | undefined;
    id: string;
};

/** @internal */
export namespace StageSendSourceWallet$ {
    export const inboundSchema: z.ZodType<StageSendSourceWallet, z.ZodTypeDef, unknown> = z.object({
        balance: z.string().optional(),
        id: z.string(),
    });

    export type Outbound = {
        balance?: string | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageSendSourceWallet> =
        z.object({
            balance: z.string().optional(),
            id: z.string(),
        });
}
