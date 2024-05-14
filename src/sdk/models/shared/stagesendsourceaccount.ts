/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type StageSendSourceAccount = {
    id: string;
    ledger?: string | undefined;
};

/** @internal */
export namespace StageSendSourceAccount$ {
    export const inboundSchema: z.ZodType<StageSendSourceAccount, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            ledger: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.ledger === undefined ? null : { ledger: v.ledger }),
            };
        });

    export type Outbound = {
        id: string;
        ledger?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StageSendSourceAccount> = z
        .object({
            id: z.string(),
            ledger: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.ledger === undefined ? null : { ledger: v.ledger }),
            };
        });
}
