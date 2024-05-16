/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RevertTransactionRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Transaction ID.
     */
    txid: bigint;
    /**
     * Allow to disable balances checks
     */
    disableChecks?: boolean | undefined;
};

/** @internal */
export namespace RevertTransactionRequest$ {
    export const inboundSchema: z.ZodType<RevertTransactionRequest, z.ZodTypeDef, unknown> = z
        .object({
            ledger: z.string(),
            txid: z.number().transform((v) => BigInt(v)),
            disableChecks: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                txid: v.txid,
                ...(v.disableChecks === undefined ? null : { disableChecks: v.disableChecks }),
            };
        });

    export type Outbound = {
        ledger: string;
        txid: number;
        disableChecks?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RevertTransactionRequest> = z
        .object({
            ledger: z.string(),
            txid: z.bigint().transform((v) => Number(v)),
            disableChecks: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                txid: v.txid,
                ...(v.disableChecks === undefined ? null : { disableChecks: v.disableChecks }),
            };
        });
}
