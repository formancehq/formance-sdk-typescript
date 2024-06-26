/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2UpdateAccount = {
    id: string;
    ledger: string;
    metadata: { [k: string]: string };
};

/** @internal */
export namespace V2UpdateAccount$ {
    export const inboundSchema: z.ZodType<V2UpdateAccount, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        ledger: z.string(),
        metadata: z.record(z.string()),
    });

    export type Outbound = {
        id: string;
        ledger: string;
        metadata: { [k: string]: string };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2UpdateAccount> = z.object({
        id: z.string(),
        ledger: z.string(),
        metadata: z.record(z.string()),
    });
}
