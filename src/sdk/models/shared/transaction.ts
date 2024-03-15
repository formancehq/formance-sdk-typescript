/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Posting, Posting$ } from "./posting";
import { Volume, Volume$ } from "./volume";
import * as z from "zod";

export type Transaction = {
    metadata?: Record<string, any> | null | undefined;
    postCommitVolumes?: Record<string, Record<string, Volume>> | undefined;
    postings: Array<Posting>;
    preCommitVolumes?: Record<string, Record<string, Volume>> | undefined;
    reference?: string | undefined;
    timestamp: Date;
    txid: bigint;
};

/** @internal */
export namespace Transaction$ {
    export type Inbound = {
        metadata?: Record<string, any> | null | undefined;
        postCommitVolumes?: Record<string, Record<string, Volume$.Inbound>> | undefined;
        postings: Array<Posting$.Inbound>;
        preCommitVolumes?: Record<string, Record<string, Volume$.Inbound>> | undefined;
        reference?: string | undefined;
        timestamp: string;
        txid: number;
    };

    export const inboundSchema: z.ZodType<Transaction, z.ZodTypeDef, Inbound> = z
        .object({
            metadata: z.nullable(z.record(z.any())).optional(),
            postCommitVolumes: z.record(z.record(Volume$.inboundSchema)).optional(),
            postings: z.array(Posting$.inboundSchema),
            preCommitVolumes: z.record(z.record(Volume$.inboundSchema)).optional(),
            reference: z.string().optional(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            txid: z.number().transform((v) => BigInt(v)),
        })
        .transform((v) => {
            return {
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.postCommitVolumes === undefined
                    ? null
                    : { postCommitVolumes: v.postCommitVolumes }),
                postings: v.postings,
                ...(v.preCommitVolumes === undefined
                    ? null
                    : { preCommitVolumes: v.preCommitVolumes }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                timestamp: v.timestamp,
                txid: v.txid,
            };
        });

    export type Outbound = {
        metadata?: Record<string, any> | null | undefined;
        postCommitVolumes?: Record<string, Record<string, Volume$.Outbound>> | undefined;
        postings: Array<Posting$.Outbound>;
        preCommitVolumes?: Record<string, Record<string, Volume$.Outbound>> | undefined;
        reference?: string | undefined;
        timestamp: string;
        txid: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Transaction> = z
        .object({
            metadata: z.nullable(z.record(z.any())).optional(),
            postCommitVolumes: z.record(z.record(Volume$.outboundSchema)).optional(),
            postings: z.array(Posting$.outboundSchema),
            preCommitVolumes: z.record(z.record(Volume$.outboundSchema)).optional(),
            reference: z.string().optional(),
            timestamp: z.date().transform((v) => v.toISOString()),
            txid: z.bigint().transform((v) => Number(v)),
        })
        .transform((v) => {
            return {
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.postCommitVolumes === undefined
                    ? null
                    : { postCommitVolumes: v.postCommitVolumes }),
                postings: v.postings,
                ...(v.preCommitVolumes === undefined
                    ? null
                    : { preCommitVolumes: v.preCommitVolumes }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                timestamp: v.timestamp,
                txid: v.txid,
            };
        });
}
