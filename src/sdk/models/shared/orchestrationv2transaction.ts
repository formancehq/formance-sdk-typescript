/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Posting, V2Posting$ } from "./v2posting";
import * as z from "zod";

export type OrchestrationV2Transaction = {
    metadata: Record<string, string>;
    postings: Array<V2Posting>;
    reference?: string | undefined;
    timestamp: Date;
    txid: bigint;
};

/** @internal */
export namespace OrchestrationV2Transaction$ {
    export const inboundSchema: z.ZodType<OrchestrationV2Transaction, z.ZodTypeDef, unknown> = z
        .object({
            metadata: z.record(z.string()),
            postings: z.array(V2Posting$.inboundSchema),
            reference: z.string().optional(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            txid: z.number().transform((v) => BigInt(v)),
        })
        .transform((v) => {
            return {
                metadata: v.metadata,
                postings: v.postings,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                timestamp: v.timestamp,
                txid: v.txid,
            };
        });

    export type Outbound = {
        metadata: Record<string, string>;
        postings: Array<V2Posting$.Outbound>;
        reference?: string | undefined;
        timestamp: string;
        txid: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrchestrationV2Transaction> = z
        .object({
            metadata: z.record(z.string()),
            postings: z.array(V2Posting$.outboundSchema),
            reference: z.string().optional(),
            timestamp: z.date().transform((v) => v.toISOString()),
            txid: z.bigint().transform((v) => Number(v)),
        })
        .transform((v) => {
            return {
                metadata: v.metadata,
                postings: v.postings,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                timestamp: v.timestamp,
                txid: v.txid,
            };
        });
}
