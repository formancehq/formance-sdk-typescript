/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2GetLedgerRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
};

/** @internal */
export namespace V2GetLedgerRequest$ {
    export const inboundSchema: z.ZodType<V2GetLedgerRequest, z.ZodTypeDef, unknown> = z
        .object({
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2GetLedgerRequest> = z
        .object({
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
            };
        });
}
