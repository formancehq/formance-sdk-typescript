/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type LedgerAccountSubject = {
    identifier: string;
    type: string;
};

/** @internal */
export namespace LedgerAccountSubject$ {
    export type Inbound = {
        identifier: string;
        type: string;
    };

    export const inboundSchema: z.ZodType<LedgerAccountSubject, z.ZodTypeDef, Inbound> = z
        .object({
            identifier: z.string(),
            type: z.string(),
        })
        .transform((v) => {
            return {
                identifier: v.identifier,
                type: v.type,
            };
        });

    export type Outbound = {
        identifier: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LedgerAccountSubject> = z
        .object({
            identifier: z.string(),
            type: z.string(),
        })
        .transform((v) => {
            return {
                identifier: v.identifier,
                type: v.type,
            };
        });
}
