/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetTransactionRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Transaction ID.
     */
    txid: bigint;
};

/** @internal */
export namespace GetTransactionRequest$ {
    export const inboundSchema: z.ZodType<GetTransactionRequest, z.ZodTypeDef, unknown> = z
        .object({
            ledger: z.string(),
            txid: z.number().transform((v) => BigInt(v)),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                txid: v.txid,
            };
        });

    export type Outbound = {
        ledger: string;
        txid: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionRequest> = z
        .object({
            ledger: z.string(),
            txid: z.bigint().transform((v) => Number(v)),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                txid: v.txid,
            };
        });
}
