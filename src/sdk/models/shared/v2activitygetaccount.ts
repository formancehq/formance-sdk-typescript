/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type V2ActivityGetAccount = {
    id: string;
    ledger: string;
};

/** @internal */
export namespace V2ActivityGetAccount$ {
    export type Inbound = {
        id: string;
        ledger: string;
    };

    export const inboundSchema: z.ZodType<V2ActivityGetAccount, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        id: string;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ActivityGetAccount> = z
        .object({
            id: z.string(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ledger: v.ledger,
            };
        });
}