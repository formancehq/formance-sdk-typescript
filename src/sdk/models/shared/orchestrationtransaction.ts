/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Posting, Posting$ } from "./posting";
import * as z from "zod";

export type OrchestrationTransaction = {
    id: bigint;
    metadata: { [k: string]: string };
    postings: Array<Posting>;
    reference?: string | undefined;
    reverted: boolean;
    timestamp: Date;
};

/** @internal */
export namespace OrchestrationTransaction$ {
    export const inboundSchema: z.ZodType<OrchestrationTransaction, z.ZodTypeDef, unknown> = z
        .object({
            id: z.number().transform((v) => BigInt(v)),
            metadata: z.record(z.string()),
            postings: z.array(Posting$.inboundSchema),
            reference: z.string().optional(),
            reverted: z.boolean(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                id: v.id,
                metadata: v.metadata,
                postings: v.postings,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                reverted: v.reverted,
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        id: number;
        metadata: { [k: string]: string };
        postings: Array<Posting$.Outbound>;
        reference?: string | undefined;
        reverted: boolean;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrchestrationTransaction> = z
        .object({
            id: z.bigint().transform((v) => Number(v)),
            metadata: z.record(z.string()),
            postings: z.array(Posting$.outboundSchema),
            reference: z.string().optional(),
            reverted: z.boolean(),
            timestamp: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                id: v.id,
                metadata: v.metadata,
                postings: v.postings,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                reverted: v.reverted,
                timestamp: v.timestamp,
            };
        });
}
